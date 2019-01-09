import React, { Component } from "react";


class Quiz extends Component {
    constructor() {
        super();
        this.state = {
            currentScore: 0,
            highScore: 90,
            currentCardIndex: 0
        }
    }
    checkAnswer = () => {
        let newsome = this.state.currentCardIndex
        newsome++
        this.setState({ currentCardIndex: newsome })
    }
    render() {
        return (
        <div>
            <div className="quiz-card">
                <h3>{this.props.cards[this.state.currentCardIndex].catagory}</h3>
                <p>{this.props.cards[this.state.currentCardIndex].question}</p>
            </div>
            <div className="quiz-answers-container"> 
            <h3>current score: {this.state.currentScore}</h3>
            <h3>high score: {this.state.highScore}</h3>
            {
                this.props.cards[this.state.currentCardIndex].falseAnswer.map((answer) => {
                    return (
                        <button className="quiz-answer" onClick={this.checkAnswer} value={answer}>{answer}</button>
                    )
                })
            }
            </div>
        </div>
        )
    }
}

export default Quiz;