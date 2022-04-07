import React from "react";
import Image from "next/image";

const CustomButton = () => {
    return (
        <div className="btn-container">
            <button className='custom-btn'>
                <span className="btn-icon">
                <img style={{width: '1.53em', height: 'auto' }} src='/images/btn-icon.svg' alt="plus image"/>
                </span>
                Join us on Discord</button>
        </div>

    );
}

export default CustomButton;