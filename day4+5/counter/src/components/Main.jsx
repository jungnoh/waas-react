import React, {useState, useEffect} from 'react';
import ClickButton from './ClickButton';
import {GoChevronUp, GoChevronDown} from 'react-icons/go'
import styled from 'styled-components'

const Main = () => {
  const [value, setValue] = useState(100);
  const Hehe = styled.div`
    margin-left: 20vw;
    width: 60vw;
    background: #DDD;
    border-radius: 0.2rem;
    padding: 1.5rem;
    box-sizing: border-box;
    display: grid;
    height: 11rem;
    grid-template-columns: auto 2.5rem 1rem 8rem auto;
    grid-template-rows: 3rem 2.5rem 2.5rem;
  `;

  const updateValue = (delta) => {
    setValue(value + delta);
    //document.title = `Counter: ${value}`;
  }

  useEffect(() => {
    document.title = `Counter: ${value}`;
  })

  return (
    <Hehe>
      <span className="title">Counter</span>
      <span className="text">{value}</span>
      <ClickButton index={1} onClick={() => updateValue(1)}>
        <GoChevronUp />
      </ClickButton>
      <ClickButton index={2} onClick={() => updateValue(-1)}>
        <GoChevronDown />
      </ClickButton>
    </Hehe>
  );
};

export default Main;
