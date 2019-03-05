import React from 'react';
import PasswordInput from 'react-experimental-input/PasswordInput';

/** Show all features */
class ExamplePasswordInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ''
    }
  }

  getQuality() {
    const length = this.state.password.length;
    return length > 10 ? 100 : length * 10;
  }

  render() {
    return (
      <div>
        <PasswordInput 
          value={this.state.password}
          minLength={8}
          onChange={ e => this.setState({ password: e.target.value })}
          placeholder="Enter password"
          showVisibilityToggle
          quality={this.getQuality()}
          {...this.props}
        />
      </div>
    )
  }
}

export default ExamplePasswordInput