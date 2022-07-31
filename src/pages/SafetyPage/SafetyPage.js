import React from 'react';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import safetyImage from "./../../assets/SafetyPage/SafetyPage.png"

const SafetyPage = () => {


    return (
        <div>

            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[32px] font-semibold'>DIYA</h1>
            <img src={safetyImage} alt="Safety PageImage" />
            <h1 className='text-[42px] font-semibold'>Test with Safety</h1>
            <p className='text-[14px] my-2'>Wear a mask, regardless of the distance from others.</p>

            <ArrowButton>Get Started</ArrowButton>
            
            </div>
           

            
        </div>
    );
};

export default SafetyPage;