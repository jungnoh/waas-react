import React, {useState} from 'react';
import styled from 'styled-components';

const Main = () => {
  // 이 state들을 사용하세요
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);
  return (
    <Container>
      <h1>할 일</h1>
      <h2>추가</h2>
      <h2>할 일</h2>
      <h2>완료</h2>
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
