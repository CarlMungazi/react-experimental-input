import React from 'react';
import PropTypes from 'prop-types';

/** A standard input component */
function Input({error, children, ...props}) {
  return (
    <div>
      <input
        {...props} 
      />
      { children }
      { error && <div className="input-error"> {error} </div> }
    </div>
  );
}

Input.propTypes = {
  /** The name attribute */
  name: PropTypes.string,
  /** The input id */
  id: PropTypes.string,
  /** The type of input */
  type: PropTypes.oneOf(['text', 'number', 'password']),
  /** The callback to invoke when the input value is changed */
  onChange: PropTypes.func,
  /** The input value */
  value: PropTypes.string,
  /** The minimum number of characters allowed */
  minLength: PropTypes.string,
  /** Is the input optional? */
  required: PropTypes.bool,
  /** The placeholder */
  placeholder: PropTypes.string,
  /** Additional styles */
  style: PropTypes.shape({}),
  /** String to display when error occurs */
  error: PropTypes.string,
  /** Child component to display next to the input */
  children: PropTypes.node,
}

Input.defaultProps = {
  type: "text",
  onChange: () => {},
  value: "",
  minLength: "",
  required: false,
  placeholder: "Enter your text here",
  style: {},
  error: '',
  children: null,
  name: '',
  id: ''
}

export default Input;