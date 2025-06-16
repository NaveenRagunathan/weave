
import React from "react";
import TubelightNavbar from "@/components/ui/tubelight-navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import ParticleSystem from "@/components/ui/ParticleSystem";
import SmoothSectionTransition from "@/components/transitions/SmoothSectionTransition";
import HeroSection from "./HeroSection";
import CurrencyConverterSection from "./CurrencyConverterSection";
import PartnerEliteScroll from "./PartnerEliteScroll";

import PainPointSection from "./PainPointSection";
import WhatYouWantSection from "./WhatYouWantSection";
import MeetWeaveSection from "./MeetWeaveSection";
import WhoThisIsForSection from "./WhoThisIsForSection";
import USDCSection from "./USDCSection";
import TrustedPowerhousesSection from "./TrustedPowerhousesSection";
import SocialProofSection from "./SocialProofSection";
import LiberationSection from "./LiberationSection";
import FinalRallySection from "./FinalRallySection";
import FooterSection from "@/pages/product/FooterSection";

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
      <CurrencyConverterSection />
      <PartnerEliteScroll />
      
      
      
      <SmoothSectionTransition>
        <PainPointSection />
      </SmoothSectionTransition>
      
      <SmoothSectionTransition>
        <WhatYouWantSection />
      </SmoothSectionTransition>
      
      <SmoothSectionTransition>
        <MeetWeaveSection />
      </SmoothSectionTransition>
      
      <SmoothSectionTransition>
        <WhoThisIsForSection />
      </SmoothSectionTransition>
      
      <SmoothSectionTransition>
        <USDCSection />
      </SmoothSectionTransition>
      
      <SmoothSectionTransition>
        <TrustedPowerhousesSection />
      </SmoothSectionTransition>
      
      <SmoothSectionTransition>
        <SocialProofSection />
      </SmoothSectionTransition>
      
      <SmoothSectionTransition>
        <LiberationSection />
      </SmoothSectionTransition>
      
      <SmoothSectionTransition>
        <FinalRallySection />
      </SmoothSectionTransition>
      
      <FooterSection />
    </main>
  );
};

export default HomePage;
