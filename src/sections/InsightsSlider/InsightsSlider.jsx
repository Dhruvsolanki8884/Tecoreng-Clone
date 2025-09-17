import React from "react";
import Slider from "react-slick";

const insights = [
  {
    id: 1,
    image:
      "https://tecoreng.com/blog/wp-content/uploads/2023/07/data-Security-main-image-1-1440x720.webp",
    title: "Data Security In Digital Age: Protecting Your Information",
    date: "12-07-2023",
    author: "Paresh Solanki",
    excerpt:
      "Data security is the most important and trending topic in the digital age. We are using various types of data. That protects your sensitive data and information from unauthorized access.Data security is the most important and trending topic in the digital age That protects your sensitive data and information . [...]",
  },
  {
    id: 2,
    image:
      "https://tecoreng.com/blog/wp-content/uploads/2025/05/The-Ultimate-List-of-Sales-Tools-for-CRM-Success_-What-You-Need-to-Know.webp",
    title:
      "The Ultimate List of Sales Tools for CRM Success: What You Need to Know",
    date: "29-05-2025",
    author: "Himani Shekhat",
    excerpt:
      "Ten years ago, CRM software was just a glorified contact list. Today, Sales Tools for CRM Success a battlefield of features, AI promises, integrations, and endless dashboards.Ten years ago, CRM software was just a glorified contact list. Today, Sales Tools for CRM Success a battlefield of features, AI promises, integrations, and endless dashboards. [...]",
  },
  {
    id: 3,
    image:
      "https://tecoreng.com/blog/wp-content/uploads/2023/07/blog-main-image-1.webp",
    title: "Artificial Intelligence: How AI is Transforming Every Industries",
    date: "20-07-2023",
    author: "Paresh Solanki",
    excerpt:
      "Artificial intelligence (AI) refers to the emulation of human intellect in devices that have been design to behave and think like humans. The phrase may also use to refer to any computer that demonstrates characteristics of the human intellect, such as learning and problem-solving. Furthermore, there are many ways to use artificial intelligence (AI) every […]",
  },
  {
    id: 4,
    image:
      "https://tecoreng.com/blog/wp-content/uploads/2025/03/Monolithic_vs_Microservices-1440x720.webp",
    title: "Blockchain Revolutionizing Secure Transactions",
    date: "05-02-2024",
    author: "Divyesh Makvana",
    excerpt:
      "Blockchain technology offers a decentralized, transparent, and tamper-proof system for secure transactions across industries.Blockchain technology offers a decentralized, transparent, and tamper-proof system for secure transactions across industries Blockchain technology offers a decentralized, transparent, and tamper-proof system for secure transactions across industries [...]",
  },
  {
    id: 5,
    image:
      "https://tecoreng.com/blog/wp-content/uploads/2023/04/Software-Devlopment-types.webp",
    title: "Cloud Computing: Driving Business Agility",
    date: "10-09-2024",
    author: "Paresh solanki",
    excerpt:
      "Cloud computing has transformed how businesses scale and innovate, offering flexible and cost-effective solutions.Cloud computing has transformed how businesses scale and innovate, offering flexible and cost-effective solutions.Cloud computing has transformed how businesses scale and innovate, offering flexible and cost-effective solutions.Cloud computing has transformed how businesses scale and innovate, offering flexible and cost-effective solutions. [...]",
  },
];

const InsightsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // large tablets / laptops
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-[#06142e] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
          Tecoreng Insights
        </h2>

        <Slider {...settings}>
          {insights.map((item) => (
            <div key={item.id} className="px-2 sm:px-3">
              <div className="bg-[#0c1b3b] rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 sm:h-48 md:h-56 w-full object-cover"
                />
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-300 mb-3">
                    {item.date} - {item.author}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm flex-grow line-clamp-4">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default InsightsSlider;
