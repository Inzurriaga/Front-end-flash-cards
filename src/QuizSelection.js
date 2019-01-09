import React, { Component } from 'react';
import './style/Main.scss';
import Quiz from "./quizComponent"
import Controls from "./Controls"

class StudyControls extends Component {
    constructor() {
        super();
        this.state = {
            deck: [],
            answer: []
        }
    }

    createDeck = () => {
        let catagorys = []
        document.querySelectorAll('input[name="pick-catagory"]:checked').forEach((picked) => {
            catagorys.push(picked.value);
       });
       let pickCat = catagorys.reduce((acc, catagory) => {
            let newarray = this.props.cards.filter((cardss) => {
                return cardss.catagory === catagory
            })
            return acc.concat(newarray)
       }, [])
       this.setState({ deck: pickCat })
       this.createAnswer(pickCat)
    }

    createAnswer = (pickanswer) => {
        let answer = pickanswer.reduce((acc, card) => {
            card.falseAnswer.unshift(`${card.answer}`)
            for (let i = card.falseAnswer.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [card.falseAnswer[i], card.falseAnswer[j]] = [card.falseAnswer[j], card.falseAnswer[i]];
            }
            acc.push(card.falseAnswer)
            return acc
        }, [])
        console.log(answer)
        this.setState({ answer: answer,
            deck: pickanswer})
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
                <Quiz cards={this.state.deck}
                        answer={this.state.answer}/>
            </div>
            )
        }
    }
}

export default StudyControls;