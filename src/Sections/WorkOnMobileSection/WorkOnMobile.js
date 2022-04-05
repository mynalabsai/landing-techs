import React, {useState} from 'react';
import classes from './WorkOnMobile.module.css'

//import assets
import faceSwapIcon from '../../image/anchors/face swap.svg'
import lipSyncIcon from '../../image/anchors/lipsync.svg'
import voiceConversionIcon from '../../image/anchors/voice.svg'

const WorkOnMobile = () => {

    return(
        <div className={classes.container}>
            <h2 className={classes.h2}>
                Everything Works <br/>
                Right on Mobile
            </h2>
            <p>All our technologies are developed to be used on mobile devices.
                Our team of <b>20+ engineers</b> are experienced <b>in delivering state-of-the-art AI algorithms right to your iPhone or Android.</b></p>
            <div className={classes.blocksMobile}>
                <div className={classes.itemBlocksMobile}>
                    <img src={faceSwapIcon} alt="faceSwapIcon"/>
                    <span><b>Face Swap</b></span>
                    <ul>
                        <li>State-of-the-art</li>
                        <li>25 FPS on iPhone 11+</li>
                    </ul>
                </div>
                <div className={classes.itemBlocksMobile}>
                    <img src={lipSyncIcon} alt="lipSyncIcon"/>
                    <span><b>LipSync</b></span>
                    <ul>
                        <li>State-of-the-art</li>
                        <li>25 FPS on iPhone 11+</li>
                    </ul>
                </div>
                <div className={classes.itemBlocksMobile}>
                    <img src={voiceConversionIcon} alt="voiceConversionIcon"/>
                    <span><b>Voice Conversion</b></span>
                    <ul>
                        <li>State-of-the-art</li>
                        <li>25 FPS on iPhone 11+</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkOnMobile;
