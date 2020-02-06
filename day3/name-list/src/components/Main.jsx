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
    addName(name);
  };

  const listItems = nameList.map((name, index) => 
    <NameDisplay key={index} name={name} />
  );

  return (
    <div className="container">
      <span className="title blue-text">Name List</span>
      <NameInput addClick={onAddClick} />
      <div className="list-container">
        {listItems}
      </div>
    </div>
  );
};

export default Main;