import React, {useState} from 'react';

class NameInput extends React.Component {
  constructor(props) {
    super(props);

    this.onChanged = this.onChanged.bind(this);
  }

  onChanged(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.onChanged} />
        <input type="submit" value="Change" />
      </form>
    )
  }
}

export default NameInput;
