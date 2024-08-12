
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, label, style } = this.props;

    return (
      <button onClick={onClick} style={style}>
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Button.defaultProps = {
  style: {},
};

export default Button;
