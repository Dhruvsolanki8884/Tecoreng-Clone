import React from "react";
import { ChevronRight } from "lucide-react";

function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: "https://tecoreng.com/_next/static/media/webService.682bf358.webp",
      description:
        "Transform your business concepts with our web development services, crafting innovative and next-generation websites.",
      technologies: [
        {
          name: "React JS",
          icon: "https://tecoreng.com/_next/static/media/react-jsTCE.dc2e1b7f.svg",
        },
        {
          name: "Angular",
          icon: "https://tecoreng.com/_next/static/media/angularTCE.190d8320.svg",
        },
        {
          name: "Laravel",
          icon: "https://tecoreng.com/_next/static/media/laravelTCE.46e12fe8.svg",
        },
        {
          name: "Node JS",
          icon: "https://tecoreng.com/_next/static/media/nodejsTCE.ed01dd43.svg",
        },
      ],
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: "https://tecoreng.com/_next/static/media/mobileService.bae86b39.webp",
      description:
        "Create powerful mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      technologies: [
        {
          name: "Android",
          icon: "https://tecoreng.com/_next/static/media/android.f511acba.webp",
        },
        {
          name: "Flutter",
          icon: "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
        },
        {
          name: "Swift",
          icon: "https://tecoreng.com/_next/static/media/hybread.e05641cf.webp",
        },
        {
          name: "lonic",
          icon: "https://tecoreng.com/_next/static/media/ionic.1d9840e5.webp",
        },
      ],
    },
    {
      id: 3,
      title: "Graphics Design",
      icon: "https://tecoreng.com/_next/static/media/uiuxService.3cfab62d.webp",
      description:
        "Create stunning visual identities and graphics that capture your brand essence and engage your audience.",
      technologies: [
        {
          name: "Photoshop",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
        },
        {
          name: "Illustrator",
          icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
        },
        {
          name: "Coreldraw",
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        },
        {
          name: "Sketch",
          icon: "https://tecoreng.com/_next/static/media/Sketch.ecffc0ae.webp",
        },
      ],
    },
    {
      id: 4,
      title: "UI/UX Design",
      icon: "https://tecoreng.com/_next/static/media/UI-UX-Design.9a5d8d6e.webp",
      description:
        "Design intuitive and engaging user interfaces that provide exceptional user experiences and drive conversions.",
      technologies: [
        {
          name: "Figma",
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        },
        {
          name: "Webflow",
          icon: "https://tecoreng.com/_next/static/media/Webflow.4718269a.webp",
        },
        {
          name: "Adobe XD",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
        },
        {
          name: "InVision",
          icon: "https://tecoreng.com/_next/static/media/Invision.5537bb8b.webp",
        },
      ],
    },
    {
      id: 5,
      title: "Quality Assurance (QA)",
      icon: "https://tecoreng.com/_next/static/media/quality-assurance.5549bd63.webp",
      description:
        "Ensure your applications meet the highest quality standards through comprehensive testing and quality assurance processes.",
      technologies: [
        {
          name: "Selenium",
          icon: "https://selenium.dev/images/selenium_logo_square_green.png",
        },
        {
          name: "Katalon Studio",
          icon: "https://tecoreng.com/_next/static/media/KatalonStudio.12507c3e.webp",
        },
        {
          name: "Testsigma",
          icon: "https://tecoreng.com/_next/static/media/Testsigma.a369f913.svg",
        },
        {
          name: "Telerik Test Studio",
          icon: "https://tecoreng.com/_next/static/media/TelerikTestStudio.df9de956.webp",
        },
      ],
    },
    {
      id: 6,
      title: "Digital Marketing",
      icon: "https://tecoreng.com/_next/static/media/digitalService.462c06ac.webp",
      description:
        "Boost your online presence and drive growth through strategic digital marketing campaigns and SEO optimization.",
      technologies: [
        {
          name: "Meta",
          icon: "https://tecoreng.com/_next/static/media/metaLogo.1792e208.svg",
        },
        {
          name: "Analytics",
          icon: "https://tecoreng.com/_next/static/media/analyticsLogo.2a795a65.svg",
        },
        {
          name: "Google Ads",
          icon: "https://tecoreng.com/_next/static/media/adsLogo.2ad4485d.svg",
        },
        {
          name: "Growth",
          icon: "https://tecoreng.com/_next/static/media/growthLogo.e5bc414a.svg",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#0A1128] text-white py-10 px-4 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
          Services We Offer
        </h2>
        <p className="text-base leading-relaxed mb-12">
          We offer a full range of web app development services that make things
          better for enterprises and companies we work with. Our team of
          dedicated mobile app developers fulfils your diverse business
          requirements through a number of services. We specialise in the
          following services:
        </p>

        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="bg-[#0F1B3C] border-2 min-h-[100px] border-[#1E293B] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out hover:bg-[#1E2A4A] hover:border-[#3D83D8] hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Main Service Row */}
                <div className="flex items-center justify-between p-6 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        src={service.icon}
                        alt={`${service.title} Icon`}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    {/* push heading further down */}
                    <h3 className="text-xl font-semibold text-white mt-3 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <ChevronRight className="h-6 w-6 text-[#3D83D8] opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                </div>

                {/* Expanded Content */}
                <div className="max-h-0 group-hover:max-h-[500px] overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="px-4 pb-4">
                    {/* Technology Stack */}
                    <div className="flex gap-6 justify-end pb-2">
                      {service.technologies.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-12 w-12 object-contain"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                          <span className="text-xs text-gray-400 font-medium mt-1">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* pull description closer to icons */}
                    <p className="text-gray-300 text-lg leading-relaxed mt-0">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
