import React from 'react';
import PropTypes from 'prop-types';

/** A standard label component */
function Label({ htmlFor, label, required }) {
  return (
    <label htmlFor={htmlFor}>
      {label} { required && <span> *</span>}
    </label>
  )
}

Label.propTypes = {
  /** HTML ID for associated input */
  htmlFor: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Display asterisk after label if true */
  required: PropTypes.bool,
};

export default Label;
