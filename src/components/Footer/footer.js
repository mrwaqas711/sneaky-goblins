import React from 'react';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-nft-Icons" data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="zoom-in">
                <img className='nft-mobile'  src="/nft-v.png" alt="border footer"/>
                <img  className='nft-desktop'src="/images/NFT-Icons.png" alt="border footer"/>
            </div>
            <div className='footer-wrap'>
                <div className="footer-image">
                <img className='f-image'  src="/images/sidebar-border.png" alt="border footer"/>
            </div>
            <div className="footer-content">
                <div className="rights-Reserved" data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                    <p className='right-reserve'>© 2022 Sneaky Goblins. All Rights Reserved</p>
                </div>
                <div className="footer-link-section">
                    <div className="footer-links">
                        <img className='social-icon f-icon' src="/images/socialIcon1.png" alt="plus image"/>
                    </div>
                    <div className="footer-links">
                        <img className='social-icon f-icon' src="/images/socialIcon2.png" alt="plus image"/>
                    </div>
                    <div className="footer-links">
                        <img className='social-icon f-icon' src="/images/socialIcon3.png" alt="plus image"/>
                    </div>
                    <div className="footer-links">
                        <img className='social-icon' src="/images/socialIcon4.png" alt="plus image"/>
                    </div>
                </div>
                <div className="terms-conditions" data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                    <p className='right-reserve border-line'>Privacy Policy</p>
                    {/* <div className="terms-border"></div> */}
                    <p className='right-reserve mobile-term'> Terms & Conditions</p>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Footer;