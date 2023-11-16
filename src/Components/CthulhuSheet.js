import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Components.css'

class CthulhuSheet extends Component {
    constructor({props, flipCardSheet, sheetCardCthulhuCounterDecrement, sheetCardCthulhuCounterIncrement}) {
        super(props);
        this.flipCardSheet = flipCardSheet
        this.sheetCardCthulhuCounterDecrement = sheetCardCthulhuCounterDecrement
        this.sheetCardCthulhuCounterIncrement = sheetCardCthulhuCounterIncrement
    }

    render(){
        return (
            <>
                <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                    {<figure className={this.props.isLoadDone ? 'ancientSheet' : 'ancientSheetStamp'} id={this.props.ancientCardFlipped ? `${this.props.ancient}SheetBack` : `${this.props.ancient}SheetFront`} tabIndex="0">
                        {this.props.ancientCardFlipped?<button className="sheetCardSanityCounter">{this.props.sheetCardCthulhuCounter}</button>:null}
                    </figure>}modal nested>
                    {<div className='ancientSheetFocus' id={this.props.ancientCardFlipped ? `${this.props.ancient}SheetBack` : `${this.props.ancient}SheetFront`}>
                    {!this.props.ancientCardFlipped?<button className='flipButton' id='flipButtonFrontFocus' onClick={this.flipCardSheet}></button>:null}
                        {this.props.ancientCardFlipped?<button className='flipButton' id='flipButtonBackFocus' onClick={this.flipCardSheet}></button>:null}
                        {this.props.ancientCardFlipped?<div className='sheetCardAddons' id='sheetCardCthulhuAddonsFocus'>
                            <button className='sheetCardTokenMinus' id='sheetCardTokenMinusFocus' onClick={this.sheetCardCthulhuCounterDecrement}></button>
                            <button className='sheetCardSanity' id='sheetCardSanityFocus'></button>
                            <button className='sheetCardCounter' id='sheetCardCthulhuCounterFocus'>{this.props.sheetCardCthulhuCounter}</button>
                            <button className='sheetCardTokenPlus' id='sheetCardTokenPlusFocus' onClick={this.sheetCardCthulhuCounterIncrement}></button>
                        </div>:null}
                    </div>}
                </Popup>
            </>
        )
    }
}

export default CthulhuSheet;