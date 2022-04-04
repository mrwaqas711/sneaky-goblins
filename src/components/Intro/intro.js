import React from 'react';
import Image from 'next/image';
import CustomButton from '../Common/CustomButton';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const intro = () => {
return (
    <div className='intro-container'>
        <div className='second-container' id="intro">
                <div className='inner-container'>
                    <div className='left-text-side'>
                        <h1 className='h1-text' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                            WHO ARE THE <span className="text-green">SNEAKY</span> <span className='text-green'>GOBLINS</span>?
                        </h1>
                        <p className='p-text' data-aos-delay="150" data-aos-once="true" data-aos-duration="2000" data-aos="fade-up">
                            The Sneaky Goblins are a species of world-changing tricksters. They are crafty and mischievous, at times devious, always genius. Masters of invention, they created the planes you travel in, the internet you communicate with, and the rockets that fly you to the moon.
                            Now they are coming for the Metaverse.
                        </p>
                        <button className='btn-discord intro-btn-mobile' data-aos-delay="200" data-aos-once="true" data-aos-duration="2000" data-aos="fade-up">
                            <span className='btn-icon'>
                                <Image src="/images/btn-icon.svg"  width={21} height={16} alt='btn' />
                            </span>
                                Join us on Discord
                        </button>
                    </div>
                    <div className='right-image-side' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                        <Image src='/avatar1.png' width={570} height={530} alt='avatar' />
                    </div>
                </div>
    </div>
    <div className='third-container'>
        <div className='inner-second-container'>
            <div className='left-image-side' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                <Image src='/avatar2.png' width={620} height={620} alt='avatar2' />
            </div>
        <div className='right-text-side'>
            <h1 className='h1-text' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                WHY DO YOU NEED A <br/> <span className="text-green">SNEAKY GOBLIN</span>?
            </h1>
            <p className='p-second-text text-margin' data-aos-once="true" data-aos-delay="150" data-aos-duration="2000" data-aos="fade-up">
                Sneaky Goblins are the best looking 3D sculpted NFTs available. A creative combination of storytelling, community and exclusive ownership benefits wrapped up in the long-term vision to build an NFT & Metaverse Studio.<br/>
                The Sneaky Goblins represent a new generation of NFT utility.
            </p>
        </div>
    </div>
</div>
    </div>
)
}

export default intro