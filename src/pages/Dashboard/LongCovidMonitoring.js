import React from 'react';
import './Dashboard.css';

const LongCovidMonitoring = () => {
    return (
        <div className='flex flex-col justify-center items-center my-10 mx-8'>

            <h1 className='text-[22px] font-semibold'>Long Covid Monitoring</h1>

            <div className='flex flex-col justify-center'>
                <h1>This helps you monitor your long covid status.  </h1>

                <button className='py-8 px-14'>Add +</button>

            </div>

        </div>
    );
};

export default LongCovidMonitoring;