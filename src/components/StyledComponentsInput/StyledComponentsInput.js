import React from 'react';
import styled from 'styled-components';
import Input from '../Input';

function StyledComponentsInput () {
  const Fieldset = styled.div`
    display: block;
    margin-bottom: 15px;
    border: 1px solid red;
    padding: 15px;
  `
  const Label = styled.div.attrs({
    for: 'styled-component-input'
  })`
    font-size: 13px;
    margin-bottom: 15px;
  `
  
  return (
    <Fieldset>
      <Label>This is a label</Label>
      <Input id="styled-component-input" value="This is a dumb input." />
    </Fieldset>
  );
}

export default StyledComponentsInput;