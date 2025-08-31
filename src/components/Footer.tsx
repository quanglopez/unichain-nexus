import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Download, 
  TrendingUp, 
  FileText, 
  MessageCircle, 
  Send,
  Phone,
  AlertTriangle
} from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-4 bg-gradient-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Lead Capture CTAs */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to <span className="text-glow">Start Your Web3 Journey</span>?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="lg" className="group">
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download UniLive App
            </Button>
            <Button variant="neon" size="lg" className="group">
              <TrendingUp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore UniMex
            </Button>
            <Button variant="ghost" size="lg">
              <FileText className="w-5 h-5 mr-2" />
              Get the Project PDF
            </Button>
          </div>

          {/* Floating Contact Links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="glass" size="sm" className="rounded-full">
              <Send className="w-4 h-4 mr-2" />
              Telegram
            </Button>
            <Button variant="glass" size="sm" className="rounded-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              Discord
            </Button>
            <Button variant="glass" size="sm" className="rounded-full">
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Compliance & Risk Warning */}
        <Card className="glass border-yellow-500/30 mb-12">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-semibold text-yellow-400">Important Disclaimer</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Digital assets carry high risk and may result in partial or total loss of funds. 
                  All figures including issuance schedules, tier rates, and projections are illustrative 
                  examples from documentation and are not guarantees of returns or financial advice. 
                  Users must conduct their own research, understand the risks, and comply with local 
                  laws and platform terms before participating in any activities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-primary mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#unx-token" className="hover:text-primary transition-colors">UNX Token</a></li>
              <li><a href="#cornerstone" className="hover:text-primary transition-colors">Cornerstone Program</a></li>
              <li><a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><a href="#team" className="hover:text-primary transition-colors">Team</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors">Why Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-sm text-foreground/60">
            © 2024 UniLive × UniMex. All rights reserved. | 
            <span className="text-primary"> Building the Future of Web3 Finance</span>
          </p>
        </div>
      </div>
    </footer>
  );
};