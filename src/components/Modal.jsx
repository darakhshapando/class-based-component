
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    const { isOpen, title, content, onClose } = this.props;

    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>×</button>
          <h2 className="modal-title">{title}</h2>
          <div className="modal-body">
            {content}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
