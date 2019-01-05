import React, { Component } from 'react';
import './MainMenu.css'
import './normalize.css'

class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu-component">
                <button onClick={''}>
                    <ul>
                        <li>&lt; STUDY &gt;</li>
                        <li>&lt; h1 &gt;</li>
                        <li>&lt; img &gt;</li>
                        <li>&lt; header &gt;</li>
                        <li>&lt; html &gt;</li>
                    </ul>
                </button>
                <button onClick={''}> 
                    <ul>
                        <li>&#123; QUIZ &#125;</li>
                        <li>&#123; color &#125;</li>
                        <li>&#123; animation &#125;</li>
                        <li>&#123; position &#125;</li>
                        <li>&#123; background &#125;</li>
                    </ul>
                </button>
                <button onClick={''}>
                    <ul>
                        <li>&#40; CREATE &#41;</li>
                        <li>&#40; &#41;</li>
                        <li>&#40; &#41;</li>
                        <li>&#40; &#41;</li>
                        <li>&#40; &#41;</li>
                    </ul>
                </button>
            </div>
        )
    }
}

export default MainMenu;