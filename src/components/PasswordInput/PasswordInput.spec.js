import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';
import {shallow} from 'enzyme';

test('toggle input type when show/hide password is clicked', () => {
  const wrapper = shallow(
    <PasswordInput 
      onChange={() => {}}
      value=""
      showVisibilityToggle
    />
  );

  // Password input should have a type of password set initially
  expect(wrapper.find({type: "password"})).toHaveLength(1);
  expect(wrapper.find({type: "text"})).toHaveLength(0);

  // Password input should have a type of text after clicking toggle
  wrapper.find('a').simulate('click');
  expect(wrapper.find({type: "password"})).toHaveLength(0);
  expect(wrapper.find({type: "text"})).toHaveLength(1);
})

test('hides password quality by default', () => {
  const tree = renderer.create(
    <PasswordInput 
      onChange={() => {}}
      value="Uisi38#8iad"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
})

test('shows password quality when enabled and a password is entered', () => {
  const tree = renderer.create(
    <PasswordInput 
      onChange={() => {}}
      value="Uisi38#8iad"
      showQuality
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
})

test('hides password quality when enabled but no password is entered', () => {
  const tree = renderer.create(
    <PasswordInput 
      onChange={() => {}}
      value=""
      showQuality
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
})