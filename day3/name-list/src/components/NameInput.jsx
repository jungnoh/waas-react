import React, {useState} from 'react';

const NameInput = (props) => {
  const [val, setVal] = useState('');
  return (
    <div>
      <input val={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => props.addClick(val)}>Add</button>
    </div>
  )
}
export default NameInput;
