import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import Addinput from './AddInput';

const Main = () => {
  // 이 state들을 사용하세요
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);
  let isDelete = 2;

  const deleteBtn = (a, index) => {
    //console.log(todoDisList);
    isDelete=a;
    console.log(todoDisList);
    if(a===0){todo.splice(index,1);/*todoDisList.splice(index,1);*/}
    if(a===1){done.splice(index,1);/*doneDisList.splice(index,1);*/}
  }

  useEffect(()=>{
    
  });

  const doneBtn = (index) => {
    setDone([...done, todo[index]]);
    todo.splice(index,1);
    //console.log(todo);
  }

  const todoDisList = todo.map((value,index)=>
    <ListItem key = {index} index={index} value={value} showComplete={1} onDelete={deleteBtn} onComplete={doneBtn} done={0} />
  );
  
  const doneDisList = done.map((value,index)=>
    <ListItem key={index} index={index} value={value} showComplete={0} onDelete={deleteBtn} done={1}/>
  );

  const insertTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  }
  const insertDone = (newDone) => {
    setDone([...done, newDone]);
  }
  
  return (
    <Container>
      <h1>할 일</h1>
      <h2>추가</h2>
      <Addinput onInput={insertTodo}/>
      <h2>할 일</h2>
      <div>
        {todoDisList}
      </div>
      <h2>완료</h2>
      <div>
        {doneDisList}
      </div>
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
