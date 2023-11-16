import React from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

const AzathothMysteryCard3 = ({ characters, mysteryDecrement, mysteryCounter, mysteryIncrementHalf, mysteryDeck, victory, ancientCardFlipped, mysteryDone }) => {

    return (
        <div className="ancientMysteryFrontDiv">
            <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                {<figure className="ancientMysteryFront" id="AzathothMysteryFront3"></figure>}modal nested>
                {<div className="ancientMysteryFrontFocus" id="AzathothMysteryFront3"></div>}
            </Popup>
            <div className="mysteryTokensDiv">
                <div className="mysteryCounter">
                    <button className="tokenMysteryMinus" onClick={mysteryDecrement}></button>
                    <button className="tokenMysteryEldritch"></button>
                    <button className="tokenMysteryPlus" onClick={mysteryIncrementHalf}></button>
                </div>
                {mysteryCounter!==Math.ceil(characters/2)?<button className="tokenMysteryCounter">{`${mysteryCounter}/${Math.ceil(characters/2)}`}</button>:null}
                {mysteryCounter===Math.ceil(characters/2)
                ?mysteryDeck.length === 0 && !ancientCardFlipped
                ?<Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                    {<button className="tokenMysteryDone"></button>}modal nested>
                    {close => (<div className='defeatPopup'><h1 className="winningPopupText">Czy została zakończona Faza Mitów ?</h1><div className="defeatChoiceButtons"><button className="defeatChoiceButton" onClick={victory}>TAK</button><button className="defeatChoiceButton" onClick={() => close()}>NIE</button></div></div>)}
                </Popup>
                :<button className="tokenMysteryDone" onClick={mysteryDone}></button>
                :null}
            </div>
        </div>
    )
}
export default AzathothMysteryCard3;