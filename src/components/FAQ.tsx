import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is ILO and how does it differ from IEO/IDO?",
      answer: "ILO (Initial Live Offering) is our innovative token launch method via livestream. Unlike traditional IEO/IDO that rely on static documentation, ILO features real-time interaction with creators, live Q&A sessions, transparent community engagement, and immediate trust building through direct communication."
    },
    {
      question: "How can I participate in an ILO?",
      answer: "To participate in an ILO, download the UniLive app, complete KYC verification, and join the livestream when the launch begins. You'll be able to interact directly with creators, ask questions, and participate in the token offering in real-time."
    },
    {
      question: "What are the main utilities of UNX token?",
      answer: "UNX provides multiple utilities: trading fee discounts on UniMex, HODL mining rewards for holding tokens, voting rights and ILO privileges for governance, and social engagement spending for tipping and content interactions within the ecosystem."
    },
    {
      question: "How do holding rewards work?",
      answer: "Daily token distribution splits 50% to Personal Holding Rewards and 50% to Community Holding Rewards. When you hold within the optimal zone, over 60% of daily tokens are distributed to optimal-zone holders, maximizing your reward potential based on your holding behavior."
    },
    {
      question: "What are the Cornerstone Program eligibility requirements?",
      answer: "Cornerstone Program has four tiers: Rising Star (30 days, ≥$100), Elite (90 days, ≥$1,000), Veteran (180 days, ≥$3,000), and Pinnacle (360 days, ≥$5,000). All participants must complete KYC verification and meet regulatory requirements in their jurisdiction."
    },
    {
      question: "What fees can I expect and what are the risks?",
      answer: "Trading fees on UniMex are competitive with standard industry rates, with additional discounts for UNX holders. Digital assets carry high volatility risk, and all investment decisions should be based on your own research. Past performance doesn't guarantee future results."
    },
    {
      question: "Is the platform available globally and what about KYC?",
      answer: "UniLive × UniMex aims for global availability, but certain features may be restricted based on local regulations. KYC verification is required for most platform features to ensure compliance with financial regulations in your jurisdiction."
    },
    {
      question: "How do I download and start using the apps?",
      answer: "UniLive app will be available on iOS and Android app stores. UniMex can be accessed through web browsers with no heavy downloads required. Start with creating an account, completing verification, and exploring the platform features."
    },
    {
      question: "What support channels are available?",
      answer: "We provide 24/7 support through Telegram, Discord, and WhatsApp. Premium Cornerstone members receive dedicated customer support with faster response times and priority handling."
    },
    {
      question: "How is security and compliance ensured?",
      answer: "Our platform follows bank-level security standards with regular audits, multi-layer encryption, and compliance with relevant financial regulations. All smart contracts undergo thorough security audits before deployment."
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-glow">Frequently Asked</span>
            <br />
            <span className="text-foreground/80">Questions</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Everything you need to know about UniLive × UniMex
          </p>
        </div>

        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-3">
              <HelpCircle className="w-6 h-6 text-primary" />
              Got Questions? We Have Answers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};