import React from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

const ShubNiggurathMysteryCard3 = ({ characters, mysteryDecrement, mysteryCounter, mysteryIncrementDouble, mysteryDone, }) => {

    return (
        <div className="ancientMysteryFrontDiv">
            <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                {<figure className="ancientMysteryFront" id="ShubNiggurathMysteryFront3"></figure>}modal nested>
                {<div className="ancientMysteryFrontFocus" id="ShubNiggurathMysteryFront3"></div>}
            </Popup>
            <div className="mysteryTokensDiv">
                <div className="mysteryCounter">
                    <button className="tokenMysteryMinus" onClick={mysteryDecrement}></button>
                    <button className="tokenMysteryToughness"></button>
                    <button className="tokenMysteryPlus" onClick={mysteryIncrementDouble}></button>
                </div>
                {mysteryCounter!==characters*2?<button className="tokenMysteryCounter">{`${mysteryCounter}/${characters*2}`}</button>:null}
                {mysteryCounter===characters*2?<button className="tokenMysteryDone" onClick={mysteryDone}></button>:null}
            </div>
        </div>
    )
}
export default ShubNiggurathMysteryCard3;