import React from 'react';
import './App.css';
import './normalize.css'

function Decks(props) {
    return (
        <div>
            <h2>HTML</h2>
            <ul>
                {
                    props.cards.map((card) => {
                        return (
                        <li>
                            <h3>{card.catagory}</h3>
                            <p>{card.question}</p>
                        </li>)
                    })
                }
            </ul>
            <h2>CSS</h2>
            <ul>
                {
                   props.cards.map((card) => {
                        // card.catagory === "css";
                        return (
                        <li>
                            <h3>{card.catagory}</h3>
                            <p>{card.question}</p>
                        </li>)
                    })
                }
            </ul>
            <h2>Javascript</h2>
            <ul>
                {
                    props.cards.map((card) => {
                        // card.catagory === "javascript"
                        return (
                        <li> 
                            <h3>{card.catagory}</h3>
                            <p>{card.question}</p>
                        </li>
                        )
                    })
                }
            </ul>
            <h2>personal deck</h2>
            <ul>
                {
                    props.cards.map((card) => {
                        // card.catagory === "personal"
                        return (
                        <li>
                            <h3>card.catagory</h3>
                            <p>card.question</p>
                        </li>
                        ) 
                    })
                }
            </ul>
        </div>
    )
}

export default Decks;
