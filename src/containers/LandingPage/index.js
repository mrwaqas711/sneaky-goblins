import React from 'react';
import Home from '../../components/Home'
import Intro from '../../components/Intro/intro'
import Design from '../../components/Design/design'
import Artist from '../../components/Artist/artist'
import Vision from '../../components/Vision/vision';
import Features from '../../components/KeyFeatures/features';

const LandingPage = () => {

    return (
        <div>
            <Home />
            <Intro/>
            <Design/>
            <Artist/>
            <Vision/>
            <Features/>
        </div>

    );
}

export default LandingPage;