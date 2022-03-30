import React from 'react';

import Image from "next/image";
const Logo = 'images/sneaky_goblin_logo 3 copy.png'
import BorderRtl from '../../../public/images/border.png'
import BorderLtr from '../../../public/images/BorderR.png'
import socialIcon1 from '../../../public/images/socialIcon1.png'
import socialIcon2 from '../../../public/images/socialIcon2.png'
import socialIcon3 from '../../../public/images/socialIcon3.png'
import socialIcon4 from '../../../public/images/socialIcon4.png'
import btnIcon from '../../../public/images/btn-icon.svg'
import Button from '../../components/Common/Button'

const LandingPage = () => {

    return (
        <div>
            <div className="banner">
                <div className="header">
                    <div className="">
                        <Image width={600} height={1} layout='fixed' src="/images/border.png" alt="plus image" />
                        {/*<img src={BorderRtl} alt="logo" style={{marginTop: '40px'}}/>*/}
                        <div className="left-side-header">
                            <a href="#">Intro</a>
                            <a href="#">Designs</a>
                            <a href="#">Artist</a>
                            <a href="#">The Vision</a>
                            <a href="#">Roadmap</a>
                        </div>
                        {/*<img src={BorderRtl} alt="logo" style={{marginBottom: '10px'}}/>*/}
                        <Image width={600} height={1} layout='fixed' src="/images/border.png" alt="plus image"/>
                    </div>

                    <Image width='150px' height="120px" layout='fixed' objectFit="cover" src="/images/sneaky_goblin_logo 3 copy.png" alt="plus image"/>
                    {/*<img src={Logo} alt="logo" className="logo"/>*/}

                    <div className="">
                        <Image width={600} height={1} layout='fixed' src="/images/BorderR.png" alt="plus image"/>

                        {/*<img src={BorderLtr} alt="logo" style={{marginTop: '40px'}}/>*/}
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



                            {/*<img src={socialIcon1} alt="logo" className="social-links" />*/}
                            {/*<img src={socialIcon2} alt="logo" className="social-links"/>*/}
                            {/*<img src={socialIcon3} alt="logo" className="social-links"/>*/}
                            {/*<img src={socialIcon4} alt="logo" className="social-links"/>*/}
                            <div className="header-btn">
                                <Button Image={btnIcon} className=""></Button>
                            </div>
                        </div>
                        <Image width={600} height={1} layout='fixed' src="/images/BorderR.png" alt="plus image"/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LandingPage;