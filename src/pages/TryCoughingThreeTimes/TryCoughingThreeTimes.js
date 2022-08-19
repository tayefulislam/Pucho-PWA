import React from 'react';
import './TryCoughingThreeTimes.module.css';
import WomenPicture from '../../assets/TryCoughingThreeTimes/womensick.png';
import YellowButton from '../../components/YellowButton/YellowButton';
import VoiceWaiting from '../../assets/states/Voice_Animation.png';

const TryCoughingThreeTimes = () => {


    return (
        <div>
            <div className='flex flex-col justify-center items-center text-white'>

                <h1 className='my-2 text-[30px] font-semibold'>Try coughing three times</h1>
                <h1>After hitting start button cough for 3 seconds</h1>

                <div className='bg-[#F1F7F7] rounded-xl mt-3'>
                    <img src={WomenPicture} alt="" />
                </div>

                <YellowButton className='w-[150px] lg:w-[250px] mt-2'>Start</YellowButton>


                <div>

                    <img className='bg-[#286F6B]' src={VoiceWaiting} alt="" />


                </div>

            </div>


        </div>
    );
};

export default TryCoughingThreeTimes;