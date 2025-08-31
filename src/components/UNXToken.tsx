import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Coins, 
  Vote, 
  TrendingUp, 
  Gift, 
  MessageSquare,
  Info,
  Target
} from "lucide-react";

export const UNXToken = () => {
  const utilities = [
    {
      icon: TrendingUp,
      title: "Trading Fee Discounts",
      description: "Reduce trading costs across UniMex platform"
    },
    {
      icon: Gift,
      title: "HODL Mining Rewards",
      description: "Earn rewards for holding UNX tokens"
    },
    {
      icon: Vote,
      title: "Voting & ILO Privileges",
      description: "Governance rights and early access to launches"
    },
    {
      icon: MessageSquare,
      title: "Social Engagement Spending",
      description: "Use UNX for tipping, content, and interactions"
    }
  ];

  const tokenomicsData = [
    { label: "Total Supply Target", value: "1,000,000,000 UNX" },
    { label: "First Month Issuance", value: "500,000 tokens" },
    { label: "Growth Schedule 2025", value: "10% monthly" },
    { label: "Growth Schedule 2026", value: "8% monthly" },
    { label: "Growth Schedule 2027", value: "5% monthly" },
    { label: "Growth Schedule 2028-2030", value: "3% monthly" },
    { label: "Growth Schedule 2031-2034", value: "2% monthly" }
  ];

  return (
    <section id="unx-token" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-glow">UNX Token</span>
            <br />
            <span className="text-foreground/80">Utilities & Economics</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            The native token powering the entire UniLive × UniMex ecosystem
          </p>
        </div>

        {/* Utilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {utilities.map((utility, index) => {
            const IconComponent = utility.icon;
            return (
              <Card key={index} className="glass text-center group hover:glow-green transition-smooth">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{utility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">{utility.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tokenomics */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tokenomics Table */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Coins className="w-6 h-6 text-primary" />
                Tokenomics Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tokenomicsData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-foreground/80">{item.label}</span>
                    <Badge variant="secondary" className="font-semibold">
                      {item.value}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Optimal Holding Zone */}
          <Card className="glass border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Optimal Holding Zone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-primary/10 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Daily Token Distribution</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-foreground/70">Personal Holding Reward</span>
                      <div className="font-semibold">50%</div>
                    </div>
                    <div>
                      <span className="text-foreground/70">Community Holding Reward</span>
                      <div className="font-semibold">50%</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold mb-1">Optimal Zone Benefits</h5>
                      <p className="text-sm text-foreground/80">
                        When you hold within the optimal zone, &gt;60% of daily tokens are distributed 
                        to optimal-zone holders, maximizing your rewards potential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button variant="hero" size="lg">
            <Coins className="w-5 h-5 mr-2" />
            Get UNX
          </Button>
          <Button variant="neon" size="lg">
            <Target className="w-5 h-5 mr-2" />
            Lock UNX
          </Button>
          <Button variant="ghost" size="lg">
            <Info className="w-5 h-5 mr-2" />
            View Holding Rewards Guide
          </Button>
        </div>
      </div>
    </section>
  );
};