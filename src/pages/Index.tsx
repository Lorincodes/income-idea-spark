import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { AIWriter } from "@/components/AIWriter";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import "../i18n/config";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageSwitcher />
      <Hero />
      <AIWriter />
      <Features />
      <Pricing />
    </div>
  );
};

export default Index;