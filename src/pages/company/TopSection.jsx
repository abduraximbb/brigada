import React from "react";

import mainfoto1 from "../../assets/f1.png";
import mainfoto2 from "../../assets/f2.png";
import mainfoto3 from "../../assets/f3.png";
import leftCubic from "../../assets/leftCubic.svg";
import rightCubics from "../../assets/rightCubics.svg";
import purpleCubic from "../../assets/purpleCubic.svg";
import line from "../../assets/line.svg";
import logoBar from "../../assets/logoBar.png"

const TopSection = () => {
  return (
    <>
      <div className="container mt-[80px]">
        <div className="w-[94%] mx-auto flex justify-between items-start">
          <img src={leftCubic} alt="" />
          <img src={rightCubics} alt="" />
        </div>
      </div>

      {/* Header Section */}
      <div className="container">
        <div className="w-[80%] flex flex-col pl-9 gap-6 items-start text-center">
          <p className="text-sm uppercase font-Poppins text-[#232536] tracking-wide border-2">
            Company
          </p>
          <h2 className="text-[36px] text-[#232536] w-[50%] font-Poppins leading-snug text-start">
            Award-winning Company seen and used by millions around the world
          </h2>
          <p className="text-[14px] text-[#4d4d4d] font-Poppins w-[60%] leading-relaxed text-start">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized
          </p>
        </div>

        {/* Images Section */}
        <div className="container">
          <div className="flex gap-5 mt-10 justify-center">
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
      </div>

      <div className="container mt-10">
        <div className="grid grid-cols-2 px-9">
          <div className="flex flex-col gap-4">
            <div>
              <img src={purpleCubic} alt="" />
            </div>
            <p className="text-[#232536] font-Poppins text-[16px]">
              Our Story 👇{" "}
            </p>
            <h2 className="text-[#232536] font-Poppins text-[36px] w-[80%]">
              From Startups to Titans of Industry
            </h2>
            <p className="text-[#232536] font-Poppins text-[14px] w-[85%]">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic unsatiable saw his giving Remain expense of gay produce
              excited perceived do an a china mean its so ye when in explained
              Hearts am next over match mr partiality not shoud latter thus as
              out no passed forming middleton exercise up
            </p>
          </div>

          <div className="bg-[#FFD3AF91] grid grid-cols-2">
            <div className="flex flex-col gap-2 justify-center items-start pl-20">
              <p>1560+</p>
              <img src={line} alt="" className="w-[20%]" />
              <p>Project Delivered</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-start ">
              <p>950+</p>
              <img src={line} alt="" className="w-[14%]" />
              <p>Happy Client</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-start pl-20">
              <p>100+</p>
              <img src={line} alt="" className="w-[20%]" />
              <p>Professional</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-start">
              <p>10yrs</p>
              <img src={line} alt="" className="w-[14%]" />
              <p>Experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-10 px-10">
        <img src={logoBar} alt="" className="h-[80%]"/>
      </div>
    </>
  );
};

export default TopSection;
