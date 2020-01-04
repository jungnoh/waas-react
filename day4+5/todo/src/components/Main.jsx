import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AddInput from './AddInput.jsx';
import ListItem from './ListItem.jsx';
import { render } from 'react-dom';

const Main = () => {
  // 이 state들을 사용하세요
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);
  const [todocnt, Settodocnt] = useState(0);
  const [donecnt, Setdonecnt] = useState(0);

  const AddTodo = (val) => {
    setTodo([...todo, {str: val, key: todocnt}]);
    Settodocnt(todocnt+1);
    // console.log(val, todocnt);
  };

  const CompleteButton = (val, key) => {
    setDone([...done, {str: val, key: donecnt}]);
    Setdonecnt(donecnt+1);
    todo.splice(todo.findIndex( (item) =>{return item.key === key} ),1);
    setTodo(todo);
    // console.log(`완료, ${val}, ${idx}`);
    // console.log(todo);
    // console.log(done);
  };

  const DeleteButton = (what, idx) => {
    if(what)
    {
      todo.splice(idx,1);
    }
    else
    {
      done.splice(idx,1);
    }
    setTodo(todo);
    setDone(done);
    // console.log(`삭제, ${what}, ${idx}`);
    // console.log(what?todo:done);
  };

  const TodoDelete = (key) => {
    todo.splice(todo.findIndex( (item) =>{return item.key === key} ),1);
    setTodo(todo);
  };
  const DoneDelete = (key) => {
    done.splice(done.findIndex( (item) =>{return item.key === key} ),1);
    setDone(done);
  };

  useEffect( () => {
    console.log(todo);
    console.log(done);
  });

  return (
    <Container>
      <h1>To-do List</h1>
      <AddInput onInput = {AddTodo}/>
      <h2>아직 안 한 일</h2>
      {todo.map( (val) =>( 
        <ListItem key = {val.key} value = {val.str} onDelete = { () => TodoDelete(val.key) }
          onComplete = { () => CompleteButton(val.str, val.key) } done = {false} />
      ))}
      <h2>끝낸 일</h2>
      {done.map( (val) =>(
        <ListItem key = {val.key} value = {val.str} onDelete = { () => DoneDelete(val.key) }
          onComplete = { () => CompleteButton(val.str, val.key) } done = {true} />
      ))}
    </Container>
  );
};


export default Main;

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