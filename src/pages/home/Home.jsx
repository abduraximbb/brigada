import React from "react";
import foto from "../../assets/mainPhoto.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from "../../assets/Logo(1).svg";
import logo1 from "../../assets/Logo(2).svg";
import logo2 from "../../assets/Logo(3).svg";
import logo3 from "../../assets/Logo(4).svg";
import logo4 from "../../assets/Logo(5).svg";
import foto1 from "../../assets/Image1.png";
import foto2 from "../../assets/Image2.png";
import foto3 from "../../assets/Image3.png";
import shape from "../../assets/Shapes.svg";
import logo5 from "../../assets/Group1749(1).svg";
import logo6 from "../../assets/Group1756.svg";
import logo7 from "../../assets/Group1749.svg";
import logo8 from "../../assets/Group1755.svg";
import { BsHeadset, BsCodeSlash, BsTools } from "react-icons/bs";
import icon1 from "../../assets/IconDiv.svg";
import icon2 from "../../assets/IconDiv1.svg";
import icon3 from "../../assets/IconDiv2.svg";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div id="home" className="bg-[#232536]">
        <div className="flex w-full h-screen mx-auto">
          <div className="flex flex-col w-1/2 items-start justify-center pl-[10%]">
            <h2 className="text-[56px] text-white leading-tight">
              Transform Your Idea Into Reality with Finsweet
            </h2>
            <p className="text-[16px] text-white mt-6">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
            <button className="bg-[#444CFC] text-white w-[220px] h-[64px] mt-10 flex items-center justify-center gap-2">
              Request Quote <IoIosArrowRoundForward className="text-[24px]" />
            </button>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img src={foto} alt="Main visual" className="w-[80%] h-[70%]" />
          </div>
        </div>
        <div className="flex items-center gap-10 w-[80%] mx-auto mt-10">
          <p className="text-white text-[22px]">We've Worked with</p>
          <img className="w-[186px] h-[106px]" src={logo} alt="Logo 1" />
          <img className="w-[186px] h-[106px]" src={logo1} alt="Logo 2" />
          <img className="w-[186px] h-[106px]" src={logo2} alt="Logo 3" />
          <img className="w-[186px] h-[106px]" src={logo3} alt="Logo 4" />
          <img className="w-[186px] h-[106px]" src={logo4} alt="Logo 5" />
        </div>
      </div>

      <section className="w-full py-20 bg-white">
        <div className="w-[80%] mx-auto">
          <div className="flex justify-between w-[80%] mx-auto mt-10">
            <div className="w-[50%]">
              <p className="text-[14px] text-[#232536] mb-4">About us</p>
              <p className="text-[48px] font-bold text-[#232536] mb-6">
                The company leads entire webdesign process from concept to
                delivery.
              </p>
            </div>
            <div className="w-[50%] flex flex-col items-start justify-center">
              <p className="text-[48px] font-bold text-[#232536] mb-4">
                The Era Of Technology.
              </p>
              <p className="text-[16px] text-[#232536]">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.
              </p>
            </div>
          </div>
          <div className="flex gap-8 mt-10 justify-center">
            <img src={foto1} alt="Image 1" className="w-[418px] h-[446px]" />
            <img src={foto2} alt="Image 2" className="w-[418px] h-[446px]" />
            <img src={foto3} alt="Image 3" className="w-[418px] h-[446px]" />
          </div>

          <div className="flex justify-between w-[80%] mx-auto mt-10">
            <div className="flex flex-col items-center">
              <p className="text-[48px] font-bold text-[#232536]">1560+</p>
              <img src={shape} alt="Shape" className="w-[100px] h-[100px]" />
              <p className="text-[14px] text-[#232536] mt-2">
                Project Delivered
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[48px] font-bold text-[#232536]">100+</p>
              <img src={shape} alt="Shape" className="w-[100px] h-[100px]" />
              <p className="text-[14px] text-[#232536] mt-2">Professional</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[48px] font-bold text-[#232536]">950+</p>
              <img src={shape} alt="Shape" className="w-[100px] h-[100px]" />
              <p className="text-[14px] text-[#232536] mt-2">Happy Client</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[48px] font-bold text-[#232536]">10yrs</p>
              <img src={shape} alt="Shape" className="w-[100px] h-[100px]" />
              <p className="text-[14px] text-[#232536] mt-2">Experience</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-screen bg-[#ECF8F9] flex items-center">
        <div className="w-[80%] mx-auto flex justify-between">
          {/* Chap qism: Matn */}
          <div className="w-[50%]">
            <p className="text-[14px] text-[#232536] font-semibold mb-2">
              Our Expertise
            </p>
            <h1 className="text-[48px] font-bold text-[#232536] mb-4 leading-[1.2]">
              We want to get local identification in every corner of the world
              in this era of global citizenship
            </h1>
            <p className="text-[16px] text-[#232536] leading-[1.6]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>

          <div className="w-[40%] flex flex-col gap-6">
            <div className="flex items-center bg-white shadow-lg p-4 rounded-lg">
              <div className="w-[50px] h-[50px] bg-[#F2F4F7] flex items-center justify-center rounded-full">
                <img src={logo5} alt="" className="w-[30px] h-[30px]" />
              </div>
              <div className="ml-4">
                <h3 className="text-[18px] font-semibold text-[#232536]">
                  On Time Delivery
                </h3>
                <p className="text-[14px] text-[#232536] mt-2">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>

            <div className="flex items-center bg-white shadow-lg p-4 rounded-lg">
              <div className="w-[50px] h-[50px] bg-[#F2F4F7] flex items-center justify-center rounded-full">
                <img src={logo6} alt="" className="w-[30px] h-[30px]" />
              </div>
              <div className="ml-4">
                <h3 className="text-[18px] font-semibold text-[#232536]">
                  Best Quality
                </h3>
                <p className="text-[14px] text-[#232536] mt-2">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>

            <div className="flex items-center bg-white shadow-lg p-4 rounded-lg">
              <div className="w-[50px] h-[50px] bg-[#F2F4F7] flex items-center justify-center rounded-full">
                <img src={logo7} alt="" className="w-[30px] h-[30px]" />
              </div>
              <div className="ml-4">
                <h3 className="text-[18px] font-semibold text-[#232536]">
                  Support Assist
                </h3>
                <p className="text-[14px] text-[#232536] mt-2">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full py-20 bg-[#FFF0E5]">
        <div className="w-[80%] mx-auto flex flex-col items-center justify-center">
          {/* Header Section */}
          <div className="text-start mb-12">
            <p className="text-[14px] uppercase font-semibold text-[#232536] mb-2 tracking-wide">
              Our Services
            </p>
            <h1 className="w-[50%] text-[48px] font-bold text-[#232536]">
              We build software solutions that solve client's business
              challenges
            </h1>
            <button className="mt-6 bg-[#444CFC] text-white px-7 py-3 text-[16px] font-medium shadow-lg">
              Start a Project →
            </button>
          </div>
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="bg-white w-full sm:w-[30%] p-6 rounded-lg shadow-md">
              <img
                src={icon1}
                alt="Technical Support Icon"
                className="w-[50px] h-[50px] mb-4"
              />
              <h3 className="text-[18px] font-semibold text-[#232536] mb-2">
                Technical Support
              </h3>
              <p className="text-[16px] text-[#6D6D6D] mb-4">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service.
              </p>
              <button className="text-[#444CFC] font-medium text-sm">
                Read more →
              </button>
            </div>
            <div className="bg-white w-full sm:w-[30%] p-6 rounded-lg shadow-md">
              <img
                src={icon2}
                alt="Testing Management Icon"
                className="w-[50px] h-[50px] mb-4"
              />
              <h3 className="text-[18px] font-semibold text-[#232536] mb-2">
                Testing Management
              </h3>
              <p className="text-[16px] text-[#6D6D6D] mb-4">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service.
              </p>
              <button className="text-[#444CFC] font-medium text-sm">
                Read more →
              </button>
            </div>
            <div className="bg-white w-full sm:w-[30%] p-6 rounded-lg shadow-md">
              <img
                src={icon3}
                alt="Development Icon"
                className="w-[50px] h-[50px] mb-4"
              />
              <h3 className="text-[18px] font-semibold text-[#232536] mb-2">
                Development
              </h3>
              <p className="text-[16px] text-[#6D6D6D] mb-4">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service.
              </p>
              <button className="text-[#444CFC] font-medium text-sm">
                Read more →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
