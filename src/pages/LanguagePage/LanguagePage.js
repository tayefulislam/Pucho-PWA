import React from 'react';
import arrowIcon from '../../assets/icons/arrow-icon.png'

const LanguagePage = () => {


    return (
        <div className='px-2'>

            <div className='flex flex-col justify-center items-center mt-10'>
                <h1 className='text-[18px] lg:text-[22px] text-2xl font-semibold'>What language do you preffer?</h1>

                <button className='bg-[#286F6B] text-[20px] lg:text-[22px] text-[#FFFFFF] py-3 px-5 rounded-2xl my-[140px]'>English</button>

                <div className='flex justify-self-end'>

                    <button className='bg-[#F26440] text-[22px] text-[#FFFFFF] p-5 rounded-[40px]'><img src={arrowIcon} alt="" /></button>

                </div>
            </div>



        </div>
    );
};

export default LanguagePage;