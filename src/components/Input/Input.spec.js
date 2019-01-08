import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

// this is a snapshot test, useful for testing the component's structure
// you can use enzyme to test parts of the components after specific interactions
test('it creates an input element', () => {
  const tree = renderer.create(
    <Input />
  ).toJSON();

  expect(tree).toMatchSnapshot();
})