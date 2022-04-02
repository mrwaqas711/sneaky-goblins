import React from 'react'
import Header from '../Common/Header';
import Image from 'next/image';

const Home = () => {
    return (
        <>
            <div className="banner">
                <Image src="/images/banner-bg.png" width={100} height={100} alt="Cover" layout='fill' className='reltive-1'/>
                <div className='reltive-2'>
                    <Header/>
                    <div className="main-heading">
                        <h1 className='desktop-h1'>Ready to build the future of&nbsp;
                            <span>Gamified<br/> NFT</span> & <span>Metaverse integration</span>?</h1>
                        <h1 className='mobile-h1'>Ready to build the future of&nbsp;
                            <span>Gamified NFT</span> & <span>Metaverse integration</span> ?
                        </h1>
                    </div>
                    <div className="join-btn-container">
                        <button className="join-button">
                            Join Sneaky Goblin</button>
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