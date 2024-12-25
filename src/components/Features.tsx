import { Check, Sparkles, Zap, Clock } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      name: t('features.ai.title'),
      description: t('features.ai.description'),
      icon: Sparkles,
    },
    {
      name: t('features.realtime.title'),
      description: t('features.realtime.description'),
      icon: Zap,
    },
    {
      name: t('features.templates.title'),
      description: t('features.templates.description'),
      icon: Clock,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">
            {t('features.title')}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
                  <feature.icon className="h-5 w-5 flex-none text-accent" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};