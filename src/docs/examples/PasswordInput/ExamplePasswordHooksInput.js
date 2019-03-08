import React, { useState } from 'react';
import PasswordInput from 'react-experimental-input/PasswordInput';

/** This one is written using hooks */
function ExamplePasswordHooksInput(props) {
  const [password, setPassword] = useState ('');

  return (
    <div>
      <PasswordInput 
        value={password}
        minLength={8}
        onChange={ e => setPassword(e.target.value)}
        placeholder="Enter password"
        showVisibilityToggle
        quality={password.length > 10 ? 100 : password.length * 10}
        {...props}
      />
    </div>
  )

}

export default ExamplePasswordHooksInput