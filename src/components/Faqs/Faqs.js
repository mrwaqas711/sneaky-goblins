import React from 'react'
import FaqItem from "../Common/FaqItem";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Faqs = () => {
    const data = [
            { q: 'On which blockchains?', a: "On the Ethereum blockchain as ERC-721A tokens."},
            {q:'What will be the mint price?',a: "The mint price is will be announced on Discord. It will be fairly priced."},
        {q:'How many can I mint?', a: "It will depend on the phase of the mint (whitelist sale or public sale) more information on this will be shared on Discord closer to the launch."},
    {q:'When is the mint date?', a: "The mint date is yet to be announced, we are focusing on building great utility and art upfront. Join our Discord to know more about the launch."},
        {q:'What is the total supply?', a: "There will be only 4,444 Sneaky Goblins that will ever exist."},
            {q:'Is there a whitelist?', a: "Yes, there is a whitelist. We recommend anyone interested in minting a Sneaky Goblin to join the whitelist as the team is considering doing a whitelist reserved mint only."}
    ];
return (
    <div className='faqs-container' id='faqs'>
        <h1 className="faqs-heading" data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">FREQUENTLY ASKED</h1>
        <h1 className="text-green faq-sub-heading" data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">QUESTIONS</h1>
        <div className='faq-div' data-aos-once="true" data-aos-delay="100" data-aos-duration="2000" data-aos="fade-up">
            {
                data.map ((faq, idx) =>
                <FaqItem faq={faq} key={idx}/>
                )
            }
        </div>
    </div>
)
}

export default Faqs