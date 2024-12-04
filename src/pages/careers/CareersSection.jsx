import React from "react";
import arrow_icon from "../../assets/arrow_icon.png";

const CAREER_LIST = [
  {
    id: 1,
    title: "Full Stack Developer",
    location: "Bengaluru · Full Time",
    salary: "$10K - $18K · No equity",
  },
  {
    id: 2,
    title: "Testing Engineer",
    location: "Remote · Full Time",
    salary: "$08K - $10K · No equity",
  },
  {
    id: 3,
    title: "Hr Manager",
    location: "Mumbai · Fultime",
    salary: "$08K - $10K · 4 to 5 Yrs Exp",
  },
  {
    id: 4,
    title: "Product Designer",
    location: "Mumbai · Fultime",
    salary: "$08K - $10K · 4 to 5 Yrs Exp",
  },
  {
    id: 5,
    title: "Wordpress Developer",
    location: "Mumbai · Fultime",
    salary: "$08K - $10K · 4 to 5 Yrs Exp",
  },
  {
    id: 6,
    title: "Jr. QA Tester",
    location: "California, USA · Fultime",
    salary: "$14K - $23K · No equity",
  },
  {
    id: 7,
    title: "Sr. UX Designer",
    location: "California, USA · Fultime",
    salary: "$14K - $23K · No equity",
  },
  {
    id: 8,
    title: "Social Media Manager",
    location: "Kolkata, India · Fultime",
    salary: "$5K - $6K ·  Fresher",
  },
  {
    id: 9,
    title: "Golang Developer",
    location: "Mumbai · Fultime",
    salary: "$08K - $10K · 4 to 5 Yrs Exp",
  },
];

const CareersSection = () => {
  return (
    <div className="border bg-[#ECF8F9] grid grid-cols-3 gap-8 py-[78px] px-[78px] max-lg:grid-cols-2 max-lg:gap-4 max-md:grid-cols-1 max-md:px-[36px] max-md:py-[36px]">
      {CAREER_LIST.map((career) => (
        <div
          key={career.id}
          className="relative bg-white h-[243px] pl-12 pt-12 max-xl:h-[200px]  max-md:pl-3 max-md:pt-3"
        >
          <h6 className="font-[600] mb-2 absolute left-12 top-12">
            {career.title}
          </h6>
          <p className="opacity-60 absolute left-12 top-[86px]">
            {career.location}
          </p>
          <p className="opacity-60 absolute left-12 top-[113px]">
            {career.salary}
          </p>
          <div className="flex items-center gap-3 mt-14 absolute left-12 bottom-[30px]">
            <button className="text-[#5D5FEF] font-[500]">Apply Now </button>
            <img src={arrow_icon} alt="arrow right" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareersSection;
