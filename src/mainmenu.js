import React from 'react';
import './style/Main.scss';

function MainMenu(props) {
        return (
            <div className="main-menu-component">
                <button className="study-button" onClick={() => props.toggleComponents("Study")}>
                    &lt; STUDY &gt;
                </button>
                <button className="quiz-button" onClick={() => props.toggleComponents("Quiz")}> 
                    &#123; QUIZ &#125;
                </button>
                <button className="create-button" onClick={() => props.toggleComponents("Create")}>
                     &#40; CREATE &#41;
                </button>
            </div>
        )
}

export default MainMenu;