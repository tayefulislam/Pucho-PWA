import React from 'react';
import BottomNavigationBar from '../../components/BottomNavigationBar/BottomNavigationBar';

import languageIcon from '../../assets/icons/clarity_language-line.png';
import LongCovidMonitoring from './LongCovidMonitoring';

const Dashboard = () => {


    return (
        <div >

            <div>

                <div className='flex justify-evenly'>
                    <h1 className='text-[33px] font-semibold'>Hello Aastha!</h1>

                    <img className='bg-[#286F6B] p-2 rounded-lg' src={languageIcon} alt="" />
                </div>


                <LongCovidMonitoring className='drop-shadow-xl'></LongCovidMonitoring>


            </div>



            <BottomNavigationBar></BottomNavigationBar>
        </div>
    );
};

export default Dashboard;