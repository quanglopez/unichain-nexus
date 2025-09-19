import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === 'ru' ? 'RU' : 'EN';

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="gap-1"
    >
      <Globe className="w-4 h-4" />
      {currentLang}
    </Button>
  );
};