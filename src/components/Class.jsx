
import React, { Component } from 'react';

class Class extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
      />
    );
  }
}

export default Class;
