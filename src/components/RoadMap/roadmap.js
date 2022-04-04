import React from 'react';
import Image from "next/image";
import RoadMapInfo from '../../components/RoadMap/RoadMapInfo/roadmapData';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const RoadMap = () => {
    const group = [
        { disabled: true,
            percentage: '20%',
            phase:"Phase 0 - The Foundation",
            duration: ' December 21’ - February 22’ ',
            img: '/images/fullGreenDot.svg',
            subHeadings:
                ['Building a team of experts.',
                    'Development of the Lore concept.',
                    'Development of the character concept.',
                    'Launch social media accounts.' ]
        },
        { disabled: false,
            percentage: '40%',
            phase:"Phase 1 - The Initiation",
            duration: 'February - March 22’ ',
            img: '/images/green-border-icon.svg',
            subHeadings:
                ['Build awareness and brand positioning.',
                    'Build strong community foundations.',
                    'Collaborate with influencer, collections, and alpha groups.',
                    'Release article and bio on our Art Director & Lead 3D Artist.',
                    ' Launch Website.']
        },
        { disabled: false,
            percentage: '60%',
            phase:"Phase 2 - The Beginning",
            duration: 'March - May 22’',
            img: '/images/green-border-icon.svg',
            subHeadings:
                ['Launch of the Sneaky Goblins Genesis Collection.',
                    'Stake-to-Earn platform launched. Holders to be rewarded with the ecosystem token $xSERUM -> available just after reveal.',
                    'Community Vault with 15% of all royalties -> to finance continuous project development.',
                    'Launch of a whitelist marketplace powered by $xSERUM.',
                    'Launch of a separate NFT collection to boost staking rewards ->$xSERUM will be used to mint.' ]
        },
        { disabled: false,
            percentage: '80%',
            phase:"Phase 3 - The Expansion",
            duration: ' April - June 22’ ',
            img: '/images/green-border-icon.svg',
            subHeadings:
                ['Launch story and airdrop the second NFT character to Sneaky Goblins Holders -> 45-60 days after first drop.',
                    'Develop AAA partnerships with the sole purpose of benefiting the community.',
                    'Airdrop of Alpha Group Pass to holders of 3 Sneaky Goblins NFTs -> expert analysts hired to provide daily market analysis.',
                    'Airdrop of Alpha Group Pass to holders of 3 Sneaky Goblins NFTs -> expert analysts hired to provide daily market analysis.',
                    'Creation of a community DAO for governance.',
                    'Begin Sneaky Studios, the NFT & Metaverse Development hub of Sneaky Goblins.' ]
        },
        { disabled: false,
            percentage: '100%',
            phase:"Phase 4 - The Evolution",
            duration: 'June - September 22’’ ',
            img: '/images/green-border-icon.svg',
            subHeadings:
                ['Creative Team expansion -> 3D Artists, Animators, VFX…',
                    'Evolution of the Sneaky Goblins to be Metaverse ready & to be played in compatible games.',
                    'Build analytics & automation tools to help holders navigate the NFT market.',
                    'Build more streams of revenue for the Community Fund (ex: launch tools as a subscription service, offer development services for projects, and more)',
                    'Development of the Lore concept.',
                    'Start up Incubator & Accelerator service for talented artists & teams with ambition and vision (Funding, advisory, network, marketing, and more)' ]
        }
]
    return (
        <div className="" id='roadmap'>
            <h1 className='roadmap-h1'> <span className='text-green'>ROAD</span>MAP</h1>
            <div className="roadmap-background"
                style={{
                    backgroundImage: "url('images/roadmap-bg.png')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                {/*<Image src="/images/roadmap-bg.png" layout='responsive'  width={800} height={1250} alt='roadmap background' />*/}
                <div className="roadmap-container">
                    <Image src="/images/roadmap-sideSteps.png" layout='fixed'  width={45} height={2200} alt='roadmap sideStep'/>
                    <div className="roadmap-stepper">
                        <div className="">
                            <RoadMapInfo group={group}/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default RoadMap;