import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  TrendingUp, 
  DollarSign, 
  Mail, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export const InvestmentForm = () => {
  // Force rebuild to clear cache
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
            <span className="text-sm font-medium text-primary">Exclusive Investment Opportunity</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-glow">Join UniLive's</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Success Story</span>
          </h2>
          
          <p className="text-xl text-foreground/80 mb-8">
            Đăng ký ngay để nhận thông tin đầu tư độc quyền và ưu đãi đặc biệt
          </p>
        </div>

        <Card className="glass border-primary/20 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              <TrendingUp className="w-7 h-7 text-primary" />
              Đăng Ký Đầu Tư
            </CardTitle>
            <p className="text-foreground/70 mt-2">Chỉ mất 30 giây để tham gia!</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-base font-medium">Họ và Tên *</Label>
              <Input 
                id="fullName" 
                placeholder="Nguyễn Văn A" 
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
                placeholder="example@gmail.com" 
                className="h-12 text-base border-primary/20 focus:border-primary"
                required 
              />
              <p className="text-xs text-foreground/60">Chúng tôi sẽ gửi thông tin độc quyền vào email này</p>
            </div>

            {/* Investment Interest */}
            <div className="space-y-2">
              <Label htmlFor="investment" className="text-base font-medium flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" />
                Mức Đầu Tư Quan Tâm
              </Label>
              <Select>
                <SelectTrigger className="h-12 border-primary/20 focus:border-primary">
                  <SelectValue placeholder="Chọn mức đầu tư" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                  <SelectItem value="500k+">$500,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Benefits highlight */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <h4 className="font-semibold mb-3 text-primary">🎁 Quyền lợi độc quyền khi đăng ký:</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Thông tin đầu tư sớm nhất
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Giá ưu đãi cho nhà đầu tư tiềm năng
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Tư vấn 1-1 từ chuyên gia
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Đăng Ký Ngay - Miễn Phí
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <p className="text-xs text-center text-foreground/60 mt-4">
              Bằng cách đăng ký, bạn đồng ý nhận thông tin từ UniLive. Chúng tôi tôn trọng quyền riêng tư của bạn.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};