import React, { Component } from 'react';
import './App.css';
import './normalize.css'

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
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <button>start study</button>
                </fieldset>
            </form>
        )
    }
}

export default StudyControls;