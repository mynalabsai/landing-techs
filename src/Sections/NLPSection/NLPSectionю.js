import React from 'react';
import classes from './NLPSection.module.css'

//import assets
import star from "../../image/VoiceConversion/star.svg";
import emoji_saintPng from '../../image/emoj/emoji_saint.png'
import emoji_saintPng2x from '../../image/emoj/emoji_saint@2x.png'
import emoji_saintPng4x from '../../image/emoj/emoji_saint@4x.png'
import emoji_saintWebp from '../../image/emoj/emoji_saint.webp'
import emoji_saintWebp2x from '../../image/emoj/emoji_saint@2x.webp'
import emoji_saintWebp4x from '../../image/emoj/emoji_saint@4x.webp'
import emoji_upside_downPng from '../../image/emoj/emoji_upside_down.png'
import emoji_upside_downPng2x from '../../image/emoj/emoji_upside_down@2x.png'
import emoji_upside_downPng4x from '../../image/emoj/emoji_upside_down@4x.png'
import emoji_upside_downWebp from '../../image/emoj/emoji_upside_down.webp'
import emoji_upside_downWebp2x from '../../image/emoj/emoji_upside_down@2x.webp'
import emoji_upside_downWebp4x from '../../image/emoj/emoji_upside_down@4x.webp'

const NLPSection = () => {
  return(
      <div className={classes.container} >
          <h2 className={classes.h2}>
              Conver&shy;sa&shy;tion&shy;al NLP
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
            <div><span>Just chilling in TikTok
                <picture>
                    <source type="image/webp" media="(min-width: 1919px)" srcSet={emoji_saintWebp4x}/>
                    <source type="image/png" media="(min-width: 1919px)" srcSet={emoji_saintPng4x}/>

                    <source type="image/webp" media="(max-width: 1280px)" srcSet={emoji_saintWebp2x}/>
                    <source type="image/png" media="(max-width: 1280px)" srcSet={emoji_saintPng2x}/>

                    <source type="image/webp" media="(max-width: 768px)" srcSet={emoji_saintWebp}/>
                    <source type="image/png" media="(max-width: 768px)" srcSet={emoji_saintPng}/>

                    <img src={emoji_saintWebp4x} alt="emoji_saint"/>
                </picture>
            </span></div>
            <div><span>Oh, such a good day! Haha
                <picture>
                    <source type="image/webp" media="(min-width: 1919px)" srcSet={emoji_upside_downWebp4x}/>
                    <source type="image/png" media="(min-width: 1919px)" srcSet={emoji_upside_downPng4x}/>

                    <source type="image/webp" media="(max-width: 1280px)" srcSet={emoji_upside_downWebp2x}/>
                    <source type="image/png" media="(max-width: 1280px)" srcSet={emoji_upside_downPng2x}/>

                    <source type="image/webp" media="(max-width: 768px)" srcSet={emoji_upside_downWebp}/>
                    <source type="image/png" media="(max-width: 768px)" srcSet={emoji_upside_downPng}/>

                    <img src={emoji_upside_downWebp4x} alt="emoji_saint"/>
                </picture>
            </span></div>
          </div>
      </div>
  )
}

export default NLPSection;
