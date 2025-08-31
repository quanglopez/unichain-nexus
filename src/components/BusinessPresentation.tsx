import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Video } from "lucide-react";

export const BusinessPresentation = () => {
  const timezones = [
    { country: "Singapore", flag: "🇸🇬", time: "9:00 PM" },
    { country: "Nigeria", flag: "🇳🇬", time: "2:00 PM" },
    { country: "South Africa", flag: "🇿🇦", time: "3:00 PM" },
    { country: "Kenya", flag: "🇰🇪", time: "4:00 PM" },
    { country: "Uganda", flag: "🇺🇬", time: "4:00 PM" },
    { country: "Moscow", flag: "🇷🇺", time: "4:00 PM" },
    { country: "Kiev", flag: "🇺🇦", time: "4:00 PM" },
    { country: "Dubai", flag: "🇦🇪", time: "5:00 PM" },
    { country: "Astana", flag: "🇰🇿", time: "6:00 PM" },
    { country: "Bishkek", flag: "🇰🇬", time: "7:00 PM" },
    { country: "Vietnam", flag: "🇻🇳", time: "8:00 PM" },
    { country: "Philippines", flag: "🇵🇭", time: "9:00 PM" },
    { country: "Mongolia", flag: "🇲🇳", time: "9:00 PM" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-glow">Weekly Business</span>
            <br />
            <span className="text-foreground/80">Presentation Zoom</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Join our power-packed Zoom sessions where global communities discover UniMex's earning opportunities - no trading, no stress, just smart digital income.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Presentation Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/de56cef6-e386-404f-bf45-2df0d37c96c1.png" 
              alt="UniMex Business Presentation featuring Mr Hunter and Mr Michael"
              className="w-full rounded-xl shadow-elegant"
            />
          </div>

          {/* Meeting Details */}
          <div className="space-y-6">
            <Card className="glass border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Video className="w-6 h-6 text-primary" />
                  Meeting Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-sm text-foreground/60 mb-1">Zoom ID</div>
                    <div className="font-mono font-bold">986 809 8900</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-sm text-foreground/60 mb-1">Passcode</div>
                    <div className="font-mono font-bold">unx1000X</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-foreground/80">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Every Wednesday</span>
                </div>

                <Button 
                  asChild 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                >
                  <a 
                    href="https://us06web.zoom.us/j/9868098900?pwd=Q3F6bjVBenJvbjJydWtJcEZKOHpCZz09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Join Zoom Session
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Speakers */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Featured Speakers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">H</span>
                    </div>
                    <div>
                      <div className="font-semibold">Mr Hunter</div>
                      <div className="text-sm text-foreground/60">Special Guest</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center">
                      <span className="text-foreground font-bold">M</span>
                    </div>
                    <div>
                      <div className="font-semibold">Mr Michael</div>
                      <div className="text-sm text-foreground/60">Co-Host</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Community Leaders & Additional Speakers */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Global Community Leaders & Speakers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="glass overflow-hidden hover:scale-105 transition-smooth">
              <div className="relative">
                <img 
                  src="/lovable-uploads/325c4ae9-6510-4c01-ae53-e294c36c2517.png" 
                  alt="Denys Vasylkov - Web3 Talking Head"
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-4 text-center">
                <div className="font-semibold">Denys Vasylkov</div>
                <div className="text-sm text-foreground/60">Web3 Talking Head</div>
              </CardContent>
            </Card>

            <Card className="glass overflow-hidden hover:scale-105 transition-smooth">
              <div className="relative">
                <img 
                  src="/lovable-uploads/5ec055a1-41bb-4723-ad05-5b95267263dd.png" 
                  alt="Mr Jason - Europe Community Founder"
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-4 text-center">
                <div className="font-semibold">Mr Jason</div>
                <div className="text-sm text-foreground/60">Europe Community Founder</div>
              </CardContent>
            </Card>

            <Card className="glass overflow-hidden hover:scale-105 transition-smooth">
              <div className="relative">
                <img 
                  src="/lovable-uploads/3c092e4c-42a0-42b6-b7ff-c6a10ee77bfb.png" 
                  alt="Mr Shandu - South Africa Community Leader"
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-4 text-center">
                <div className="font-semibold">Mr Shandu</div>
                <div className="text-sm text-foreground/60">South Africa No.1 Leader</div>
              </CardContent>
            </Card>

            <Card className="glass overflow-hidden hover:scale-105 transition-smooth">
              <div className="relative">
                <img 
                  src="/lovable-uploads/b46240a3-bb5f-4bd4-9369-cece8c193267.png" 
                  alt="Michael - Ukraine Community Leader"
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-4 text-center">
                <div className="font-semibold">Michael</div>
                <div className="text-sm text-foreground/60">Ukraine No.1 Leader</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Schedule */}
        <div className="mt-16">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
                Global Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {timezones.map((tz, index) => (
                  <div 
                    key={index} 
                    className="bg-background/30 p-3 rounded-lg text-center hover:bg-background/50 transition-smooth"
                  >
                    <div className="text-2xl mb-1">{tz.flag}</div>
                    <div className="font-semibold text-sm">{tz.country}</div>
                    <div className="text-primary font-bold text-sm">{tz.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="glass text-center">
            <CardContent className="pt-6">
              <div className="text-4xl mb-3">✅</div>
              <div className="font-semibold mb-2">No Trading Required</div>
              <div className="text-sm text-foreground/70">100% hands-off approach - let your money work for you</div>
            </CardContent>
          </Card>
          
          <Card className="glass text-center">
            <CardContent className="pt-6">
              <div className="text-4xl mb-3">💰</div>
              <div className="font-semibold mb-2">Flexible Withdrawal</div>
              <div className="text-sm text-foreground/70">Withdraw your capital after just 30 days if needed</div>
            </CardContent>
          </Card>
          
          <Card className="glass text-center">
            <CardContent className="pt-6">
              <div className="text-4xl mb-3">🚀</div>
              <div className="font-semibold mb-2">Perfect for Everyone</div>
              <div className="text-sm text-foreground/70">Ideal for beginners and seasoned crypto investors</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};