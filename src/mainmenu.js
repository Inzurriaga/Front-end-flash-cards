import React, { Component } from 'react';
import './MainMenu.css'
import './normalize.css'

class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu-component">
                <button className="study-button" onClick={''}>
                    &lt; STUDY &gt;
                </button>
                <button className="quiz-button" onClick={''}> 
                    &#123; QUIZ &#125;
                </button>
                <button className="create-button" onClick={''}>
                     &#40; CREATE &#41;
                </button>
            </div>
        )
    }
}

export default MainMenu;