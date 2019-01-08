import React, { Component } from 'react';
import './style/Main.scss';

class StudyControls extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <section>
                <h2>select catagories</h2>
                    <div className="controls-component">
                        <input id="html" type="checkbox" className="checkbox"></input>
                        <label for="html" className="card html-button">
                            <h3>HTML</h3>
                            <img src={require('./image/heart.png')}/>
                        </label>
                        <input id="css" type="checkbox" className="checkbox"></input>
                        <label for="css"  className="card css-button">
                            <h3>CSS</h3>
                            <img src={require('./image/diamond.png')}/>
                        </label>
                        <input id="javascript" type="checkbox" className="checkbox"></input>
                        <label for="javascript" className="card javascript-button">
                            <h3>Javascript</h3>
                            <img src={require("./image/spade.png")}/>
                        </label>
                        <input id="personal" type="checkbox" className="checkbox"></input>
                        <label for="personal" className="card personal-button">
                            <h3>Personal</h3>
                            <img src={require("./image/clover.png")}/>
                        </label>
                    </div>
                    <button className="start-button">start study</button>
            </section>
        )
    }
}

export default StudyControls;