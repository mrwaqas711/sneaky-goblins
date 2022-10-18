import React from 'react';
import Image from "next/image";

const SideBar = ({isSidebar, handleSideBar}) => {
    return (
        <div id='sidebar' className={isSidebar ? "sideBar sideBar-SlideIn" : " hideSideBar"}>
            <div className="sideBar-container">
                <div className="sidebar-links">
                    <a href="#intro" onClick={handleSideBar}>Intro</a>
                    <a href="#design" onClick={handleSideBar}>Designs</a>
                    <a href="#artist" onClick={handleSideBar}>Artist</a>
                    <a href="#vision" onClick={handleSideBar}>The Vision</a>
                    <a href="#roadmap" onClick={handleSideBar}>Roadmap</a>
                    <a href="#faqs" onClick={handleSideBar}>FAQ</a>
                    <div className="">
                        <Image width={305} height={1} layout='fixed' objectFit="cover" src="/images/sidebar-border.png" alt="plus image"/>
                    </div>
                    <div className="social-media">
                        <div className="social-links">
                            <Image width='20' height="15" layout='fixed' src="/images/socialIcon1.png" alt="plus image"/>
                        </div>
                        <div className="social-links">
                            <Image width='20' height="15" layout='fixed' src="/images/socialIcon2.png" alt="plus image"/>
                        </div>
                        <div className="social-links">
                            <Image width='20' height="15" layout='fixed' src="/images/socialIcon3.png" alt="plus image"/>
                        </div>
                        <div className="social-links">
                            <Image width='20' height="15" layout='fixed' src="/images/socialIcon4.png" alt="plus image"/>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default SideBar;