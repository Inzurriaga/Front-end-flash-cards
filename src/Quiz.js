import React, { Component } from 'react';
import './style/Main.scss';
import Quiz from "./quizComponent"
import Controls from "./Controls"

class StudyControls extends Component {
    constructor() {
        super();
        this.state = {
            deck: []
        }
    }

    createDeck = () => {
        let catagorys = []
        document.querySelectorAll('input[name="pick-catagory"]:checked').forEach((picked) => {
            catagorys.push(picked.value);
       });
        this.setState({ deck: catagorys })
    }
    render() {
        if(this.state.deck.length <= 1) {
        return (
            <div>
                <h2>select catagories</h2>
                <Controls create={this.createDeck}
                        Component={this.props.Component}/>
            </div>
        )}else {
            return (
            <div>
                <Quiz />
            </div>
            )
        }
    }
}

export default StudyControls;