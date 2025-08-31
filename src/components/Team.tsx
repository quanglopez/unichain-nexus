import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building, Award, Globe } from "lucide-react";

export const Team = () => {
  const teamMembers = [
    {
      role: "CEO",
      name: "Alex Chen",
      bio: "Former Goldman Sachs VP with 15+ years in fintech and blockchain. Led 3 successful Web3 ventures.",
      expertise: ["Strategic Leadership", "Financial Markets", "Web3 Innovation"]
    },
    {
      role: "CMO", 
      name: "Sarah Kim",
      bio: "Ex-Meta marketing director specializing in global growth strategies and community building at scale.",
      expertise: ["Growth Marketing", "Community Building", "Brand Strategy"]
    },
    {
      role: "Independent Director",
      name: "Dr. Michael Zhang",
      bio: "Professor of Blockchain Technology at Stanford, advisor to 50+ crypto projects, published researcher.",
      expertise: ["Blockchain Research", "Technical Advisory", "Academic Partnerships"]
    },
    {
      role: "Advisor",
      name: "Lisa Rodriguez",
      bio: "Former Coinbase Director of Partnerships, specialized in institutional adoption and regulatory compliance.",
      expertise: ["Regulatory Compliance", "Institutional Partnerships", "Market Strategy"]
    }
  ];

  const partners = [
    "BitMart", "EMURGO", "TAISU", "JuCoin", "AC Capital", 
    "DePIN X", "Moore Labs", "Crypto X", "BlockTower", "Alameda Research"
  ];

  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-glow">Team & Partners</span>
            <br />
            <span className="text-foreground/80">Building the Future Together</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Backed by industry veterans and leading blockchain organizations
          </p>
        </div>

        {/* Official Team Presentation */}
        <div className="mb-16">
          <Card className="glass overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/78dd16a9-f8fc-4a52-abf9-a081868ec3bd.png"
                alt="UniLive Team - Steven (CEO), Christy (CMO), Jonathan (Independent Director & Advisor), Timur (Advisor)"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="glass group hover:glow-green transition-smooth">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {member.role}
                  </Badge>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {member.bio}
                </p>
                <div className="space-y-2">
                  <h5 className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">
                    Expertise
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partners & Investors */}
        <div className="space-y-12">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-3">
                <Building className="w-6 h-6 text-primary" />
                Strategic Partners & Investors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
                {partners.map((partner, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                    <div className="text-lg font-semibold text-foreground/80">
                      {partner}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Exclusive Support */}
          <Card className="glass border-primary/30">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                Exclusive Support: Crypto X
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Globe className="w-8 h-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Omni-Channel Growth</h4>
                  <p className="text-sm text-foreground/80">
                    Multi-platform marketing and user acquisition strategies
                  </p>
                </div>
                <div className="space-y-2">
                  <Building className="w-8 h-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Brand Support</h4>
                  <p className="text-sm text-foreground/80">
                    Strategic branding and positioning for global markets
                  </p>
                </div>
                <div className="space-y-2">
                  <Award className="w-8 h-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Data Optimization</h4>
                  <p className="text-sm text-foreground/80">
                    Advanced analytics and performance optimization
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Global Expansion */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-center">Global Expansion & Community</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "🌏 Asia-Pacific Hub",
                  "🌍 European Expansion",
                  "🌎 Americas Growth",
                  "🚀 Community Campaigns"
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-secondary/20 rounded-lg">
                    <div className="text-2xl mb-2">{item.split(' ')[0]}</div>
                    <div className="text-sm font-medium">{item.split(' ').slice(1).join(' ')}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};