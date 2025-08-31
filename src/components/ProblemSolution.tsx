import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Video, TrendingUp, Link } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            From <span className="text-destructive">Fragmented Web3</span> to{" "}
            <span className="text-glow">Unified Ecosystem</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Breaking down the barriers between content, community, and capital in Web3
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problem */}
          <Card className="glass border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-destructive">
                <AlertTriangle className="w-6 h-6" />
                The Problem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">
                    <strong>Complex Web3 onboarding</strong> — Users struggle with wallet setup, gas fees, and fragmented platforms
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">
                    <strong>Fragile post-launch liquidity</strong> — Token launches often fail due to lack of ongoing engagement and utility
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">
                    <strong>Disconnected user journeys</strong> — Content, social interaction, and trading exist in separate silos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="glass border-primary/20 glow-green">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <CheckCircle className="w-6 h-6" />
                Our Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Video className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">ILO via Livestream (UniLive)</h4>
                    <p className="text-sm text-foreground/80">
                      Transparent token launches with real-time Q&A and community trust building
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">InterTradeFi (UniMex)</h4>
                    <p className="text-sm text-foreground/80">
                      Instant access, simplified trading, and earn-by-holding across DeFi/NFT/GameFi
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Link className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Value Bridge</h4>
                    <p className="text-sm text-foreground/80">
                      Seamless flow from content engagement to asset circulation in one ecosystem
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};