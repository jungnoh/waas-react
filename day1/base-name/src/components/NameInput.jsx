import React, {useState} from 'react';

const NameInput = (props) => {
  const [name, setname] = useState('');
  const val = '';
  return (
    <div>
      <input val={name} onChange={event=>{console.log(event.target.value),setname(event.target.value)}}/>
      <button onClick={event=>{alert(name+'님 안녕하세요.')}}>Change</button>
    </div>
  )
}
export default NameInput;
