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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-glow">UniLive × UniMex</span>
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
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
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