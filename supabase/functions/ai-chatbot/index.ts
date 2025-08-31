import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversation = [] } = await req.json();
    
    console.log('Received message:', message);
    
    if (!openAIApiKey) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    // Build conversation history
    const messages = [
      {
        role: 'system',
        content: `Bạn là một chuyên gia tư vấn tài chính và đầu tư cho UniLive. Nhiệm vụ của bạn là:

1. Tư vấn về các sản phẩm và dịch vụ của UniLive
2. Giải đáp thắc mắc về trading, đầu tư cryptocurrency
3. Hướng dẫn sử dụng nền tảng UniLive
4. Cung cấp phân tích thị trường cơ bản
5. Tư vấn quản lý rủi ro trong đầu tư

Hãy trả lời bằng tiếng Việt, thân thiện, chuyên nghiệp và dễ hiểu. Luôn nhắc nhở về rủi ro trong đầu tư và khuyến khích học hỏi thêm.`
      },
      ...conversation,
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI response received');
    
    const aiResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-chatbot function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});