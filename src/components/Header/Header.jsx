import React from 'react'

import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header" className="w-full bg-[#232536] shadow-lg">
      <div className="flex gap-6 py-4 w-[80%] mx-auto">
        <NavLink className="text-white" to={"/company"}>
          Company
        </NavLink>
      </div>
    </header>
  );
}

export default Header