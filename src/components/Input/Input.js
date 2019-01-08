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
      { error && <div style={{color: "red"}}> {error} </div> }
    </div>
  );
}

Input.propTypes = {
  /**
   * The type of input 
   */
  type: PropTypes.string,
  /**
   * The callback to invoke when the input value is changed 
   */
  onChange: PropTypes.func,
  /**
   * The input value
   */
  value: PropTypes.string,
  /**
   * The minimum number of characters allowed
   */
  minLength: PropTypes.string,
  /**
   * Is the input optional?
   */
  required: PropTypes.bool,
  /**
   * The placeholder
   */
  placeholder: PropTypes.string
}

Input.defaultProps = {
  type: "text",
  onChange: () => {},
  value: "",
  minLength: "",
  required: false,
  placeholder: "Enter your text here"
}

export default Input;
