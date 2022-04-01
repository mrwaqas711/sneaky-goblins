import React from 'react';
import Image from "next/image";

const SideBar = ({isSidebar}) => {
    return (
        <div id='sidebar' className={isSidebar ? "sideBar sideBar-SlideIn" : " hideSideBar"}>
            <div className="sideBar-container">
                <div className="sidebar-links">
                    <a href="#intro">Intro</a>
                    <a href="#design">Designs</a>
                    <a href="#artist">Artist</a>
                    <a href="#vision">The Vision</a>
                    <a href="#">Roadmap</a>
                    <a href="#">FAQ</a>
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