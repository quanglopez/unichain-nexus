import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Star } from "lucide-react";

export const StickyActions = () => {
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-40 px-3 sm:px-0">
      <div className="glass rounded-full p-1.5 sm:p-2 flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
        <Button 
          variant="hero" 
          size="sm" 
          className="rounded-full text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-9"
          asChild
        >
          <a href="https://h.tsggwh.com/#/login?recomId=gsZKfD&language=en_US" target="_blank" rel="noopener noreferrer">
            <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden xs:inline">Download</span>
            <span className="xs:hidden">App</span>
          </a>
        </Button>
        <Button 
          variant="neon" 
          size="sm" 
          className="rounded-full text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-9"
          asChild
        >
          <a href="https://drive.google.com/drive/folders/1C1oRLIgsky_7hOjA1npcpW7HF8_QjiMx?usp=sharing" target="_blank" rel="noopener noreferrer">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden xs:inline">UniMex</span>
            <span className="xs:hidden">UMX</span>
          </a>
        </Button>
        <Button 
          variant="glass" 
          size="sm" 
          className="rounded-full text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-9"
          asChild
        >
          <a href="https://h.tsggwh.com/#/login?recomId=gsZKfD&language=en_US" target="_blank" rel="noopener noreferrer">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden xs:inline">Cornerstone</span>
            <span className="xs:hidden">Join</span>
          </a>
        </Button>
      </div>
    </div>
  );
};