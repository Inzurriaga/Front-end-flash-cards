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
        let color = document.querySelector('input[name="create"]:checked').value;
        let card = new Card(answer, question, color)
        personalArray.push(card)  
        this.setState({ personalDeck: personalArray })
        localStorage.setItem('personalDeck', JSON.stringify(this.state.personalDeck));
    }

    render() {
        let colorList = ["red", "orange", "pink", "blue"]
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
                        {
                            colorList.map((button, index) => {
                                return (
                                    <div>
                                        <input id={"radio" + index} class="radio isHidden" name="create" type="radio" value={button}></input>
                                        <label for={"radio" + index} class="label"> </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button onClick={this.createCard} className="create-card-button">Create Card</button>
            </section>
        )
    }
}

export default CreateCard;