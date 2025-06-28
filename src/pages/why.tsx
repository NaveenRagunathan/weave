import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/ui/tubelight-navbar";
import Section1 from "./why/Section1_GlobalShift.tsx";
import Section2 from "./why/Section2_GeopoliticalShift.tsx";
import Section3 from "./why/Section3_Bottleneck.tsx";
import Section4 from "./why/Section4_DigitalSilkRoad.tsx";
import Section5 from "./why/Section5_Comparison.tsx";
import FinalRallySection from "./home/FooterSection.tsx";

const WhyPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <FinalRallySection />
      <Footer />
    </div>
  );
};

export default WhyPage;
