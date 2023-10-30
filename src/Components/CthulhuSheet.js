import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Components.css'

class CthulhuSheet extends Component {
    constructor({props, flipCardSheet, sheetCardCounterDecrement, sheetCardCounterIncrement}) {
        super(props);
        this.flipCardSheet = flipCardSheet
        this.sheetCardCounterDecrement = sheetCardCounterDecrement
        this.sheetCardCounterIncrement = sheetCardCounterIncrement
    }

    render(){
        return (
            <>
                <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                    {<figure className={this.props.isLoadDone ? 'ancientSheet' : 'ancientSheetStamp'} id={this.props.ancientCardFlipped ? `${this.props.ancient}SheetBack` : `${this.props.ancient}SheetFront`} tabIndex="0">
                        {this.props.ancientCardFlipped?<button className="sheetCardSanityCounter">{this.props.sheetCardCounter}</button>:null}
                    </figure>}modal nested>
                    {<div className='ancientSheetFocus' id={this.props.ancientCardFlipped ? `${this.props.ancient}SheetBack` : `${this.props.ancient}SheetFront`}>
                    {!this.props.ancientCardFlipped?<button className='flipButton' id='flipButtonFrontFocus' onClick={this.flipCardSheet}></button>:null}
                        {this.props.ancientCardFlipped?<button className='flipButton' id='flipButtonBackFocus' onClick={this.flipCardSheet}></button>:null}
                        {this.props.ancientCardFlipped?<div className='sheetCardAddons' id='sheetCardAddonsFocus'>
                            <button className='sheetCardTokenMinus' id='sheetCardTokenMinusFocus' onClick={this.sheetCardCounterDecrement}></button>
                            <button className='sheetCardSanity' id='sheetCardSanityFocus'></button>
                            <button className='sheetCardCounter' id='sheetCardCounterFocus'>{this.props.sheetCardCounter}</button>
                            <button className='sheetCardTokenPlus' id='sheetCardTokenPlusFocus' onClick={this.sheetCardCounterIncrement}></button>
                        </div>:null}
                    </div>}
                </Popup>
            </>
        )
    }
}

export default CthulhuSheet;