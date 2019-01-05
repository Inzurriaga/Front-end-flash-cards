import React, { Component } from 'react';
import MainMenu from "./MainMenu";
import Nav from "./NavBar"
import ListComponent from "./listcomponent"
import './App.css';
import './normalize.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
        cards: [{
          catagory: "html",
          question: "What are the three main tags that all HTMl structure needs?",
          answer: "<html>, <head>, and <body>",
          falseAnswer: ["<header>, <section>, and <footer>", "<div>, <h1>, and <p>", "<section>, <div>, and <span>"],
          color: "#f1652a"
        }, {
          catagory: "css",
          question: "Which property allows you to customize your cursor?",
          answer: "cursor",
          falseAnswer: ["point","cursor-style","mouse"],
          color: "#2fa4d5"
        }, {
          catagory: "javascript",
          question: "Which method allows you to remove a datatype at the end of an array?",
          answer: "arrayEx.pop(insertDatatype)",
          falseAnswer: ["arrayEx.push(insertDatatype)","arrayEx.remove(insertDatatype)","arrayEx.delete(insertDatatype)"],
          color: "#f7d33c"
        }],
        page: "main menu"
    }
  }

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

  togglecomponents(string) {
    this.setState({ page: string })
  }

  render() {
    if(this.state.page === "main menu") {
        return ( 
        <div className="page">
          <Nav toggleMenu={this.toggleMenu}  />
          <section className="main-content">
            <header>
              <h1>flash card for coding</h1>
            </header>
            <MainMenu />
          </section>
        </div>
      );
        }else {
          return ( 
            <div className="page">
              <Nav toggleMenu={this.toggleMenu}
                toggleComponents={this.togglecomponents}/>
              <section className="main-content">
                <header>
                  <h1>flash card for coding</h1>
                </header>
                <ListComponent cards={this.state.cards}/>
              </section>
            </div>
          );
        }
}
}

export default App;
