import React, { Component } from 'react';
import MainMenu from "./MainMenu";
import Nav from "./NavBar";
import Controls from "./studycontrols";
import ListComponent from "./listcomponent";
import CreateCard from "./CreateCard"
import './style/Main.scss';

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
        page: ""
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

  togglecomponents = (string)  => {
      this.setState({ page: string });
  }

  render() {
    switch(this.state.page) {
      case "ListComponent":
      return (
        <div className="page">
          <Nav toggleMenu={this.toggleMenu} 
                toggleComponents={this.togglecomponents} />
          <section className="main-content">
            <header>
              <h1>Flash Cards For Dummies</h1>
            </header>
            <ListComponent cards={this.state.cards} />
          </section>
        </div>
      );
      case "Study":
      case "Quiz": 
      return (
        <div className="page">
          <Nav toggleMenu={this.toggleMenu}  
                toggleComponents={this.togglecomponents}/>
          <section className="main-content">
            <header>
              <h1>Flash Cards For Dummies</h1>
            </header>
            <Controls />
          </section>
        </div>
      );
      case "Create": 
      return (
        <div className="page">
          <Nav toggleMenu={this.toggleMenu}  
                toggleComponents={this.togglecomponents}/>
          <section className="main-content">
            <header>
              <h1>Flash Cards For Dummies</h1>
            </header>
            <CreateCard />
          </section>
        </div>
      );
      default: 
      return (
        <div className="page">
          <Nav toggleMenu={this.toggleMenu} 
                toggleComponents={this.togglecomponents}/>
          <section className="main-content">
            <header>
              <h1>Flash Cards For Dummies</h1>
            </header>
            <MainMenu  toggleComponents={this.togglecomponents}/>
          </section>
        </div>
      );
    }
  }
}

export default App;
