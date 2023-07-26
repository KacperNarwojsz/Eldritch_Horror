import React from "react";

const LvlChar = ({ submitAnswerToMain }) => {
    return (
            <div className="lvlChar">
                <button className="lvl" id="LvlEasy"></button>
                <button className="char" id="Char4"></button>
            </div>
    )
}

export default LvlChar;

{/* <button className="lvl" 
id={switch(this.state.level) {
    case "Easy":        return "LvlEasy";
    case "Hard":        return "LvlHard";
    default: "Normal"    return "LvlNormal"}}> */}

 // id={this.state.lvl = 'Normal' ? 'LvlNormal' : (this.state.lvl = 'Easy' ? 'LvlEasy' : 'LvlHard')}