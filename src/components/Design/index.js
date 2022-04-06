import React from 'react'
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

import { Slide } from 'react-slideshow-image';
// stone fix deployment
const slideImages = [
    '/slider/s-8.png',
    '/slider/s-2.jpg',
    '/slider/s-3.png',
    '/slider/s-4.jpg',
    '/slider/s-5.jpg',
    '/slider/s-6.jpg',
    '/slider/s-7.jpg',
    '/slider/s-3.png',
];
const style = {
    textAlign: 'center',
    padding: '200px 0',
    fontSize: '30px',
    marginLeft: '15px',
    marginRight: '15px'
};

const properties = {
    duration: 1000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    indicators: true,
    defaultIndex: 0,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const Design = () => {
    return (
        <div className='main-div' id="design" style={{
            backgroundImage: "url('background-line.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className='mobile-stone-icon' >
                <Image src='/images/sample.png' width={70} height={70} alt="stone" />
            </div>
            <div className='desktop-stone-icon' >
                <Image src='/images/sample.png' width={100} height={100} alt="stone" />
            </div>
            <div className='design-in' style={{
                // backgroundImage: "url('background-line.png')",
                // backgroundPosition: 'center',
                // backgroundSize: 'cover'
            }}>
                <div>
                    <div className="slider-container">
                        <div className='inner-text slider-text'>
                            <h1 className='h1-design' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">DESIGNS</h1>
                            <p className='p-design' data-aos-once="true" data-aos-delay="150" data-aos-duration="2000" data-aos="fade-up">World-class art that will shape the NFT space for years to come.</p>
                        </div>
                        <div className="slider-section">
                            <Slide {...properties}>
                                {
                                    slideImages.map ((each, idx) =>
                                        <div key={idx} className="each-slide">
                                            <Image width={300} height={300} className="slider-image" src={each} alt="sample" />
                                        </div>
                                    )
                                }
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Design