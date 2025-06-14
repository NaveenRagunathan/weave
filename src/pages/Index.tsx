
import React from 'react';
import PainPointSection from '@/components/PainPointSection';
import VisionSection from '@/components/VisionSection';
import WeaponSection from '@/components/WeaponSection';
import USDCSection from '@/components/USDCSection';
import WhoItIsForSection from '@/components/WhoItIsForSection';
import TrustLayerSection from '@/components/TrustLayerSection';
import SocialProofSection from '@/components/SocialProofSection';
import CloserSection from '@/components/CloserSection';
import FooterSection from '@/components/FooterSection';

// Interaction Components
import ProgressIndicator from '@/components/interactions/ProgressIndicator';
import TensionBuilder from '@/components/interactions/TensionBuilder';

// Hooks
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Index = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const sections = [
    'Pain Points', 'Vision', 'WEAVE Weapon', 'USDC Power',
    'Who It\'s For', 'Trust Layer', 'Social Proof', 'Final Call'
  ];

  return (
    <div className="min-h-screen bg-ink-black relative">
      {/* Progress Indicator */}
      {!prefersReducedMotion && (
        <ProgressIndicator sections={sections} />
      )}
      
      <TensionBuilder type="stress" intensity="high">
        <PainPointSection />
      </TensionBuilder>
      
      <TensionBuilder type="breakthrough" intensity="medium">
        <VisionSection />
      </TensionBuilder>
      
      <TensionBuilder type="breakthrough" intensity="high">
        <WeaponSection />
      </TensionBuilder>
      
      <TensionBuilder type="relief" intensity="medium">
        <USDCSection />
      </TensionBuilder>
      
      <WhoItIsForSection />
      
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
