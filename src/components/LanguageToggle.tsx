import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const LanguageToggle = () => {
  const [language, setLanguage] = useState<'en' | 'vi'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'vi' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="gap-1"
    >
      <Globe className="w-4 h-4" />
      {language.toUpperCase()}
    </Button>
  );
};