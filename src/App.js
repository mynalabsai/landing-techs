import React, {useEffect, useState} from 'react';
import './App.css';

//import section
import Header from "./Sections/Header/Header";
import MainSections from "./Sections/MainSection/MainSections";
import SeparatorSection from "./components/separatorSections/separatorSection";
import VoiceConversionSection from "./Sections/VoiceConversionSection/VoiceConversionSection";
import LipSyncSection from "./Sections/LipSyncSection/LipSyncSection";
import TextToSpeechSection from "./Sections/TextToSpeechSection/TextToSpeechSection";
import NLPSection from "./Sections/NLPSection/NLPSectionю";
import FaceSwapSection from "./Sections/FaceSwapSection/FaceSwapSection";
import WorkOnMobile from "./Sections/WorkOnMobileSection/WorkOnMobile";
import Footer from "./Sections/Footer/Footer";

//import dots
import {dotsFunc} from './js/backgroundDot'
import {dotsFuncMobile} from './js/backgroundDotMobile'

const App = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 600px)").matches
    )

    useEffect(()=>{
        window
            .matchMedia("(max-width: 600px)")
            .addEventListener('change', e => setMatches( e.matches ));
        if(matches) dotsFuncMobile()
        else dotsFunc()


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
                    <VoiceConversionSection matches={matches}/>
                    <SeparatorSection/>
                    <TextToSpeechSection matches={matches}/>
                    <SeparatorSection/>
                    <LipSyncSection matches={matches}/>
                    <SeparatorSection/>
                    <FaceSwapSection matches={matches}/>
                    <SeparatorSection/>
                    <NLPSection/>
                    <SeparatorSection/>
                    <WorkOnMobile/>
                    <SeparatorSection/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default App;
