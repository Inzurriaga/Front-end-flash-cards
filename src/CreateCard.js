import React, { Component } from 'react';
import './style/Main.scss';

class Card {
    constructor(answer, question, color) {
        this.catagory = "personal"
        this.question = question;
        this.answer = answer;
        this.color = color || "#ffffff";
    }
}

class CreateCard extends Component {
    constructor() {
        super();
        this.state = {
            personalDeck: []
        }
    }

    createCard = () => {
        let personalArray = this.state.personalDeck;
        let answer = document.querySelector(".answer-text").value;
        let question = document.querySelector(".question-text").value;
        let color = document.querySelector(".create-card-input").checked.value
        let card = new Card(answer, question, color)
        personalArray.push(card)  
        this.setState({ personalDeck: personalArray })
        localStorage.setItem('personalDeck', JSON.stringify(this.state.personalDeck));
    }

    render() {
        return (
            <section>
                    <h2>Create a Card</h2>
                    <div className="create-card-container">
                        <div className="create-card">
                            <h4>Create Question/Defintion</h4>
                            <textarea className="question-text"></textarea>
                        </div>
                        <div className="create-card">
                            <h4>Create Answer/Word</h4>
                            <textarea className="answer-text"></textarea>
                        </div>
                    </div>
                    <h3 className="pick-label">Pick a color</h3>
                    <div className="radio-button">
                        <input className="create-card-input" type="radio" value="orange" name="card-color"/>
                        <span className="radio-selected"></span>
                    </div>
                    <div className="radio-button">
                        <input className="create-card-input" type="radio" value="blue" name="card-color"/>
                        <span className="radio-selected"></span>
                    </div>
                    <div className="radio-button">
                        <input className="create-card-input" type="radio" value="red" name="card-color"/>
                        <span className="radio-selected"></span>
                    </div>
                    <div className="radio-button">
                        <input className="create-card-input" type="radio" value="yellow" name="card-color"/>
                        <span className="radio-selected"></span>
                    </div>
                    <button onClick={this.createCard} className="create-card-button">Create Card</button>
            </section>
        )
    }
}

export default CreateCard;