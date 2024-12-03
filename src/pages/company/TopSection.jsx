import React from 'react'


import mainfoto1 from "../../assets/f1.png";
import mainfoto2 from "../../assets/f2.png";
import mainfoto3 from "../../assets/f3.png";
import leftCubic from "../../assets/leftCubic.svg";
import rightCubics from "../../assets/rightCubics.svg";


const TopSection = () => {
  return (
    <div
      id="company"
      className="w-full flex flex-col mt-10 py-10 px-5 border-2 border-red-500"
    >
      <div className="w-[75%] mx-auto flex justify-between">
        <img src={leftCubic} alt="" />
        <img src={rightCubics} alt="" />
      </div>

      {/* Header Section */}
      <div className="w-[80%] mx-auto flex flex-col gap-6 items-start text-center pl-[2%] border-2 border-blue-500">
        <p className="text-sm uppercase font-semibold text-[#232536] tracking-wide border-2">
          Company
        </p>
        <h2 className="text-[36px] text-[#232536] w-[50%] font-bold leading-snug text-start border-2 border-red-300">
          Award-winning Company seen and used by millions around the world
        </h2>
        <p className="text-[14px] text-[#4d4d4d] w-[60%] leading-relaxed text-start  border-2 border-red-300">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The Maker is a
          decentralized
        </p>
      </div>

      {/* Images Section */}
      <div className="w-[80%]  mx-auto flex gap-5 mt-10 justify-center items-center border-2 border-green-500">
        <img
          src={mainfoto1}
          alt="Company Award 1"
          className="w-[30%] hover:scale-105 transition-all duration-300"
        />
        <img
          src={mainfoto2}
          alt="Company Award 2"
          className="w-[30%] hover:scale-105 transition-all duration-300"
        />
        <img
          src={mainfoto3}
          alt="Company Award 3"
          className="w-[30%] hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  );
}

export default TopSection