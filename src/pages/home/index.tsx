import React from "react";
import TubelightNavbar from "@/components/ui/tubelight-navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import ParticleSystem from "@/components/ui/ParticleSystem";
import HeroSection from "./HeroSection";
import TrustedBySection from "./TrustedBySection";
import PainPointSection from "./PainPointSection";
import WhatYouWantSection from "./WhatYouWantSection";
import MeetWeaveSection from "./MeetWeaveSection";
import WhoThisIsForSection from "./WhoThisIsForSection";
import USDCSection from "./USDCSection";
import TrustedPowerhousesSection from "./TrustedPowerhousesSection";
import SocialProofSection from "./SocialProofSection";
import LiberationSection from "./LiberationSection";
import FinalRallySection from "./FinalRallySection";
import FooterSection from "@/components/FooterSection";

const HomePage = () => {
  return (
    <main className="bg-ink-black text-pearl-white font-sans relative">
      {/* Premium Enhancement Components */}
      <CustomCursor />
      <ParticleSystem />
      
      {/* Enhanced Navbar */}
      <TubelightNavbar />
      
      {/* Sections */}
      <HeroSection />
      <TrustedBySection />
      <PainPointSection />
      <WhatYouWantSection />
      <MeetWeaveSection />
      <WhoThisIsForSection />
      <USDCSection />
      <TrustedPowerhousesSection />
      <SocialProofSection />
      <LiberationSection />
      <FinalRallySection />
      <FooterSection />
    </main>
  );
};

export default HomePage;
