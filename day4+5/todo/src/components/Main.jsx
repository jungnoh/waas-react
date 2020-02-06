import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AddInput from './AddInput';
import ListItem from './ListItem';

const Main = () => {
  // 이 state들을 사용하세요
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);

  const todoList = todo.map((value, index) =>
    <ListItem 
      value={value} 
      showComplete={true}
      onDelete={() => {
        todo.splice(index,1);
        setTodo([...todo]);
      }}
      onComplete={() => {
        todo.splice(index,1);
        setDone([...done, value])
      }}
      done={false}
      key={index}
    />
  );

  const doneList = done.map((value, index) =>
    <ListItem 
      value={value} 
      showComplete={false}
      onDelete={() => {
        done.splice(index,1);
        setDone([...done]);
      }}
      onComplete={() => {}}
      done={true}
      key={index} 
    />
  );

  return (
    <Container>
      <h1>할 일</h1>
      <h2>추가</h2>
      <AddInput onInput={(value) => setTodo([...todo, value])} />
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
