import React from 'react';
import redoIcon from '../../assets/icons/redo-icon.png'

const RedoButton = (props) => {
    const className = props?.className;

    return (
        <div>

            <button
                className={`bg-[#F26440] py-2 lg:py-5 px-5 lg:px-9 rounded-[30px] h-12 text-white font-semibold text-[16px] lg:text-[22px] justify-center items-center flex ${className}`}
            > <img className='mx-2' src={redoIcon} alt="" />
                {props?.children}

            </button>

        </div>
    );
};

export default RedoButton;