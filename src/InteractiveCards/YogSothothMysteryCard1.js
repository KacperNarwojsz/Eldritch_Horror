import React from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

const YogSothothMysteryCard1 = ({ characters, mysteryDecrementHalfFull, mysteryCounter, mysteryIncrementFull, mysteryDone, }) => {

    return (
        <div className="ancientMysteryFrontDiv">                
            <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                {<figure className="ancientMysteryFront" id="YogSothothMysteryFront1"></figure>}modal nested>
                {<div className="ancientMysteryFrontFocus" id="YogSothothMysteryFront1"></div>}
            </Popup>
            <div className="mysteryTokensDiv">
                <div className="mysteryCounter">
                    <button className="tokenMysteryMinus" onClick={mysteryDecrementHalfFull}></button>
                    <button className="tokenMysteryEldritch"></button>
                    <button className="tokenMysteryPlus" onClick={mysteryIncrementFull}></button>
                </div>
                {mysteryCounter!==characters?<button className="tokenMysteryCounter">{`${mysteryCounter}/${characters}`}</button>:null}
                {mysteryCounter===characters?<button className="tokenMysteryDone" onClick={mysteryDone}></button>:null}
            </div>
        </div>
    )
}
export default YogSothothMysteryCard1;