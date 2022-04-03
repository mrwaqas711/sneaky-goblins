import React, { useState} from 'react';

const FaqItem = ({faq}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq" >
            <div className='faq-text' onClick={() => setIsOpen(!isOpen)}>
                <div>{faq.q}</div>
                <div className='plus-icon'>+</div>
            </div>
            {
                isOpen && <div className='collap-text'>{faq.a}</div>
            }
        </div>
    );
}

export default FaqItem;