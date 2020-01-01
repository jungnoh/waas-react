import React from 'react'; //JSX를 사용해야 하기 때문에 React를 가져온다!

const SayHi = (props) => { //화살표함수 사용! props 매개변수 하나 사용
  return (
    <div>{props.name}님 안녕하세요.</div>
  );
}

export default SayHi; //작성한 코드를 다른 곳에서 불러와서 사용할 수 있도록 내보내기를 해준것!