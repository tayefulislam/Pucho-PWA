import React from "react";
import "./Test2.css";

import WheelPicker from 'react-simple-wheel-picker';


const data = [
  {
      id: '1',
      value: 'test1'
  },
  {
      id: '2',
      value: 'test2'
  },
  {
      id: '3',
      value: 'test3'
  },
  {
      id: '4',
      value: 'test4'
  },
  {
      id: '5',
      value: 'test5'
  }
];


const handleOnChange = target => {
  console.log(target);
};

const Test = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      {/* https://github.com/keiya01/react-simple-wheel-picker#readme */}

<WheelPicker 
            data={data}
            onChange={handleOnChange}
            height={200}
        width={300}
      
            
        itemHeight={30}
      
        selectedID={data[0].id}
        backgroundColor='#FFFFFF'
        
       
            
            activeColor="#111111"
            
        />
      
    </div>
  );
};

export default Test;
