import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AddInput from './AddInput';
import ListItem from './ListItem';

const Main = () => {
  // 이 state들을 사용하세요
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);
  const addItem = (value) => {
    setTodo([...todo, value]);
    console.log(value);
    console.log(todo);
    console.log(done);
  }
  const deleteItem = (index) => {
    setTodo(todo.splice(index,1));
    console.log(index);
    console.log(todo);
    console.log(done);
  }
  const completeItem = (index) => {
    setDone([...done, todo[index]])
    setTodo(todo.splice(index,1));
    console.log(index);
    console.log(todo);
    console.log(done);
  }

//  useEffect(() => {
//    setTodo(todo);
//    setDone(done);
//  })

  return (
    <Container>
      <h1>할 일</h1>
      <h2>추가</h2>
      <AddInput onInput = {addItem}/>
      <h2>할 일</h2>
      {todo.map((value, index) =>
          <ListItem
            key={index}
            value={value}
            showComplete={true}
            onDelete={() => deleteItem(index)}
            onComplete={() => completeItem(index)}
            done={false} />
      )}
      <h2>완료</h2>
      {done.map((value, index) =>
          <ListItem
            key={index}
            value={value}
            showComplete={false}
            onDelete={() => deleteItem(index)}
            done={true} />
      )}
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
