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
                        <div role="group" className="card html-button">
                            <h3>HTML</h3>
                            <input type="checkbox"></input>
                            <img src={require('./image/heart.png')}/>
                        </div>
                        <div role="group" className="card css-button">
                            <h3>CSS</h3>
                            <input type="checkbox"></input>
                            <img src={require('./image/diamond.png')}/>
                        </div>
                        <div role="group" className="card javascript-button">
                            <h3>Javascript</h3>
                            <input type="checkbox"></input>
                            <img src={require("./image/spade.png")}/>
                        </div>
                        <div role="group" className="card personal-button">
                            <h3>Personal</h3>
                            <input type="checkbox"></input>
                            <img src={require("./image/clover.png")}/>
                        </div>
                    </div>
                    <button className="start-button">start study</button>
            </section>
        )
    }
}

export default StudyControls;