import React, { Component } from 'react';
import './normalize.css'
import './controls.css'

class CreateCard extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    createCard() {
        //save card to local storage
    }

    render() {
        return (
            <form>
                <fieldset>
                    <legend>Create a Card</legend>
                    <div>
                        <label>Create Question/Defintion</label>
                        <textarea></textarea>
                    </div>
                    <div>
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