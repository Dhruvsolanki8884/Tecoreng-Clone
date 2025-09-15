import React from "react";

const industries = [
  {
    title: "Supply chain & Logistics",
    image:
      "https://tecoreng.com/_next/static/media/supply-chain-logistics.ca505939.webp",
  },
  {
    title: "Healthcare",
    image: "https://tecoreng.com/_next/static/media/healthcare.1e469520.webp",
  },
  {
    title: "Education",
    image: "https://tecoreng.com/_next/static/media/education.58704c82.webp",
  },
  {
    title: "Banking",
    image: "https://tecoreng.com/_next/static/media/Banking.ac0ca362.webp",
  },
  {
    title: "E-commerce",
    image: "https://tecoreng.com/_next/static/media/E-commerce.498b7a79.webp",
  },
  {
    title: "Travel",
    image: "https://tecoreng.com/_next/static/media/Travel.6c977598.webp",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#0B1C3C] py-12 px-6">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-left mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Industries We are experts in
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {industries.map((item, idx) => (
          <div key={idx} className="relative overflow-hidden rounded-xl group">
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110 brightness-50"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg md:text-xl font-medium text-center">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
