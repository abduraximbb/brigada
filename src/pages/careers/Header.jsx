import React from 'react'
import career_image from "../../assets/career_image.png"

const Header = () => {
  return (
    <div className="border flex flex-col items-center ">
      <caption className='tracking-[3px]'>CAREER AT FINSWEET</caption>
      <h2>We hired people who are Always Passionate about what they do</h2>
      <p>
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable saw .
      </p>
      <div>
        <img src={career_image} alt="career image" />
      </div>
      <div>
        <p>See Our open positions </p>
        <p>👇</p>
      </div>
    </div>
  );
}

export default Header