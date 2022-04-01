import React from 'react';
import Image from 'next/image';
import CustomButton from '../Common/CustomButton';

const intro = () => {
return (
    <div className='intro-container'>
        <div className='second-container' id="intro">
                <div className='inner-container'>
                    <div className='left-text-side'>
                        <h1 className='h1-text'>
                            WHO ARE THE <span className="text-green">SNEAKY</span> <span className='text-green'>GOBLINS</span>?
                        </h1>
                        <p className='p-text'>
                            The Sneaky Goblins are a species of world-changing tricksters. They are crafty and mischievous, at times devious, always genius. Masters of invention, they created the planes you travel in, the internet you communicate with, and the rockets that fly you to the moon.
                            Now they are coming for the Metaverse.
                        </p>
                        <button className='btn-discord'> <span className='btn-icon'><Image src="/images/btn-icon.svg"  width={24} height={18} alt='' /></span>Join us on Discord</button>
                    </div>
                    <div className='right-image-side'>
                        <Image src='/avatar1.png' width={650} height={630} alt='avatar' />
                    </div>
                </div>
    </div>
    <div className='third-container'>
        <div className='inner-second-container'>
            <div className='left-image-side'>
                <Image src='/avatar2.png' width={700} height={670} alt='avatar2' />
            </div>
        <div className='right-text-side'>
            <h1 className='h1-text'>
                WHY DO YOU NEED A <br/> <span className="text-green">SNEAKY GOBLIN</span>?
            </h1>
            <p className='p-second-text text-margin'>
                Sneaky Goblins are the best looking 3D sculpted NFTs available.A creative combination of storytelling, community and exclusive ownership benefits wrapped up in the long-term vision to build an NFT & Metaverse Studio.<br/>
                The Sneaky Goblins represent a new generation of NFT utility.
            </p>
        </div>
    </div>
</div>
    </div>
)
}

export default intro