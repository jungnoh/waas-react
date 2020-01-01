import React, {useState} from 'react';
import NameDisplay from './NameDisplay';
import NameInput from './NameInput';

const Main = () => {
  const [nameList, setNameList] = useState([]);

  // 새로운 이름을 nameList에 추가합니다.
  const addName = (name) => {
    setNameList([...nameList, name]);
  };
  // NameInput에서 input을 클릭했을 때 처리할 함수
  const onAddClick = (name) => {
    alert(name);
  };

  return (
    <div className="container">
      <span className="title">Name List</span>
      <NameInput addClick={onAddClick} />
      <div className="list-container">
        <NameDisplay name="명순구" />
        <NameDisplay name="정진택" />
      </div>
    </div>
  );
};

export default Main;