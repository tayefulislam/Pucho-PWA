import React from 'react';
import './Dashboard.css';

const LongCovidMonitoring = () => {
    return (
        <div className='flex flex-col justify-center items-center my-10 mx-8 LongCovidMonitoring rounded-lg p-10'>

            <h1 className='text-[22px] font-semibold'>Long Covid Monitoring</h1>

            <div className='flex flex-col justify-center'>
                <h1>This helps you monitor your long covid status.  </h1>

                <button className='py-6 px-10 add-plus rounded-full text-[14px] font-semibold mt-5'>Add +</button>

            </div>

        </div>
    );
};

export default LongCovidMonitoring;