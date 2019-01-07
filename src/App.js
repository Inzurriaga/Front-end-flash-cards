import React, { Component } from 'react';
import MainMenu from "./MainMenu";
import Nav from "./NavBar";
import Controls from "./controls";
import ListComponent from "./listcomponent";
import CreateCard from "./CreateCard"
import './style/Main.scss';
import { parse } from 'querystring';

class App extends Component {
  constructor() {
    super();
    this.state = {
        cards: [],
        personalCards: [],
        page: ""
    }
  }


  componentDidMount() {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/gabeCards")
      .then(response => response.json())
      .then(data => {
        this.setState({
          cards: data.gabeCards
        });
      })
      .catch(error => console.log(error));
      const personalDeck = JSON.parse( localStorage.getItem( "personalDeck" ) );
    this.setState( { personalCards: personalDeck } );
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
            <ListComponent cards={this.state.cards}
                            personalCards={this.state.personalCards} />
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
