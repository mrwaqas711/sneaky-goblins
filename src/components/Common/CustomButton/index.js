import React from "react";
import Image from "next/image";

const CustomButton = () => {
    return (
        <div className="btn-container">
            <button className='custom-btn'>
                <span className="btn-icon">
                <Image width={20} height={20} layout='fixed' src='/images/btn-icon.svg' alt="plus image"/>
                </span>
                Join us on Discord</button>
        </div>

    );
}

export default CustomButton;