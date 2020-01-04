import React, {useState} from 'react';
import NameDisplay from './NameDisplay';
import EmptyNameDisplay from './EmptyNameDisplay';
import NameInput from './NameInput';

const Main = () => {
  const [nameList, setNameList] = useState([]);

  // 새로운 이름을 nameList에 추가합니다.
  const addName = (name) => {
    setNameList([...nameList, name]);
    //setNameList([name])를 하게되면, nameList에 name이 새로 추가되는 것이라, 원래 있던 값을 대체하게 된다.
    //따라서 ...nameList를 사용함으로써 배열을 함수의 인자로 호출해 원래 있던 배열에 name를 추가하는 기능을 갖게 된다.
    console.log(nameList);
  };
  // NameInput에서 input을 클릭했을 때 처리할 함수
  const onAddClick = (name) => {
    console.log(name);
  };

  const nameDisList = nameList.map((name,index)=>
    <NameDisplay key = {index^name.toString()} name={name} /> //index를 key로 사용하는것은 좋지 않다
  );

  return (
    /*<div className="container">
      <span className="title">Name List</span>
      <NameInput addClick={addName} />
      <div className="list-container">
        <ul>
          {nameDisList}
        </ul>
      </div>
    </div>*/
    <div className="container">
      <span className="title">Name List</span>
     <NameInput addClick={addName} />
      //이게 맞는건가? 차이점?(질문)
      <EmptyNameDisplay className="list-container">
        {nameDisList}
      </EmptyNameDisplay>
    </div>

  );
};

export default Main;