import React, {useState} from 'react';

//using function statement
const NameInput = (props) => {
  const val='dd';
  const [name,changeName]=useState('');
  function onChanged(e) {
    alert(name+'님 안녕하세요');

  }
  const onChangeName = (e) => {
    changeName(e.target.value);
  }
  return (
    <div>
      <input value={name} onChange={onChangeName}/>
      <button onClick={onChanged}>Change</button>
    </div>
  )
}

//using class statement
/*class NameInput extends React.Component{
  constructor(props){
    super(props);
    this.state={val: ''};
    this.onChanged=this.onChanged.bind(this);
    this.what=this.what.bind(this);
    
  }
  what(e){
    this.setState({val:e.target.value});
  }
  onChanged(e){
    //this.setState({val:e.target.val});
    console.log(this.state);
    e.preventDefault();
  }
  
  render(){
    return(
      <div>
        <input type="text" value={this.state.val} onChange={this.what} />
        <button onClick={this.onChanged}>Change</button>
     </div>
    );
  }
}*/

export default NameInput;
