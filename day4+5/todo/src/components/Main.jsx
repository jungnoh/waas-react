import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AddInput from './AddInput'
import ListItem from './ListItem'

const Main = () => {
  const [todoList, setTodo] = useState([]);
  const [doneList, setDone] = useState([]);
  const [trash, throwAway] = useState('');
  const renderTodoList = [];
  const renderDoneList = [];
  const onInput = (value) => {
    setTodo([...todoList, value]);
  }
  const onTodoDelete = (id) => {
    throwAway(todoList.splice(id, 1));
  }
  const onDoneDelete = (id) => {
    throwAway(doneList.splice(id, 1));
  }
  const onComplete = (id) => {
    setDone([...doneList, todoList.splice(id, 1)]);
  }  
  for(let i=0; i<todoList.length; i++){
    renderTodoList.push(
      <ListItem 
      value={todoList[i]} 
      showComplete={true} 
      onDelete={onTodoDelete} 
      onComplete={onComplete}
      done={false} 
      id={i} 
      key={i}
      ></ListItem>
    )
  }
  for(let i=0; i<doneList.length; i++){
    renderDoneList.push(
      <ListItem 
      value={doneList[i]} 
      showComplete={false} 
      onDelete={onDoneDelete} 
      done={true} 
      id={i} 
      key={i}
      ></ListItem>
    )
  }
  return (
    <Container>
      <h1>할 일</h1>
      <h2>추가</h2>
        <AddInput onInput={onInput}></AddInput>
      <h2>할 일</h2>
        {renderTodoList}
      <h2>완료</h2>
        {renderDoneList}
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
