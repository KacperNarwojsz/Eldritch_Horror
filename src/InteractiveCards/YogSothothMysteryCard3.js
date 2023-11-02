import React from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

const YogSothothMysteryCard3 = ({ characters, mysteryDecrement, mysteryCounter, mysteryIncrementHalf, mysteryDone, }) => {

    return (
        <div className="ancientMysteryFrontDiv">
            <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                {<figure className="ancientMysteryFront" id="YogSothothMysteryFront3"></figure>}modal nested>
                {<div className="ancientMysteryFrontFocus" id="YogSothothMysteryFront3"></div>}
            </Popup>
            <div className="mysteryTokensDiv">
                <div className="mysteryCounter">
                    <button className="tokenMysteryMinus" onClick={mysteryDecrement}></button>
                    <button className="tokenMysteryGate"></button>
                    <button className="tokenMysteryPlus" onClick={mysteryIncrementHalf}></button>
                </div>
                {mysteryCounter!==Math.ceil(characters/2)?<button className="tokenMysteryCounter">{`${mysteryCounter}/${Math.ceil(characters/2)}`}</button>:null}
                {mysteryCounter===Math.ceil(characters/2)?<button className="tokenMysteryDone" onClick={mysteryDone}></button>:null}
            </div>
        </div>
    )
}
export default YogSothothMysteryCard3;