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
        let color = document.querySelector(".radio").checked.value
        let card = new Card(answer, question, color)
        personalArray.push(card)  
        this.setState({ personalDeck: personalArray })
        localStorage.setItem('personalDeck', JSON.stringify(this.state.personalDeck));
    }

    render() {
        return (
            <section>
                    <h2 className="create-card-title">Create a Card</h2>
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
                    <div className="pick-container">
                        <input id="radio_1" class="radio isHidden" name="create" type="radio" value="hello"></input>
                        <label for="radio_1" class="label"></label>
                        <input id="radio_2" class="radio isHidden" name="create" type="radio"></input>
                        <label for="radio_2" class="label"></label>
                        <input id="radio_3" class="radio isHidden" name="create" type="radio"></input>
                        <label for="radio_3" class="label"></label>
                        <input id="radio_4" class="radio isHidden" name="create" type="radio"></input>
                        <label for="radio_4" class="label"></label>
                    </div>
                    <button onClick={this.createCard} className="create-card-button">Create Card</button>
            </section>
        )
    }
}

export default CreateCard;