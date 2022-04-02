import React, { useState } from 'react'

const Faqs = () => {
    const [collap, setCollap] = useState(false);
    const [collap1, setCollap1] = useState(false);
    const data = ['On which blockchains?', 'What will be the mint price?', 'How many can I mint?', 'When is the mint date?', 'What is the total supply?', 'Is there a whitelist?'];
return (
    <div className='faqs-container'>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <div className='faq-div'>
                <div className='faq'>
                    <div className='faq-text' onClick={() => setCollap(!collap)}>
                        <div>On which blockchains?</div>
                        <div className='plus-icon'>
                            +
                        </div>
                    </div> 
                    {
                        collap && <div className='collap-text'>On the Ethereum blockchain as ERC-721A tokens.</div>
                    }           
                </div>
                <div className='faq1'>
                    <div className='faq-text' onClick={() => setCollap1(!collap1)}>
                        <div>On which blockchains?</div>
                        <div className='plus-icon'>
                            +
                        </div>
                    </div> 
                    {
                        collap1 && <div className='collap-text'>collpase here</div>
                    }     
                </div>
        </div>
    </div>
)
}

export default Faqs