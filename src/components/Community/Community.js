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
            <div className='avatar-div'><img className='avatar-img' src='/3avatar.png'  alt='avatar' /></div>
            <div className='bottle-icon'><img className='bottle-in' src='/bottle-icon.png'  alt='avatar' /></div>
            <div className='mask-icon'><img className='mask-in' src='/mask-icon.png'  alt='avatar' /></div>
        </div>
        <div className='community-text'>
            <h1 className='h1-community' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">Join The <span className='text-green'>Community</span></h1>
            <p className='community-p' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                The Sneaky Goblins are more than artworks, they are a cultural phenomenon, a shift in the world of Metaverse. 
                From being part of an exclusive community to having access to gamified NFTs, 
                the benefits of owning a Sneaky Goblin are out of this world.
            </p>
            <div className='mobile-avatar' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up"> 
            <div className='avatar-mobile'><img className='avatar-inner' src='/3avatar.png'  alt='avatar' /></div>
            <div className='bottle-icon'><img className='bottle-inner' src='/bottle-icon.png'  alt='avatar' /></div>
            <div className='mask-icon'><img className='mask-inner' src='/mask-icon.png'  alt='avatar' /></div>
            </div>
            <div className='btn-div' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up"> 
                <div className='button-com'>
                    <div className='btn-hide' > 
                    <div className='btn-icon'>
                        <img  className='btn-com' src="/images/btn-icon.svg" alt='btn-icon' />
                    </div>
                        <p className='btn--p'>Join us on Discord</p>
                </div>
                </div>
            <div>
                <div className=' btn-margin'> 
                <div className='btn-two'>
                    <div className='btn-icon social-icon'>
                    <img className='btn-com' src="/social-icon.svg"  alt='btn-icon' />
                    </div>
                <p className='btn--para'>Follow us on Twitter</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
)
}

export default Community