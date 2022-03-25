import React, {useEffect, useState} from 'react';
import classes from './TextToSpeechSection.module.css'

//import assets
import star from "../../image/VoiceConversion/star.svg";
import Aa from '../../image/TextToSpeech/Aa.svg'
import obama from '../../image/people/img_obama.png'
import test from '../../audio/test.mp3'

//import components
import VoicePeople from "../../components/VoicePeople/VoicePeople";
import test1 from "../../audio/test.mp3";
import biden from "../../image/people/img_biden.png";

const TextToSpeechSection = (props) => {
    const [audio, setAudio] = useState( [{audio : new Audio(test1), paused: true, label: 'Generated Voice', name: 'Barack Obama', type: 'texttospeech', image: obama}])
    return(
      <div className={classes.container} >
        <h2 className={classes.h2}>Text-to-Speech</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
        <span className={classes.useCasesTitle}><img src={star} alt="star" width={19}/>USE CASES</span>
        <div className={classes.useCases}>
            <span>— Dubbing</span>
            <span>— Localization</span>
            <span>— Replication</span>
            <span>— Accent Removal</span>
            <span>— Anonymization</span>
        </div>
        <div className={classes.functional}>
            <div className={classes.inputText}>
                <img src={Aa}/>
                <div className={classes.textContainer}>
                    <span>The birch canoe slid on the smooth planks</span>
                    <span>Input Text</span>
                </div>
            </div>
            <div className={classes.outputVoice}>
                <VoicePeople matches={props.matches} index={0} audios={audio} setAudios={setAudio}/>
            </div>
        </div>
      </div>
    )
}

export default TextToSpeechSection
