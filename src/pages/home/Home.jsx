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

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="flex w-[100%] h-[100vh] mx-auto bg-[#232536]">
          <div className="flex flex-col w-[50%] items-start justify-center ml-[10%]">
            <h2 className="text-[56px] text-white w-[70%]">
              Transform Your Idea Into Reality with Finsweet
            </h2>
            <p className="text-[16px] text-white w-[55%]">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
            <button className="bg-[#444CFC] text-white w-[220px] h-[64px] mt-10 flex items-center justify-center gap-2">
              Request Quote <IoIosArrowRoundForward className="text-[24px]" />
            </button>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <img src={foto} alt="" className="w-[80%] h-[70%]" />
          </div>
          <div className="w-[80%] flex items-center gap-20 absolute left-[10%] top-[92%]">
            <p className="text-white text-[22px]">We've Worked with</p>
            <img className="w-[186px] h-[106px]" src={logo} alt="" />
            <img className="w-[186px] h-[106px]" src={logo1} alt="" />
            <img className="w-[186px] h-[106px]" src={logo2} alt="" />
            <img className="w-[186px] h-[106px]" src={logo3} alt="" />
            <img className="w-[186px] h-[106px]" src={logo4} alt="" />
          </div>
        </div>
      </div>
      <section>
        <div className="flex flex-col w-[100%] h-[100vh] mx-auto absolute left-[10%] top-[120%]">
          <p className="text-[14px] text-[#232536]">About us</p>
          <p className="text-[48px] font-bold text-[#232536] w-[640px]">
            The company leads entire webdesign process from concept to delivery.
          </p>
          <p className="text-[48px] font-bold text-[#232536] w-[640px] absolute left-[35%] top-[2.5%]">
            The Era Of Technology.
          </p>
          <p className="text-[16px] text-[#232536] w-[640px] absolute left-[35%] top-[10%]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.{" "}
          </p>
          <div className="w-[418px] h-[446px] flex gap-20 mt-10">
            <img src={foto1} alt="" />
            <img src={foto2} alt="" />
            <img src={foto3} alt="" />
          </div>
          <div className="flex gap-20">
            <div className="absolute top-[80%]">
              <p className="text-[48px] font-bold text-[#232536]">1560+</p>
              <img
                src={shape}
                alt=""
                className="absolute top-[80%] left-[5%] w-[100px] h-[100px]"
              />
              <p className="absolute top-[80%] left-[5%] text-[14px] text-[#232536] mt-3">
                Project Delivered
              </p>
            </div>
            <div className="absolute top-[80%] left-[300px]">
              <p className="text-[48px] font-bold text-[#232536]">100+</p>
              <img
                src={shape}
                alt=""
                className="absolute top-[80%] w-[100px] h-[100px] left-[5%]"
              />
              <p className="absolute top-[80%] left-[5%] text-[14px] text-[#232536] mt-3">
                Proffesional
              </p>
            </div>
            <div className="absolute top-[80%] left-[600px]">
              <p className="text-[48px] font-bold text-[#232536]">950+</p>
              <img
                src={shape}
                alt=""
                className="absolute top-[80%] left-[5%] w-[100px] h-[100px]"
              />
              <p className="absolute top-[80%] left-[5%] text-[14px] text-[#232536] mt-3">
                Happy Client
              </p>
            </div>
            <div className="absolute top-[80%] left-[900px]">
              <p className="text-[48px] font-bold text-[#232536]">10yrs</p>
              <img
                src={shape}
                alt=""
                className="absolute top-[80%] left-[5%] w-[100px] h-[100px]"
              />
              <p className="absolute top-[80%] left-[5%] text-[14px] text-[#232536] mt-3">
                Experience
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
