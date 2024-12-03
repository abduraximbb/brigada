import React from "react";
import image1 from "../../assets/service/card/dd1.png";
import image2 from "../../assets/service/card/dd2.png";
import image3 from "../../assets/service/card/dd3.png";
import image4 from "../../assets/service/card/dd4.png";
import image5 from "../../assets/service/card/dd5.png";

const data = [
  {
    id: 1,
    title: "Technical Support",
    description:
      "Best in class tech support for your company. We become your tech backbone.",
    text: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: image1,
  },
  {
    id: 2,
    title: "Development",
    description:
      "Bring your ideas to reality with certified team of developers, working with latest technologies.",
    text: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: image2,
  },
  {
    id: 3,
    title: "AWS/Azure",
    description:
      "We help you deploy, manage and secure your application on leading web services.",
    text: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: image3,
  },
  {
    id: 4,
    title: "Consulting",
    description:
      "Get advice from world class professionals for all your technical needs.",
    text: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: image4,
  },
  {
    id: 5,
    title: "Information Technology",
    description:
      "We want to get local identification in every corner of the world in this era of global citizenship.",
    text: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: image5,
  },
];

const Card = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto grid grid-cols-1 mb-4 md:grid-cols-1">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col  ${
              index % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center ${
              index % 2 !== 0 ? "bg-[#ECF8F9]" : "bg-white"
            } w-full`}
          >
            {/* Rasm qismi */}
            <div className="w-full md:w-1/2 mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Matn qismi */}
            <div className="p-6 w-full md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-[#232536] text-3xl font-bold mb-6 ">{item.description}</p>
              <p
                className="background: #232536;
"
              >
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
