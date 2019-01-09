import React, { Component } from "react";
import StudyControls from './Quiz';

class Quiz extends Component {
    constructor() {
        super();
        this.state = {
            currentScore: 0,
            card: 0,
            questions: [{"catagory":"html","question":"What are the three main tags that all HTMl structure needs?","answer":"<html>, <head>, and <body>","falseAnswer":["<header>, <section>, and <footer>","<div>, <h1>, and <p>","<section>, <div>, and <span>"],"color":"#f1652a"},{"catagory":"html","question":"How do you insert an image?","answer":"<img>","falseAnswer":["<image>","<photo>","<jpeg>"],"color":"#f1652a"},{"catagory":"html","question":"What are the basic structure for a drop down menu?","answer":"<select> and <option>","falseAnswer":["<dropdown> and <option>","<input> and <option>","<input> and <dropdown>"],"color":"#f1652a"},{"catagory":"html","question":"How do you insert a video?","answer":"<video>","falseAnswer":["<vid>","<mp3>","<vhs>"],"color":"#f1652a"},{"catagory":"html","question":"How do you define a quote?","answer":"<blockquote>","falseAnswer":["<q>","<quote>","<p>"],"color":"#f1652a"}]
        }
    }
    checkAnswer = () => {
        let newsome = this.state.card
        newsome++
        this.setState({ card: newsome })
    }
    render() {
        return (
        <div>
            <div className="quiz-card">
                <h3>{this.state.questions[this.state.card].catagory}</h3>
                <p>{this.state.questions[this.state.card].question}</p>
            </div>
            <div className="quiz-answers-container"> 
            <h3>current score: {this.state.currentScore}</h3>
            <h3>high score: {this.state.highScore}</h3>
            {
                this.state.questions[this.state.card].falseAnswer.map((answer) => {
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