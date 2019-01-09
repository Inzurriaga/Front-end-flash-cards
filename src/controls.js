import React from "react"

function Controls(props) {
    return (
        <div>
            <div className="controls-component">
                <input name="pick-catagory" id="html" type="checkbox" className="checkbox" value="html"></input>
                <label for="html" className="card html-button">
                    <h3>HTML</h3>
                    <img src={require('./image/heart.png')}/>
                </label>
                <input name="pick-catagory" id="css" type="checkbox" className="checkbox" value="css"></input>
                <label for="css"  className="card css-button">
                    <h3>CSS</h3>
                    <img src={require('./image/diamond.png')}/>
                </label>
                <input name="pick-catagory" id="javascript" type="checkbox" className="checkbox" value="javascript"></input>
                <label for="javascript" className="card javascript-button">
                    <h3>Javascript</h3>
                    <img src={require("./image/spade.png")}/>
                </label>
                <input name="pick-catagory" id="personal" type="checkbox" className="checkbox" value="personal"></input>
                <label for="personal" className="card personal-button">
                    <h3>Personal</h3>
                    <img src={require("./image/clover.png")}/>
                </label>
            </div>
            <button onClick={props.create} className="start-button">{"start " + props.selection}</button>
        </div>
    )
}

export default Controls;