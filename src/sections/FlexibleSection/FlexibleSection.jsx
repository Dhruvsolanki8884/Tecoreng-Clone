import React from "react";

function FlexibleSection() {
  const cards = [
    {
      title: "Hire Full-time Developer",
      text: "Looking for committed talent to drive your company's success? Our full-time dedicated developers bring expertise, reliability, and unwavering focus to your projects. With a rigorous selection process, we ensure you get top talent aligned with your goals.",
    },
    {
      title: "Hire Part-time Developer",
      text: "Need flexibility without compromising quality? Our part-time dedicated developers offer the perfect solution. Get skilled assistance on your schedule, ensuring progress without the commitment of a full-time hire.",
    },
    {
      title: "Professional Services",
      text: "Unlock your project's full potential with our professional services. From software development to project management, our experts deliver tailored solutions to drive growth and efficiency, no matter your industry or scale.",
    },
  ];

  return (
    <div className="bg-[#0d1434] text-white py-16 px-4 sm:px-6 md:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Our Flexible Engagement Models
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto md:mx-0">
          Our team is your partner for the next big digital leap. Our customized
          and highly flexible engagement models are designed to meet business
          objectives. All of our service engagements are focused on customer
          satisfaction, and we ensure that clear communication is maintained
          throughout.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {cards.map((item, i) => (
          <div
            key={i}
            className="
              relative overflow-hidden rounded-2xl 
              text-gray-800 
              shadow-lg hover:shadow-2xl 
              cursor-pointer group
            "
          >
            {/* Gradient overlay that slides down */}
            <div
              className="
                absolute inset-x-0 top-0 h-full 
                bg-[linear-gradient(rgba(255,255,255,0.58)_0%,rgba(1,19,46,0)_100%),linear-gradient(91.17deg,rgb(255,255,255)_-93.64%,rgb(129,179,255)_98.85%)]
                rounded-2xl 
                transform -translate-y-[70%] 
                group-hover:translate-y-0 
                transition-transform duration-700 ease-out
              "
            ></div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col h-full">
              <h2 className="text-lg sm:text-xl font-bold text-center py-3 mb-4 transition-colors duration-500 group-hover:text-black">
                {item.title}
              </h2>
              <p className="text-white text-sm sm:text-base leading-relaxed transition-colors duration-500 group-hover:text-black">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlexibleSection;
