import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./LanguageToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Why UniLive × UniMex", href: "#why-us" },
    { label: "Features", href: "#features" },
    { label: "UNX Token", href: "#unx-token" },
    { label: "Cornerstone", href: "#cornerstone" },
    { label: "Team & Partners", href: "#team" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-lg sm:text-xl font-bold text-glow">UniLive × UniMex</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageToggle />
            <Button variant="neon" size="sm">
              Join Cornerstone
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/20 shadow-xl">
            <div className="px-3 pt-3 pb-4 space-y-2 max-h-screen overflow-y-auto bg-black/100">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-white hover:text-primary hover:bg-white/10 rounded-lg transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 py-3">
                <Button variant="neon" size="sm" className="w-full">
                  Join Cornerstone
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};