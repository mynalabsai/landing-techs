import React, {useEffect, useState} from 'react';
import classes from './VoicePeople.module.css'

import playIcon from '../../image/playIcons/play.svg'
import pauseIcon from '../../image/playIcons/pause.svg'


const  VoicePeople = ({ index, audios, setAudios, audiosOther, setAudiosOther}) =>{
    const [pausedAudio, setPausedAudio] = useState(true)

    const playAudio = () =>{
        let tempAudios = [...audios]
        let tempAudiosOther = [...audiosOther]
        tempAudios.forEach((item, indexItem)=>{
            item.audio.pause()
            if(indexItem !== index)
                item.paused = true

        })
        tempAudiosOther.forEach((item)=>{
            item.audio.pause()
            item.paused = true
        })

        if(audios[index].paused){
            audios[index].paused = false
            setPausedAudio(false)
            audios[index].audio.play();
        }
        else{
            audios[index].paused = true
            setPausedAudio(true)
            audios[index].audio.pause()
        }
        setAudios(tempAudios)
        setAudiosOther(tempAudiosOther)

    }

    useEffect(()=>{
        setPausedAudio(audios[index].paused)
    },[audios[index].paused])





    if(audios !== undefined)

        return(
            <div className={classes.container}>
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
                    <span style={audios[index].type === 'texttospeech' ? {width: 190} : {}}>{audios[index].name}</span>
                </div>
            </div>
        )
    return ('loading')
}

export default VoicePeople
