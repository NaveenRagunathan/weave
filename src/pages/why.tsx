import Navbar from "@/components/ui/tubelight-navbar";
import GlobalShift from "./why/GlobalShift";
import ChinaAfricaTrade from "./why/ChinaAfricaTrade";
import GeopoliticalShift from "./why/GeopoliticalShift";
import Bottleneck from "./why/Bottleneck";
import DigitalSilkRoad from "./why/DigitalSilkRoad";
import Comparison from "./why/Comparison";
import FinalRallySection from "./home/FooterSection.tsx";

const WhyPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <GlobalShift />
      <ChinaAfricaTrade />
      <GeopoliticalShift />
      <Bottleneck />
      <DigitalSilkRoad />
      <Comparison />
      <FinalRallySection />
    </div>
  );
};

export default WhyPage;
