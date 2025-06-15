
import React from 'react';
import HeroSection from '@/pages/product/HeroSection';
import StorySection from '@/pages/product/StorySection'; // Section 1
import ProblemSection from '@/pages/product/ProblemSection'; // Section 2
import FeaturesSection from '@/pages/product/FeaturesSection'; // Section 3
import WhoItIsForSection from '@/pages/product/WhoItIsForSection'; // Section 4
import AdvantageSection from '@/pages/product/AdvantageSection'; // Section 5
import TrustLayerSection from '@/pages/product/TrustLayerSection'; // Section 6
import SocialProofSection from '@/pages/product/SocialProofSection'; // Section 7
import CloserSection from '@/pages/product/CloserSection'; // Section 8
import FooterSection from '@/pages/product/FooterSection';

// Interaction Components
import ProgressIndicator from '@/components/interactions/ProgressIndicator';
import TensionBuilder from '@/components/interactions/TensionBuilder';

// Hooks
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Index = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const sections = [
    'Hero', 'Story', 'Problem', 'Features', 
    'Who It\'s For', 'Advantage', 'Trust', 
    'Social Proof', 'Closer'
  ];

  return (
    <div className="min-h-screen bg-ink-black relative">
      {/* Progress Indicator */}
      {!prefersReducedMotion && (
        <ProgressIndicator sections={sections} />
      )}
      
      <HeroSection />
      <StorySection />
      
      <TensionBuilder type="stress" intensity="medium">
        <ProblemSection />
      </TensionBuilder>
      
      <TensionBuilder type="breakthrough" intensity="high">
        <FeaturesSection />
      </TensionBuilder>
      
      <WhoItIsForSection />
      <AdvantageSection />
      
      <TensionBuilder type="relief" intensity="medium">
        <TrustLayerSection />
      </TensionBuilder>
      
      <SocialProofSection />
      
      <TensionBuilder type="buildup" intensity="high">
        <CloserSection />
      </TensionBuilder>
      
      <FooterSection />
    </div>
  );
};

export default Index;
