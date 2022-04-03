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
                    <div className={data.disabled ? 'disabled-roadmap-percentage' : 'roadmap-percentage' }>
                        {data.percentage}
                    </div>
                    <div className="roadmap-dotted-lines">
                        <Image src="/images/dotted-lines.png" layout='fixed'  width={95} height={5} alt='dot border' />
                    </div>
                    <div className="data-roadmap">
                        <p className={data.disabled ? 'disabled-duration' : 'duration'}>{data.duration}</p>
                        <p className={data.disabled ? 'disabled-phase' : 'phase'}>{data.phase}</p>
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