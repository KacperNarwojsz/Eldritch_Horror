import React from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

const ShubNiggurathMysteryCard4 = ({ characters, mysteryDecrementMonster, mysteryCounter, mysteryIncrementMonster, monsterSlayed, mysteryDeck, victory, ancientCardFlipped, mysteryDone, }) => {

    return (
        <div className="ancientMysteryFrontDiv">
            <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                {<figure className="ancientMysteryFront" id="ShubNiggurathMysteryFront4"></figure>}modal nested>
                {<div className="ancientMysteryFrontFocus" id="ShubNiggurathMysteryFront4"></div>}
            </Popup>
            <div>
                <div className="mysteryTokensMonsterDiv">
                    <button className="mysteryMonster" id={monsterSlayed?"TokenNugSlayed":"TokenNug"}></button>
                    <div className="mysteryTokensMonster">
                        {mysteryCounter===characters+2?null:<button className="tokenMysteryKilling"></button>}
                        {mysteryCounter===characters+2
                        ?mysteryDeck.length === 0 && !ancientCardFlipped
                        ?<Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                            {<button className="tokenMysteryDone"></button>}modal nested>
                            {close => (<div className='defeatPopup'><h1 className="winningPopupText">Czy została zakończona Faza Mitów ?</h1><div className="defeatChoiceButtons"><button className="defeatChoiceButton" onClick={victory}>TAK</button><button className="defeatChoiceButton" onClick={() => close()}>NIE</button></div></div>)}
                        </Popup>
                        :<button className="tokenMysteryMonsterDone" onClick={mysteryDone}></button>
                        :null}
                    </div>
                </div>
                <div className='mysteryMonsterAddons'>
                <button className='mysteryMonsterTokenMinus' onClick={mysteryDecrementMonster}></button>
                <button className='mysteryMonsterTokenHealth'></button>
                <button className='mysteryMonsterCounter'>{`${mysteryCounter}/${characters+2}`}</button>
                <button className='mysteryMonsterTokenPlus' onClick={mysteryIncrementMonster}></button>
                </div>
            </div>
        </div>
    )
}
export default ShubNiggurathMysteryCard4;
