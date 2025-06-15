
import React from "react";
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
