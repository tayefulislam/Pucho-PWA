import React from 'react';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import RedoButton from '../../components/RedoButton/RedoButton';
import YellowButton from '../../components/YellowButton/YellowButton';



const SingTheVowel = () => {


    return (
        <div>

            <div className='flex flex-col justify-center items-center  my-[40px]'>
                <h1 className='text-[22px] font-semibold mb-5'>Sing the vowel</h1>
                <p className='max-w-[250px] text-center'>hold the sound of ‘aaaa’ as long as you can or until the timer ends</p>


                <div className='flex flex-col justify-center items-center w-[200px] h-[200px] bg-[#286F6B] rounded-3xl mt-[40px]'>
                    <h1 className='text-[80px] text-white'>A</h1>
                    <p className='text-center text-white'>aaaaaa....</p>

                </div>

                <YellowButton className='w-[250px] my-5'>00:00</YellowButton>

                {/* Redo System */}

                <div className='grid grid-cols-2 max-w-[280px] mt-10'>

                    <RedoButton>Redo</RedoButton>
                    <ArrowButton className='text-lg'>Submit</ArrowButton>



                </div>
            </div>





        </div>
    );
};

export default SingTheVowel;