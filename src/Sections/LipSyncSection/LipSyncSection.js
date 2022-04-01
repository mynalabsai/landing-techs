import React, {useState} from 'react';
import classes from './LipSyncSection.module.css'

//import assets
import star from "../../image/VoiceConversion/star.svg";
import muskOriginal from '../../video/muskOriganal.mp4'
import muskGenerated1 from '../../video/muskGenerated.mp4'
import muskGenerated2 from '../../video/musk_celebration_noeffect.mp4'
import muskGenerated3 from '../../video/Trump_Talk_41.mp4'
import arrow from '../../image/arrow.svg'
import play from '../../image/playIcons/play.svg'
import playWhite from '../../image/playIcons/playWhite.svg'
import pause from '../../image/playIcons/pause.svg'
import poster from '../../image/poster.png'

const LipSyncSection = ({matches}) =>{
    const [choiceVideo, setChoiceVideo] = useState(muskGenerated1)

    const choiceVideoRender = () =>{
        return(
            <div className={classes.choiceVideo}>
                <span className={classes.typeVideo} style={{textAlign: 'center', marginBottom: 22, width: '100%'}}>Input Audio</span>
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
                <button className={choiceVideo === muskGenerated3 && classes.activeButton} onClick={()=>{
                    setChoiceVideo(muskGenerated3)
                }}>
                    <img src={play}/>
                    Billie Eilish
                </button>
            </div>
        )
    }

    return(
        <div className={classes.container} >
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
                        <video muted playsinline preload={'auto'} poster={poster} className={classes.video}  controls={true} id={muskOriginal} >
                            <source src={muskOriginal} type="video/mp4"/>
                        </video>
                        <div className={classes.overlayVideo} id={'overlay' + muskOriginal} style={{backgroundImage: `url(${poster})`, }} onClick={()=>{
                            let video = document.getElementById(muskOriginal);
                            video.play()
                            let overlay = document.getElementById('overlay' + muskOriginal);
                            overlay.style.display = 'none'
                        }}>
                            <img src={playWhite} alt="play"/>
                        </div>
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
                    <div className={classes.borderVideo}>
                        <video muted playsinline={true} preload={'auto'} poster={poster} className={classes.video} controls id={choiceVideo} key={choiceVideo}>
                            <source src={choiceVideo} type="video/mp4"/>
                        </video>
                        <div className={classes.overlayVideo} id={'overlay' + choiceVideo} style={{backgroundImage: `url(${poster})`, }} onClick={()=>{
                            let video = document.getElementById(choiceVideo);
                            video.play()
                            let overlay = document.getElementById('overlay' + choiceVideo);
                            overlay.style.display = 'none'
                        }}>
                            <img src={playWhite} alt="play"/>
                        </div>
                    </div>

                </div>
            </div>
            <svg style={{position: 'fixed'}}>
                <defs>
                    <clipPath id="clippingLip">
                        <rect width="274" height="423" rx="16"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default LipSyncSection;
