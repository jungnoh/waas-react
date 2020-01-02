import React from 'react';// react를 불러온다
import nameinput from './NameInput';

const SayHi = (props) => {//sayhi component를 만든다
  return (
    <div>{props.name}님 안녕하세요.</div>
  );
}

export default SayHi;//내가 작성한 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보낸다