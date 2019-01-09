import React from 'react';
import './style/Main.scss';

function Nav(props) {
    return (
        <div>
            <div onClick={props.toggleMenu} className="hamburger-container">
                <div className="hamburger-circle"></div>
                <div className="stick-container">
                <div className="stick stick-one"></div>
                <div className="stick stick-two"></div>
                <div className="stick stick-three"></div>
                </div>
            </div>
            <ul className="nav">
                <li onClick={() => props.toggleComponents("MainMenu")} >Main Menu</li>
                <li onClick={() => props.toggleComponents("Study")} >Study</li>
                <li onClick={() => props.toggleComponents("Quiz")} >Quiz</li>
                <li onClick={() => props.toggleComponents("Create")} >Create</li>
                <li onClick={() => props.toggleComponents("ListComponent")} >View Decks</li>
            </ul>
        </div>
    )
}

export default Nav;