import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AddInput from './AddInput.jsx';
import ListItem from './ListItem.jsx';

const Main = () => {
  // 이 state들을 사용하세요
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);

  // * - value: 목록 요소의 값 (`string`)
  // * - showComplete: '완료' 버튼을 표시할 지 여부 (`boolean`)
  // * - onDelete: 삭제 버튼 클릭 핸들러 함수 (`() => any`)
  // * - onComplete: 완료 버튼 클릭 핸들러 함수 (`() => any`)
  // * - done: 완료된 항목인지 여부 (`boolean`)

  const handleInput = (value) => {
    setTodo([...todo, value]);
  };

  const todoList = todo.map((td,i) => {
    return <ListItem value={td} showComplete={true} onDelete={() => {todo.splice(i,1); setTodo([...todo])}} onComplete={()=>{setDone([...done, td]), todo.splice(i,1)}} done={false} key={i}/>
  })

  const doneList = done.map((td,i) => {
    return <ListItem value={td} showComplete={false} onDelete={() => {done.splice(i,1); setDone([...done])}} onComplete={()=>{setDone([...done, td]), todo.splice(i,1)}} done={true} key={i}/>
  })

  useEffect(() => {
    console.log(todoList);
  }, [todo]);

  return (
    <Container>
      <h1>할 일</h1>
      <h2>추가</h2>
      <AddInput onInput={handleInput}/>
      <h2>할 일</h2>
      {todoList}
      <h2>완료</h2>
      {doneList}
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  background-color: rgb(250, 250, 250);
  padding: 1rem;
  border-radius: 0.2em;
  h1 {
    margin: 0 0 0.5em 0;
    text-align: center;
  }
  h2 {
    margin: 0.5rem 0;
    border-bottom: 1.5px solid #000;
    padding: 0.5rem 0;
  }
`;


export default Main;
