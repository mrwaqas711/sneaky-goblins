import React from 'react'
import Image from 'next/image'

const design = () => {
  return (
    <div className='main-div' id="design"> 
        <div className='inner-text'>
        <span className='stone-icon'> <Image src='/green-stone.png' width={700} height={700} alt="stone" /></span>
            <h1 className='h1-design'>DESIGNS</h1>
            <p>World-class art that will shape the NFT space for years to come.</p>
        </div>
    </div>
  )
}

export default design