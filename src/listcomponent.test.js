import React from 'react';
import ListComponent from './listcomponent.js';
import { shallow } from 'enzyme';

const cards = [{"catagory":"html","question":"What are the three main tags that all HTMl structure needs?","answer":"<html>, <head>, and <body>","falseAnswer":["<header>, <section>, and <footer>","<div>, <h1>, and <p>","<section>, <div>, and <span>"],"color":"#f1652a"},{"catagory":"html","question":"How do you insert an image?","answer":"<img>","falseAnswer":["<image>","<photo>","<jpeg>"],"color":"#f1652a"},{"catagory":"html","question":"What are the basic structure for a drop down menu?","answer":"<select> and <option>","falseAnswer":["<dropdown> and <option>","<input> and <option>","<input> and <dropdown>"],"color":"#f1652a"},{"catagory":"html","question":"How do you insert a video?","answer":"<video>","falseAnswer":["<vid>","<mp3>","<vhs>"],"color":"#f1652a"}];

describe('the list component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
        <ListComponent  cards={cards}/>);
  });

  it('should display the list', () => {
    expect(wrapper).toMatchSnapshot();
  });

});