import React, { Component } from 'react';
import MainMenu from "./MainMenu";
import './App.css';
import './normalize.css'

class App extends Component {

  toggleMenu() {
    let page = document.querySelector(".page");
    let sticks = document.querySelectorAll(".stick")
      if(!page.classList.contains("what")){
        page.classList.add("what");
      }else{
        page.classList.remove("what");
      }
      sticks.forEach((stick) => {
      if(!stick.classList.contains("open") || stick.classList.contains("close"))  {
        stick.classList.remove("close");
        stick.classList.add("open")
      } else{
        stick.classList.remove("open");
        stick.classList.add("close")
      }
    })
  }

  render() {
    return (
      <div className="page">
        <div onClick={this.toggleMenu} className="hamburger-container">
          <div className="hamburger-circle"></div>
          <div className="stick-container">
            <div className="stick stick-one"></div>
            <div className="stick stick-two"></div>
            <div className="stick stick-three"></div>
          </div>
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
          <header>
            <h1>flash card for coding</h1>
          </header>
          <MainMenu />
        </section>
      </div>
    );
  }
}

export default App;
