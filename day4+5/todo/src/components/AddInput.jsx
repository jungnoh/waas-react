import React, {useState} from 'react';
import styled from 'styled-components';

/**
 * AddItem 컴포넌트: 항목 추가를 위한 UI를 제공합니다.
 * ### prop 정의
 * - onInput: 추가 버튼 클릭시 핸들러 (`(string) => any`)
 */
const AddInput = (props) => {
  const [value, setValue] = useState('');
  const handleClick = (e) => {
    if (value.trim() === '') return;
    props.onInput(value);
    console.log("hehe " + e.props);
    setValue('');
  }
  return (
    <Container>
      <input
        type="text" 
        placeholder="현대암호학 공부"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>넣을게</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 80px;
  flex-direction: row;
  input {
    grid-column: 1 / 2;
  }
  button {
    grid-column: 2 / 3;
  }
`;

export default AddInput;
