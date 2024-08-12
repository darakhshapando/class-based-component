
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, value, onChange, placeholder, type } = this.props;

    return (
      <div className="input-container">
        {label && <label>{label}</label>}
        <input 
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
};

export default Input;
