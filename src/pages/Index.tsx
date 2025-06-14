
import React from 'react';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection'; // Section 1
import ProblemSection from '@/components/ProblemSection'; // Section 2
import FeaturesSection from '@/components/FeaturesSection'; // Section 3
import WhoItIsForSection from '@/components/WhoItIsForSection'; // Section 4
import AdvantageSection from '@/components/AdvantageSection'; // Section 5
import TrustLayerSection from '@/components/TrustLayerSection'; // Section 6
import SocialProofSection from '@/components/SocialProofSection'; // Section 7
import CloserSection from '@/components/CloserSection'; // Section 8
import FooterSection from '@/components/FooterSection';

// Transition Components
import SectionTransition from '@/components/transitions/SectionTransition';
import NarrativeBridge from '@/components/transitions/NarrativeBridge';

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
      
      {/* Story Section with seamless transition overlay */}
      <div className="relative">
        <StorySection />
        <SectionTransition type="bridge" fromSection="hero" toSection="story">
          <NarrativeBridge 
            text="When capital flows..." 
            subtext="civilizations rise"
            intensity="subtle"
          />
        </SectionTransition>
      </div>
      
      {/* Problem Section with seamless transition overlay */}
      <div className="relative">
        <TensionBuilder type="stress" intensity="medium">
          <ProblemSection />
        </TensionBuilder>
        <SectionTransition type="reveal" fromSection="story" toSection="problem">
          <NarrativeBridge 
            text="But something's blocking the flow..." 
            subtext="The old pipes are broken"
            intensity="medium"
          />
        </SectionTransition>
      </div>
      
      {/* Features Section with seamless transition overlay */}
      <div className="relative">
        <TensionBuilder type="breakthrough" intensity="high">
          <FeaturesSection />
        </TensionBuilder>
        <SectionTransition type="transform" fromSection="problem" toSection="features">
          <NarrativeBridge 
            text="WEAVE cuts through..." 
            subtext="Liberation through innovation"
            intensity="dramatic"
          />
        </SectionTransition>
      </div>
      
      {/* Who It's For Section with seamless transition overlay */}
      <div className="relative">
        <WhoItIsForSection />
        <SectionTransition type="portal" fromSection="features" toSection="who">
          <NarrativeBridge 
            text="Built for the new builders..." 
            subtext="Your empire awaits"
            intensity="medium"
          />
        </SectionTransition>
      </div>
      
      {/* Advantage Section with seamless transition overlay */}
      <div className="relative">
        <AdvantageSection />
        <SectionTransition type="reveal" fromSection="who" toSection="advantage">
          <NarrativeBridge 
            text="Compare the difference..." 
            subtext="See the transformation"
            intensity="medium"
          />
        </SectionTransition>
      </div>
      
      {/* Trust Section with seamless transition overlay */}
      <div className="relative">
        <TensionBuilder type="relief" intensity="medium">
          <TrustLayerSection />
        </TensionBuilder>
        <SectionTransition type="bridge" fromSection="advantage" toSection="trust">
          <NarrativeBridge 
            text="Secured by trust..." 
            subtext="Built on unbreakable foundations"
            intensity="subtle"
          />
        </SectionTransition>
      </div>
      
      {/* Social Proof Section with seamless transition overlay */}
      <div className="relative">
        <SocialProofSection />
        <SectionTransition type="portal" fromSection="trust" toSection="proof">
          <NarrativeBridge 
            text="Proven by thousands..." 
            subtext="Join the movement"
            intensity="medium"
          />
        </SectionTransition>
      </div>
      
      {/* Closer Section with seamless transition overlay */}
      <div className="relative">
        <TensionBuilder type="buildup" intensity="high">
          <CloserSection />
        </TensionBuilder>
        <SectionTransition type="transform" fromSection="proof" toSection="closer">
          <NarrativeBridge 
            text="Ready to join the future?" 
            subtext="Your moment is now"
            intensity="dramatic"
          />
        </SectionTransition>
      </div>
      
      <FooterSection />
    </div>
  );
};

export default Index;
