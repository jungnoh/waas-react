import React, {useState} from 'react';

const NameInput = (props) => {
  const val = '';
  const [name, setName] = useState('');
  const handleChange = (event) => {
  	console.log(event.target.value);
  	setName(event.target.value);
  }
  const handleClick = () => {
  	alert(name+'님 안녕하세요');
  	//props.changeName(name);
  }
  return (
    <div>
      <input val={val} onChange={handleChange}/>
      <button onClick={handleClick}>Change</button>
    </div>
  )
}
export default NameInput;
