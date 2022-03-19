import React from 'react';
import classes from './MainSection.module.css'

//import image
import phone from '../../image/mainImage/phone.png'
import camera from '../../image/mainImage/camera.png'
import message from '../../image/mainImage/message.png'
import headphones from '../../image/mainImage/headphones.png'
import voice from '../../image/anchors/voice.svg'
import nlp from '../../image/anchors/nlp.svg'
import textToSpeech from '../../image/anchors/text-to-speech.svg'
import faceSwap from '../../image/anchors/face swap.svg'
import lipSync from '../../image/anchors/lipsync.svg'

//import components
import WhiteBlock from "./WhiteBlock/WhiteBlock";

const MainSections = () =>{
    return(
        <div className={classes.container}>
            <div className={classes.imageGroup}>
                <img src={phone} alt="phone"/>
                <img src={camera} alt="camera"/>
                <img src={message} alt="message"/>
                <img src={headphones} alt="headphones"/>
            </div>
            <h2 className={classes.h2}>
                Industry-Leading Tech <br/>to Achieve Results
            </h2>
            <div className={classes.whiteBlocksAnchor}>
                <WhiteBlock image={voice} text={'Voice Conversion'} anchor={'#voiceconversion'} />
                <WhiteBlock image={nlp} text={'Conversational NLP'} anchor={'#nlp'}/>
                <WhiteBlock image={textToSpeech} text={'Text-to-Speech'} anchor={'#texttospeech'}/>
                <WhiteBlock image={faceSwap} text={'Face Swap'} anchor={'#faceswap'}/>
                <WhiteBlock image={lipSync} text={'LipSync'} anchor={'#lipsync'}/>
            </div>
        </div>
    )
}

export default MainSections;
