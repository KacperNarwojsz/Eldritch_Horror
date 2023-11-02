import React from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

const ShubNiggurathMysteryCard1 = ({ characters, mysteryDecrement, mysteryCounter, mysteryIncrementHalf, mysteryDone, }) => {

    return (
        <div className="ancientMysteryFrontDiv">
            <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                {<figure className="ancientMysteryFront" id="ShubNiggurathMysteryFront1"></figure>}modal nested>
                {<div className="ancientMysteryFrontFocus" id="ShubNiggurathMysteryFront1"></div>}
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
export default ShubNiggurathMysteryCard1;