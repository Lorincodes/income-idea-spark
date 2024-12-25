import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const AIWriter = () => {
  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const { toast } = useToast();
  const { t } = useTranslation();
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('perplexity_api_key') || '');

  const handleAnalyze = async () => {
    if (!text.trim()) {
      toast({
        title: t('aiWriter.errorEmpty'),
        description: t('aiWriter.errorEmptyDesc'),
        variant: "destructive",
      });
      return;
    }

    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Perplexity API key to continue",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setSuggestion("");

    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful writing assistant. Analyze the text and provide constructive suggestions for improvement. Focus on clarity, structure, and impact.'
            },
            {
              role: 'user',
              content: text
            }
          ],
          temperature: 0.2,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      setSuggestion(data.choices[0].message.content);
      
      toast({
        title: t('aiWriter.success'),
        description: t('aiWriter.successDesc'),
      });
    } catch (error) {
      console.error('AI Analysis error:', error);
      toast({
        title: t('aiWriter.error'),
        description: t('aiWriter.errorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKey = e.target.value;
    setApiKey(newKey);
    localStorage.setItem('perplexity_api_key', newKey);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          {t('aiWriter.title')}
        </h2>
        <p className="text-muted-foreground">
          {t('aiWriter.description')}
        </p>
      </div>

      <div className="space-y-4">
        <input
          type="password"
          placeholder="Enter your Perplexity API key"
          value={apiKey}
          onChange={handleApiKeyChange}
          className="w-full p-2 border rounded"
        />
        
        <Textarea
          placeholder={t('aiWriter.placeholder')}
          className="min-h-[200px]"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <Button 
          onClick={handleAnalyze} 
          disabled={isProcessing}
          className="w-full"
        >
          {isProcessing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {t('aiWriter.analyze')}
        </Button>

        {suggestion && (
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">{t('aiWriter.suggestionTitle')}</h3>
            <p className="text-muted-foreground whitespace-pre-wrap">{suggestion}</p>
          </div>
        )}
      </div>
    </div>
  );
};