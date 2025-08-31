import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Send welcome email
      const welcomeEmail = {
        to: email,
        subject: "Welcome to UniMex Newsletter!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #2563eb; text-align: center;">Welcome to UniMex!</h1>
            <p>Thank you for subscribing to our newsletter. You'll receive:</p>
            <ul style="color: #374151;">
              <li>📈 Weekly market insights and analysis</li>
              <li>🚀 Platform updates and new features</li>
              <li>🎯 Exclusive trading tips and strategies</li>
              <li>🎉 Early access to UniLive events</li>
              <li>💎 Special offers on UNX token</li>
            </ul>
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://unimex.com" style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">Explore UniMex Platform</a>
            </div>
            <p style="color: #6b7280; font-size: 14px; text-align: center;">
              You can unsubscribe at any time by clicking the unsubscribe link in our emails.
            </p>
          </div>
        `
      };

      const { data, error } = await supabase.functions.invoke('send-marketing-email', {
        body: welcomeEmail
      });

      if (error) {
        console.error("Newsletter signup error:", error);
        throw error;
      }

      if (data.success) {
        setIsSubscribed(true);
        toast({
          title: "Success!",
          description: "Thank you for subscribing! Check your email for a welcome message.",
        });
        setEmail('');
      } else {
        throw new Error(data.error || "Failed to subscribe");
      }
    } catch (error: any) {
      console.error("Error subscribing to newsletter:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Successfully Subscribed!</h3>
          <p className="text-muted-foreground">
            Thank you for joining our newsletter. Check your email for a welcome message.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Mail className="h-5 w-5" />
          Stay Updated
        </CardTitle>
        <CardDescription>
          Subscribe to our newsletter for the latest Web3 insights and platform updates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubscribe} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground text-center mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;