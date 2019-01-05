import React, { Component } from 'react';
import './App.css';
import './normalize.css'
import './controls.css'

class StudyControls extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <form>
                <fieldset>
                    <div className="card html-button">
                        <h2>HTML</h2>
                        <input type="checkbox"></input>
                    </div>
                    <div className="card css-button">
                        <h2>CSS</h2>
                        <input type="checkbox"></input>
                    </div>
                    <div className="card javascript-button">
                        <h2>Javascript</h2>
                        <input type="checkbox"></input>
                    </div>
                    <div className="card personal-button">
                        <h2>Personal</h2>
                        <input type="checkbox"></input>
                    </div>
                    <button>start study</button>
                </fieldset>
            </form>
        )
    }
}

export default StudyControls;