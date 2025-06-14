
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

const Index = () => {
  return (
    <div className="min-h-screen bg-ink-black">
      <HeroSection />
      <StorySection />        {/* Section 1 */}
      <ProblemSection />      {/* Section 2 */}
      <FeaturesSection />     {/* Section 3 */}
      <WhoItIsForSection />   {/* Section 4 */}
      <AdvantageSection />    {/* Section 5 */}
      <TrustLayerSection />   {/* Section 6 */}
      <SocialProofSection />  {/* Section 7 */}
      <CloserSection />       {/* Section 8 */}
      <FooterSection />
    </div>
  );
};

export default Index;
