import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Components.css'

class YogSothothSheet extends Component {
    constructor({props, characters, flipCardSheet, sheetCardYogSothothGateCounterDecrement, sheetCardYogSothothGateCounterIncrement, sheetCardYogSothothEldritchCounterDecrement, sheetCardYogSothothEldritchCounterIncrement}) {
        super(props);
        this.characters = characters
        this.flipCardSheet = flipCardSheet
        this.sheetCardYogSothothGateCounterDecrement = sheetCardYogSothothGateCounterDecrement
        this.sheetCardYogSothothGateCounterIncrement = sheetCardYogSothothGateCounterIncrement
        this.sheetCardYogSothothEldritchCounterDecrement = sheetCardYogSothothEldritchCounterDecrement
        this.sheetCardYogSothothEldritchCounterIncrement = sheetCardYogSothothEldritchCounterIncrement
    }

    render(){
        return (
            <>
                <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                    {<figure className={this.props.isLoadDone ? 'ancientSheet' : 'ancientSheetStamp'} id={this.props.ancientCardFlipped ? `${this.props.ancient}SheetBack` : `${this.props.ancient}SheetFront`} tabIndex="0">
                        {this.props.ancientCardFlipped?
                            <div className='sheetCardCounterDiv'>
                                <button className="sheetCardEldritchCounter">{this.props.sheetCardYogSothothEldritchCounter}</button>
                                <button className="sheetCardGateCounter">{this.props.sheetCardYogSothothGateCounter}</button>
                            </div>:null}
                    </figure>}modal nested>
                    {<div className='ancientSheetFocus' id={this.props.ancientCardFlipped ? `${this.props.ancient}SheetBack` : `${this.props.ancient}SheetFront`}>
                    {!this.props.ancientCardFlipped?<button className='flipButton' id='flipButtonFrontFocus' onClick={this.flipCardSheet}></button>:null}
                        {this.props.ancientCardFlipped?<button className='flipButton' id='flipButtonBackFocus' onClick={this.flipCardSheet}></button>:null}
                        {this.props.ancientCardFlipped?<div className='sheetCardAddons' id='sheetCardYogSothothAddonsFocus'>
                            <button className='sheetCardTokenMinus' id='sheetCardTokenMinusFocus' onClick={this.sheetCardYogSothothEldritchCounterDecrement}></button>
                            <button className='sheetCardEldritch' id='sheetCardEldritchFocus'></button>
                            <button className='sheetCardCounter' id='sheetCardYogSothothCounterFocus'>{this.props.sheetCardYogSothothEldritchCounter}/{Math.ceil(this.characters/2)}</button>
                            <button className='sheetCardTokenPlus' id='sheetCardYogSothothTokenPlusFocus' onClick={this.sheetCardYogSothothEldritchCounterIncrement}></button>
                        </div>:null}
                        {this.props.ancientCardFlipped?<div className='sheetCardAddons' id='sheetCardYogSothothAddonsFocus'>
                            <button className='sheetCardTokenMinus' id='sheetCardTokenMinusFocus' onClick={this.sheetCardYogSothothGateCounterDecrement}></button>
                            <button className='sheetCardGate' id='sheetCardGateFocus'></button>
                            <button className='sheetCardCounter' id='sheetCardYogSothothCounterFocus'>{this.props.sheetCardYogSothothGateCounter}/3</button>
                            <button className='sheetCardTokenPlus' id='sheetCardYogSothothTokenPlusFocus' onClick={this.sheetCardYogSothothGateCounterIncrement}></button>
                        </div>:null}
                        {this.props.ancientCardFlipped && this.props.sheetCardYogSothothEldritchCounter === Math.ceil(this.characters/2)?<button className='sheetCardDefeatButton' id='sheetCardYogSothothButton' onClick={this.props.victory}>WYGRANA</button>:null}
                        {(this.props.ancientCardFlipped && this.props.sheetCardYogSothothGateCounter >= 3)?<button className='sheetCardDefeatButton' id='sheetCardYogSothothButton' onClick={this.props.defeat}>PRZEGRANA</button>:null}
                    </div>}
                </Popup>
            </>
        )
    }
}

export default YogSothothSheet;