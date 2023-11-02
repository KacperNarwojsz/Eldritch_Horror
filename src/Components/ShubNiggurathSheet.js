import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Components.css'

class ShubNiggurathSheet extends Component {
    constructor({props, flipCardSheet, sheetCardCounterDecrement, sheetCardCounterIncrement, shubNiggurathAwakening}) {
        super(props);
        this.flipCardSheet = flipCardSheet
        this.sheetCardCounterDecrement = sheetCardCounterDecrement
        this.sheetCardCounterIncrement = sheetCardCounterIncrement
        this.shubNiggurathAwakening = shubNiggurathAwakening
    }

    render(){
        return (
            <>
                <Popup contentStyle={{background:'none', border: 'none'}} trigger=
                    {<figure className={this.props.isLoadDone ? 'ancientSheet' : 'ancientSheetStamp'} id={this.props.ancientCardFlipped ? `${this.props.ancient}SheetBack` : `${this.props.ancient}SheetFront`} tabIndex="0"></figure>}modal nested>
                    {<div className='ancientSheetFocus' id={this.props.ancientCardFlipped ? `${this.props.ancient}SheetBack` : `${this.props.ancient}SheetFront`}>
                    <button className='flipButton' id='flipButtonFrontFocus' onClick={this.flipCardSheet}></button>
                        {this.props.ancientCardFlipped?<button className='sheetCardAwakeningButton' onClick={this.shubNiggurathAwakening}>PRZEBUDZENIE</button>:null}
                    </div>}
                </Popup>
            </>
        )
    }
}

export default ShubNiggurathSheet;