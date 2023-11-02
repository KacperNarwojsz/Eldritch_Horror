import React from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

const AzathothMysteryCard2 = ({ characters, mysteryDecrement, mysteryCounter, mysteryIncrementHalf, mysteryDone, }) => {

    return (
        <div className="ancientMysteryFrontDiv">
            <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                {<figure className="ancientMysteryFront" id="AzathothMysteryFront2"></figure>}modal nested>
                {<div className="ancientMysteryFrontFocus" id="AzathothMysteryFront2"></div>}
            </Popup>
            <div className="mysteryTokensDiv">
                <div className="mysteryCounter">
                    <button className="tokenMysteryMinus" onClick={mysteryDecrement}></button>
                    <button className="tokenMysteryEldritch"></button>
                    <button className="tokenMysteryPlus" onClick={mysteryIncrementHalf}></button>
                </div>
                {mysteryCounter!==Math.ceil(characters/2)?<button className="tokenMysteryCounter">{`${mysteryCounter}/${Math.ceil(characters/2)}`}</button>:null}
                {mysteryCounter===Math.ceil(characters/2)?<button className="tokenMysteryDone" onClick={mysteryDone}></button>:null}
            </div>
        </div>
    )
}
export default AzathothMysteryCard2;