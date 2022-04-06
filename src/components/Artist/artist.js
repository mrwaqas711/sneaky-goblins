import React from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const artist = () => {
  return (
    <div className='artist-main-div' id='artist'> 
        <div className='artist-flex-btw'>
          <div className='artist-text'>
          <h1 className='h1-text' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">THE <span className='text-green'>ARTIST</span></h1>
          <p className='artist-p' data-aos-once="true" data-aos-delay="150" data-aos-duration="2000" data-aos="fade-up">
            Talent, determination, and the pursuit of excellence. Always pushing the boundaries of his skill and ambition, Allan Macedo is the 3D artist and digital sculptor behind Sneaky Goblins. <br />
            With a passion for superhero art, NFTs and the future of IP, the Goblins have the best artist in the game. <br />
            Previous work include: Marvel, DC Comics, Warner Bros, and more.
          </p>
        <button className='btn-discord btn-desktop-only' data-aos-once="true" data-aos-delay="200" data-aos-duration="2000" data-aos="fade-up"> 
          More about the Artist
          </button>
          <p className='set-in-center' data-aos-once="true" data-aos-delay="200" data-aos-duration="2000" data-aos="fade-up"> 
            <button className='btn-discord btn-set-mobile'> 
              More about the Artist
            </button>
          </p>
        </div>
        <div>
          <div className='avatar-set'> <Image  src="/avatar3.png" width={500} height={358} alt='avatar' /></div>
          <div className='stick-set'><Image src="/stick.png" alt="image-alt-text" width={400} height={700} /></div>
        </div>
        </div>
        <div className='artist-image'><Image src="/dots.png" alt="image-alt-text" width={635} height={400} /></div>
    </div>
  )
}

export default artist