
import React from "react";
import TubelightNavbar from "@/components/ui/tubelight-navbar";
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
import FooterSection from "./FooterSection";

const HomePage = () => {
  return (
    <main className="bg-ink-black text-pearl-white font-sans">
      {/* Tubelight Navbar at the top */}
      <TubelightNavbar />
      {/* The original live counter sits within the HeroSection */}
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
