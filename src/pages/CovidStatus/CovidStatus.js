import React from 'react';

const CovidStatus = () => {

    const covidStatusItem = [
        { id: 1, name: 'Positive' },
        { id: 2, name: 'Negetive' },
        { id: 3, name: 'Asymptomatic' },
        { id: 4, name: 'I don’t know' },
        { id: 5, name: 'Prefer not to  say' },
    ]

    // console.log(covidStatusItem)

    return (
        <div className='mt-5 mx-2'>

            <div className='flex flex-col justify-center items-center'>

                <h1 className='text-[20px] font-semibold my-5'>What is your current COVID 19 status?</h1>

                {
                    covidStatusItem.map(item => <button key={item.id} className='bg-[#F1F7F7] w-[250px] text-[18px] font-semibold py-3 rounded-3xl mt-2'>{item.name}</button>)
                }

            </div>


        </div>
    );
};

export default CovidStatus;