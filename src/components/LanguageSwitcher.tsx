import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50"
    >
      {i18n.language === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
    </Button>
  );
};