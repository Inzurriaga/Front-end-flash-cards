import React from 'react';
import './style/Main.scss';

function Decks(props) {
    return (
        <div className="list-component">
            <h2>HTML</h2>
            <ul className="list">
                {
                   props.cards.filter((card) => {
                      return  card.catagory === "html"
                   }).map((card) => {
                       return (
                        <li className="list-card list-html">
                            <h4>{card.catagory}</h4>
                            <p>{card.question}</p>
                            <p>{card.answer}</p>
                        </li>
                       )
                   })
                }
            </ul>
            <h2>CSS</h2>
            <ul className="list">
            {
                   props.cards.filter((card) => {
                      return  card.catagory === "css"
                   }).map((card) => {
                       return (
                        <li className="list-card list-css">
                            <h4>{card.catagory}</h4>
                            <p>{card.question}</p>
                            <p>{card.answer}</p>
                        </li>
                       )
                   })
                }
            </ul>
            <h2>Javascript</h2>
            <ul className="list">
            {
                   props.cards.filter((card) => {
                      return  card.catagory === "javascript"
                   }).map((card) => {
                       return (
                        <li className="list-card list-javascript">
                            <h4>{card.catagory}</h4>
                            <p>{card.question}</p>
                            <p>{card.answer}</p>
                        </li>
                       )
                   })
                }
            </ul>
            <h2>personal deck</h2>
            <ul className="list"> 
            {
                    props.cards.reduce((acc, card) => {
                    if(card.catagory === "personal") {
                         acc =
                        <li className="list-card list-personal">
                            <h4>{card.catagory}</h4>
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
