import React from "react";

function GetinTouchSection() {
  const topBoxes = [
    {
      icon: "https://tecoreng.com/_next/static/media/Reporting-Analysis-web.495ca138.webp",
      title: "Reporting & Analysis",
    },
    {
      icon: "https://tecoreng.com/_next/static/media/On-Time-Delivery-web.1dff7f31.webp",
      title: "On-Time Delivery",
    },
    {
      icon: "https://tecoreng.com/_next/static/media/SeamlessCommunicationWeb.1f75d8f0.webp",
      title: "Seamless Communication",
    },
    {
      icon: "https://tecoreng.com/_next/static/media/game-icons-sands-of-time-web.b861aa2e.webp",
      title: "Post Launch Support",
    },
  ];

  const bottomBoxes = [
    { title: "Agile Methodology" },
    { title: "Certified Experts" },
    { title: "Budget Friendly" },
    { title: "100% Client Expectation" },
  ];

  return (
    <section className="bg-[#0e142e] text-white py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide leading-tight text-center md:text-left">
          WHY TECORENG FOR YOUR NEXT <br className="hidden md:block" />
          PROJECT
        </h1>
      </div>

      {/* Paragraph */}
      <div className="max-w-5xl mx-auto text-center md:text-left text-base md:text-lg leading-relaxed space-y-4">
        <p>
          Introducing Technical Core Engineers (TCE), the intersection of
          technology and innovation. At TCE, we excel in delivering exceptional
          IT services customized to fulfill your development requirements.
          Harnessing our expertise and enthusiasm, we breathe life into your
          ideas. Backed by a team of seasoned developers with extensive
          knowledge in various programming technologies, our dedication is
          unwavering, ensuring the delivery of outstanding results. Our mission
          is straightforward: decode the language of binary and transform it
          into extraordinary digital solutions that empower your business.
        </p>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center md:justify-start">
        <button className="bg-gradient-to-r from-[#f68f6a] to-[#de351b] hover:from-[#E05F2D] hover:to-[#FF1F00] text-white font-semibold text-lg md:text-xl py-3 px-8 rounded-3xl shadow-md shadow-[#F76D3B]/50 transition-all duration-300 ease-in-out">
          GET IN TOUCH
        </button>
      </div>

      {/* Top 4 boxes */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {topBoxes.map((box, index) => (
          <div
            key={index}
            className="bg-[#0e1636] rounded-2xl p-6 flex flex-col items-center text-center shadow-xl shadow-black/30 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={box.icon}
              alt={box.title}
              className="h-12 w-12 mb-4 object-contain"
            />
            <h3 className="text-lg md:text-xl font-medium">{box.title}</h3>
          </div>
        ))}
      </div>

      {/* Bottom 4 boxes (bigger & responsive) */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {bottomBoxes.map((box, index) => (
          <div
            key={index}
            className="bg-[#0f1a3b] rounded-2xl p-8 md:p-10 flex items-center justify-center text-center shadow-xl shadow-black/30 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold">{box.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GetinTouchSection;
