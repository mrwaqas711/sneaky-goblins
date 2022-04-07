import React, {useState} from 'react';
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
    const [isSidebar, setIsSidebar] = useState(false);

    return (
        <div>
            <Home isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
            <Intro/>
            <Design />
            <Artist isSidebar={isSidebar} />
            <Vision/>
            <Features/>
            <RoadMap/> 
            <Community/>
            <Team/>
            <Faqs/>
            <Footer/>
        </div>

    );
}

export default LandingPage;