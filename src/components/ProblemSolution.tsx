import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Video, TrendingUp, Link } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const ProblemSolution = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t('problemSolution.title')}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t('problemSolution.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problem */}
          <Card className="glass border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-destructive">
                <AlertTriangle className="w-6 h-6" />
                {t('problemSolution.problem.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">
                    {t('problemSolution.problem.complexOnboarding')}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">
                    {t('problemSolution.problem.fragileLiquidity')}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">
                    {t('problemSolution.problem.disconnectedJourney')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="glass border-primary/20 glow-green">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <CheckCircle className="w-6 h-6" />
                {t('problemSolution.solution.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Video className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('problemSolution.solution.uniLive')}</h4>
                    <p className="text-sm text-foreground/80">
                      Transparent token launches with real-time Q&A and community trust building
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('problemSolution.solution.uniMex')}</h4>
                    <p className="text-sm text-foreground/80">
                      Instant access, simplified trading, and earn-by-holding across DeFi/NFT/GameFi
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Link className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('problemSolution.solution.valueBridge')}</h4>
                    <p className="text-sm text-foreground/80">
                      Seamless flow from content engagement to asset circulation in one ecosystem
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};