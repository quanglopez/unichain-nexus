import { Card } from "@/components/ui/card";
import { Smartphone, MessageCircle, Users, Video, Star } from "lucide-react";
import { useTranslation } from 'react-i18next';

const AppInterface = () => {
  const { t } = useTranslation();
  
  const appFeatures = [
    {
      icon: MessageCircle,
      title: t('appInterface.features.realTime'),
      description: "Connect with UniLive Official Interaction Group and community members",
      image: "/lovable-uploads/75d87144-c2a3-4180-bd02-d0abde588443.png"
    },
    {
      icon: Users,
      title: t('appInterface.features.crossChain'),
      description: "Showcase your content and build your following with detailed profiles",
      image: "/lovable-uploads/6f680301-bf5d-4757-9412-4aea27b7fd77.png"
    },
    {
      icon: Video,
      title: t('appInterface.features.aiPowered'),
      description: "Stream live content and interact with audiences in real-time",
      image: "/lovable-uploads/a071be67-3e48-4b00-8b1f-b7361e26981b.png"
    },
    {
      icon: Star,
      title: t('appInterface.features.socialTrading'),
      description: "Explore trending content and discover new creators",
      image: "/lovable-uploads/f78afce1-e29a-4b41-8103-0e0d8eda9e45.png"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Smartphone className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              {t('appInterface.title')}
            </h2>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {t('appInterface.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {appFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="glass p-6 text-center hover:scale-105 transition-smooth">
                <div className="mb-6">
                  <div className="relative mx-auto w-48 h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                
                <p className="text-foreground/70">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-8 py-4">
            <Smartphone className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold">
              Download UniLive App - Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInterface;