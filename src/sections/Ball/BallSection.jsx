import React from "react";
import "./BallAnimation.css";

function BallSection() {
  return (
    <div className="bg-[#0e1a43] text-white overflow-hidden py-16 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="font-medium text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Transfer your <br /> enterprise with digital <br /> innovation
          </h1>
          <p className="mt-8 text-base sm:text-lg leading-relaxed">
            Your success as a market innovator reflects our strides as a unified
            partner. Committed to assisting you in attaining excellence through
            our solutions…
          </p>
          <div className="mt-10">
            <button className="bg-gradient-to-r from-[#e78e6e] to-[#FF3B1F] hover:from-[#E05F2D] hover:to-[#FF1F00] text-white font-bold text-xl sm:text-2xl py-4 px-8 sm:px-10 rounded-4xl shadow-sm shadow-[#F76D3B]/50 transition-all duration-300 ease-in-out">
              HIRE NOW
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="relative w-[400px] h-[200px]">
            {/* infinity background */}
            <img
              src="https://tecoreng.com/_next/static/media/infinite.c057ea68.webp"
              alt="Digital Innovation"
              className="w-full h-full object-contain"
            />

            {/* ball overlay */}
            <div className="absolute bottom-45 left-0 path-container">
              <img
                src="https://tecoreng.com/_next/static/media/ball.9fdf93ca.webp"
                alt="Animated Ball"
                className="ball"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BallSection;
