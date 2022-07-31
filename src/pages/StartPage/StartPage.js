import React from "react";
import logo from "../../Assets/StartPage/diya-logo-without-title.png";

const StartPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <img src={logo} alt=""></img>
        <h1 className="text-3xl font-semibold">DIYA</h1>
        <h1 className="text-[#F26440]">Vocal Biomarkers</h1>
        <p className="">A non - invasive method of</p>
        <p className="">calculating your covid 19 risk score</p>
      </div>
    </div>
  );
};

export default StartPage;
