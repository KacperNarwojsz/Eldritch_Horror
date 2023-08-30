import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import chooseRandom from './Shuffler';
import './Components.css'


class EncountersCards extends Component {
    constructor(props) {
        super(props); 
        this.shuffleDeckAmerica = [1,2,3,4,5,6,7,8]
        this.discardDeckAmerica = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2]
        this.shuffleDeckEurope = [1,2,3,4,5,6,7,8]
        this.discardDeckEurope = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
        this.shuffleDeckAsiaAustralia = [1,2,3,4,5,6,7,8]
        this.discardDeckAsiaAustralia = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
        this.shuffleDeckGeneral = [1,2,3,4,5,6,7,8,9,10,11,12]
        this.discardDeckGeneral = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
        this.shuffleDeckOtherWorld = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
        this.discardDeckOtherWorld = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
        this.shuffleDeckReverseExpedition = ['Antarctica', 'Antarctica', 'Antarctica', 
                                             'TheAmazon', 'TheAmazon', 'TheAmazon', 
                                             'TheHeartofAfrica', 'TheHeartofAfrica', 'TheHeartofAfrica',
                                             'TheHimalayas', 'TheHimalayas', 'TheHimalayas',
                                             'ThePyramids', 'ThePyramids', 'ThePyramids', 
                                             'Tunguska', 'Tunguska', 'Tunguska']
        this.shuffleDeckExpeditionAntarctica = [1,2,3]
        this.shuffleDeckExpeditionTheAmazon = [1,2,3]
        this.shuffleDeckExpeditionTheHeartofAfrica = [1,2,3]
        this.shuffleDeckExpeditionTheHimalayas = [1,2,3]
        this.shuffleDeckExpeditionThePyramids = [1,2,3]
        this.shuffleDeckExpeditionTunguska = [1,2,3]
        this.shuffleDeckCthulhuResearch = [1,2,3,4,5,6,7,8]
        this.discardDeckCthulhuResearch = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
        this.shuffleDeckCthulhuSpecial = [1,2,3,4,5,6]
        this.discardDeckCthulhuSpecial = [1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6]

        this.state = {
            isLoadDone: false,
            americaShuffle: 0,
            europeShuffle: 0,
            asiaamericaShuffle: 0,
            generalShuffle: 0,
            otherworldShuffle: 0,
            expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition),
            expeditionPreviousReverse: 0,
            expeditionShuffle: 0,
        }
    }

    componentDidMount() {
        this.timer()
    }
    
    timer() {
        setInterval(() => {
          this.setState({isLoadDone: true})
        }, 6000)
    }

    handleAmericaShuffle = () => {
        this.setState({americaShuffle: chooseRandom(this.shuffleDeckAmerica)});
        if (this.shuffleDeckAmerica.length < 1) {
            this.shuffleDeckAmerica = [1,2,3,4,5,6,7,8]
        }
    }

    handleEuropeShuffle = () => {
        this.setState({europeShuffle: chooseRandom(this.shuffleDeckEurope)});
        if (this.shuffleDeckEurope.length < 1) {
            this.shuffleDeckEurope = [1,2,3,4,5,6,7,8]
        }
    }

    handleAsiaAustraliaShuffle = () => {
        this.setState({asiaamericaShuffle: chooseRandom(this.shuffleDeckAsiaAustralia)});
        if (this.shuffleDeckAsiaAustralia.length < 1) {
            this.shuffleDeckAsiaAustralia = [1,2,3,4,5,6,7,8]
        }
    }

    handleGeneralShuffle = () => {
        this.setState({generalShuffle: chooseRandom(this.shuffleDeckGeneral)});
        if (this.shuffleDeckGeneral.length < 1) {
            this.shuffleDeckGeneral = [1,2,3,4,5,6,7,8,9,10,11,12]
        }
    }

    handleOtherWorldShuffle = () => {
        this.setState({otherworldShuffle: chooseRandom(this.shuffleDeckOtherWorld)});
        if (this.shuffleDeckOtherWorld.length < 1) {
            this.shuffleDeckOtherWorld = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
        }
    }

    handleExpeditionShuffle = () => {
        switch (this.state.expeditionReverseShuffle) {
            case 'Antarctica':
                this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionAntarctica)});
                    if (this.shuffleDeckExpeditionAntarctica.length < 1) {
                        this.shuffleDeckExpeditionAntarctica = [1,2,3]
                    }
            break;        
            case 'TheAmazon':
                this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheAmazon)});
                    if (this.shuffleDeckExpeditionTheAmazon.length < 1) {
                        this.shuffleDeckExpeditionTheAmazon = [1,2,3]
                    }
            break;             
            case 'TheHeartofAfrica':
                this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheHeartofAfrica)});
                    if (this.shuffleDeckExpeditionTheHeartofAfrica.length < 1) {
                        this.shuffleDeckExpeditionTheHeartofAfrica = [1,2,3]
                    }
            break;     
            case 'TheHimalayas':
                this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTheHimalayas)});
                    if (this.shuffleDeckExpeditionTheHimalayas.length < 1) {
                        this.shuffleDeckExpeditionTheHimalayas = [1,2,3]
                    }
            break;     
            case 'ThePyramids':
                this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionThePyramids)});
                    if (this.shuffleDeckExpeditionThePyramids.length < 1) {
                        this.shuffleDeckExpeditionThePyramids = [1,2,3]
                    }
            break;          
            default:
                this.setState({expeditionShuffle: chooseRandom(this.shuffleDeckExpeditionTunguska)});
                    if (this.shuffleDeckExpeditionTunguska.length < 1) {
                        this.shuffleDeckExpeditionTunguska = [1,2,3]
                    }
        }
        // this.setState(prevState => ({expeditionPreviousReverse: prevState.expeditionReverseShuffle, 
        //                              expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition)}));
        //     if (this.shuffleDeckReverseExpedition.length < 1) {
        //         this.shuffleDeckReverseExpedition = ['Antarctica', 'Antarctica', 'Antarctica', 
        //                                                 'TheAmazon', 'TheAmazon', 'TheAmazon', 
        //                                                 'TheHeartofAfrica', 'TheHeartofAfrica', 'TheHeartofAfrica',
        //                                                 'TheHimalayas', 'TheHimalayas', 'TheHimalayas',
        //                                                 'ThePyramids', 'ThePyramids', 'ThePyramids', 
        //                                                 'Tunguska', 'Tunguska', 'Tunguska']
        //     } 
        this.setState(prevState => ({expeditionPreviousReverse: prevState.expeditionReverseShuffle})); 
        this.setState({expeditionReverseShuffle: chooseRandom(this.shuffleDeckReverseExpedition)});
            if (this.shuffleDeckReverseExpedition.length < 1) {
                this.shuffleDeckReverseExpedition = ['Antarctica', 'Antarctica', 'Antarctica', 
                                                        'TheAmazon', 'TheAmazon', 'TheAmazon', 
                                                        'TheHeartofAfrica', 'TheHeartofAfrica', 'TheHeartofAfrica',
                                                        'TheHimalayas', 'TheHimalayas', 'TheHimalayas',
                                                        'ThePyramids', 'ThePyramids', 'ThePyramids', 
                                                    'Tunguska', 'Tunguska', 'Tunguska']
            }  
 
    }

    handleCthulhuResearchShuffle = () => {
        this.setState({cthulhuresearchShuffle: chooseRandom(this.shuffleDeckCthulhuResearch)});
        if (this.shuffleDeckCthulhuResearch.length < 1) {
            this.shuffleDeckCthulhuResearch = [1,2,3,4,5,6,7,8]
        }
    }

    handleCthulhuSpecialShuffle = () => {
        this.setState({cthulhuspecialShuffle: chooseRandom(this.shuffleDeckCthulhuSpecial)});
        if (this.shuffleDeckCthulhuSpecial.length < 1) {
            this.shuffleDeckCthulhuSpecial = [1,2,3,4,5,6]
        }
    }

    render(PreviousReverse) {
        return (
        <div className='encounters'>
            {/* <p>{`America no. ${this.state.americaShuffle} array ${this.shuffleDeckAmerica}`}</p>
            <p>{`Europe no. ${this.state.europeShuffle} array ${this.shuffleDeckEurope}`}</p>
            <p>{`AsiaAustralia no. ${this.state.asiaamericaShuffle} array ${this.shuffleDeckAsiaAustralia}`}</p>
            <p>{`General no. ${this.state.generalShuffle} array ${this.shuffleDeckGeneral}`}</p>
            <p>{`OtherWorld no. ${this.state.otherworldShuffle} array ${this.shuffleDeckOtherWorld}`}</p>
            <p>{`Expedition ${this.state.expeditionReverseShuffle}`}</p> 
            <p>{`Previous ${this.state.expeditionPreviousReverse}`}</p>
            <p>{`Expedition array ${this.shuffleDeckReverseExpedition}`}</p>
            <p>{`Antarctica array ${this.shuffleDeckExpeditionAntarctica}`}{` TheAmazon array ${this.shuffleDeckExpeditionTheAmazon}`}{` TheHeartofAfrica array ${this.shuffleDeckExpeditionTheHeartofAfrica}`}</p>
            <p>{`TheHimalayas array ${this.shuffleDeckExpeditionTheHimalayas}`}{` ThePyramids array ${this.shuffleDeckExpeditionThePyramids}`}{ `Tunguska array ${this.shuffleDeckExpeditionTunguska}`}</p>
            <p>{`CthulhuResearch no. ${this.state.cthulhuresearchShuffle} array ${this.shuffleDeckCthulhuResearch}`}</p>
            <p>{`CthulhuSpecial no. ${this.state.cthulhuspecialShuffle} array ${this.shuffleDeckCthulhuSpecial}`}</p> */}
            <div className='encounterDiscardDiv'>
            <Popup onOpen={this.handleAmericaShuffle} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='America'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`AmericaFront${this.state.americaShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                {<button className='discardButton'>ODRZUCONE</button>}modal nested>
                {close => (<div className='outerPopupDiscard'>
                <button className='encounterDiscardCloseButton' onClick={() => close()}>X</button>
                    <div className='discardedRow'>
                        {this.discardDeckAmerica.length>=1?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[0]:this.discardDeckAmerica[this.discardDeckAmerica.length-16]}`}></div>:null}
                        {this.discardDeckAmerica.length>=2?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[1]:this.discardDeckAmerica[this.discardDeckAmerica.length-15]}`}></div>:null}
                        {this.discardDeckAmerica.length>=3?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[2]:this.discardDeckAmerica[this.discardDeckAmerica.length-14]}`}></div>:null}
                        {this.discardDeckAmerica.length>=4?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[3]:this.discardDeckAmerica[this.discardDeckAmerica.length-13]}`}></div>:null}
                        {this.discardDeckAmerica.length>=5?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[4]:this.discardDeckAmerica[this.discardDeckAmerica.length-12]}`}></div>:null}
                        {this.discardDeckAmerica.length>=6?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[5]:this.discardDeckAmerica[this.discardDeckAmerica.length-11]}`}></div>:null}
                        {this.discardDeckAmerica.length>=7?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[6]:this.discardDeckAmerica[this.discardDeckAmerica.length-10]}`}></div>:null}
                        {this.discardDeckAmerica.length>=8?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[7]:this.discardDeckAmerica[this.discardDeckAmerica.length-9 ]}`}></div>:null}  
                    </div>
                    <div className='discardedRow'>
                        {this.discardDeckAmerica.length>=9 ?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[8] :this.discardDeckAmerica[this.discardDeckAmerica.length-8]}`}></div>:null}
                        {this.discardDeckAmerica.length>=10?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[9] :this.discardDeckAmerica[this.discardDeckAmerica.length-7]}`}></div>:null}
                        {this.discardDeckAmerica.length>=11?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[10]:this.discardDeckAmerica[this.discardDeckAmerica.length-6]}`}></div>:null}
                        {this.discardDeckAmerica.length>=12?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[11]:this.discardDeckAmerica[this.discardDeckAmerica.length-5]}`}></div>:null}
                        {this.discardDeckAmerica.length>=13?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[12]:this.discardDeckAmerica[this.discardDeckAmerica.length-4]}`}></div>:null}
                        {this.discardDeckAmerica.length>=14?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[13]:this.discardDeckAmerica[this.discardDeckAmerica.length-3]}`}></div>:null}
                        {this.discardDeckAmerica.length>=15?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[14]:this.discardDeckAmerica[this.discardDeckAmerica.length-2]}`}></div>:null}
                        {this.discardDeckAmerica.length>=16?<div className='encounterCardDiscard' id={`AmericaFront${this.discardDeckAmerica.length<16?this.discardDeckAmerica[15]:this.discardDeckAmerica[this.discardDeckAmerica.length-1]}`}></div>:null}
                    </div>
                </div>)}
            </Popup>
            </div>
            <div className='encounterDiscardDiv'>
            <Popup onOpen={this.handleEuropeShuffle} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='Europe'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`EuropeFront${this.state.europeShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                {<button className='discardButton'>ODRZUCONE</button>}modal nested>
                {close => (<div className='outerPopupDiscard'>
                <button className='encounterDiscardCloseButton' onClick={() => close()}>X</button>
                    <div className='discardedRow'>
                        {this.discardDeckEurope.length>=1?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[0]:this.discardDeckEurope[this.discardDeckEurope.length-16]}`}></div>:null}
                        {this.discardDeckEurope.length>=2?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[1]:this.discardDeckEurope[this.discardDeckEurope.length-15]}`}></div>:null}
                        {this.discardDeckEurope.length>=3?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[2]:this.discardDeckEurope[this.discardDeckEurope.length-14]}`}></div>:null}
                        {this.discardDeckEurope.length>=4?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[3]:this.discardDeckEurope[this.discardDeckEurope.length-13]}`}></div>:null}
                        {this.discardDeckEurope.length>=5?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[4]:this.discardDeckEurope[this.discardDeckEurope.length-12]}`}></div>:null}
                        {this.discardDeckEurope.length>=6?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[5]:this.discardDeckEurope[this.discardDeckEurope.length-11]}`}></div>:null}
                        {this.discardDeckEurope.length>=7?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[6]:this.discardDeckEurope[this.discardDeckEurope.length-10]}`}></div>:null}
                        {this.discardDeckEurope.length>=8?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[7]:this.discardDeckEurope[this.discardDeckEurope.length-9 ]}`}></div>:null}  
                    </div>
                    <div className='discardedRow'>
                        {this.discardDeckEurope.length>=9 ?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[8] :this.discardDeckEurope[this.discardDeckEurope.length-8]}`}></div>:null}
                        {this.discardDeckEurope.length>=10?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[9] :this.discardDeckEurope[this.discardDeckEurope.length-7]}`}></div>:null}
                        {this.discardDeckEurope.length>=11?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[10]:this.discardDeckEurope[this.discardDeckEurope.length-6]}`}></div>:null}
                        {this.discardDeckEurope.length>=12?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[11]:this.discardDeckEurope[this.discardDeckEurope.length-5]}`}></div>:null}
                        {this.discardDeckEurope.length>=13?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[12]:this.discardDeckEurope[this.discardDeckEurope.length-4]}`}></div>:null}
                        {this.discardDeckEurope.length>=14?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[13]:this.discardDeckEurope[this.discardDeckEurope.length-3]}`}></div>:null}
                        {this.discardDeckEurope.length>=15?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[14]:this.discardDeckEurope[this.discardDeckEurope.length-2]}`}></div>:null}
                        {this.discardDeckEurope.length>=16?<div className='encounterCardDiscard' id={`EuropeFront${this.discardDeckEurope.length<16?this.discardDeckEurope[15]:this.discardDeckEurope[this.discardDeckEurope.length-1]}`}></div>:null}
                    </div>
                </div>)}
            </Popup>
            </div>
            <div className='encounterDiscardDiv'>
            <Popup onOpen={this.handleAsiaAustraliaShuffle} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='AsiaAustralia'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`AsiaAustraliaFront${this.state.asiaamericaShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                {<button className='discardButton'>ODRZUCONE</button>}modal nested>
                {close => (<div className='outerPopupDiscard'>
                <button className='encounterDiscardCloseButton' onClick={() => close()}>X</button>
                    <div className='discardedRow'>
                        {this.discardDeckAsiaAustralia.length>=1?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[0]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-16]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=2?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[1]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-15]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=3?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[2]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-14]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=4?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[3]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-13]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=5?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[4]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-12]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=6?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[5]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-11]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=7?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[6]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-10]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=8?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[7]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-9 ]}`}></div>:null}  
                    </div>
                    <div className='discardedRow'>
                        {this.discardDeckAsiaAustralia.length>=9 ?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[8] :this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-8]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=10?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[9] :this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-7]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=11?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[10]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-6]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=12?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[11]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-5]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=13?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[12]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-4]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=14?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[13]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-3]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=15?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[14]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-2]}`}></div>:null}
                        {this.discardDeckAsiaAustralia.length>=16?<div className='encounterCardDiscard' id={`AsiaAustraliaFront${this.discardDeckAsiaAustralia.length<16?this.discardDeckAsiaAustralia[15]:this.discardDeckAsiaAustralia[this.discardDeckAsiaAustralia.length-1]}`}></div>:null}
                    </div>
                </div>)}
            </Popup>
            </div>
            <div className='encounterDiscardDiv'>
            <Popup onOpen={this.handleGeneralShuffle} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='General'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`GeneralFront${this.state.generalShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                {<button className='discardButton'>ODRZUCONE</button>}modal nested>
                {close => (<div className='outerPopupDiscard'>
                <button className='encounterDiscardCloseButton' onClick={() => close()}>X</button>
                    <div className='discardedRow'>
                        {this.discardDeckGeneral.length>=1?<button className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[0]:this.discardDeckGeneral[this.discardDeckGeneral.length-16]}`}></button>:null}
                        {this.discardDeckGeneral.length>=2?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[1]:this.discardDeckGeneral[this.discardDeckGeneral.length-15]}`}></div>:null}
                        {this.discardDeckGeneral.length>=3?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[2]:this.discardDeckGeneral[this.discardDeckGeneral.length-14]}`}></div>:null}
                        {this.discardDeckGeneral.length>=4?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[3]:this.discardDeckGeneral[this.discardDeckGeneral.length-13]}`}></div>:null}
                        {this.discardDeckGeneral.length>=5?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[4]:this.discardDeckGeneral[this.discardDeckGeneral.length-12]}`}></div>:null}
                        {this.discardDeckGeneral.length>=6?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[5]:this.discardDeckGeneral[this.discardDeckGeneral.length-11]}`}></div>:null}
                        {this.discardDeckGeneral.length>=7?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[6]:this.discardDeckGeneral[this.discardDeckGeneral.length-10]}`}></div>:null}
                        {this.discardDeckGeneral.length>=8?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[7]:this.discardDeckGeneral[this.discardDeckGeneral.length-9 ]}`}></div>:null}  
                    </div>
                    <div className='discardedRow'>
                        {this.discardDeckGeneral.length>=9 ?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[8] :this.discardDeckGeneral[this.discardDeckGeneral.length-8]}`}></div>:null}
                        {this.discardDeckGeneral.length>=10?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[9] :this.discardDeckGeneral[this.discardDeckGeneral.length-7]}`}></div>:null}
                        {this.discardDeckGeneral.length>=11?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[10]:this.discardDeckGeneral[this.discardDeckGeneral.length-6]}`}></div>:null}
                        {this.discardDeckGeneral.length>=12?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[11]:this.discardDeckGeneral[this.discardDeckGeneral.length-5]}`}></div>:null}
                        {this.discardDeckGeneral.length>=13?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[12]:this.discardDeckGeneral[this.discardDeckGeneral.length-4]}`}></div>:null}
                        {this.discardDeckGeneral.length>=14?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[13]:this.discardDeckGeneral[this.discardDeckGeneral.length-3]}`}></div>:null}
                        {this.discardDeckGeneral.length>=15?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[14]:this.discardDeckGeneral[this.discardDeckGeneral.length-2]}`}></div>:null}
                        {this.discardDeckGeneral.length>=16?<div className='encounterCardDiscard' id={`GeneralFront${this.discardDeckGeneral.length<16?this.discardDeckGeneral[15]:this.discardDeckGeneral[this.discardDeckGeneral.length-1]}`}></div>:null}
                    </div>
                </div>)}
            </Popup>
            </div>

            <Popup onOpen={this.handleOtherWorldShuffle} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='OtherWorld'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`OtherWorldFront${this.state.otherworldShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup onOpen={this.handleExpeditionShuffle} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id={`Expedition${this.state.expeditionReverseShuffle}`}></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`Expedition${this.state.expeditionPreviousReverse}Front${this.state.expeditionShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup onOpen={this.handleCthulhuResearchShuffle} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='CthulhuResearch'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`CthulhuResearchFront${this.state.cthulhuresearchShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup onOpen={this.handleCthulhuSpecialShuffle} contentStyle={{background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='CthulhuSpecial'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`CthulhuSpecialFront${this.state.cthulhuspecialShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>            
        </div>
        )
    }
}

export default EncountersCards;