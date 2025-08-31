import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Star } from "lucide-react";

export const StickyActions = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass rounded-full p-2 flex items-center gap-2">
        <Button 
          variant="hero" 
          size="sm" 
          className="rounded-full"
          asChild
        >
          <a href="https://h.tsggwh.com/#/login?recomId=gsZKfD&language=en_US" target="_blank" rel="noopener noreferrer">
            <Download className="w-4 h-4" />
            Download UniLive
          </a>
        </Button>
        <Button variant="neon" size="sm" className="rounded-full">
          <TrendingUp className="w-4 h-4" />
          Explore UniMex
        </Button>
        <Button 
          variant="glass" 
          size="sm" 
          className="rounded-full"
          asChild
        >
          <a href="https://h.tsggwh.com/#/login?recomId=gsZKfD&language=en_US" target="_blank" rel="noopener noreferrer">
            <Star className="w-4 h-4" />
            Join Cornerstone
          </a>
        </Button>
      </div>
    </div>
  );
};