import React from 'react';

const NameDisplay = (props) => {
  return (
    props.nameList.map((name,index) =>
      <li key = {index}>
        {name}
      </li>
    )
  );
}

export default NameDisplay;
