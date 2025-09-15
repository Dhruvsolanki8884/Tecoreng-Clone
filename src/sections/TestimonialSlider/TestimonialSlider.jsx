import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Juan S Ortiz Salazar",
    title: "Acme Corp",
    text: "They were honest about their abilities from the beginning, have fantastic communication skills, and are overall a dream to work with! Myself and my team felt beyond confident of their abilities and that they were doing the work on a week to week basis just as they stated they would. I will definitely be looking to hiring Tecoreng first before considering anyone else on Upwork!!",
  },
  {
    name: "Tim Loenders",
    title: "BPOS LOENDERS GCV",
    text: "Paresh worked out the infrastructure topology and did a fine job on that. He gave me insights about how to tackle setup that I didn't have which saved the project time and money.",
  },
  {
    name: "Denis Cartin",
    title: "CTO, SoSFba",
    text: "They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the project's progress. They also shared significant insights and suggestions for developing the project.",
  },
  {
    name: "Kean Graham",
    title: "CEO, MonetizeMore",
    text: "What most impressed us about Technical Core Engineers was their wide range of knowledge and commitment to the completion of our project. They exceeded our expectations rather than meeting them. Their ability to quickly understand the difficulties of our business and personalize their solutions to our specific need was absolutely impressive.",
  },
  {
    name: "Chetan Patwardhan",
    title: "CEO, HiQuest Group of IT Companies",
    text: "What most impressed us about Technical Core Engineers was their commitment to delivering a service that exceeded our expectations. Their commitment to the project, dedication to excellence, and willingness to go the extra mile truly distinguish them. They demonstrated a thorough understanding of the business and adjusted their solutions to meet our specific needs.",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // 4 seconds
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // <== Hides the < > arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-[#0A1128] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading on right */}
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-12">
          Appreciation from Clients
        </h2>

        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div key={idx} className="px-3">
              <div
                className="
                  bg-gradient-to-b from-[#4967ad] to-[#121d43] hover:from-[#4e67a1]
                  rounded-3xl shadow-2xl
                  p-8 
                  h-[350px] md:h-[400px] 
                  flex flex-col justify-between
                "
              >
                <div>
                  <h3 className="font-bold text-2xl">{item.name}</h3>
                  <p className="text-sm opacity-80">{item.title}</p>
                  <p className="mt-4 text-base leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
