import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Send, Users, BarChart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const EmailMarketing = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    html: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailData.to || !emailData.subject || !emailData.html) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Sending marketing email:", emailData);

    try {
      const { data, error } = await supabase.functions.invoke('send-marketing-email', {
        body: emailData
      });

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      console.log("Email response:", data);

      if (data.success) {
        toast({
          title: "Success",
          description: "Marketing email sent successfully!",
        });
        
        // Reset form
        setEmailData({ to: '', subject: '', html: '' });
      } else {
        throw new Error(data.error || "Failed to send email");
      }
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send marketing email",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const emailTemplates = [
    {
      name: "Welcome Email",
      subject: "Welcome to UniMex - Your Web3 Journey Starts Here!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb; text-align: center;">Welcome to UniMex!</h1>
          <p>Thank you for joining our innovative Web3 platform. Get ready to explore:</p>
          <ul>
            <li>🚀 Advanced trading tools</li>
            <li>💎 Premium staking opportunities</li>
            <li>🌐 Global UniLive events</li>
            <li>🎯 Exclusive UNX token benefits</li>
          </ul>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://unimex.com" style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px;">Start Trading Now</a>
          </div>
          <p>Best regards,<br>The UniMex Team</p>
        </div>
      `
    },
    {
      name: "Event Invitation",
      subject: "You're Invited: Exclusive UniLive Event",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb; text-align: center;">UniLive Event Invitation</h1>
          <p>Join us for an exclusive Web3 event featuring:</p>
          <ul>
            <li>📊 Market insights from top analysts</li>
            <li>🎤 Live Q&A sessions</li>
            <li>🎁 Exclusive giveaways</li>
            <li>🤝 Networking opportunities</li>
          </ul>
          <div style="text-align: center; margin: 30px 0;">
            <a href="#" style="background: #16a34a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px;">Register Now</a>
          </div>
          <p>Don't miss out on this opportunity!</p>
        </div>
      `
    }
  ];

  const useTemplate = (template: typeof emailTemplates[0]) => {
    setEmailData(prev => ({
      ...prev,
      subject: template.subject,
      html: template.html
    }));
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Email Marketing System
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Send targeted marketing emails to your audience using Resend API
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Email Composer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Compose Marketing Email
              </CardTitle>
              <CardDescription>
                Create and send professional marketing emails
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <Label htmlFor="to">Recipient Email *</Label>
                  <Input
                    id="to"
                    type="email"
                    placeholder="customer@example.com"
                    value={emailData.to}
                    onChange={(e) => setEmailData(prev => ({ ...prev, to: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject Line *</Label>
                  <Input
                    id="subject"
                    placeholder="Your amazing subject line"
                    value={emailData.subject}
                    onChange={(e) => setEmailData(prev => ({ ...prev, subject: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="html">Email Content (HTML) *</Label>
                  <Textarea
                    id="html"
                    placeholder="<h1>Your HTML content here...</h1>"
                    value={emailData.html}
                    onChange={(e) => setEmailData(prev => ({ ...prev, html: e.target.value }))}
                    className="min-h-[200px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Email
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Email Templates & Stats */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  Email Marketing Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">12.5K</div>
                    <div className="text-sm text-muted-foreground">Total Subscribers</div>
                  </div>
                  <div className="text-center p-4 bg-green-500/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-muted-foreground">Open Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Templates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Email Templates
                </CardTitle>
                <CardDescription>
                  Quick templates to get you started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {emailTemplates.map((template, index) => (
                  <div 
                    key={index}
                    className="p-3 border rounded-lg cursor-pointer hover:bg-accent transition-colors"
                    onClick={() => useTemplate(template)}
                  >
                    <div className="font-medium">{template.name}</div>
                    <div className="text-sm text-muted-foreground truncate">
                      {template.subject}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailMarketing;