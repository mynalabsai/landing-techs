import React, {useEffect, useState} from 'react';
import classes from './VoicePeople.module.css'

import playIcon from '../../image/playIcons/play.svg'
import pauseIcon from '../../image/playIcons/pause.svg'


const  VoicePeople = ({ index, audios, setAudios, audiosOther, setAudiosOther}) =>{
    const [pausedAudio, setPausedAudio] = useState(true)

    const playAudio = () =>{
        if(audios[index].paused){
            setPausedAudio(false)
            audios[index].paused = false
            audios[index].audio.play();
        }
        else{
            setPausedAudio(true)
            audios[index].paused = true
            audios[index].audio.pause()
        }
        let tempAudios = [...audios]
        let tempAudiosOther = [...audiosOther]
        tempAudios.forEach((item, indexItem)=>{
            if(indexItem !== index){
                item.audio.pause()
                item.paused = true
            }

        })
        tempAudiosOther.forEach((item)=>{
            item.audio.pause()
            item.paused = true
        })

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
