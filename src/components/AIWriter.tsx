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

  const handleAnalyze = async () => {
    if (!text.trim()) {
      toast({
        title: t('aiWriter.errorEmpty'),
        description: t('aiWriter.errorEmptyDesc'),
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setSuggestion("");

    try {
      // TODO: Replace with actual AI API integration
      // Simulating API call for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuggestion("This is a sample AI suggestion. The actual AI integration will be implemented once we connect to an AI service provider.");
      
      toast({
        title: t('aiWriter.success'),
        description: t('aiWriter.successDesc'),
      });
    } catch (error) {
      toast({
        title: t('aiWriter.error'),
        description: t('aiWriter.errorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
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
            <p className="text-muted-foreground">{suggestion}</p>
          </div>
        )}
      </div>
    </div>
  );
};