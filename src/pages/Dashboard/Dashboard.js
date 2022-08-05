import React from 'react';
import './Dashboard.css';
import BottomNavigationBar from '../../components/BottomNavigationBar/BottomNavigationBar';

import languageIcon from '../../assets/icons/clarity_language-line.png';
import LongCovidMonitoring from './LongCovidMonitoring';

const Dashboard = () => {


    return (
        <div className='m-0'>

            <div >

                <div className='flex justify-evenly'>
                    <h1 className='text-[33px] font-semibold'>Hello Aastha!</h1>

                    <img className='bg-[#286F6B] p-2 rounded-lg' src={languageIcon} alt="" />
                </div>


                <LongCovidMonitoring></LongCovidMonitoring>



            </div>



            <BottomNavigationBar className='mt-10'></BottomNavigationBar>
        </div>
    );
};

export default Dashboard;