import React, {useState} from 'react';
import ClickButton from './ClickButton';
import {GoChevronUp, GoChevronDown} from 'react-icons/go'

const Main = () => {
  const [value, setValue] = useState(100);
  const updateValue = (delta) => {
    setValue(value + delta);
    document.title = `Counter: ${value}`;
  }
  return (
    <div className="container">
      <span className="title">Counter</span>
      <span className="text">{value}</span>
      <ClickButton index={1} onClick={() => updateValue(1)}>
        <GoChevronUp />
      </ClickButton>
      <ClickButton index={2} onClick={() => updateValue(-1)}>
        <GoChevronDown />
      </ClickButton>
    </div>
  );
};

export default Main;
