import React from 'react';
import Input from 'react-experimental-input/Input';

/** This is a stateful example written using a class  */
class ExampleClassInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <Input 
          value={value}
          minLength={8}
          onChange={ e => this.setState({ value: e.target.value })}
          placeholder="Enter your input"
          id="class-input"
          {...this.props}
        />
      </div>
    )
  }
}

export default ExampleClassInput