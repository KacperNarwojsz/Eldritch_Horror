import React from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

const YogSothothMysteryCard2 = ({ characters, mysteryDecrementHalfFull, mysteryCounter, mysteryIncrementFull, mysteryDone, }) => {

    return (
        <div className="ancientMysteryFrontDiv">
            <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                {<figure className="ancientMysteryFront" id="YogSothothMysteryFront2"></figure>}modal nested>
                {<div className="ancientMysteryFrontFocus" id="YogSothothMysteryFront2"></div>}
            </Popup>
            <div className="mysteryTokensDiv">
                <div className="mysteryCounter">
                    <button className="tokenMysteryMinus" onClick={mysteryDecrementHalfFull}></button>
                    <button className="tokenMysteryClue"></button>
                    <button className="tokenMysteryPlus" onClick={mysteryIncrementFull}></button>
                </div>
                {mysteryCounter!==characters?<button className="tokenMysteryCounter">{`${mysteryCounter}/${characters}`}</button>:null}
                {mysteryCounter===characters?<button className="tokenMysteryDone" onClick={mysteryDone}></button>:null}
            </div>
        </div>
    )
}
export default YogSothothMysteryCard2;