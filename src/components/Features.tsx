import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  Globe, 
  ShoppingCart,
  Bot,
  Languages
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Video,
      title: "Live Token Issuance (ILO)",
      description: "Run token launches on livestream with transparent rules and community interaction",
      badges: ["Transparent", "Interactive", "Community-Driven"],
      highlight: true
    },
    {
      icon: Bot,
      title: "AIGC & Real-time AI Translation",
      description: "Auto-generate content with live captions and voice in multiple languages",
      badges: ["AI-Powered", "Global Reach", "Auto-Generated"],
      highlight: false
    },
    {
      icon: MessageSquare,
      title: "Social + E-commerce Stack",
      description: "Complete suite: short video, IM/chat, mini-series, tipping, live-commerce",
      badges: ["Social", "Commerce", "Content"],
      highlight: false
    },
    {
      icon: TrendingUp,
      title: "Interactive Trading (UniMex)",
      description: "One-click entry with smart strategy helpers and multi-scenario coverage",
      badges: ["One-Click", "Smart Trading", "Multi-Asset"],
      highlight: true
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-glow">Revolutionary Features</span>
            <br />
            <span className="text-foreground/80">for Web3 Innovation</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Everything you need to launch, trade, and grow in the decentralized economy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className={`glass transition-smooth hover:glow-green group ${
                  feature.highlight ? 'border-primary/30' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      feature.highlight ? 'bg-primary/20' : 'bg-secondary/50'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        feature.highlight ? 'text-primary' : 'text-foreground'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {feature.badges.map((badge) => (
                          <Badge 
                            key={badge} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* YouTube Videos Section */}
        <div className="mt-16 space-y-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Watch UniLive × UniMex in Action
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Presentation Video */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">Presentation of UniLive and UniMex</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/9V-CtfulQqs"
                    title="Presentation of UniLive and UniMex"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Global Livestream Preview Video */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">UniLive UniMex Global Livestream Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/-dmDMB-CoKo"
                    title="UniLive UniMex Global Livestream Preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comparison Table for ILO vs IEO/IDO */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-primary">ILO</span> vs Traditional Token Launches
          </h3>
          
          <Card className="glass">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold text-primary">ILO (UniLive)</th>
                      <th className="text-center p-4 font-semibold text-foreground/60">IEO/IDO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Transparency",
                        ilo: "Live Q&A, real-time interaction",
                        traditional: "Limited documentation"
                      },
                      {
                        feature: "Community Building",
                        ilo: "Active engagement during launch",
                        traditional: "Post-launch community efforts"
                      },
                      {
                        feature: "Trust Factor",
                        ilo: "Direct creator interaction",
                        traditional: "Platform-mediated trust"
                      },
                      {
                        feature: "Accessibility",
                        ilo: "Global livestream audience",
                        traditional: "Platform restrictions"
                      }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center text-primary">{row.ilo}</td>
                        <td className="p-4 text-center text-foreground/60">{row.traditional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};