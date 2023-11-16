import React from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

const CthulhuMysteryCard1 = ({ characters, mysteryDecrement, mysteryCounter, mysteryIncrementFull, mysteryDeck, victory, ancientCardFlipped, mysteryDone, }) => {

    return (
        <div className="ancientMysteryFrontDiv">                
            <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                {<figure className="ancientMysteryFront" id="CthulhuMysteryFront1"></figure>}modal nested>
                {<div className="ancientMysteryFrontFocus" id="CthulhuMysteryFront1"></div>}
            </Popup>
            <div className="mysteryTokensDiv">
                <div className="mysteryCounter">
                    <button className="tokenMysteryMinus" onClick={mysteryDecrement}></button>
                    <button className="tokenMysteryEldritch"></button>
                    <button className="tokenMysteryPlus" onClick={mysteryIncrementFull}></button>
                </div>
                {mysteryCounter!==characters?<button className="tokenMysteryCounter">{`${mysteryCounter}/${characters}`}</button>:null}
                {mysteryCounter===characters
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
export default CthulhuMysteryCard1;