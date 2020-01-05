import React from 'react';
import styled from 'styled-components'

const ClickButton = (props) => {
  const {index, onClick} = props;
  const Button = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    grid-column: 2 / 3;
    grid-row: ${index + 1} / ${index + 2};
    display: flex;
    justify-content: center;
    align-items: center;
    .inner {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      height: 2rem;
      width: 2rem;
      background-color: #BBB;
    }
    .inner:hover {
      background-color: #AAA;
    }
  `;
  return (
    <Button>
      <div className="inner" onClick={() => onClick()}>
      {props.children}
      </div>
    </Button>
  );
}

export default ClickButton;
