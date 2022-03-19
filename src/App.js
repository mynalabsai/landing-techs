import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainSections from "./Sections/MainSection/MainSections";
import SeparatorSection from "./components/separatorSections/separatorSection";
import VoiceConversionSection from "./Sections/VoiceConversionSection/VoiceConversionSection";
import {dotsFunc} from './js/backgroundDot'
import LipSyncSection from "./Sections/LipSyncSection/LipSyncSection";
import TextToSpeechSection from "./Sections/TextToSpeechSection/TextToSpeechSection";
import NLPSection from "./Sections/NLPSection/NLPSectionю";
import FaceSwapSection from "./Sections/FaceSwapSection/FaceSwapSection";

const App = () => {
    useEffect(()=>{
        dotsFunc()
    },[])
    return (
        <div className={'app'}>
            <div className={'container'}>
                <div className="animation-wrapper">
                    <div className="stagger-visualizer">
                        <div className="dots-wrapper"></div>
                    </div>
                </div>
                <div className={'website'}>
                    <Header/>
                    <MainSections/>
                    <SeparatorSection/>
                    <VoiceConversionSection/>
                    <SeparatorSection/>
                    <TextToSpeechSection/>
                    <SeparatorSection/>
                    <LipSyncSection/>
                    <SeparatorSection/>
                    <FaceSwapSection/>
                    <SeparatorSection/>
                    <NLPSection/>
                    <SeparatorSection/>
                </div>
            </div>
        </div>
    );
};

export default App;
