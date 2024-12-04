import React from "react";
import career_image from "../../assets/career_image.png";
import svg from "../../assets/rightCubics.svg";

const Header = () => {
  return (
    <div className="relative flex flex-col gap-6 items-center text-center my-[96px] mx-[45px] text-[#232536]">
      <img className="absolute top-0 -right-[46px]" src={svg} alt="" />
      <caption className="tracking-[3px] font-[500] text-sm opacity-85">
        CAREER AT FINSWEET
      </caption>
      <h2 className="font-[600] text-5xl w-[60%] py-2">
        We hired people who are Always Passionate about what they do
      </h2>
      <p className="w-[50%]">
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable saw .
      </p>
      <div className="pt-10 pb-[56px]">
        <img src={career_image} alt="career image" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-[500]">See Our open positions </p>
        <p>👇</p>
      </div>
    </div>
  );
};

export default Header;
