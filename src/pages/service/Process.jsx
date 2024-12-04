import React from "react";
import image1 from "../../assets/service/Icon Div.png";
import image2 from "../../assets/service/Icon.png";
import image3 from "../../assets/service/Icon Div (1).png";
import image4 from "../../assets/service/Icon (1).png";
import image5 from "../../assets/service/Icon (2).png";
import image6 from "../../assets/service/Icon (3).png";

// Process data
const steps = [
  {
    id: 1,
    title: "Discover",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    icon: image1,
    number: "01",
  },
  {
    id: 2,
    title: "Designing",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    icon: image2,
    number: "02",
  },
  {
    id: 3,
    title: "Development",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    icon: image3,
    number: "03",
  },
  {
    id: 4,
    title: "Testing",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    icon: image4,
    number: "04",
  },
  {
    id: 5,
    title: "Deployment",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    icon: image5,
    number: "05",
  },
  {
    id: 6,
    title: "Maintenance",
    description:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    icon: image6,
    number: "06",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-12 bg-[#F9F9FF] text-left">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-sm font-bold mb-4 uppercase">Our Process</h2>
        <h3 className="text-3xl text-gray-700 mb-6">
          The process we are working with our clients worldwide
        </h3>
        <p className="text-[#232536]max-w-2xl mb-12 text-left">
          Through True Rich Attended does no end it his mother since real had
          half every him cases in packages enquire we up ecstatic unsatiable.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative flex items-start bg-white p-6 shadow-lg rounded-lg"
            >
              {/* Number */}
              <span className="absolute top-4 right-4 text-2xl font-bold text-gray-200">
                {step.number}
              </span>

              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mr-4 p-1">
                <img
                  src={step.icon}
                  alt={`${step.title} Icon`}
                  className="w-8 h-8"
                />
              </div>

              {/* Content */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
