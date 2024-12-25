import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import "../i18n/config";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageSwitcher />
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
};

export default Index;