import React from 'react';
import homeIcon from '../../assets/icons/outlinehomeicon.png';
import DoctorCheckUp from '../../assets/icons/Health_Checkup.png';
import ProfileIcon from '../../assets/icons/person_outline_24px.png';
import Container from '../../assets/icons/container.png'


const BottomNavigationBar = () => {




    return (
        <div className='relative'>


            <div className='flex flex-col justify-center items-center mt-[230px] '>


                <div className='z-40 mb-[-20px]' style={{
                    backgroundImage: `url(${Container})`,
                    backgroundRepeat: 'no-repeat',
                }}>


                    <div className='p-9'>
                        <img className='w-[50px]' src={DoctorCheckUp} alt="" />
                        <h1 className='px-[19px] text-white'>Test</h1>
                    </div>



                </div>

            </div>



            <div class="btm-nav bg-[#286F6B] text-white py-2 rounded-t-xl absolute ">


                <button>
                    <img src={homeIcon} alt="" />
                    <span class="btm-nav-label">Home</span>
                </button>





                <button>
                    <img src={ProfileIcon} alt="" />
                    <span class="btm-nav-label">Profile</span>
                </button>
            </div>



        </div>
    );
};

export default BottomNavigationBar;