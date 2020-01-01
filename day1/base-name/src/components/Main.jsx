import React from 'react';
import SayHi from './SayHi';
import NameInput from './NameInput';

class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state = {name: '김명중'};
  }

  handleCreate(data) {
    console.log(data);
    alert(data.name + "님 안녕하세요");
    this.setState({
      name: data.name
    })
  }

  render(){
    return (
      <>
        <NameInput onCreate={this.handleCreate.bind(this)}/>
        <SayHi name={this.state.name} />
      </>
    )
  }
}

export default Main;
