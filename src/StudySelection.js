import React, { Component } from 'react';
import './style/Main.scss';
import Study from "./StudyComponent"
import Controls from "./Controls"

class StudySelection extends Component {
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
       let hello = catagorys.reduce((acc, catagory) => {
            let newarray = this.props.cards.filter((cardss) => {
                return cardss.catagory === catagory
            })
            return acc.concat(newarray)
       }, [])
       this.setState({ deck: hello })
    }
    render() {
        if(this.state.deck.length <= 1) {
        return (
            <div>
                <h2>select catagories</h2>
                <Controls create={this.createDeck}
                        selection={this.props.selection}/>
            </div>
        )}else {
            return (
            <div>
                <Study cards={this.state.deck}/>
            </div>
            )
        }
    }
}

export default StudySelection;