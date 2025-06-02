import React from "react";
import HeroContent from "../components/homePage/HeroContent";
import FeaturedProgramsSection from "../components/homePage/FeaturedProgramsSection";
import VideoSection from "../components/homePage/VideoSection";
import TestimonialsSection from "../components/homePage/TestimonialsSection";
import MissionSection from "../components/homePage/MissionSection";
import ApplySection from "../components/homePage/ApplySection";

export default function HomePage() {
  return (
    <>
      <HeroContent />
      <FeaturedProgramsSection />
      <VideoSection />
      <TestimonialsSection />
      <MissionSection />
      <ApplySection />
    </>
  );
}
