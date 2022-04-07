import React from 'react';
import classes from './MainSection.module.css'

//import assets
import voice from '../../image/anchors/voice.svg'
import nlp from '../../image/anchors/nlp.svg'
import textToSpeech from '../../image/anchors/text-to-speech.svg'
import faceSwap from '../../image/anchors/face swap.svg'
import lipSync from '../../image/anchors/lipsync.svg'
import hero_header_icons4xWebp from '../../image/mainImage/hero_header_icons@4x.webp'
import hero_header_icons2xWebp from '../../image/mainImage/hero_header_icons@2x.webp'
import hero_header_iconsWebp from '../../image/mainImage/hero_header_icons.webp'
import hero_header_icons4xPng from '../../image/mainImage/hero_header_icons@4x.png'
import hero_header_icons2xPng from '../../image/mainImage/hero_header_icons@2x.png'
import hero_header_iconsPng from '../../image/mainImage/hero_header_icons.webp'

//import components
import WhiteBlock from "./WhiteBlock/WhiteBlock";

const MainSections = () =>{
    return(
        <div className={classes.container} id={'main'}>
            <div className={classes.imageGroup}>
                <picture>
                    <source type="image/webp" media="(min-width: 1919px)" srcSet={hero_header_icons4xWebp}/>
                    <source type="image/png" media="(min-width: 1919px)" srcSet={hero_header_icons4xPng}/>

                    <source type="image/webp" media="(max-width: 1280px)" srcSet={hero_header_icons2xWebp}/>
                    <source type="image/png" media="(max-width: 1280px)" srcSet={hero_header_icons2xPng}/>

                    <source type="image/webp" media="(max-width: 768px)" srcSet={hero_header_iconsWebp}/>
                    <source type="image/png" media="(max-width: 768px)" srcSet={hero_header_iconsPng}/>

                    <img src={hero_header_icons4xPng} alt="heroHeader"/>
                </picture>

            </div>
            <h2 className={classes.h2}>
                Industry-Leading Tech to Achieve Results
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
