
import React from "react";
import TubelightNavbar from "@/components/ui/tubelight-navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import ParticleSystem from "@/components/ui/ParticleSystem";
import SmoothSectionTransition from "@/components/transitions/SmoothSectionTransition";
import HeroSection from "./HeroSection";

import FeesComparisonSection from "./FeesComparisonSection";
import PartnerEliteScroll from "./PartnerEliteScroll";

import HowItWorksSection from "./HowItWorksSection";
import WhoThisIsForSection from "./WhoThisIsForSection";
import USDCSection from "./USDCSection";

import FinalRallySection from "./FinalRallySection";
import FooterSection from "./FooterSection";


const HomePage = () => {
  return (
    <main className="bg-off-white text-ink-black font-sans relative overflow-x-hidden">
      {/* Premium Enhancement Components */}
      <CustomCursor />
      <ParticleSystem />
      
      {/* Enhanced Navbar */}
      <TubelightNavbar />
      
      {/* Sections with smooth transitions */}
      <HeroSection />
      <WhoThisIsForSection />
      <USDCSection />
      <FeesComparisonSection />
      <PartnerEliteScroll />
      <HowItWorksSection />
      <FinalRallySection />
      <FooterSection />
    </main>
  );
};

export default HomePage;
