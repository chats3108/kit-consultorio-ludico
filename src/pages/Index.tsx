import Hero from "@/components/Hero";
import Preview from "@/components/Preview";
import ForWhom from "@/components/ForWhom";
import WhatChanges from "@/components/WhatChanges";
import DarkSection from "@/components/DarkSection";
import WhatYouGet from "@/components/WhatYouGet";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Preview />
      <ForWhom />
      <WhatChanges />
      <DarkSection />
      <WhatYouGet />
      <SocialProof />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
