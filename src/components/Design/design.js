import React from 'react'
import Image from 'next/image';

const design = () => {
  return (
    <div className='main-div' id="design">
    <div className='design-in'>
      <div className='background-design'>
        <Image src='/background-line.png' layout='responsive' width={500} height={300}  alt='background'/>
    </div>
    {/*<div className='stone-icon'>*/}
    {/*    <Image src='/green-stone.png' layout='fixed' width={750} height={750} alt="stone" />*/}
    {/*  </div>*/}
      <div className='inner-text'>
      <h1 className='h1-design'>DESIGNS</h1>
      <p className='p-design'>World-class art that will shape the NFT space for years to come.</p>
    </div>
    </div>
    </div>
  )
}

export default design

        //