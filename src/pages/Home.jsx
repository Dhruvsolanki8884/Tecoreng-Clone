import React from "react";
import HeroSection from "../sections/Hero/HeroSection";
import VideoSection from "../sections/video/videosection";
import BallSection from "../sections/Ball/BallSection";
import ServicesSection from "../sections/Services/ServicesSection";
import GetinTouchSection from "../sections/GetInTouch/GetinTouchSection";
import SpecializationSection from "../sections/Specialization/SpecializationSection";
import FlexibleSection from "../sections/FlexibleSection/FlexibleSection";
import TestimonialSlider from "../sections/TestimonialSlider/TestimonialSlider";
import IndustriesSection from "../sections/IndustriesSection/IndustriesSection";
import ContactPage from "../sections/ContactPage/ContactPage";
import SuccessStories from "../sections/SuccessStories/SuccessStories";
import InsightsSlider from "../sections/InsightsSlider/InsightsSlider";
import OurDevelopmentProcessSection from "../sections/DevelopmentProcess/OurDevelopmentProcessSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <VideoSection />
      <BallSection />
      <ServicesSection />
      <GetinTouchSection />
      <SpecializationSection />
      <FlexibleSection />
      <OurDevelopmentProcessSection/>
      <SuccessStories />
      <IndustriesSection />
      <TestimonialSlider />
      <InsightsSlider />
      <ContactPage />
    </div>
  );
}

export default Home;
