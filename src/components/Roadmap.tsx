import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Clock, Target, Rocket } from "lucide-react";

export const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Strategic Foundation",
      status: "completed",
      timeframe: "Q1 2024",
      icon: CheckCircle,
      milestones: [
        "Team assembly and advisory board formation",
        "Core technology architecture design",
        "Initial funding and partnership agreements",
        "Regulatory framework establishment"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Infrastructure Launch",
      status: "current",
      timeframe: "Q2-Q3 2024",
      icon: Clock,
      milestones: [
        "UniLive platform MVP development",
        "UniMex trading engine integration",
        "UNX token smart contract deployment",
        "Security audits and compliance reviews"
      ]
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Shaping",
      status: "upcoming",
      timeframe: "Q4 2024 - Q1 2025",
      icon: Circle,
      milestones: [
        "ILO feature rollout and beta testing",
        "Community building and creator onboarding",
        "Cross-chain integration development", 
        "Cornerstone Program launch"
      ]
    },
    {
      phase: "Phase 4",
      title: "Global Integration",
      status: "upcoming",
      timeframe: "Q2-Q3 2025",
      icon: Target,
      milestones: [
        "Full platform public launch",
        "International market expansion",
        "Strategic partnerships activation",
        "Advanced trading features deployment"
      ]
    },
    {
      phase: "Phase 5",
      title: "Value Realization & Future Apps",
      status: "upcoming", 
      timeframe: "Q4 2025+",
      icon: Rocket,
      milestones: [
        "Ecosystem maturity and optimization",
        "Next-generation feature development",
        "Decentralized governance implementation",
        "Innovation lab and R&D expansion"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400 border-green-400/30 bg-green-400/10";
      case "current":
        return "text-primary border-primary/30 bg-primary/10";
      default:
        return "text-foreground/60 border-foreground/20 bg-foreground/5";
    }
  };

  const getStatusIcon = (status: string, IconComponent: any) => {
    if (status === "completed") return CheckCircle;
    if (status === "current") return Clock;
    return IconComponent;
  };

  return (
    <section id="roadmap" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-glow">Development Roadmap</span>
            <br />
            <span className="text-foreground/80">Our Journey to Web3 Excellence</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            From strategic foundation to global ecosystem realization
          </p>
        </div>

        {/* Official Roadmap Image */}
        <div className="mb-16">
          <Card className="glass overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/bd606c5b-c261-4404-a21e-7ba8a600d03b.png"
                alt="UniLive Future Development Plan - Roadmap from 2024 Q1-Q3 through 2026 Q3-Q4 with detailed milestones including Industry Analysis, Ecological Expansion, Global Expansion, and Web2&Web3 capitolize operation"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};