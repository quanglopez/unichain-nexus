import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Shield, 
  Star, 
  Crown, 
  Trophy, 
  Gem,
  DollarSign,
  Calendar,
  TrendingUp,
  Award
} from "lucide-react";

export const Cornerstone = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    country: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/24448578/uhewpwm/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          formType: "Cornerstone Program Application",
          name: formData.name,
          email: formData.email,
          telegram: formData.telegram,
          country: formData.country,
          timestamp: new Date().toISOString(),
          source: "UniLive Cornerstone Form"
        }),
      });

      toast({
        title: "Application Submitted!",
        description: "Thank you for applying to the Cornerstone Program. We'll review your application and contact you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        telegram: "",
        country: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Application Sent",
        description: "Your application has been submitted. We'll review it and contact you soon.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const tiers = [
    {
      icon: Star,
      name: "Rising Star",
      duration: "30 days",
      minimum: "≥$100",
      rate: "Example: 8.5% monthly",
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    },
    {
      icon: Crown,
      name: "Elite",
      duration: "90 days",
      minimum: "≥$1,000", 
      rate: "Example: 12.3% monthly",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30"
    },
    {
      icon: Trophy,
      name: "Veteran",
      duration: "180 days",
      minimum: "≥$3,000",
      rate: "Example: 15.8% monthly",
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    },
    {
      icon: Gem,
      name: "Pinnacle",
      duration: "360 days",
      minimum: "≥$5,000",
      rate: "Example: 22.1% monthly",
      color: "bg-primary/20 text-primary border-primary/30"
    }
  ];

  const benefits = [
    "Performance-based rate differentials",
    "Exclusive subsidies and rewards",
    "Priority access to new features",
    "Advanced analytics and insights",
    "Dedicated customer support",
    "Special governance privileges"
  ];

  return (
    <section id="cornerstone" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-glow">Cornerstone Program</span>
            <br />
            <span className="text-foreground/80">Bank-Level Security & Compliance</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            A premium staking program aligned with institutional standards for fund security and regulatory compliance
          </p>
        </div>

        {/* Multiplication Ark Tiers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Multiplication Ark Tiers
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <Card key={index} className={`glass border-2 ${tier.color} group hover:glow-green transition-smooth`}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 text-foreground/60" />
                      <span className="text-sm font-medium">{tier.duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <DollarSign className="w-4 h-4 text-foreground/60" />
                      <span className="text-sm font-medium">{tier.minimum}</span>
                    </div>
                    <Badge variant="secondary" className="w-full justify-center">
                      {tier.rate}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-foreground/60">
              * Rates shown are illustrative examples from documentation and not guaranteed. 
              Not financial advice. Conduct your own research.
            </p>
          </div>
        </div>

        {/* Singularity Ladder Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Singularity Ladder Benefits
          </h3>
          
          <Card className="glass">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Application Form */}
        <Card className="glass max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Apply to Cornerstone Program
            </CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your full name" 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="telegram">Telegram Username</Label>
                  <Input 
                    id="telegram" 
                    placeholder="@yourusername" 
                    value={formData.telegram}
                    onChange={(e) => setFormData(prev => ({ ...prev, telegram: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input 
                    id="country" 
                    placeholder="Your country" 
                    value={formData.country}
                    onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                  />
                </div>
              </div>
              
              <div className="p-4 bg-secondary/20 rounded-lg">
                <p className="text-sm text-foreground/80">
                  <strong>Note:</strong> KYC verification and compliance checks will be required. 
                  Please ensure you meet all regulatory requirements in your jurisdiction.
                </p>
              </div>
              
              <Button 
                type="submit"
                variant="hero" 
                size="lg" 
                disabled={isLoading}
                className="w-full disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 mr-2 animate-spin border-2 border-white/30 border-t-white rounded-full"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </CardContent>
          </form>
        </Card>
      </div>
    </section>
  );
};