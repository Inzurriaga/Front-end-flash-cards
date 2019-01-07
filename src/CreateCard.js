import React, { Component } from 'react';
import './style/Main.scss';

function CreateCard() {
    // createCard() {
    //     //save card to local storage
    // }

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

export default CreateCard;