import React, {useEffect, useState} from 'react';
import classes from './VoiceConversionSection.module.css'

//import assets
import star from '../../image/VoiceConversion/star.svg'
import test from '../../audio/test.mp3'
import biden from '../../image/people/img_biden.png'
import eilish from '../../image/people/img_eilish.png'

//import components
import VoicePeople from "../../components/VoicePeople/VoicePeople";

const VoiceConversionSection = (props) =>{
    const [audio, setAudio] = useState( new Audio(test))



    return(
        <div className={classes.container}>
            <h2 className={classes.h2}>Voice Conversion</h2>
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
           <div className={classes.voices}>
                <div className={classes.firstVoices} >
                    <VoicePeople matches={props.matches} type={'first'} image={biden} audio={audio} label={'Replicated Voice'} name={'Joe Biden'}/>
                    <VoicePeople matches={props.matches} type={'withoutImage'} image={biden} audio={audio} label={'Replicated Voice'} name={'Joe Biden'}/>
                    <VoicePeople matches={props.matches} image={eilish} audio={audio} label={'Replicated Voice'} name={'Joe Biden'}/>
                </div>
                <div className={classes.secondVoices}>
                    <VoicePeople matches={props.matches} type={'first'} image={eilish} audio={audio} label={'Replicated Voice'} name={'Billie Eilish'}/>
                    <VoicePeople matches={props.matches} type={'withoutImage'} image={biden} audio={audio} label={'Replicated Voice'} name={'Joe Biden'}/>
                    <VoicePeople matches={props.matches} image={biden} audio={audio} label={'Replicated Voice'} name={'Joe Biden'}/>
                </div>
           </div>
        </div>
    )
}

export default VoiceConversionSection;
