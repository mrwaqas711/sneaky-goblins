import React from 'react';
import Image from "next/image";

const RoadMapInfo = ({percentage, duration, phase, heading, disabled, group }) => {
    console.log('disabled',disabled)
    return (
        <div className='roadmap-text-container'>
            {group.map((data, index) =>
                <div className="roadmap-section" key={index}>
                    <div className="Green-dots-icon">
                        <Image src={data.img} layout='fixed'  width={25} height={20} alt='roadmap green dot'/>
                    </div>
                    <div data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up" className={data.disabled ? 'disabled-roadmap-percentage' : 'roadmap-percentage' }>
                        {data.percentage}
                    </div>
                    <div className="roadmap-dotted-lines">
                        <Image src="/images/dotted-lines.png" layout='fixed'  width={65} height={4} alt='dot border' />
                    </div>
                    <div data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up" className="data-roadmap">
                        <p className={data.disabled ? 'disabled-duration' : 'duration'}>{data.duration}</p>
                        <h1 className={data.disabled ? 'disabled-phase' : 'phase'}>{data.phase}</h1>
                        {data.subHeadings.map((heading,index) =>
                        <div className='heading-div' key={index}>
                            <div className="roadmap-Dot">.</div>
                            <div className={data.disabled ? 'disabled-heading' : 'heading'}>{heading}</div>
                        </div>
                        )
                        }
                    </div>
                </div>

            )}

        </div>
    )
}
export default RoadMapInfo;