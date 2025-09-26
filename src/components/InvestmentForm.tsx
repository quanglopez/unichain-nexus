import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, 
  DollarSign, 
  Mail, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export const InvestmentForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    investmentInterest: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://pcmdeezoexxbxzyipsil.supabase.co/functions/v1/add-to-activecampaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Full Name": formData.fullName,
          "Email": formData.email,
          "Investment Interest": formData.investmentInterest || "Not specified",
          "Form Type": "TikTok Early Access Registration"
        }),
      });

      toast({
        title: "Success!",
        description: "Your investment registration has been submitted successfully.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        investmentInterest: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-dark relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('tiktok.badge')}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-glow">{t('tiktok.title')}</span>
          </h2>
          
          <p className="text-xl text-foreground/80 mb-8">
            {t('tiktok.description')}
          </p>
        </div>

        <Card className="glass border-primary/20 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              <TrendingUp className="w-7 h-7 text-primary" />
              {t('tiktok.formTitle')}
            </CardTitle>
            <p className="text-foreground/70 mt-2">{t('tiktok.formSubtitle')}</p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-base font-medium">Full Name *</Label>
                <Input 
                  id="fullName" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="John Doe" 
                  className="h-12 text-base border-primary/20 focus:border-primary"
                  required 
                />
              </div>

              {/* Email Field - Featured */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email *
                </Label>
                <Input 
                  id="email" 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@gmail.com" 
                  className="h-12 text-base border-primary/20 focus:border-primary"
                  required 
                />
                <p className="text-xs text-foreground/60">We'll send exclusive information to this email</p>
              </div>

              {/* Investment Interest */}
              <div className="space-y-2">
                <Label htmlFor="investment" className="text-base font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-primary" />
                  Investment Interest
                </Label>
                <Select value={formData.investmentInterest} onValueChange={(value) => setFormData({ ...formData, investmentInterest: value })}>
                  <SelectTrigger className="h-12 border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Select investment range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="$10,000 - $50,000">$10,000 - $50,000</SelectItem>
                    <SelectItem value="$50,000 - $100,000">$50,000 - $100,000</SelectItem>
                    <SelectItem value="$100,000 - $500,000">$100,000 - $500,000</SelectItem>
                    <SelectItem value="$500,000+">$500,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            {/* Benefits highlight */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <h4 className="font-semibold mb-3 text-primary">🎁 {t('tiktok.benefitsTitle')}</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  {t('tiktok.benefit1')}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  {t('tiktok.benefit2')}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  {t('tiktok.benefit3')}
                </li>
              </ul>
            </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                disabled={isLoading}
                variant="hero" 
                size="lg" 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                {isLoading ? t('tiktok.submitting') : t('tiktok.registerButton')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-xs text-center text-foreground/60 mt-4">
                By registering, you agree to receive information from UniLive. We respect your privacy.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};