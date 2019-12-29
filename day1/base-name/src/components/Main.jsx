import React from 'react';
import SayHi from './SayHi';
import NameInput from './NameInput';

const Main = (props) => {
  // 여기서 코드를 실행할 수 있다.
  return (
    <>
      <NameInput />
      <SayHi name="김명중" />
    </>
  );
};

export default Main;
