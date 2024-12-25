import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        hero: {
          title: 'Transform Your Writing with AI',
          description: 'Get instant suggestions and improvements for your content using advanced AI technology.',
          startTrial: 'Start Free Trial',
          viewPricing: 'View Pricing',
        },
        features: {
          title: 'Features',
          subtitle: 'Everything you need to create amazing content',
          ai: {
            title: 'AI-Powered Writing',
            description: 'Get intelligent suggestions to improve your writing instantly.',
          },
          realtime: {
            title: 'Real-time Analysis',
            description: 'See improvements as you type with our advanced AI engine.',
          },
          templates: {
            title: 'Ready-to-use Templates',
            description: 'Start quickly with our professionally crafted templates.',
          },
        },
        pricing: {
          title: 'Simple Pricing',
          subtitle: 'Choose the plan that works for you',
          description: 'Start with our free trial and upgrade when you\'re ready.',
          free: {
            name: 'Free Trial',
            description: 'Perfect for testing the waters',
          },
          pro: {
            name: 'Pro Plan',
            description: 'For serious content creators',
          },
        },
        aiWriter: {
          title: 'AI Writing Assistant',
          description: 'Enter your text below and let our AI help you improve it.',
          placeholder: 'Type or paste your text here...',
          analyze: 'Analyze Text',
          suggestionTitle: 'AI Suggestions',
          success: 'Analysis Complete',
          successDesc: 'Here are your AI-powered suggestions.',
          error: 'Error',
          errorDesc: 'Something went wrong. Please try again.',
          errorEmpty: 'Empty Text',
          errorEmptyDesc: 'Please enter some text to analyze.',
        },
      },
    },
    es: {
      translation: {
        hero: {
          title: 'Transforma tu escritura con IA',
          description: 'Obtén sugerencias instantáneas y mejoras para tu contenido utilizando tecnología avanzada de IA.',
          startTrial: 'Comienza la prueba gratuita',
          viewPricing: 'Ver precios',
        },
        features: {
          title: 'Características',
          subtitle: 'Todo lo que necesitas para crear contenido increíble',
          ai: {
            title: 'Escritura Potenciada por IA',
            description: 'Obtén sugerencias inteligentes para mejorar tu escritura al instante.',
          },
          realtime: {
            title: 'Análisis en Tiempo Real',
            description: 'Ve las mejoras a medida que escribes con nuestro motor de IA avanzado.',
          },
          templates: {
            title: 'Plantillas Listas para Usar',
            description: 'Comienza rápidamente con nuestras plantillas profesionalmente elaboradas.',
          },
        },
        pricing: {
          title: 'Precios Simples',
          subtitle: 'Elige el plan que mejor se adapte a ti',
          description: 'Comienza con nuestra prueba gratuita y actualiza cuando estés listo.',
          free: {
            name: 'Prueba Gratuita',
            description: 'Perfecto para probar',
          },
          pro: {
            name: 'Plan Pro',
            description: 'Para creadores de contenido serios',
          },
        },
        aiWriter: {
          title: 'Asistente de Escritura AI',
          description: 'Ingresa tu texto debajo y deja que nuestra IA te ayude a mejorarlo.',
          placeholder: 'Escribe o pega tu texto aquí...',
          analyze: 'Analizar Texto',
          suggestionTitle: 'Sugerencias de la IA',
          success: 'Análisis Completo',
          successDesc: 'Aquí están tus sugerencias generadas por IA.',
          error: 'Error',
          errorDesc: 'Algo salió mal. Por favor intenta de nuevo.',
          errorEmpty: 'Texto Vacío',
          errorEmptyDesc: 'Por favor ingresa algún texto para analizar.',
        },
      },
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
