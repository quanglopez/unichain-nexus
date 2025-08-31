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

        {/* Investment Institutions */}
        <div className="mb-12">
          <Card className="glass overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/cc1f0478-2e21-4b7d-8db1-b93af77e6c32.png"
                alt="Investment Institution Partners - BitMart, EMURGO, TAISU, JuCoin, ADAVERSE, AC Capital, DePIN X, Moore Labs"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        {/* Exclusive Support */}
        <div className="mb-12">
          <Card className="glass overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/cf08c31d-70d8-4740-8ca8-d250970df386.png"
                alt="Exclusive Support by Crypto X - Web3.0 Growth-as-a-Service Platform"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        {/* UniLive Partnerships */}
        <div className="mb-12 space-y-8">
          <Card className="glass overflow-hidden">
            <CardHeader>
              <CardTitle className="text-center">Strategic Partnerships & Collaborations</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/96b7f7ff-bd59-46dd-89fe-066241052d5f.png"
                alt="UniLive Strategic Partnerships - ROOTDATA, Endless, GBox, APRO, Genpharmchain, REI, GDP, ESCC, ccarbon, Neutron, shibamini, PredX, FIREVERSE, KRANCH, EMC HUB PARTNERS, MiniFlix"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>

          <Card className="glass overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/3880bd3e-679f-4cdc-9669-a799f7379949.png"
                alt="UniLive Partnership Announcements - MetaSpaceX, HAJYO, Wang, TradingBase, Unkomon, AIRDAO, CADUCEUS, EMC HUB, STRATOS, UTK, Ner3, Nixa Global"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        {/* Partners & Investors */}
        <div className="space-y-12">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-3">
                <Building className="w-6 h-6 text-primary" />
                Additional Strategic Partners
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

          {/* Global Expansion */}
          <Card className="glass overflow-hidden">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                Global Expansion & Community
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/9440da35-b36f-4328-bd08-28f7ea8bae86.png"
                alt="UniLive Global Expansion - Worldwide presence in China, Japan, Korea, United States, Vietnam, Thailand, Malaysia, Indonesia, Singapore, Europe, Dubai, Africa, Brazil and more"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};