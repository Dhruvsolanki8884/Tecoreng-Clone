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
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // md
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-[#0A1128] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-8 md:mb-12">
          Appreciation from Clients
        </h2>

        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div key={idx} className="px-2 sm:px-3">
              <div
                className="
                  bg-gradient-to-b from-[#4967ad] to-[#121d43] 
                  hover:from-[#4e67a1] rounded-3xl shadow-2xl 
                  p-5 sm:p-6 md:p-8 
                  min-h-[280px] sm:min-h-[320px] md:min-h-[380px]
                  flex flex-col
                "
              >
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm opacity-80">{item.title}</p>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
