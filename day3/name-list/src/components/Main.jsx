import React, {useState} from 'react';
//import NameDisplay from './NameDisplay';
import NameInput from './NameInput';
import NameDisplay from './EmptyNameDisplay'

const Main = () => {
  const [nameList, setNameList] = useState([]);

  // 새로운 이름을 nameList에 추가합니다.
  const addName = (name) => {
    setNameList([...nameList, name]);
  };
  // NameInput에서 input을 클릭했을 때 처리할 함수
  const onAddClick = (name) => {
    addName(name);
    alert(name);
  };
  //props.children
  const child = (name) => {
    return (
      <div className="name-item">
        - {name}
      </div>
    );
  };
  const renderNameList = [];
  for (let i=0; i<nameList.length; i++){
    renderNameList.push(
      <NameDisplay children={child(nameList[i])} key={i}/>
    )
  }
  /*
  //for 
  const renderNameList = [];
  for (let i=0; i<nameList.length; i++){
    renderNameList.push(
      <NameDisplay name={nameList[i]} key={i}/>
    )
  }
  */
  /*
  //map
  const renderNameList = nameList.map((name, index) =>
    <NameDisplay name={name} key={index}/>
  );
  */
  return (
    <div className="container">
      <span className="title blue-text">Name List</span>
      <NameInput addClick={onAddClick} />
      <div className="list-container">
        {renderNameList}
      </div>
    </div>
  );
};

export default Main;