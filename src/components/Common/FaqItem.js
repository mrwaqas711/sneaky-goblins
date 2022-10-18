import React, { useState} from 'react';
import Collapsible from 'react-collapsible';

const FaqItem = ({faq}) => {
    const [isOpen, setIsOpen] = useState(false);
    let element = <div className='faq-text' onClick={() => setIsOpen(!isOpen)}>
                    <div>{faq.q}</div>
                    <div className='plus-icon'>
                        <div className={`plus-animated ${isOpen ? 'animated-active' : 'animated-inactive'}`}>

                        </div></div>
                </div>
    return (
        <div className="faq" >       
            <Collapsible trigger={element}>
                <div className='collap-text'>{faq.a}</div>
            </Collapsible>
        </div>
    );
}

export default FaqItem;