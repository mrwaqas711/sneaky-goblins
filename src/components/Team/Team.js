import React from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Team = () => {
return (
    <div className='team-container'>
        <h1 className='team-h1' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">The <span className='text-green'>Team</span></h1>
        <div className='team-card-container'>
            <div className='team-card' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                <h1>Gobby</h1>
                <h3>Marketing & Operations</h3>
                <div className="grid-container">
                <div className="grid-image"><img className='grid-img' src="/avatar-dark.png" alt="avatar" /></div>
                <div className="center"><img className='icon-tweet' src="/images/socialIcon4.png" alt="avatar" /></div>
                </div>
            </div>
            <div className='team-card' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                <h1>OnyaZ</h1>
                <h3>Marketing & Finances</h3>
                <div className="grid-container">
                <div className="grid-image"><img className='grid-img' src="/avatar-dark2.png" alt="avatar"/></div>
                <div className="center"></div>
                </div>
            </div>
            <div className='team-card' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                <h1>RedPanda</h1>
                <h3>Community Relationship</h3>
                <div className="grid-container">
                <div className="grid-image"><img className='grid-img' src="/avatar-dark3.png" alt="avatar"/></div>
                <div className="center"><img className='icon-tweet' src="/images/socialIcon4.png" alt="avatar"/></div>
                </div>
            </div>
            <div className='team-card' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                <h1>Allan</h1>
                <h3>Art Director & Lead Artist</h3>
                <div className="grid-container">
                <div className="grid-image"><img className='grid-img' src="/avatar-dark4.png" alt="avatar"/></div>
                <div className="center"><img className='icon-tweet' src="/images/socialIcon3.png" alt="avatar"/></div>
                </div>
            </div>
            <div className='team-card' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                <h1>Rafael</h1>
                <h3>Render Artist</h3>
                <div className="grid-container">
                <div className="grid-image"><img className='grid-img' src="/avatar-dark5.png" alt="avatar"/></div>
                <div className="center"><img className='icon-tweet' src="/images/socialIcon3.png" alt="avatar"/></div>
                </div>
            </div>
            <div className='team-card' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                <h1>Pop Blocks</h1>
                <h3>Development Team</h3>
                <div className="grid-container">
                <div className="grid-image"><img className='grid-img' src="/avatar-dark6.png" alt="avatar"/></div>
                <div className="center"><img className='icon-tweet' src="/images/socialIcon5.png" alt="avatar"/></div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Team