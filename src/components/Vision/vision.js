import React from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const vision = () => {
  return (
    <div className='vision-main-div' id='vision'>
        <h1 className='vision-h1 desktop-vision' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
          THE&nbsp;<span className='text-green'>VISI</span><span className='ring'>
            <Image src='/ring.png' width={40} height={60} alt='ring' /></span>
            <span className='text-green'>N</span>
        </h1>
        <h1 className='vision-h1 mobile-vision' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
          THE&nbsp;<span className='text-green'>VISI</span><span className='mobile-ring'>
            <Image  src='/ring.png' width={25} height={40} alt='ring' /></span>
            <span className='text-green'>N</span>
        </h1>
        <p className='vision-p' data-aos-once="true" data-aos-delay="200" data-aos-duration="2000" data-aos="fade-up">
            Our vision for the Sneaky Goblins is to be the Genesis collection of a larger upcoming ecosystem. Over time, we are building the components of an NFT & Metaverse Studio to empower our community.
            <br/>Sneaky Studios will help talented artists launch collections and build NFT experiences through the Sneaky Incubator.
        </p>
    </div>
  )
}

export default vision