import React from 'react';
import classes from './FaceSwapSection.module.css'
import star from "../../image/VoiceConversion/star.svg";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { FreeMode, Pagination } from "swiper";

import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation.min.css'; // Navigation module
import 'swiper/modules/pagination/pagination.min.css'; // Pagination module

const FaceSwapSection = () => {
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
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FaceSwapSection;
