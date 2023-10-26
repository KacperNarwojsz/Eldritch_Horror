import React from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

const AzathothMysteryCard1 = ({ characters, mysteryDecrementHalfFull, mysteryCounter, mysteryIncrementHalf, mysteryDone, }) => {

    return (
        <div className="ancientMysteryFrontDiv">
            <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                {<figure className="ancientMysteryFront" id="AzathothMysteryFront1"></figure>}modal nested>
                {<div className="ancientMysteryFrontFocus" id="AzathothMysteryFront1"></div>}
            </Popup>
            <div className="mysteryTokensDiv">
                <div className="mysteryCounter">
                    <button className="tokenMysteryMinus" onClick={mysteryDecrementHalfFull}></button>
                    <button className="tokenMysteryEldritch"></button>
                    <button className="tokenMysteryPlus" onClick={mysteryIncrementHalf}></button>
                </div>
                {mysteryCounter!==Math.ceil(characters/2)?<button className="tokenMysteryCounter">{`${mysteryCounter}/${Math.ceil(characters/2)}`}</button>:null}
                {mysteryCounter===Math.ceil(characters/2)?<button className="tokenMysteryDone" onClick={mysteryDone}></button>:null}
            </div>
        </div>
    )
}
export default AzathothMysteryCard1;