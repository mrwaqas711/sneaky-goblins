import React from 'react';
import Home from '../../components/Home'
import Intro from '../../components/Intro/intro'
import Design from '../../components/Design/design'
import Artist from '../../components/Artist/artist'
import Vision from '../../components/Vision/vision';
const LandingPage = () => {

    return (
        <div>
            <Home />
            <Intro/>
            <Design/>
            <Artist/>
            <Vision/>
        </div>

    );
}

export default LandingPage;