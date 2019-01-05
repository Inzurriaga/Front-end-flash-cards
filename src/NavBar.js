import React, { Component } from 'react';
import './App.css';
import './normalize.css'

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            pages: "main page"
        }
    }
    toggleMenu(string) {
        this.props.toggleComponents(string)
    }

    render() {
    return (
        <div>
            <div onClick={this.props.toggleMenu} className="hamburger-container">
                <div className="hamburger-circle"></div>
                <div className="stick-container">
                <div className="stick stick-one"></div>
                <div className="stick stick-two"></div>
                <div className="stick stick-three"></div>
                </div>
            </div>
            <ul className="nav">
                <li>Main Menu</li>
                <li>Study</li>
                <li>Quiz</li>
                <li>Create</li>
                <li>View Decks</li>
                <li>Practice</li>
            </ul>
        </div>
    )
    }
}

export default Nav;