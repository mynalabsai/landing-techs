import React, {useEffect, useState} from 'react';
import classes from './VoiceConversionSection.module.css'

//import assets
import star from '../../image/VoiceConversion/star.svg'
import test1 from '../../audio/test.mp3'
import test2 from '../../audio/test.mp3'
import test3 from '../../audio/test.mp3'
import biden from '../../image/people/img_biden.png'
import eilish from '../../image/people/img_eilish.png'

//import components
import VoicePeople from "../../components/VoicePeople/VoicePeople";

const VoiceConversionSection = (props) =>{
    const [audios1, setAudios1] = useState(
        [
            {audio : new Audio(test1), paused: true, label: 'Replicated Voice', name: 'Joe Biden', type: 'first', image: biden},
            {audio : new Audio(test2), paused: true, label: 'Input Voice', name: 'Male', type: 'withoutImage', image: biden},
            {audio : new Audio(test3), paused: true, label: 'Replaced Voice', name: 'to Joe Biden', type: '', image: biden},

        ]
    )

    const [audios2, setAudios2] = useState(
        [
            {audio : new Audio(test1), paused: true, label: 'Replicated Voice', name: 'Billie Eilish', type: 'first', image: eilish},
            {audio : new Audio(test1), paused: true, label: 'Input Voice', name: 'Female', type: 'withoutImage', image: biden},
            {audio : new Audio(test1), paused: true, label: 'Replaced Voice', name: 'to Billie Eilish', type: '', image: eilish},

        ]
    )



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
                    {audios1.map((audio,index)=>{
                        return(
                            <VoicePeople matches={props.matches} index={index} audios={audios1} setAudios={setAudios1} audiosOther={audios2} setAudiosOther={setAudios2}/>
                        )
                    })}
                </div>
                <div className={classes.secondVoices}>
                    {audios2.map((audio,index)=>{
                        return(
                            <VoicePeople matches={props.matches} index={index}  audios={audios2} setAudios={setAudios2} audiosOther={audios1} setAudiosOther={setAudios1}/>
                        )
                    })}
                </div>
           </div>
        </div>
    )
}

export default VoiceConversionSection;
