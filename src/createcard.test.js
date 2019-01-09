import React from 'react';
import Create from './CreateCard.js';
import { shallow } from 'enzyme';

const CreateCard = jest.fn();
const cards = [{"catagory":"html","question":"What are the three main tags that all HTMl structure needs?","answer":"<html>, <head>, and <body>","falseAnswer":["<header>, <section>, and <footer>","<div>, <h1>, and <p>","<section>, <div>, and <span>"],"color":"#f1652a"},{"catagory":"html","question":"How do you insert an image?","answer":"<img>","falseAnswer":["<image>","<photo>","<jpeg>"],"color":"#f1652a"},{"catagory":"html","question":"What are the basic structure for a drop down menu?","answer":"<select> and <option>","falseAnswer":["<dropdown> and <option>","<input> and <option>","<input> and <dropdown>"],"color":"#f1652a"},{"catagory":"html","question":"How do you insert a video?","answer":"<video>","falseAnswer":["<vid>","<mp3>","<vhs>"],"color":"#f1652a"}];

describe('create', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Create cards={cards}/>);
  });

  it('should start off with the correct default states ', () => {
    expect(wrapper.state()).toEqual({
        personalDeck: []
    });
  });
  it('should display create card component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should invoke the createCard method when clicked', () => {
    wrapper.find('.create-card-button').simulate('click');
    expect(CreateCard).toBeCalled();
  });
});