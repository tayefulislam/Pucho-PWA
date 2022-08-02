import React from 'react';
import quietPlace from '../../assets/QuietPlace/QuietPlace.png';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import './QuietPlace.css'

const QuietPlace = () => {

    return (
        <div className='mx-2 mt-10'>


            <div className='flex flex-col justify-center items-center'>

                <div className='flex justify-start lg:w-[360px] lg:h-[360px] bg-[#F1F7F7] rounded-3xl'>


                    <img className='quiet-place-img' src={quietPlace} alt="" />
                </div>

                <h1 className='text-[32px] text-center'>Try recording it in a quiet place.</h1>
                <p className='text-center'>To get accurate results, try giving samples without distubance and taking all safety precautions</p>

                <ArrowButton className='my-4'>Get Started</ArrowButton>


            </div>

        </div>
    );
};

export default QuietPlace;