import React, {useEffect, useState} from 'react';
import classes from './VoicePeople.module.css'

import playIcon from '../../image/playIcons/play.svg'
import pauseIcon from '../../image/playIcons/pause.svg'


const  VoicePeople = ({ index, matches, audios, setAudios}) =>{
    const [pausedAudio, setPausedAudio] = useState(true)

    const playAudio = () =>{
        let tempAudios = audios
        tempAudios.forEach((item)=>{
            item.audio.pause()
        })
        setAudios(tempAudios)
        if(audios[index].paused){
            console.log(index + 'play')
            audios[index].paused = false
            setPausedAudio(false)
            audios[index].audio.play();
        }
        else{
            console.log(index + 'pause')
            audios[index].paused = true
            setPausedAudio(true)
            audios[index].audio.pause()
        }
    }




    if(audios !== undefined)

        return(
            <div className={classes.container} style={audios[index].type  !== 'first' && !matches ? {marginLeft: 50} : {marginLeft: 0}}>
                {audios[index].type !== 'withoutImage'
                    ?   <div className={classes.itemPeople}>
                            <img src={audios[index].image} className={classes.imagePeople} onClick={()=>{playAudio()}}/>
                            <div className={classes.buttonPlay} >
                                <button onClick={()=>{playAudio()}}>
                                    {!pausedAudio ? <img src={pauseIcon}/> : <img src={playIcon}/>}
                                </button>
                            </div>
                        </div>
                    :   <div className={classes.buttonPlayWithoutImage} >
                            <button onClick={()=>{playAudio()}}>
                                {!pausedAudio ? <img src={pauseIcon}/> : <img src={playIcon}/>}
                            </button>
                        </div>
                }

                <div className={classes.text} style={audios[index].type === 'texttospeech' ? {marginLeft: 10} : {}}>
                    <span>{audios[index].label}</span>
                    <span>{audios[index].name}</span>
                </div>
            </div>
        )
    return ('loading')
}

export default VoicePeople
