import React, {useState} from 'react';
import Image from "next/image";
import CustomButton from "../CustomButton";
import Sidebar from "../Sidebar";
import btnIcon from "../../../../public/images/btn-icon.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useMediaQuery} from "react-responsive"; // You can also use <link> for styles

AOS.init();

const Header = ({isSidebar, setIsSidebar}) => {
    // const [isSidebar, setIsSidebar] = useState(false);
    const handleSidebarClick = () => {
        if(!isSidebar){
            setIsSidebar(true)
        }else{
            let element = document.getElementById('sidebar');
            element && element.classList.add('sideBar-SlideOut')
            setTimeout( () => {setIsSidebar(false)}, 1000)
        }

    }
    return (
        <>
            <div className="header">
                <div className="">
                    <div className="left-menu-items" data-aos-once="true" data-aos-delay="10" data-aos-duration="500" data-aos="fade-down">
                        {/*<Image layout='fill' src="/images/border.png" alt="plus image" className='image' />*/}
                    </div>
                    {/*<img src={BorderRtl} alt="logo" />*/}
                    <div className="left-side-header" data-aos-once="true" data-aos-delay="10" data-aos-duration="500" data-aos="fade-down">
                        <a href="#intro">Intro</a>
                        <a href="#design">Designs</a>
                        <a href="#artist">Artist</a>
                        <a href="#vision">TheVision</a>
                        <a href="#roadmap">Roadmap</a>
                    </div>
                <div className="left-menu-items" data-aos-once="true" data-aos-delay="10" data-aos-duration="500" data-aos="fade-down">

                </div>
                </div>
                <div className="logo">
                   <img src="/images/sneaky_goblin_logo 3 copy.png" alt="plus image"/>
                </div>

                <div className="">
                    <div className="right-menu-items" data-aos-once="true" data-aos-delay="10" data-aos-duration="200" data-aos="fade-down">

                    </div>
                    <div className="right-side-header" data-aos-once="true" data-aos-delay="10" data-aos-duration="500" data-aos="fade-down">
                        <a href="#faqs">FAQ</a>
                        <div className='main-social-links'>
                            <div className="social-links">
                                <Image width='23' height="18" layout='fixed' src="/images/socialIcon1.png" alt="plus image"/>
                            </div>
                            <div className="social-links">
                                <Image width='23' height="18" layout='fixed' src="/images/socialIcon2.png" alt="plus image"/>
                            </div>
                            <div className="social-links">
                                <Image width='23' height="18" layout='fixed' src="/images/socialIcon3.png" alt="plus image"/>
                            </div>
                            <div className="social-links">
                                <Image width='23' height="18" layout='fixed' src="/images/socialIcon4.png" alt="plus image"/>
                            </div>
                        </div>

                            <CustomButton/>
                    </div>
                    <div className="right-menu-items" data-aos-once="true" data-aos-delay="10" data-aos-duration="500" data-aos="fade-down">
                    </div>
                </div>
            </div>
            <div className='nav'>
                <div className="mobile-header ">
                    <div className='mobile-nav-content'>
                        <div className="">
                            <div className="upper-border-mobile">
                                <Image width={100} height={1} layout='fixed' src="/images/border.png" alt="plus image" />
                            </div>

                            <div className="menu-btn-left" onClick={()=> {handleSidebarClick()}}>
                                <div id='menuIcon' className="container-mobile-header">
                                    <div className="bar1"></div>
                                    <div className="bar2"></div>
                                    <div className="bar3"></div>
                                </div>
                            </div>
                            <div className="bottom-border-mobile">
                                <Image width={100} height={1} layout='fixed' src="/images/border.png" alt="plus image" />
                            </div>

                        </div>
                        <div className="mobile-logo">
                            <Image width={105} height={70} layout='fixed' objectFit="cover" src="/images/sneaky_goblin_logo 3 copy.png" alt="plus image"/>
                        </div>
                        <div className="">
                            <div className="upper-border-mobile">
                                <Image width={100} height={1} layout='fixed' src="/images/BorderR.png" alt="plus image" />
                            </div>

                            <div className="menu-btn-right">
                                <Image width='20' height="15" layout='fixed' src="/images/socialIcon1.png" alt="plus image"/>
                            </div>
                            <div className="bottom-border-mobile">
                                <Image width={100} height={1} layout='fixed' src="/images/BorderR.png" alt="plus image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar isSidebar={isSidebar} handleSideBar={handleSidebarClick}/>
        </>
    );
}
export default Header;