import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";

import { WhyUs } from "@/components/WhyUs";
import { UNXToken } from "@/components/UNXToken";
import { InvestmentForm } from "@/components/InvestmentForm";
import { BusinessPresentation } from "@/components/BusinessPresentation";
import { UniLiveEvents } from "@/components/UniLiveEvents";
import AppInterface from "@/components/AppInterface";
import { Cornerstone } from "@/components/Cornerstone";

import { Roadmap } from "@/components/Roadmap";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyActions } from "@/components/StickyActions";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProblemSolution />
      
      <WhyUs />
      <UNXToken />
      <InvestmentForm />
      <BusinessPresentation />
      <AppInterface />
      <UniLiveEvents />
      <Cornerstone />
      
      <Roadmap />
      <FAQ />
      <Footer />
      <StickyActions />
      <ChatBot />
    </div>
  );
};

export default Index;
