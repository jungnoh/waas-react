import React, {useState} from 'react';

/*const NameInput = (props) => {
  const val = 'aa';
  props={val:{val}};
  function onChanged() {
    console.log('this is : ', props.val);
  }
  return (
    <div>
      <input val={val} />
      <button onClick={onChanged}>Change</button>
    </div>
  )
}*/
class NameInput extends React.Component{
  constructor(props){
    super(props);
    this.onChanged=this.onChanged.bind(this);
    this.what=this.what.bind(this);
    this.state={val: ' ' };
  }
  onChanged(e){
    //this.setState({val:e.target.val});
    console.log(this.state.val);
    e.preventDefault();
  }
  what(e){
    this.setState({val:e.target.val});
  }
  render(){
    //const val='ss';
    return(
      <div>
        <input type="text" value={this.state.val||''} onChange={this.what} />
        <button onClick={this.onChanged}>Change</button>
     </div>
    )
  }
}

export default NameInput;
