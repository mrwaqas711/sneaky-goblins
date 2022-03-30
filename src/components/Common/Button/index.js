import React from "react";
import Image from "next/image";
const Button = ({Image}) => {


    return (
        <div>
            <button className='custom-btn'>
                {Image && <img src={Image} alt='image' className='btn-icon'/>}
                Join us on Discord</button>
        </div>

    );
}

export default Button;