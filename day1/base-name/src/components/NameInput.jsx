import React, {useState} from 'react';

const NameInput = (props) => {

  const val = '';
  const [name, setName] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value);
  }
  //함수 binding 해주기
  //방법 1 : this.handleChange = this.handleChange.bind(this);
  //방법 2 : handeChagne = (e) => {}
  //방법 2는 근데 무슨 오류나 아직 실험중이라면서 ㄷ

  const handleSubmit = (e) => {
    //부모의 onCreate 함수실행!
    props.onCreate(name);
  }

  return (
    <div>
      <input val={val} onChange={handleChange} />
      <button onClick={handleSubmit}>Change</button>
    </div>
  )
}

export default NameInput;
