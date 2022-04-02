import React from 'react'
import Image from 'next/image'

const vision = () => {
  return (
    <div className='vision-main-div' id='vision'>
        <h1 className='vision-h1'>
          THE&nbsp;<span className='text-green'>VISI</span><span className='ring'><Image src='/ring.png' width={40} height={60} alt='ring' /></span>
            <span className='text-green'>N</span>
        </h1>
        <p className='vision-p'>
            Our vision for the Sneaky Goblins is to be the Genesis collection of a larger upcoming ecosystem. Over time, we are building the components of an NFT & Metaverse Studio to empower our community.
            <br/>Sneaky Studios will help talented artists launch collections and build NFT experiences through the Sneaky Incubator.
        </p>
    </div>
  )
}

export default vision