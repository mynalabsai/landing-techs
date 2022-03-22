import React from 'react';
import classes from './NLPSection.module.css'

import star from "../../image/VoiceConversion/star.svg";
import angel from '../../image/emoj/angel.svg'
import rotateSmile from '../../image/emoj/rotateSmile.svg'

const NLPSection = () => {
  return(
      <div className={classes.container} id={'nlp'}>
          <h2 className={classes.h2}>
              Conversational NLP
          </h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
          <span className={classes.useCasesTitle}><img src={star} alt="star" width={19}/>USE CASES</span>
          <div className={classes.useCases}>
              <span>— Dubbing</span>
              <span>— Localization</span>
              <span>— Replication</span>
              <span>— Correction</span>
              <span>— Accent Removal</span>
              <span>— Anonymization</span>
          </div>
          <div className={classes.messages}>
            <div><span>Hey, Alex! How is your school today?</span></div>
            <div><span>I missed it for today, so sick of my homework</span></div>
            <div><span>Just chilling in TikTok <img src={rotateSmile} alt=""/></span></div>
            <div><span>Oh, such a good day! Haha <img src={angel} alt=""/></span></div>
          </div>
      </div>
  )
}

export default NLPSection;
