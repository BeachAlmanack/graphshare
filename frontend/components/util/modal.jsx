import React from 'react';
import PropTypes from 'prop-types';

const stopPropagation = function stopPropagation(event, onClose) {
  if (event.target === event.currentTarget) {
    onClose();
  }
};

const Modal = function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-background" onClick={(event) => stopPropagation(event, onClose)}>
      <div className="modal">
        <button onClick={onClose} className="button-text-red modal-close">
          Close
        </button>
        {children}
      </div >
    </div >
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

Modal.defaultProps = {
  show: false,
  children: <div />,
};

export default Modal;
