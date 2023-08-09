import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './Components.css'
import chooseRandom from './Shuffler';

class EncountersCards extends Component {
    constructor(props) {
        super(props); 
        this.shuffleDeckAmerica = [1,2,3,4,5,6,7,8]
        this.shuffleDeckEurope = [1,2,3,4,5,6,7,8]
        this.shuffleDeckAsiaAustralia = [1,2,3,4,5,6,7,8]
        this.shuffleDeckGeneral = [1,2,3,4,5,6,7,8,9,10,11,12]
        this.shuffleDeckOtherWorld = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
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
        this.shuffleDeckCthulhuSpecial = [1,2,3,4,5,6]

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

            <Popup onOpen={this.handleAmericaShuffle} contentStyle={{width: "15.9vw", height: "25vw", background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='America'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`AmericaFront${this.state.americaShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup onOpen={this.handleEuropeShuffle} contentStyle={{width: "15.9vw", height: "25vw", background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='Europe'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`EuropeFront${this.state.europeShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup onOpen={this.handleAsiaAustraliaShuffle} contentStyle={{width: "15.9vw", height: "25vw", background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='AsiaAustralia'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`AsiaAustraliaFront${this.state.asiaamericaShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup onOpen={this.handleGeneralShuffle} contentStyle={{width: "15.9vw", height: "25vw", background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='General'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`GeneralFront${this.state.generalShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup onOpen={this.handleOtherWorldShuffle} contentStyle={{width: "15.9vw", height: "25vw", background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='OtherWorld'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`OtherWorldFront${this.state.otherworldShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup onOpen={this.handleExpeditionShuffle} contentStyle={{width: "15.9vw", height: "25vw", background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id={`Expedition${this.state.expeditionReverseShuffle}`}></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`Expedition${this.state.expeditionPreviousReverse}Front${this.state.expeditionShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup onOpen={this.handleCthulhuResearchShuffle} contentStyle={{width: "15.9vw", height: "25vw", background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='CthulhuResearch'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`CthulhuResearchFront${this.state.cthulhuresearchShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>
            <Popup onOpen={this.handleCthulhuSpecialShuffle} contentStyle={{width: "15.9vw", height: "25vw", background:'transparent', border: 'transparent'}} trigger=
                {<button className={this.state.isLoadDone ? 'encounterCard' : 'encounterCardStamp'} id='CthulhuSpecial'></button>}modal nested>
                {close => (<div className='outerPopup'><div className='encounterCardFront' id={`CthulhuSpecialFront${this.state.cthulhuspecialShuffle}`}><button className='encounterCloseButton' onClick={() => close()}>X</button></div></div>)}
            </Popup>            
        </div>
        )
    }
}

export default EncountersCards;