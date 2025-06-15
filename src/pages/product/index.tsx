
import React from "react";
import TubelightNavbar from "@/components/ui/tubelight-navbar";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import FeaturesSection from "./FeaturesSection";
import WhoItIsForSection from "./WhoItIsForSection";
import AdvantageSection from "./AdvantageSection";
import TrustLayerSection from "./TrustLayerSection";
import SocialProofSection from "./SocialProofSection";
import CloserSection from "./CloserSection";
import FooterSection from "./FooterSection";

const ProductPage = () => {
  return (
    <main className="min-h-screen flex flex-col bg-white text-black">
      <TubelightNavbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <WhoItIsForSection />
      <AdvantageSection />
      <TrustLayerSection />
      <SocialProofSection />
      <CloserSection />
      <FooterSection />
    </main>
  );
};

export default ProductPage;
