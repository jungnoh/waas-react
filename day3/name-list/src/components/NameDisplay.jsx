import React from 'react';

const NameDisplay = (props) => {
  return (
    <div className="name-item">
      - {props.name}
    </div>
  );
}

export default NameDisplay;
