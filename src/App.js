import React, { Component } from 'react';
import './App.css';
import './normalize.css'

class App extends Component {

  toggleMenu() {
    let page = document.querySelector('.page');
      if(!page.classList.contains("what")){
        page.classList.add("what");
      }else{
        page.classList.remove("what");
      }   
  }

  render() {
    return (
      <div className="page">
        <div onClick={this.toggleMenu} className="hamburger-container">
          <div className="hamburger-circle"></div>
          <div className="stick stick-one"></div>
          <div className="stick stick-two"></div>
          <div className="stick stick-three"></div>
        </div>
        <ul className="nav">
          <li>Main Menu</li>
          <li>Study</li>
          <li>Quiz</li>
          <li>Create</li>
          <li>View Decks</li>
          <li>Practice</li>
        </ul>
        <section className="main-content">
          <h1> im the practice text to see if this works</h1>
        </section>
      </div>
    );
  }
}

export default App;
