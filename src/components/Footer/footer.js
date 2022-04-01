import React from 'react';
import Image from "next/image";

const Footer = () => {
    return(
        <div className="footer">
            <div className="">
                <Image width={1255} height={1} layout='fixed' objectFit="cover" src="/images/sidebar-border.png" alt="border footer"/>
            </div>
            <div className="footer-content">
                <div className="rights-Reserved">
                    <p>© 2022 Sneaky Goblins. All Rights Reserved</p>
                </div>
                <div className="footer-link-section">
                    <div className="footer-links">
                        <Image width='28' height="23" layout='fixed' src="/images/socialIcon1.png" alt="plus image"/>
                    </div>
                    <div className="footer-links">
                        <Image width='28' height="23" layout='fixed' src="/images/socialIcon2.png" alt="plus image"/>
                    </div>
                    <div className="footer-links">
                        <Image width='28' height="23" layout='fixed' src="/images/socialIcon3.png" alt="plus image"/>
                    </div>
                    <div className="footer-links">
                        <Image width='28' height="23" layout='fixed' src="/images/socialIcon4.png" alt="plus image"/>
                    </div>
                </div>
                <div className="terms-conditions">
                    <p>Privacy Policy</p>
                    <div className="terms-border"></div>
                    <p> Terms & Conditions</p>
                </div>

            </div>
        </div>
    );
}
export default Footer;