import React, {useState} from 'react';


const NameInput = (props) => {
  const [name, setName] = useState('');
  function handleChange(event) {
    setName(event.target.value);
    console.log(name);
  }
  function handleClick(event) {
    alert(name+'님 안녕하세요.')
  }
  return (
    <div>
      <input value={name} onChange={handleChange}/>
      <button onClick={handleClick}>Change</button>
    </div>
  )
}
export default NameInput;