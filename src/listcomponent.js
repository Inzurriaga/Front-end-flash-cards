import React from 'react';
import './App.css';
import './normalize.css'
import './list.css'

function Decks(props) {
    return (
        <div className="list-component">
            <h2>HTML</h2>
            <ul className="list">
                {
                    props.cards.reduce((acc, card) => {
                    if(card.catagory === "html") {
                         acc =
                        <li className="list-card list-html">
                            <h3>{card.catagory}</h3>
                            <p>{card.question}</p>
                            <p>{card.answer}</p>
                        </li>
                    }
                    return acc
                    }, [])
                }
            </ul>
            <h2>CSS</h2>
            <ul className="list">
            {
                    props.cards.reduce((acc, card) => {
                    if(card.catagory === "css") {
                         acc =
                        <li className="list-card list-css">
                            <h3>{card.catagory}</h3>
                            <p>{card.question}</p>
                            <p>{card.answer}</p>
                        </li>
                    }
                    return acc
                    }, [])
                }
            </ul>
            <h2>Javascript</h2>
            <ul className="list">
            {
                    props.cards.reduce((acc, card) => {
                    if(card.catagory === "javascript") {
                         acc =
                        <li className="list-card list-javascript">
                            <h3>{card.catagory}</h3>
                            <p>{card.question}</p>
                            <p>{card.answer}</p>
                        </li>
                    }
                    return acc
                    }, [])
                }
            </ul>
            <h2>personal deck</h2>
            <ul className="list"> 
            {
                    props.cards.reduce((acc, card) => {
                    if(card.catagory === "personal") {
                         acc =
                        <li className="list-card list-personal">
                            <h3>{card.catagory}</h3>
                            <p>{card.question}</p>
                            <p>{card.answer}</p>
                        </li>
                    }
                    return acc
                    }, [])
                }
            </ul>
        </div>
    )
}

export default Decks;
