import React from 'react'; // react 모듈 import

const SayHi = (props) => { // SayHi 컴포넌트를 선언함
  return (
  <div>{props.name}님 안녕하세요.</div>
  );
}

export default SayHi; // SayHi 컴포넌트를 다른 곳에서 사용할 수 있도록 함