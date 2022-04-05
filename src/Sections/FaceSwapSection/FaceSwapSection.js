import React, {useEffect, useState} from 'react';
import classes from './FaceSwapSection.module.css'
import './FaceSwapSectionStyleSwiper.css'

//import assets
import musk from '../../video/muskOriganal.mp4'
import Zendaya from '../../video/Zendaya_Cool_52.mp4'
import Eilish from '../../video/Eilish_Think_15.mp4'
import Grande from '../../video/Grande_Talk_27.mp4'
import Chalamet from '../../video/Chalamet_Talk_16.mp4'
import Reeves from '../../video/Reeves_Talk_6.mp4'
import Kim from '../../video/Kim_Talk_36.mp4'
import Trump from '../../video/Trump_Talk_41.mp4'

import play from '../../image/playIcons/playWhite.svg'


import star from "../../image/VoiceConversion/star.svg";
import dicaprio from '../../image/people/img_dicaprio@2x.png'
import elon from '../../image/people/img_elon@2x.png'
import eilish from '../../image/people/img_eilish@2x.png'
import grande from '../../image/people/img_grande@2x.png'
import rock from '../../image/people/img_rock@2x.png'
import zendaya from '../../image/people/img_zendaya@2x.png'
import poster from '../../image/poster.png'

//import swiper
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import * as url from "url";


const FaceSwapSection = ({matches}) => {
    const slides1 = [
        {video: Zendaya},
        {video: Eilish, imageTitle: dicaprio},
        {video: Grande, imageTitle: rock},
        {video: musk, imageTitle: elon},
    ];
    const slides2 = [
        {video: Chalamet},
        {video: Reeves, imageTitle: grande},
        {video: Kim, imageTitle: eilish},
        {video: Trump, imageTitle: zendaya},
    ];


    return(
        <div className={classes.container} >
            <h2 className={classes.h2}>
                Face Swap
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
            {!matches
                ? <div className={classes.desktopVideos}>
                    <div className={classes.voicesVideo}>
                        {slides1.map((slide, index)=>{
                            return(
                                <div className={classes.videoContainerDesktop}>
                                    <span>
                                        {index === 0
                                            ? <span className={classes.textTitleVideo}>Male • Original</span>
                                            : <div className={classes.imageTitleVideoDesktop}>
                                                <img src={slide.imageTitle} alt={'imgSwiper'}/>
                                            </div>
                                        }
                                    </span>
                                    <video preload={'auto'} poster={poster} className={classes.videoDesktop} controls >
                                        <source src={slide.video} type="video/mp4"/>
                                    </video>
                                    <svg className={classes.svgMask}>
                                        <defs>
                                            <clipPath id="clipping">
                                                <path d="M0 19.0213V407C0 415.837 7.16345 423 16 423H258C266.837 423 274 415.837 274 407V16C274 7.16344 266.837 0 258 0H95.758C93.2456 25.8199 71.4795 46 45 46C25.5187 46 8.58856 35.077 0 19.0213Z"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            )
                        })}

                    </div>
                    <div className={classes.voicesVideo}>
                        {slides2.map((slide, index)=>{
                            return(
                                <div className={classes.videoContainerDesktop}>
                                    <span>
                                        {index === 0
                                            ? <span className={classes.textTitleVideo}>Male • Original</span>
                                            : <div className={classes.imageTitleVideoDesktop}>
                                                <img src={slide.imageTitle} alt={'imgSwiper'}/>
                                            </div>
                                        }
                                    </span>
                                    <video preload={'auto'} poster={poster} className={classes.videoDesktop} controls >
                                        <source src={slide.video} type="video/mp4"/>
                                    </video>
                                    <svg className={classes.svgMask}>
                                        <defs>
                                            <clipPath id="clipping">
                                                <path d="M0 19.0213V407C0 415.837 7.16345 423 16 423H258C266.837 423 274 415.837 274 407V16C274 7.16344 266.837 0 258 0H95.758C93.2456 25.8199 71.4795 46 45 46C25.5187 46 8.58856 35.077 0 19.0213Z"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            )
                        })}
                    </div>
                </div>
                :
                <div>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={matches ? 10 : 14}
                        freeMode={true}
                        pagination={{
                            clickable: true
                        }}
                        className={classes.mySwiper}
                    >
                        { slides1.map(
                            (slide, index) => (
                                <SwiperSlide className={classes.swiperSlide}>
                                    <div className={classes.videoContainer}>
                                <span className={classes.titleVideo}>
                                    {index === 0
                                        ? <span className={classes.textTitleVideo}>Male • Original</span>
                                        : <div className={classes.imageTitleVideo}>
                                            <img src={slide.imageTitle} alt={'imgSwiper'}/>
                                        </div>
                                    }
                                </span>
                                        <div className={classes.borderVideo}>
                                            <video preload={'auto'} poster={poster}  className={classes.video} controls id={slide.video}>
                                                <source src={slide.video} type="video/mp4"/>
                                            </video>
                                            <div className={classes.overlayVideo} id={'overlay' + slide.video} style={{backgroundImage: `url(${poster})`, }} onClick={()=>{
                                                let video = document.getElementById(slide.video);
                                                video.play()
                                                let overlay = document.getElementById('overlay' + slide.video);
                                                overlay.style.display = 'none'
                                            }}>
                                                <img src={play} alt="play"/>
                                            </div>
                                            <svg>
                                                <defs>
                                                    <clipPath id="clipping">
                                                        <path d="M0 19.0213V407C0 415.837 7.16345 423 16 423H258C266.837 423 274 415.837 274 407V16C274 7.16344 266.837 0 258 0H95.758C93.2456 25.8199 71.4795 46 45 46C25.5187 46 8.58856 35.077 0 19.0213Z"/>
                                                    </clipPath>
                                                    <clipPath id="clipping1024px">
                                                        <path d="M0 14.2098V304.047C0 310.649 5.35952 316 11.9708 316H193.029C199.641 316 205 310.649 205 304.047V11.9527C205 5.35141 199.641 0 193.029 0H71.6438C69.764 19.2886 53.4792 34.3641 33.6679 34.3641C19.0925 34.3641 6.42575 26.2041 0 14.2098Z"/>
                                                    </clipPath>
                                                    <clipPath id="clipping768px">
                                                        <path d="M0 12.3661V264.598C0 270.343 4.65363 275 10.3942 275H167.606C173.347 275 178 270.343 178 264.598V10.4019C178 4.65708 173.347 0 167.606 0H62.2078C60.5756 16.786 46.4356 29.9054 29.2336 29.9054C16.5778 29.9054 5.57943 22.8042 0 12.3661Z"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>


                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={matches ? 10 : 14}
                        freeMode={true}
                        pagination={{
                            clickable: true
                        }}
                        className={classes.mySwiper}
                    >
                        { slides2.map(
                            (slide, index) => (
                                <SwiperSlide className={classes.swiperSlide}>
                                    <div className={classes.videoContainer}>
                                        <span className={classes.titleVideo}>
                                            {index === 0
                                                ? <span className={classes.textTitleVideo}>Female • Original</span>
                                                : <div className={classes.imageTitleVideo}>
                                                    <img src={slide.imageTitle} alt={'imgSwiper'}/>
                                                </div>
                                            }
                                        </span>
                                        <div className={classes.borderVideo}>
                                            <video preload={'auto'} poster={poster}  className={classes.video} controls id={slide.video}>
                                                <source src={slide.video} type="video/mp4"/>
                                            </video>
                                            <div className={classes.overlayVideo} id={'overlay' + slide.video} style={{backgroundImage: `url(${poster})`, }} onClick={()=>{
                                                console.log(123)
                                                let video = document.getElementById(slide.video);
                                                video.play()
                                                let overlay = document.getElementById('overlay' + slide.video);
                                                overlay.style.display = 'none'
                                            }}>
                                                <img src={play} alt="play"/>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                </div>
            }



        </div>
    )
}

export default FaceSwapSection;
