import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='feature-div'>
      <h1 className='head-feature'>
        <span className='text-green'>KEY</span> FEATURES
      </h1>
      <div className='feature-cards'>
          <div className='card-f'>
          <h2 className='card-head'>
            Gamified Staking
          </h2>
          <p className='card-p'>
            Stake your Goblins to receive the ecosystem token. Use it for future character drops, NFT upgrades, marketplace and more.
          </p>  
          <div className='safe-icon'>
            <Image  src="/stak.png"  width={236} height={236} alt="icon" />  
          </div>   
        </div>
        <div className='card-f'>
          <h1 className='card-head'>
            The Sneaky Club
          </h1>
          <p className='card-p'>
            The most engaged Goblins get exclusive access to the Club where market alpha and advanced NFT tools are shared.
          </p>
          <div className='safe-icon'>
            <Image src="/club.png"  width={236} height={236} alt="icon" />
          </div>   
        </div>
        <div className='card-f'>
          <h1 className='card-head'>
            The Sneaky Studio
          </h1>
          <p className='card-p'>
            The Sneaky Studio is an NFT Studio that will help artists launch their collections with a % of every mint going to the community vault.
          </p>
          <div className='safe-icon'>
            <Image src="/studio.png"  width={236} height={236} alt="icon" />
          </div>
        </div>
        <div className='card-f'>
          <h1 className='card-head'>
            Metaverse Ready
          </h1>
          <p className='card-p'>
            The Sneaky Goblins will be Metaverse ready characters to be played in compatible games and Metaverse worlds.
          </p>
          <div className='safe-icon'>
            <Image  src="/meta.png"  width={236} height={236} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features