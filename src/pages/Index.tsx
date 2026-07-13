import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";

// Below-the-fold: dividido por chunk pra reduzir JS inicial e melhorar TBT/LCP
const Preview = lazy(() => import("@/components/Preview"));
const ForWhom = lazy(() => import("@/components/ForWhom"));
const WhatChanges = lazy(() => import("@/components/WhatChanges"));
const DarkSection = lazy(() => import("@/components/DarkSection"));
const WhatYouGet = lazy(() => import("@/components/WhatYouGet"));
const SocialProof = lazy(() => import("@/components/SocialProof"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Guarantee = lazy(() => import("@/components/Guarantee"));
const FAQ = lazy(() => import("@/components/FAQ"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Suspense fallback={<div className="h-40" aria-hidden />}>
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
      </Suspense>
    </div>
  );
};

export default Index;
