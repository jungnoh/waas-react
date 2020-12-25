import React, {useState} from 'react';

class NameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};

    this.onChanged = this.onChanged.bind(this);
    this.onClicked = this.onClicked.bind(this);
  }

  onChanged(e) {
    this.setState({name: e.target.value});
    console.log(e.target.value);
  }

  onClicked() {
    alert(this.state.name + "님 안녕하세요.");
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChanged} />
        <button onClick={this.onClicked}>Change</button>
      </div>
    )
  }
}

export default NameInput;
