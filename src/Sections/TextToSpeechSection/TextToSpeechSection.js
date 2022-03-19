import React, {useEffect, useState} from 'react';
import classes from './TextToSpeechSection.module.css'
import star from "../../image/VoiceConversion/star.svg";
import Aa from '../../image/TextToSpeech/Aa.svg'
import VoicePeople from "../../components/VoicePeople/VoicePeople";
import obama from '../../image/people/img_obama.png'
import test from '../../audio/test.mp3'

const TextToSpeechSection = () => {
    const [audio, setAudio] = useState( new Audio(test))
      return(
          <div className={classes.container} id={'texttospeech'}>
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
                   <VoicePeople image={obama} audio={audio} label={'Generated Voice'} name={'Barack Obama'}/>
                </div>
            </div>
          </div>
      )
}

export default TextToSpeechSection
