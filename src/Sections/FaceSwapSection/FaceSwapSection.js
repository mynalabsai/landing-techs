import React from 'react';
import classes from './FaceSwapSection.module.css'
import './FaceSwapSectionStyleSwiper.css'

import testVideo from '../../video/muskOriganal.mp4'
import star from "../../image/VoiceConversion/star.svg";
import dicaprio from '../../image/people/img_dicaprio.png'

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { FreeMode } from "swiper";
import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation.min.css'; // Navigation module


const FaceSwapSection = ({matches}) => {
    const slides1 = [
        {video: {testVideo}, borderColor: ''},
        {video: {testVideo}, borderColor: '#FFD8D0'},
        {video: {testVideo}, borderColor: '#FFDCCF'},
        {video: {testVideo}, borderColor: '#FFE1CF'},
    ];
    const slides2 = [
        {video: {testVideo}, borderColor: ''},
        {video: {testVideo}, borderColor: '#FFD8D0'},
        {video: {testVideo}, borderColor: '#FFDCCF'},
        {video: {testVideo}, borderColor: '#FFE1CF'},
    ];


    return(
        <div className={classes.container} id={'faceswap'}>
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
            <Swiper
                slidesPerView={matches ? "auto" : 4}
                spaceBetween={10}
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
                                            <img src={dicaprio} alt={'imgSwiper'}/>
                                          </div>
                                    }
                                </span>
                                <div className={classes.borderVideo}>
                                    <video style={index !== 0 ? {clipPath: 'url(#clipping)'} : {}} className={classes.video} width={matches ? "204" : "316"} height={matches ? "275": "423"} controls >
                                        <source src={testVideo} type="video/mp4"/>
                                    </video>
                                    <svg>
                                        <defs>
                                            <clipPath id="clipping">
                                                {matches
                                                    ? <path d="M0 12.3661V264.598C0 270.343 4.65363 275 10.3942 275H167.606C173.347 275 178 270.343 178 264.598V10.4019C178 4.65708 173.347 0 167.606 0H62.2078C60.5756 16.786 46.4356 29.9054 29.2336 29.9054C16.5778 29.9054 5.57943 22.8042 0 12.3661Z"/>
                                                    : <path d="M0 19.0213V407C0 415.837 7.16345 423 16 423H258C266.837 423 274 415.837 274 407V16C274 7.16344 266.837 0 258 0H95.758C93.2456 25.8199 71.4795 46 45 46C25.5187 46 8.58856 35.077 0 19.0213Z"/>
                                                }

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
                slidesPerView={matches ? "auto" : 4}
                spaceBetween={30}
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
                                            <img src={dicaprio} alt={'imgSwiper'}/>
                                        </div>
                                    }
                                </span>
                                <div className={classes.borderVideo}>
                                    <video style={index !== 0 ? {clipPath: 'url(#clipping)'} : {}} className={classes.video} width={matches ? "204" : "316"} height={matches ? "275": "423"} controls >
                                        <source src={testVideo} type="video/mp4"/>
                                    </video>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                )}
            </Swiper>

        </div>
    )
}

export default FaceSwapSection;
