import React, {useState} from 'react';
import SayHi from './SayHi';
import NameInput from './NameInput';

const Main = (props) => {

  const[name, setName] = useState('김명중');

  const handleCreate = (data) => {
    console.log(data);
    alert(data + "님 안녕하세요");
    setName(data);
  }

  return (
    <>
      <NameInput onCreate={handleCreate}/>
      <SayHi name={name} />
    </>
  );
}

export default Main;
