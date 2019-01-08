import React from 'react';
import './style/Main.scss';

function Decks(props) {
    let listArray=["html", "css", "javascript", "personal"]
    return (
        <div className="list-component">
        {
            listArray.map((catagory) => {
                return (
                    <div>
                        <h2>{catagory}</h2>
                        <ul className="list">
                            {
                            props.cards.filter((card) => {
                                return  card.catagory === catagory
                            }).map((card) => {
                                return (
                                    <li className="list-card" style={{"background-color": card.color}}>
                                        <h4>{card.catagory}</h4>
                                        <p>{card.question}</p>
                                        <p>{card.answer}</p>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Decks;
