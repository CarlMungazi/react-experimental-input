import React, {Component} from 'react';
import PropTypes from 'prop-types';

/** A standard input component */
class Input extends Component {
  render() {
    const nativeAttrs = { ...this.props }

    return (
      <input {...nativeAttrs} />
    );
  }
}

Input.propTypes = {
  /**
   * The type of input 
   */
  type: PropTypes.string
}

Input.defaultProps = {
  type: "text"
}

export default Input;
