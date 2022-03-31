import React from 'react'
import Image from 'next/image'

const vision = () => {
  return (
    <div className='vision-main-div' id='vision'>
        <h1 className='vision-h1'>
            THE VISI<span><Image src='/ring.png' width={60} height={80} /></span>N
        </h1>
        <p className='vision-p'>
            Our vision for the Sneaky Goblins is to be the Genesis collection of a larger upcoming ecosystem. Over time, we are building the components of an NFT & Metaverse Studio to empower our community.
            <br/>Sneaky Studios will help talented artists launch collections and build NFT experiences through the Sneaky Incubator.
        </p>
        <div className='key-div'>
            <span className='key'><Image src="/key.png" width={150} height={150} alt='' /></span>
        </div>
    </div>
  )
}

export default vision