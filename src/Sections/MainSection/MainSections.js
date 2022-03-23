import React from 'react';
import classes from './MainSection.module.css'

//import assets
import voice from '../../image/anchors/voice.svg'
import nlp from '../../image/anchors/nlp.svg'
import textToSpeech from '../../image/anchors/text-to-speech.svg'
import faceSwap from '../../image/anchors/face swap.svg'
import lipSync from '../../image/anchors/lipsync.svg'
import imageMain from '../../image/mainImage/imageMain.png'

//import components
import WhiteBlock from "./WhiteBlock/WhiteBlock";

const MainSections = () =>{
    return(
        <div className={classes.container} id={'main'}>
            <div className={classes.imageGroup}>
                <img src={imageMain} alt=""/>

            </div>
            <h2 className={classes.h2}>
                Industry-Leading Tech <br/>to Achieve Results
            </h2>
            <div className={classes.whiteBlocksAnchor}>
                <WhiteBlock image={voice} text={'Voice Conversion'} anchor={'#voiceconversion'} />
                <WhiteBlock image={textToSpeech} text={'Text-to-Speech'} anchor={'#texttospeech'}/>
                <WhiteBlock image={lipSync} text={'LipSync'} anchor={'#lipsync'}/>
                <WhiteBlock image={faceSwap} text={'Face Swap'} anchor={'#faceswap'}/>
                <WhiteBlock image={nlp} text={'Conversational NLP'} anchor={'#nlp'}/>
            </div>
        </div>
    )
}

export default MainSections;
