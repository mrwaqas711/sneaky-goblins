import React from 'react';
import Home from '../../components/Home'
import Intro from '../../components/Intro/intro'
import Design from '../../components/Design/index'
import Artist from '../../components/Artist/artist'
import Vision from '../../components/Vision/vision';
import Features from '../../components/KeyFeatures/features';
import Footer from '../../components/Footer/footer';
import Community from '../../components/Community/Community';
import Team from '../../components/Team/Team';
import Faqs from '../../components/Faqs/Faqs';
import RoadMap from '../../components/RoadMap/roadmap';
const LandingPage = () => {

    return (
        <div>
            <Home />
            <Intro/>
            <Design />
            <Artist/>
            <Vision/>
            <Features/>
             <RoadMap/>
            <Community/>
            <Team/>
            <Faqs/>
            {/*<Footer/>*/}
        </div>

    );
}

export default LandingPage;