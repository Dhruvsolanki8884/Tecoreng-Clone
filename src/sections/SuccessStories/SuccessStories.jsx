import React, { useRef } from "react";

const SuccessStories = () => {
  const videoRefs = useRef([]);

  const successStories = [
    {
      id: 1,
      title: "Betting Platform",
      description:
        "Tecoreng's Online Betting Platform revolutionizes how enthusiasts engage with betting, offering seamless experiences across sports, esports, casino games, and more.",
      videoSrc: "https://tecoreng.com/videos/BettingPlatform.mp4",
      category: "Gaming & Entertainment",
    },
    {
      id: 2,
      title: "Health and Wellness",
      description:
        "Excitement fills the air as we proudly unveil our Health and Wellness Platform—a pivotal portal toward maximizing your health journey.",
      videoSrc: "https://tecoreng.com/videos/HelthandWellness.mp4",
      category: "Healthcare",
    },
    {
      id: 3,
      title: "An E-Commerce Store",
      description:
        "Delve into the world of our custom-designed Ecommerce Platform, a true testament to Tecoreng's meticulous craftsmanship.",
      videoSrc: "https://tecoreng.com/videos/E-Commerce.mp4",
      category: "E-Commerce",
    },
  ];

  // Play video on hover
  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  // Pause & reset on leave
  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="text-left mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            Our Success Stories
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {successStories.map((story, index) => (
            <div
              key={story.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-white/20"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Video Container */}
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  muted
                  loop
                  playsInline
                  // no autoPlay here
                  poster=""
                >
                  <source src={story.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs sm:text-sm font-medium rounded-full border border-white/20">
                    {story.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {story.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  {story.description}
                </p>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-clip-border animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
