import React, { useState } from 'react'

const Faqs = () => {
    const [collap, setCollap] = useState(false);
    const [collaps, setCollaps] = useState(false);
    const data = ['On which blockchains?', 'What will be the mint price?', 'How many can I mint?', 'When is the mint date?', 'What is the total supply?', 'Is there a whitelist?'];
return (
    <div className='faqs-container'>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <div className='faq-div'>
            {
                data.map((f, idx )=> (
                <div className='faq'>
                <div className='faq-text' onClick={() => setCollap(idx) }>
                <div>{f}</div>
                <div>btn</div>
                </div>
                {
                collap === idx && 
                <div>
                    collapse div
                </div>
                }
            </div>
                ))
            }
            
        </div>
    </div>
)
}

export default Faqs