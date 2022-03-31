import React from 'react';
import Image from "next/image";
import CustomButton from "../CustomButton";
import btnIcon from "../../../../public/images/btn-icon.svg";

const Header = () => {
    function myFunction(x) {
        // x.classList.toggle("change");
    }
    return (
        <>
            <div className="header">
                <div className="">
                    <div style={{marginTop: '30px'}}>
                        <Image width={510} height={1} layout='fixed' src="/images/border.png" alt="plus image" />
                    </div>
                    {/*<img src={BorderRtl} alt="logo" />*/}
                    <div className="left-side-header">
                        <a href="#intro">Intro</a>
                        <a href="#design">Designs</a>
                        <a href="#artist">Artist</a>
                        <a href="#vision">TheVision</a>
                        <a href="#">Roadmap</a>
                    </div>
                    <Image width={510} height={1} layout='fixed' src="/images/border.png" alt="plus image"/>
                </div>
                <div className="logo">
                    <Image width={160} height={120} layout='fixed' objectFit="cover" src="/images/sneaky_goblin_logo 3 copy.png" alt="plus image"/>
                </div>

                <div className="">
                    <div style={{marginTop: '30px'}}>
                        <Image width={500} height={1} layout='fixed' src="/images/BorderR.png" alt="plus image"/>
                    </div>
                    <div className="right-side-header">
                        <a href="#">FAQ</a>
                        <div className="social-links">
                            <Image width='25' height="20" layout='fixed' src="/images/socialIcon1.png" alt="plus image"/>
                        </div>
                        <div className="social-links">
                            <Image width='25' height="20" layout='fixed' src="/images/socialIcon2.png" alt="plus image"/>
                        </div>
                        <div className="social-links">
                            <Image width='25' height="20" layout='fixed' src="/images/socialIcon3.png" alt="plus image"/>
                        </div>
                        <div className="social-links">
                            <Image width='25' height="20" layout='fixed' src="/images/socialIcon4.png" alt="plus image"/>
                        </div>
                        <div className="header-btn">
                            <CustomButton/>
                        </div>
                    </div>
                    <Image width={500} height={1} layout='fixed' src="/images/BorderR.png" alt="plus image"/>
                </div>
            </div>
            <div className="mobile-header">
                <div className='mobile-nav-content'>
                    <div className="">
                        <Image width={100} height={1} layout='fixed' src="/images/border.png" alt="plus image" />
                        <div className="menu-btn-left">
                            <div className="container" onClick={myFunction(this)}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                        </div>
                        <Image width={100} height={1} layout='fixed' src="/images/border.png" alt="plus image" />
                    </div>
                    <div className="mobile-logo">
                        <Image width={71} height={53} layout='fixed' objectFit="cover" src="/images/sneaky_goblin_logo 3 copy.png" alt="plus image"/>
                    </div>
                    <div className="">
                        <Image width={100} height={1} layout='fixed' src="/images/BorderR.png" alt="plus image" />
                        <div className="menu-btn-right">
                            dssd
                        </div>
                        <Image width={100} height={1} layout='fixed' src="/images/BorderR.png" alt="plus image" />
                    </div>
                </div>

            </div>
        </>
    );
}
export default Header;