import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Repeat, Layers, Code } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const WhyUs = () => {
  const { t } = useTranslation();
  
  const differentiators = [
    {
      icon: Repeat,
      title: t('whyUs.innovations.livestreamIlo.title'),
      description: t('whyUs.innovations.livestreamIlo.description'),
      benefits: t('whyUs.innovations.livestreamIlo.benefits', { returnObjects: true }) as string[]
    },
    {
      icon: Layers,
      title: t('whyUs.innovations.interTradeFi.title'),
      description: t('whyUs.innovations.interTradeFi.description'),
      benefits: t('whyUs.innovations.interTradeFi.benefits', { returnObjects: true }) as string[]
    },
    {
      icon: Code,
      title: t('whyUs.innovations.communityFirst.title'),
      description: t('whyUs.innovations.communityFirst.description'),
      benefits: t('whyUs.innovations.communityFirst.benefits', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t('whyUs.title')}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="glass group hover:glow-green transition-smooth">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Value Feedback Loop Diagram */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">{t('whyUs.valueLoop.title')}</h3>
          
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <h4 className="font-semibold mb-1">{t('whyUs.valueLoop.contentCreation')}</h4>
                  <p className="text-xs text-foreground/70">Livestreams & ILOs</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-primary mx-auto hidden md:block" />
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="font-semibold mb-1">{t('whyUs.valueLoop.tradingActivity')}</h4>
                  <p className="text-xs text-foreground/70">UniMex Platform</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-primary mx-auto hidden md:block" />
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h4 className="font-semibold mb-1">{t('whyUs.valueLoop.feeDistribution')}</h4>
                  <p className="text-xs text-foreground/70">Back to Ecosystem</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-center text-foreground/80">
                  {t('whyUs.valueLoop.description')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};