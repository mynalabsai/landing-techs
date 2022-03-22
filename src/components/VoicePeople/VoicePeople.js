import React, {useEffect, useState} from 'react';
import classes from './VoicePeople.module.css'

import playIcon from '../../image/playIcons/play.svg'
import pauseIcon from '../../image/playIcons/pause.svg'


const  VoicePeople = ({image, audio, label, name, type, matches}) =>{
    const [pause, setPause] = useState(false)


    return(
        <div className={classes.container} style={type  !== 'first' && !matches ? {marginLeft: 50} : {marginLeft: 0}}>
            {type !== 'withoutImage'
                ?   <div className={classes.itemPeople}>
                        <img src={image} className={classes.imagePeople}/>
                        <div className={classes.buttonPlay} >
                            <button onClick={()=>{
                                if(audio.paused){
                                    audio.play();
                                    setPause(true)
                                }
                                else{
                                    audio.pause()
                                    setPause(false)
                                }
                            }}>
                                {pause ? <img src={pauseIcon}/> : <img src={playIcon}/>}
                            </button>
                        </div>
                    </div>
                :   <div className={classes.buttonPlayWithoutImage} >
                        <button onClick={()=>{
                            if(audio.paused){
                                audio.play();
                                setPause(true)
                            }
                            else{
                                audio.pause()
                                setPause(false)
                            }
                        }}>
                            {pause ? <img src={pauseIcon}/> : <img src={playIcon}/>}
                        </button>
                    </div>
            }

            <div className={classes.text} style={type === 'texttospeech' ? {marginLeft: 10} : {}}>
                <span>{label}</span>
                <span style={type === 'texttospeech' ? {color: 'rgba(0, 0, 0, 0.5)'}:{}}>{name}</span>
            </div>
        </div>
    )
}

export default VoicePeople
