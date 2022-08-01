import React from 'react';
import './IntroductionSlides.css';
import doctor from '../../assets/IntroductionSlides/Doctor.png'
import ArrowButton from '../../components/ArrowButton/ArrowButton';

const IntroductionSlides = () => {


    return (
        <div className='mt-5 mx-2'>

            <div className='flex flex-col justify-center items-center'>

                <div className='grid grid-cols-2'>
                    <h1 className='text-[22px] mx-3 text-[#286F6B]'>Welcome !</h1>
                    <button className='skip-button text-[22px] rounded-[30px] mx-3'>Skip</button>

                </div>

                <div className='bg-[#F1F7F7] rounded-lg py-[100px] px-[50px] mt-5'>

                    <img src={doctor} alt="" />

                </div>

                <ArrowButton className='my-8'>Next</ArrowButton>

            </div>


        </div>
    );
};

export default IntroductionSlides;