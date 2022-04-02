import React from 'react'
import Image from 'next/image'

const Team = () => {
return (
    <div className='team-container'>
        <h1 className='h1-text team-h1'>The <span className='text-green'>Team</span></h1>
        <div className='team-card-container'>
            <div className='team-card'>
                <h1>Gobby</h1>
                <h3>Marketing & Operations</h3>
                <div class="grid-container">
                <Image className="grid-image" src="/avatar-dark.png" alt="avatar" width={350} height={400} />
                <div class="center"><Image src="/images/socialIcon4.png" alt="avatar" width={24} height={19} /></div>
                </div>
            </div>
            <div className='team-card'>
                <h1>OnyaZ</h1>
                <h3>Marketing & Finances</h3>
                <div class="grid-container">
                <Image className="grid-image" src="/avatar-dark2.png" alt="avatar" width={350} height={400} />
                <div class="center"></div>
                </div>
            </div>
            <div className='team-card'>
                <h1>RedPanda</h1>
                <h3>Community Relationship</h3>
                <div class="grid-container">
                <Image className="grid-image" src="/avatar-dark3.png" alt="avatar" width={350} height={400} />
                <div class="center"><Image src="/images/socialIcon4.png" alt="avatar" width={24} height={19} /></div>
                </div>
            </div>
            <div className='team-card'>
                <h1>Allan</h1>
                <h3>Art Director & Lead Artist</h3>
                <div class="grid-container">
                <Image className="grid-image" src="/avatar-dark4.png" alt="avatar" width={350} height={400} />
                <div class="center"><Image src="/images/socialIcon3.png" alt="avatar" width={24} height={24} /></div>
                </div>
            </div>
            <div className='team-card'>
                <h1>Rafael</h1>
                <h3>Render Artist</h3>
                <div class="grid-container">
                <Image className="grid-image" src="/avatar-dark5.png" alt="avatar" width={350} height={400} />
                <div class="center"><Image src="/images/socialIcon3.png" alt="avatar" width={24} height={24} /></div>
                </div>
            </div>
            <div className='team-card'>
                <h1>Pop Blocks</h1>
                <h3>Development Team</h3>
                <div class="grid-container">
                <Image className="grid-image" src="/avatar-dark6.png" alt="avatar" width={350} height={400} />
                <div class="center"><Image src="/images/socialIcon5.png" alt="avatar" width={24} height={24} /></div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Team