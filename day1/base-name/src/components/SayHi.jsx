import React from 'react'; //React를 쓰기 위해 import

const SayHi = (props) => { //함수를 통해 component 생성
  return (
    <div>{props.name}님 안녕하세요.</div>
  );
}

export default SayHi; //다른 파일에서 쓸 수 있도록 SayHi라는 이름으로 export