import React from 'react'
import Image from 'next/image'

const artist = () => {
  return (
    <div className='artist-main-div' id='artist'> 
        <div className='artist-text'>
           <h1 className='h1-text '>THE <span className='text-green'>ARTIST</span></h1>
           <p className='p-text'>
               Talent, determination, and the pursuit of excellence. Always pushing the boundaries of his skill and ambition, Allan Macedo is the 3D artist and digital sculptor behind Sneaky Goblins.
                With a passion for superhero art, NFTs and the future of IP, the Goblins have the best artist in the game.
                Previous work include: Marvel, DC Comics, Warner Bros, and more.
           </p>
        <button className='btn-discord'> <span className='btn-icon'><Image src="/images/btn-icon.svg"  width={24} height={18} alt='' /></span>Join us on Discord</button>
        </div>
        <div className='artist-image'>
            <div className='icon-image'>
                <div className='avatar-icon'>
                    <Image src="/avatar3.png" width={610} height={430} alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default artist