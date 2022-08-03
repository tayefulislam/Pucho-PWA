import React from 'react';
import doctorLooksEEG from '../../assets/Congratulations/doctor_looks_eeg.png'
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import RedoButton from '../../components/RedoButton/RedoButton';

const Congratulations = () => {


    return (
        <div className='bg-[#286F6B] text-white max-h-full'>

            <div className='flex flex-col justify-center items-center'>

                <h1 className='text-[22px] my-4' >Congratulations!</h1>
                <p>You completed your second voice sample.</p>

                <div className='max-w-[285px] max-h-[304px] bg-white my-4 rounded-lg' >
                    <img src={doctorLooksEEG} alt="" />

                </div>

                <div className='grid grid-cols-2 max-w-[280px] mt-10'>

                    <RedoButton>Redo</RedoButton>
                    <ArrowButton className='text-lg'>Submit</ArrowButton>



                </div>

            </div>



        </div>
    );
};

export default Congratulations;