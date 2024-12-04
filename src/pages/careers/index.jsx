import React from "react";
import Header from "./Header";
import CareersSection from "./CareersSection";
import CultureSection from "./CultureSection";

const Career = () => {
  return (
    <>
      <div className="container font-Poppins">
        <Header />
        <CareersSection />
      </div>
      <div className="relative">
        <CultureSection />
      </div>
    </>
  );
};

export default Career;
