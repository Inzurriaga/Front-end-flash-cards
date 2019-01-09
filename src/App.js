import React, { Component } from 'react';
import MainMenu from "./MainMenu";
import Nav from "./NavBar";
import QuizSelection from "./QuizSelection";
import ListComponent from "./listcomponent";
import CreateCard from "./CreateCard"
import StudySelection from "./StudySelection"
import './style/Main.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
        cards: [],
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
      .then(() => {
        const personalDeck = JSON.parse( localStorage.getItem( "personalDeck" ) );
        let together = this.state.cards.concat( personalDeck )
        this.setState( { cards:  together });
      })
      .catch(error => console.log(error));
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
              <h1 onClick={() => this.togglecomponents("MainMenu")}>Flash Cards For Dummies</h1>
            </header>
            <ListComponent cards={this.state.cards}
                             personalCards={this.state.personalCards} />
          </section>
        </div>
      );
      case "Study":
      return (
        <div className="page">
          <Nav toggleMenu={this.toggleMenu}  
                toggleComponents={this.togglecomponents}/>
          <section className="main-content">
            <header>
              <h1 onClick={() => this.togglecomponents("MainMenu")}>Flash Cards For Dummies</h1>
            </header>
            <StudySelection  cards={this.state.cards}
                            selection={this.state.page}/>
          </section>
        </div>
      );
      case "Quiz": 
      return (
        <div className="page">
          <Nav toggleMenu={this.toggleMenu}  
                toggleComponents={this.togglecomponents}/>
          <section className="main-content">
            <header>
              <h1 onClick={() => this.togglecomponents("MainMenu")}>Flash Cards For Dummies</h1>
            </header>
            <QuizSelection  cards={this.state.cards}
                            selection={this.state.page}/>
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
              <h1 onClick={() => this.togglecomponents("MainMenu")}>Flash Cards For Dummies</h1>
            </header>
            <CreateCard cards={this.state.cards}/>
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
              <h1 onClick={() => this.togglecomponents("MainMenu")}>Flash Cards For Dummies</h1>
            </header>
            <MainMenu  toggleComponents={this.togglecomponents}/>
          </section>
        </div>
      );
    }
  }
}

export default App;
