import React, {useState} from 'react';

class NameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {val: '', name: ''};
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }
  //함수 binding 해주기
  //방법 1 : this.handleChange = this.handleChange.bind(this);
  //방법 2 : handeChagne = (e) => {}
  //방법 2는 근데 무슨 오류나 아직 실험중이라면서 ㄷ

  handleSubmit(e) {
    //부모의 onCreate 함수실행!
    this.props.onCreate(this.state);
  }

  render() {
    return (
      <div>
        <input val={this.state.val} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleSubmit.bind(this)}>Change</button>
      </div>
    )
  }
}

export default NameInput;
