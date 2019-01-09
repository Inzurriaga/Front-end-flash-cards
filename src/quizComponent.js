import React, { Component } from "react";


class Quiz extends Component {
    constructor() {
        super();
        this.state = {
            currentScore: 0,
            highScore: 0,
            currentCardIndex: 0
        }
    }
    checkAnswer = (answer) => {
        let newscore = this.state.currentScore
        if(this.props.cards[this.state.currentCardIndex].answer == answer) {
            newscore++
        }
        console.log(answer)
        let newsome = this.state.currentCardIndex
        newsome++
        this.setState({ currentCardIndex: newsome,
                        currentScore: newscore })
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
                this.props.answer[this.state.currentCardIndex].map((answer) => {
                    return (
                        <button className="quiz-answer" onClick={() => this.checkAnswer({answer})} value={answer}>{answer}</button>
                    )
                })
            }
            </div>
        </div>
        )
    }
}

export default Quiz;