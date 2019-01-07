import React, { Component } from 'react';
import './style/Main.scss';

class Card {
    constructor(answer, question, color) {
        this.catagory = "personal"
        this.question = question;
        this.answer = answer;
        this.color = color;
    }
}

class CreateCard extends Component {
    constructor() {
        super();
        this.state = {
            personalDeck: []
        }
    }

    createCard() {
        let answer = document.querySelector(".");
        let question = document.querySelector(".");
    }
    render() {
        return (
            <form>
                <fieldset>
                    <legend>Create a Card</legend>
                    <div className="create-card">
                        <label>Create Question/Defintion</label>
                        <textarea></textarea>
                    </div>
                    <div className="create-card">
                        <label>Create Answer/Word</label>
                        <textarea></textarea>
                    </div>
                    <label>Pick a color</label>
                    <input type="radio" name="card-color"/>
                    <input type="radio" name="card-color"/>
                    <input type="radio" name="card-color"/>
                    <input type="radio" name="card-color"/>
                </fieldset>
            </form>
        )
    }
}

export default CreateCard;