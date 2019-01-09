import React, { Component } from "react";


class Quiz extends Component {
    constructor() {
        super();
        this.state = {
            currentCardIndex: 0
        }
    }

    incrememntUp = () => {
        document.querySelector(".study-card").classList.remove("flip-back");
        if(this.state.currentCardIndex < this.props.cards.length - 1) {
            let newIndex = this.state.currentCardIndex
            newIndex++
            this.setState({ currentCardIndex: newIndex})
        }
    }

    incrememntDown = () => {
        document.querySelector(".study-card").classList.remove("flip-back");
        if(this.state.currentCardIndex >= 1) {
            let newIndex = this.state.currentCardIndex
            newIndex--
            this.setState({ currentCardIndex: newIndex})
        }
    }

    flipCard() {
        let card = document.querySelector(".study-card");
        if(!card.classList.contains("flip-back")){
            card.classList.remove("flip-front");
            card.classList.add("flip-back");
        }else{
            card.classList.remove("flip-back");
            card.classList.add("flip-front");
        }
    }
    render() {
        let index = this.state.currentCardIndex;
        return (
        <div>
            <div onClick={this.flipCard} className="study-card">
                <div className="card-front">
                    <h3>{this.props.cards[index].catagory}</h3>
                    <p>{this.props.cards[index].question}</p>
                </div>
                <div className="card-back">
                    <h3>{this.props.cards[index].catagory}</h3>
                    <p>{this.props.cards[index].answer}</p>
                </div>
            </div>
            <button onClick={this.incrememntDown}>previous</button>
            <button onClick={this.incrememntUp}>next</button>
        </div>
        )
    }
}

export default Quiz;