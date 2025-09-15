import React, { useState } from "react";

function SpecializationSection() {
  const slides = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
      title: "Internet Of Things",
      desc: "Web of Things(IoT) application advancement interfaces each and every actual device with the Internet to engage an exchange of data. It will in general be energized through different connection points and devices to make life favorable..",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3022/3022451.png",
      title: "Mobile App Development",
      desc: "Tecoreng is the top mobile application development company in India. Our expert team of mobile application developers is capable of creating high-quality mobile apps for multiple platforms like IOS & Android.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/906/906343.png",
      title: "Web Development",
      desc: "Our web team creates high-quality websites as per custom requirements and helps to make your business digital. Tecoreng web experts to continue growing themself to the latest fair with technology such as Laravel, Angular, Node.Js, and so on.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const mod = (n, m) => ((n % m) + m) % m;

  const leftIndex = mod(current - 1, slides.length);
  const centerIndex = current;
  const rightIndex = mod(current + 1, slides.length);

  // new: go next/prev when clicking right or left card
  const handleCardClick = (index) => {
    if (index === leftIndex) {
      setCurrent(leftIndex); // go to left (prev)
    } else if (index === rightIndex) {
      setCurrent(rightIndex); // go to right (next)
    }
  };

  const renderSlide = (index, isCenter) => {
    const slide = slides[index];
    return (
      <div
        key={index}
        onClick={() => handleCardClick(index)}
        className={`cursor-pointer transition-all duration-500 rounded-2xl p-6 flex flex-col items-center text-center
        ${
          isCenter
            ? "bg-white text-black scale-100 shadow-2xl w-full sm:w-80"
            : "bg-white/20 scale-95 sm:w-60 opacity-80 hover:scale-100"
        }`}
      >
        <img
          src={slide.icon}
          alt={slide.title}
          className={`w-12 h-12 mb-4 ${
            isCenter ? "opacity-100" : "opacity-70"
          }`}
        />
        <h3
          className={`font-bold text-lg md:text-xl mb-5 ${
            isCenter ? "text-black" : "text-white"
          }`}
        >
          {slide.title}
        </h3>
        {isCenter && (
          <p className="text-sm md:text-base text-black">{slide.desc}</p>
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#0B1437] py-12">
      {/* Heading & paragraph */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-white mb-6 font-bold text-2xl md:text-4xl text-left">
          <h1>Our Specialization</h1>
        </div>
        <div className="text-white font-bold text-left md:max-w-3xl">
          <p>
            We offer a full range of web app development services that make
            things better for enterprises and companies we work with. Our team
            of dedicated mobile app developers fulfils your diverse business
            requirements through a number of services. We specialize in the
            following services:
          </p>
        </div>
      </div>

      {/* 3-slide carousel */}
      <div
        className="
        mt-10
        flex flex-col sm:flex-row justify-center items-center gap-4 
        sm:space-x-4 transition-all duration-500"
      >
        {renderSlide(leftIndex, false)}
        {renderSlide(centerIndex, true)}
        {renderSlide(rightIndex, false)}
      </div>
    </div>
  );
}

export default SpecializationSection;
