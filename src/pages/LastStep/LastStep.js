import React from 'react';
import doctor from '../../assets/LastStepDoctor/LastStepDoctor.png';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import YellowButton from '../../components/YellowButton/YellowButton';

const LastStep = () => {


    return (
        <div className='mx-2'>

            <div className='flex flex-col justify-center items-center'>

                <img src={doctor} alt="" />
                <h1 className='text-3xl'>Last Step!</h1>
                <p className='max-w-[340px] text-[16px] font-semibold'>In this activity, I want you to take a breath and hold the vowel sound as specified. Please hold the sound for 3 seconds or until you run out of breathe.</p>

                <YellowButton className='my-4'>Get Started</YellowButton>

            </div>

        </div>
    );
};

export default LastStep;