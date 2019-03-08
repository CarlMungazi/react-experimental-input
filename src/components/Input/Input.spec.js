import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

test('it creates an input element', () => {
  const tree = renderer.create(
    <Input />
  ).toJSON();

  expect(tree).toMatchSnapshot();
})

test('it renders error messages', () => {
  const tree = renderer.create(
    <Input error='This is an error' />
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
})