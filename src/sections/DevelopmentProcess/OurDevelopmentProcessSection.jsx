import React from "react";
import OurDevelopmentProcessCard from "./OurDevelopmentProcessCard";

const cardsData = [
  {
    title: "Research and Analysis",
    description:
      "Idea, Consultation, Research, Goal Definition, & Requirements Gathering",
    img: "https://tecoreng.com/_next/static/media/kickOff.1c1198b2.webp",
  },
  {
    title: "Design",
    description:
      "System Architecture Design, Wireframing, UI/UX Designing, & Prototyping",
    img: "https://tecoreng.com/_next/static/media/Design.8f887f30.webp",
  },
  {
    title: "Development",
    description: "Functional Implementation, Software Coding & Optimization",
    img: "https://tecoreng.com/_next/static/media/Development.8d074c15.webp",
  },
  {
    title: "Testing",
    description: "Quality Assurance, Troubleshooting, & Testing",
    img: "https://tecoreng.com/_next/static/media/TestingN.96b15640.webp",
  },
  {
    title: "Deployment",
    description: "Launch, Beta Live, & Live",
    img: "https://tecoreng.com/_next/static/media/Deployment.764287e6.webp",
  },
  {
    title: "Evaluation",
    description: "Performance Evaluation, & Analytics Implementation",
    img: "https://tecoreng.com/_next/static/media/Evaluation.b6ba0e9d.webp",
  },
  {
    title: "Maintenance",
    description: "Maintenance",
    img: "https://tecoreng.com/_next/static/media/Maintenance.f5f233ad.webp",
  },
];

function OurDevelopmentProcessSection() {
  return (
    <section className="bg-secondary w-full py-10">
      <div className="container mx-auto px-4">
        <h2 className="md:text-5xl mb-4 text-2xl font-medium text-center md:text-left text-white">
          Our Development Process
        </h2>

        <div className="mt-10">
          <img
            src="https://tecoreng.com/_next/static/media/ballEntry.a4003503.svg"
            alt=""
            className="mx-auto md:mx-0"
          />

          <div className="flex flex-col gap-6 mt-10">
            {cardsData.map((data, index) => (
              <OurDevelopmentProcessCard
                key={index}
                title={data.title}
                description={data.description}
                img={data.img}
                isEven={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurDevelopmentProcessSection;
