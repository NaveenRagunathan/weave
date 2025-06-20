
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

import SocialProofSection from "./SocialProofSection";

import FinalRallySection from "./FinalRallySection";
import FooterSection from "@/pages/product/FooterSection";
import TradeVoicesMicroSection from "./TradeVoicesMicroSection";

const HomePage = () => {
  return (
    <main className="bg-ink-black text-pearl-white font-sans relative overflow-x-hidden">
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

      
        <TradeVoicesMicroSection />
      

     
        

        <SocialProofSection />

        <FinalRallySection />
      
      <FooterSection />
    </main>
  );
};

export default HomePage;
