import React from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Community = () => {
return (
    <div className='community-container'>
        <div className='community-image' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
            <Image src='/3avatar.png' width={730} height={550} alt='avatar' />
            <div className='bottle-icon'><Image src='/bottle-icon.png' width={139} height={200} alt='avatar' /></div>
            <div className='mask-icon'><Image src='/mask-icon.png' width={170} height={152} alt='avatar' /></div>
        </div>
        <div className='community-text'>
            <h1 className='h1-community' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">Join The <span className='text-green'>Community</span></h1>
            <p className='community-p' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                The Sneaky Goblins are more than artworks, they are a cultural phenomenon, a shift in the world of Metaverse. 
                From being part of an exclusive community to having access to gamified NFTs, 
                the benefits of owning a Sneaky Goblin are out of this world.
            </p>
            <div className='mobile-avatar' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up"> 
            <Image src='/3avatar.png' width={740} height={500} alt='avatar' />
            <div className='bottle-icon'><Image src='/bottle-icon.png' width={68} height={97} alt='avatar' /></div>
            <div className='mask-icon'><Image src='/mask-icon.png' width={68} height={61} alt='avatar' /></div>
            </div>
            <div className='btn-div' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up"> 
                <button className='btn-discord btn-hide' > 
            <span className='btn-icon'>
                <Image src="/images/btn-icon.svg"  width={24} height={18} alt='btn-icon' />
            </span>
                Join us on Discord
            </button>
            <button className='btn-discord btn-margin'> 
            <span className='btn-icon social-icon'>
                <Image src="/social-icon.svg"  width={24} height={18} alt='btn-icon' />
            </span>
                Follow us on Twitter
            </button>
            </div>
        </div>
    </div>
)
}

export default Community