import React from "react";
import Image from "next/image";

const CustomButton = ({Icon}) => {
    return (
        <div className="btn-container">
            <button className='custom-btn'>
                {Icon && <Image width={60} height={20} layout='fixed' src={Icon} alt="plus image"/>}
                Join us on Discord</button>
        </div>

    );
}

export default CustomButton;