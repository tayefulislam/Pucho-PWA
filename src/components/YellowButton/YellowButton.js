import React from 'react';

const YellowButton = (props) => {

    const className = props?.className;

    return (
        <div>

            <button
                className={`bg-[#F26440] py-5 lg:py-2 px-5 lg:px-9 rounded-[30px] h-12 text-white font-semibold text-[16px] lg:text-[22px] justify-center items-center flex ${className}`}
            >
                {props?.children}

            </button>

        </div>
    );
};

export default YellowButton;