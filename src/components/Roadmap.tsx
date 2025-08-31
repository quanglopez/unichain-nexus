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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-foreground/20 hidden lg:block"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => {
              const StatusIcon = getStatusIcon(phase.status, phase.icon);
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block z-10"></div>
                  
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${!isLeft ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <Card className={`glass ${phase.status === 'current' ? 'border-primary/30 glow-green' : ''} ${!isLeft ? 'lg:col-start-2' : ''}`}>
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <StatusIcon className={`w-6 h-6 ${
                            phase.status === 'completed' ? 'text-green-400' :
                            phase.status === 'current' ? 'text-primary' : 'text-foreground/60'
                          }`} />
                          <Badge variant="secondary" className={getStatusColor(phase.status)}>
                            {phase.timeframe}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">
                          {phase.phase}: {phase.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {phase.milestones.map((milestone, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                phase.status === 'completed' ? 'bg-green-400' :
                                phase.status === 'current' ? 'bg-primary' : 'bg-foreground/40'
                              }`}></div>
                              <span className="text-sm text-foreground/80">{milestone}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Visual placeholder */}
                    <div className={`hidden lg:block ${isLeft ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                      <div className="w-full h-40 glass rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <StatusIcon className={`w-16 h-16 mx-auto mb-2 ${
                            phase.status === 'completed' ? 'text-green-400' :
                            phase.status === 'current' ? 'text-primary' : 'text-foreground/60'
                          }`} />
                          <p className="text-sm text-foreground/60">{phase.phase}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};