import React, {useState} from 'react';
import NameDisplay from './NameDisplay';
import EmptyNameDisplay from './EmptyNameDisplay';
import NameInput from './NameInput';

const Main = () => {
  const [nameList, setNameList] = useState(['명순구', '정진택']);

  // 새로운 이름을 nameList에 추가합니다.
  const addName = (name) => {
    setNameList([...nameList, name]);
    //nameList에 있던 갯수만큼 넣어주는 거지요!
  };
  // NameInput에서 input을 클릭했을 때 처리할 함수
  const onAddClick = (name) => {
    alert(name);
  };

  const listItems = nameList.map((number) => {
    return <EmptyNameDisplay>-{number}<br></br></EmptyNameDisplay>
  });

  return (
    <div className="container">
      <span className="title blue-text">Name List</span>
      {/* blue-text 추가함*/}
      <NameInput addClick={addName} />
      {/*onAddClick -> addName 으로 수정*/}
      <div className="list-container">
        {listItems}
      </div>
    </div>
  );
};

export default Main;
