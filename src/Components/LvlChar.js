import React from "react";

const LvlChar = ({ level, characters }) => {
    return (
            <div className="lvlChar">
                <button className="lvl" id={`Lvl${level}`}></button>
                <button className="char" id={`Char${characters}`}></button>
            </div>
    )
}

export default LvlChar;