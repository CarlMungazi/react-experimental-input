import React, { useState } from 'react';
import Input from 'react-experimental-input/Input';

/** This is an example written with hooks */

export default function ExampleHooksInput(props) {
  const [ value, setValue ] = useState('');

  return (
    <div>
      <Input 
        value={value}
        onChange={ e => setValue(e.target.value)}
        placeholder="Enter your input"
        id="class-input"
        {...props}
      />
    </div>
  )
}