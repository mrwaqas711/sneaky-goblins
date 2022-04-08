import React, {useEffect, useState} from 'react'
import Header from '../Common/Header';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
// font fix
const Home = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 500px)`});
        const [isSidebar, setIsSidebar] = useState(false);
    return (
        <>
            <div className="banner">
                <img src={isMobile ? '/images/mobile-banner.jpg' : '/images/banner-bg.png'}
                        alt="Cover"
                        layout='fill'
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        className="home-bg"
                />
                <div className='home-text'>
                    <Header isSidebar={isSidebar} setIsSidebar={setIsSidebar}/>
                    <div className="main-heading" data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                        <h1 className='desktop-h1'>Ready to build the future of&nbsp;
                        <span>Gamified<br/> NFT</span> & <span>Metaverse integration</span>?</h1>
                        <h1 className='mobile-h1'>Ready to build the future of&nbsp;
                        <span>Gamified NFT</span> & <span>Metaverse integration</span> ?
                        </h1>
                    </div>
                    <div className="join-btn-container" data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                        <button className="join-button">
                        Join Sneaky Goblins</button>
                    </div>
                    <div className="main-container-footer">
                        <Image width={13} height={13} layout='fixed' src="/images/green-dot.svg" alt="plus image"/>
                        <p>Stake - Yield - Upgrade - Mutate</p>
                        <Image width={13} height={13} layout='fixed' src="/images/green-dot.svg" alt="plus image"/>
                    </div>
                </div>
            </div>
            <div className="home-btm-border">
            </div>
        </>
)
}

export default Home