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
                <span className='nft-mobile'><Image width={375} height={733} layout='responsive' src="/nft-v.png" alt="border footer"/></span>
                <span className='nft-desktop'><Image width={1200} height={300} layout='responsive' src="/images/NFT-Icons.png" alt="border footer"/></span>
            </div>
            <div className="footer-image">
                <Image width={1200} height={1} layout='responsive' src="/images/sidebar-border.png" alt="border footer"/>
            </div>
            <div className="footer-content">
                <div className="rights-Reserved" data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                    <p>© 2022 Sneaky Goblins. All Rights Reserved</p>
                </div>
                <div className="footer-link-section">
                    <div className="footer-links">
                        <Image width='26em' height="22em" layout='fixed' src="/images/socialIcon1.png" alt="plus image"/>
                    </div>
                    <div className="footer-links">
                        <Image width='26em' height="22em" layout='fixed' src="/images/socialIcon2.png" alt="plus image"/>
                    </div>
                    <div className="footer-links">
                        <Image width='26em' height="22em" layout='fixed' src="/images/socialIcon3.png" alt="plus image"/>
                    </div>
                    <div className="footer-links">
                        <Image width='26em' height="22em" layout='fixed' src="/images/socialIcon4.png" alt="plus image"/>
                    </div>
                </div>
                <div className="terms-conditions" data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
                    <p>Privacy Policy</p>
                    <div className="terms-border"></div>
                    <p className='p-foot'> Terms & Conditions</p>
                </div>

            </div>
        </div>
    );
}
export default Footer;