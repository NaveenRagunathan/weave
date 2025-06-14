
import React from 'react';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import ProblemSection from '@/components/ProblemSection';
import FeaturesSection from '@/components/FeaturesSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-ink-black">
      <HeroSection />
      <StorySection />
      <ProblemSection />
      <FeaturesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
