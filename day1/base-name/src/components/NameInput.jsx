import React, {useState} from 'react';

const NameInput = (props) => {
  const [name, setName] = useState('');
  return (
    <div>
      <input val={name} onChange = { e => { setName(e.target.value) } }/>
      <button onClick = { e => { alert(name+'님 안녕하세요.') } }>Change</button>
    </div>
  )
}
export default NameInput;