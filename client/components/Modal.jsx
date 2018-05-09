import React from 'react';
import PropTypes from 'prop-types';

/* Temporarily using this code before writing own modal: https://daveceddia.com/open-modal-in-react/ */

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="backdrop-menu" onClick={props.onClose}>
      <div className="modal-menu" onClick={event => event.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
}.isRequired;

export default Modal;
