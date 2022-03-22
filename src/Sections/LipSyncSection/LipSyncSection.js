import React, {useState} from 'react';
import classes from './LipSyncSection.module.css'

//import assets
import star from "../../image/VoiceConversion/star.svg";
import muskOriginal from '../../video/muskOriganal.mp4'
import muskGenerated1 from '../../video/muskGenerated.mp4'
import muskGenerated2 from '../../video/musk_celebration_noeffect.mp4'
import arrow from '../../image/arrow.svg'
import play from '../../image/playIcons/play.svg'
import pause from '../../image/playIcons/pause.svg'

const LipSyncSection = ({matches}) =>{
    const [choiceVideo, setChoiceVideo] = useState(muskGenerated1)

    const choiceVideoRender = () =>{
        return(
            <div className={classes.choiceVideo}>
                <span className={classes.typeVideo} style={{textAlign: 'center', marginBottom: 30}}>Input Audio</span>
                <button className={choiceVideo === muskGenerated1 && classes.activeButton} onClick={()=>{
                    setChoiceVideo(muskGenerated1)
                }}>
                    <img src={play}/>
                    Barack Obama
                </button>
                <button className={choiceVideo === muskGenerated2 && classes.activeButton} onClick={()=>{
                    setChoiceVideo(muskGenerated2)
                }}>
                    <img src={play}/>
                    Donald Trump
                </button>
                <button onClick={()=>{

                }}>
                    <img src={play}/>
                    Billie Eilish
                </button>
            </div>
        )
    }

    return(
        <div className={classes.container} id={'lipsync'}>
            <h2 className={classes.h2}>
                LipSync
            </h2>
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
            {matches && choiceVideoRender()}
            <div className={classes.videos}>
                <div className={classes.videoContainer}>
                    <span className={classes.typeVideo}>Original Video</span>
                    <div className={classes.borderVideo}>
                        <video className={classes.video} width={matches ? "204" : "316"} height={matches ? "275": "423"} controls >
                            <source src={muskOriginal} type="video/mp4"/>
                        </video>
                    </div>
                </div>

                {!matches &&
                <>
                    <img className={classes.arrow} src={arrow} alt=""/>
                    {choiceVideoRender()}
                    <img className={classes.arrow} src={arrow} alt=""/>
                </>
                }

                <div className={classes.videoContainer}>
                    <span className={classes.typeVideo}>Generated Video</span>
                    <div className={classes.borderVideo} key={choiceVideo + '1'}>
                        <video className={classes.video} width={matches ? "204" : "316"} height={matches ? "275": "423"} controls >
                            <source src={choiceVideo} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LipSyncSection;
