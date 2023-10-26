import React from 'react';
import Popup from 'reactjs-popup';
import "./InteractiveCards.css"

const ShubNiggurathMysteryCard4 = ({ characters, mysteryDecrementMonster, mysteryCounter, mysteryIncrementMonster, monsterSlayed, mysteryDone, }) => {

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
                        {mysteryCounter===characters+2?<button className="tokenMysteryMonsterDone" onClick={mysteryDone}></button>:null}
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
