import React from "react";
import arrowIcon from '../../assets/icons/arrow-icon.png'

const ArrowButton = (props) => {
  const className = props.className;
  return (
    <button
      className={`bg-[#F26440] py-5 px-9 rounded-[30px] h-12 text-white font-semibold text-[22px] justify-center items-center flex ${className}`}
    >
      {props.children}
      <img className="px-2" src={arrowIcon} alt="" />
    </button>
  );
};

export default ArrowButton;
