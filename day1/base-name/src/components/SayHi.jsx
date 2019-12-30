import React from 'react'; //React 불러옴

const SayHi = (props) => { //SayHi component 정의
  return (
    <div>{props.name}님 안녕하세요.</div>
  );
}

export default SayHi; //SayHi component 내보냄