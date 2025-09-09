import React from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const ChatBot = () => {
  return (
    <Button
      onClick={() => window.open('https://t.me/worldtradingfund', '_blank')}
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg glow-green"
      size="icon"
      title="Contact us on Telegram"
    >
      <Send className="h-5 w-5 sm:h-6 sm:w-6" />
    </Button>
  );
};

export default ChatBot;