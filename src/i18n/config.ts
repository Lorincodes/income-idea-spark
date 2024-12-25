import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "hero.title": "Transform Your Writing with AI",
      "hero.description": "Create compelling content in seconds with our AI-powered writing assistant. Perfect for bloggers, marketers, and content creators.",
      "hero.startTrial": "Start Free Trial",
      "hero.viewPricing": "View Pricing",
      "features.title": "Write Better, Faster",
      "features.subtitle": "Everything you need to create amazing content",
      "features.ai.title": "AI-Powered Writing",
      "features.ai.description": "Advanced AI algorithms help you write better content faster.",
      "features.realtime.title": "Real-time Improvements",
      "features.realtime.description": "Get instant suggestions to enhance your writing style.",
      "features.templates.title": "Time-Saving Templates",
      "features.templates.description": "Start with pre-made templates for various content types.",
      "pricing.title": "Pricing",
      "pricing.subtitle": "Choose your plan",
      "pricing.description": "Start with our free trial or upgrade to Pro for unlimited access to all features.",
      "pricing.free.name": "Free Trial",
      "pricing.free.description": "Perfect for testing out our services",
      "pricing.pro.name": "Pro",
      "pricing.pro.description": "Ideal for content creators and professionals"
    }
  },
  es: {
    translation: {
      "hero.title": "Transforma tu Escritura con IA",
      "hero.description": "Crea contenido convincente en segundos con nuestro asistente de escritura impulsado por IA. Perfecto para bloggers, mercadólogos y creadores de contenido.",
      "hero.startTrial": "Comenzar Prueba Gratuita",
      "hero.viewPricing": "Ver Precios",
      "features.title": "Escribe Mejor, Más Rápido",
      "features.subtitle": "Todo lo que necesitas para crear contenido increíble",
      "features.ai.title": "Escritura Impulsada por IA",
      "features.ai.description": "Algoritmos avanzados de IA te ayudan a escribir mejor contenido más rápido.",
      "features.realtime.title": "Mejoras en Tiempo Real",
      "features.realtime.description": "Obtén sugerencias instantáneas para mejorar tu estilo de escritura.",
      "features.templates.title": "Plantillas que Ahorran Tiempo",
      "features.templates.description": "Comienza con plantillas prediseñadas para varios tipos de contenido.",
      "pricing.title": "Precios",
      "pricing.subtitle": "Elige tu plan",
      "pricing.description": "Comienza con nuestra prueba gratuita o actualiza a Pro para acceso ilimitado a todas las funciones.",
      "pricing.free.name": "Prueba Gratuita",
      "pricing.free.description": "Perfecto para probar nuestros servicios",
      "pricing.pro.name": "Pro",
      "pricing.pro.description": "Ideal para creadores de contenido y profesionales"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;