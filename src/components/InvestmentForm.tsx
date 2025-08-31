import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  TrendingUp, 
  DollarSign, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Building,
  FileText
} from "lucide-react";

export const InvestmentForm = () => {
  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-glow">Investment Registration</span>
            <br />
            <span className="text-foreground/80">Join UniLive's Growth Journey</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Register your interest in UniLive investment opportunities and be part of the future of Web3 trading and live launchpad ecosystem
          </p>
        </div>

        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              Investment Registration Form
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location & Entity Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country">Country/Region *</Label>
                  <Input id="country" placeholder="Your country" required />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Your city" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="entityType">Investor Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select investor type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual Investor</SelectItem>
                      <SelectItem value="institutional">Institutional Investor</SelectItem>
                      <SelectItem value="venture">Venture Capital</SelectItem>
                      <SelectItem value="fund">Investment Fund</SelectItem>
                      <SelectItem value="family">Family Office</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input id="company" placeholder="Company name (if applicable)" />
                </div>
              </div>
            </div>

            {/* Investment Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Investment Interest
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="investmentRange">Investment Range (USD)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select investment range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                      <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                      <SelectItem value="1m+">$1,000,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeline">Investment Timeline</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                      <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                      <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                      <SelectItem value="long">Long-term (12+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="experience">Investment Experience</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">New to Web3/Crypto investments</SelectItem>
                    <SelectItem value="intermediate">Some experience with crypto investments</SelectItem>
                    <SelectItem value="experienced">Experienced crypto/Web3 investor</SelectItem>
                    <SelectItem value="professional">Professional/Institutional investor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Additional Information
              </h3>
              
              <div>
                <Label htmlFor="interests">Specific Areas of Interest</Label>
                <Textarea 
                  id="interests" 
                  placeholder="Tell us about your specific interests in UniLive ecosystem (ILO, trading, UNX token, etc.)"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="questions">Questions or Comments</Label>
                <Textarea 
                  id="questions" 
                  placeholder="Any questions about UniLive or additional comments you'd like to share"
                  rows={3}
                />
              </div>
            </div>

            {/* Terms and Disclaimer */}
            <div className="p-4 bg-secondary/20 rounded-lg space-y-2">
              <p className="text-sm text-foreground/80">
                <strong>Important Disclaimer:</strong> This registration form is for informational purposes only and does not constitute an offer to sell or solicitation to buy securities. Any investment opportunities will be subject to:
              </p>
              <ul className="text-xs text-foreground/70 space-y-1 ml-4">
                <li>• Compliance with applicable securities laws and regulations</li>
                <li>• Completion of KYC/AML verification procedures</li>
                <li>• Accredited investor status verification (where required)</li>
                <li>• Execution of appropriate legal documentation</li>
                <li>• Investment involves significant risk and may result in loss of capital</li>
              </ul>
            </div>

            {/* Submit Button */}
            <Button variant="hero" size="lg" className="w-full">
              <Building className="w-5 h-5 mr-2" />
              Submit Investment Registration
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};