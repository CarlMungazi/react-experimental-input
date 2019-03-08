import React from 'react';
import ProgressBar from '../ProgressBar';
import Icon from '../Icon';
import Input from '../Input';

class PasswordInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPassword: false
    }
  }

  toggleShowPassword = evt => {
    this.setState(prevState => {
      return { showPassword: !prevState.showPassword };
    });

    if (evt) evt.preventDefault();
  }

  render() {
    const { value, minLength, onChange, placeholder, required, showVisibilityToggle, quality, error } = this.props;
    const { showPassword } = this.state;

    return (
      <Input 
        value={value}
        minLength={minLength}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        error={error}
        type={showPassword ? "text" : "password"}
      >
        {
          showVisibilityToggle &&
          <button href="" onClick={this.toggleShowPassword} style={{ marginLeft: 5 }}> <Icon /> </button>
        }
        {
          value.length > 0 && quality && <ProgressBar percent={quality} width={130} />
        }
      </Input>
    )

  }
}

export default PasswordInput;