import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, TrendingUp, Star, CheckCircle, Users, Globe } from "lucide-react";
const heroImage = "/lovable-uploads/297c370f-d3f9-48b1-aec2-e4523fbf348e.png";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 sm:pt-16 px-3 sm:px-4 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          {/* Social proof badges */}
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="glass">
              <CheckCircle className="w-4 h-4 mr-2 text-primary" />
              Experienced Team
            </Badge>
            <Badge variant="secondary" className="glass">
              <Users className="w-4 h-4 mr-2 text-primary" />
              Global Partners
            </Badge>
            <Badge variant="secondary" className="glass">
              <Globe className="w-4 h-4 mr-2 text-primary" />
              Ecosystem Coverage
            </Badge>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-glow">UniLive × UniMex</span>
              <br />
              <span className="text-foreground/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">The Interactive Trading & Live‑Launchpad Hub for</span>
              <br />
              <span className="bg-gradient-neon bg-clip-text text-transparent">Web3</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Turn content → liquidity → value: launch tokens via livestream (ILO), trade interactively with one‑click access, and unlock utilities by holding UNX.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              asChild
            >
              <a href="https://h.tsggwh.com/#/login?recomId=gsZKfD&language=en_US" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download UniLive App
              </a>
            </Button>
            <Button 
              variant="neon" 
              size="lg" 
              className="group"
              asChild
            >
              <a href="https://drive.google.com/drive/folders/1C1oRLIgsky_7hOjA1npcpW7HF8_QjiMx?usp=sharing" target="_blank" rel="noopener noreferrer">
                <TrendingUp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore UniMex
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-foreground/80"
              asChild
            >
              <a href="https://h.tsggwh.com/#/login?recomId=gsZKfD&language=en_US" target="_blank" rel="noopener noreferrer">
                <Star className="w-5 h-5 mr-2" />
                Join Cornerstone
              </a>
            </Button>
          </div>

          {/* Value proposition */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 sm:pt-8 justify-center lg:justify-start">
            {[
              "Transparent",
              "Interactive", 
              "Fast Liquidity",
              "Multiple Revenue"
            ].map((item) => (
              <div key={item} className="text-center lg:text-left">
                <div className="w-2 h-2 bg-primary rounded-full mx-auto lg:mx-0 mb-2 glow-green"></div>
                <span className="text-xs sm:text-sm font-medium text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right content - Hero image */}
        <div className="relative">
          <div className="glass rounded-2xl p-4 glow-green">
            <img 
              src={heroImage} 
              alt="UniLive Global Community - Local Touch, Global Reach" 
              className="w-full h-auto rounded-xl"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 glass rounded-lg p-3 animate-pulse">
            <div className="text-xs font-semibold text-primary">ILO LIVE</div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 glass rounded-lg p-3">
            <div className="text-xs font-semibold text-foreground">UNX Trading</div>
            <div className="text-primary text-sm">+24.5%</div>
          </div>
        </div>
      </div>
    </section>
  );
};