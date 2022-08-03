import React from 'react';
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

                <YellowButton className='w-[250px] my-10'>00:00</YellowButton>
            </div>





        </div>
    );
};

export default SingTheVowel;