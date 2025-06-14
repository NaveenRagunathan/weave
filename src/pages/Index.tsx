
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
import FlowLineSystem from '@/components/transitions/FlowLineSystem';

const Index = () => {
  return (
    <div className="min-h-screen bg-ink-black relative">
      <HeroSection />
      
      {/* Hero → Story Transition */}
      <SectionTransition type="bridge" fromSection="hero" toSection="story">
        <FlowLineSystem pattern="smooth" intensity="medium" color="jade" />
        <NarrativeBridge 
          text="When capital flows..." 
          subtext="civilizations rise"
          intensity="subtle"
        />
      </SectionTransition>
      
      <StorySection />
      
      {/* Story → Problem Transition */}
      <SectionTransition type="reveal" fromSection="story" toSection="problem">
        <FlowLineSystem pattern="disrupted" intensity="high" color="crimson" />
        <NarrativeBridge 
          text="But something's blocking the flow..." 
          subtext="The old pipes are broken"
          intensity="medium"
        />
      </SectionTransition>
      
      <ProblemSection />
      
      {/* Problem → Features Transition */}
      <SectionTransition type="transform" fromSection="problem" toSection="features">
        <FlowLineSystem pattern="explosive" intensity="high" color="mixed" />
        <NarrativeBridge 
          text="WEAVE cuts through..." 
          subtext="Liberation through innovation"
          intensity="dramatic"
        />
      </SectionTransition>
      
      <FeaturesSection />
      
      {/* Features → Who It's For Transition */}
      <SectionTransition type="portal" fromSection="features" toSection="who">
        <FlowLineSystem pattern="converging" intensity="medium" color="jade" />
        <NarrativeBridge 
          text="Built for the new builders..." 
          subtext="Your empire awaits"
          intensity="medium"
        />
      </SectionTransition>
      
      <WhoItIsForSection />
      
      {/* Who It's For → Advantage Transition */}
      <SectionTransition type="reveal" fromSection="who" toSection="advantage">
        <FlowLineSystem pattern="smooth" intensity="medium" color="mixed" />
        <NarrativeBridge 
          text="Compare the difference..." 
          subtext="See the transformation"
          intensity="medium"
        />
      </SectionTransition>
      
      <AdvantageSection />
      
      {/* Advantage → Trust Transition */}
      <SectionTransition type="bridge" fromSection="advantage" toSection="trust">
        <FlowLineSystem pattern="converging" intensity="low" color="jade" />
        <NarrativeBridge 
          text="Secured by trust..." 
          subtext="Built on unbreakable foundations"
          intensity="subtle"
        />
      </SectionTransition>
      
      <TrustLayerSection />
      
      {/* Trust → Social Proof Transition */}
      <SectionTransition type="portal" fromSection="trust" toSection="proof">
        <FlowLineSystem pattern="smooth" intensity="medium" color="gold" />
        <NarrativeBridge 
          text="Proven by thousands..." 
          subtext="Join the movement"
          intensity="medium"
        />
      </SectionTransition>
      
      <SocialProofSection />
      
      {/* Social Proof → Closer Transition */}
      <SectionTransition type="transform" fromSection="proof" toSection="closer">
        <FlowLineSystem pattern="explosive" intensity="high" color="jade" />
        <NarrativeBridge 
          text="Ready to join the future?" 
          subtext="Your moment is now"
          intensity="dramatic"
        />
      </SectionTransition>
      
      <CloserSection />
      <FooterSection />
    </div>
  );
};

export default Index;
