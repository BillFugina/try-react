import * as React from 'react';
import * as enzyme from 'enzyme';
import Howdy from './Howdy';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Howdy name='Daniel' />);
  expect(hello.find(".greeting").text()).toEqual('Howdy, Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Howdy name='Daniel' enthusiasmLevel={1}/>);
  expect(hello.find(".greeting").text()).toEqual('Howdy, Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Howdy name='Daniel' enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual('Howdy, Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Howdy name='Daniel' enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Howdy name='Daniel' enthusiasmLevel={-1} />);
  }).toThrow();
});