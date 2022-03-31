import React from 'react'
import Header from '../Common/Header';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="banner">
    <Header/>
    <div className="main-heading">
        <p>Ready to build the future of&nbsp;
            <span>Gamified<br/> NFT</span> & <span>Metaverse integration</span> ?</p>
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
  )
}

export default Home