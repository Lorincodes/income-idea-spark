import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const Pricing = () => {
  const { t } = useTranslation();

  const tiers = [
    {
      name: t('pricing.free.name'),
      id: "tier-free",
      priceMonthly: "$0",
      description: t('pricing.free.description'),
      features: [
        "5 AI generations per day",
        "Basic writing suggestions",
        "2 templates",
        "Standard support",
      ],
      buttonText: t('hero.startTrial'),
      buttonVariant: "outline" as const,
    },
    {
      name: t('pricing.pro.name'),
      id: "tier-pro",
      priceMonthly: "$15",
      description: t('pricing.pro.description'),
      features: [
        "Unlimited AI generations",
        "Advanced writing analysis",
        "All templates",
        "Priority support",
        "Custom templates",
        "API access",
      ],
      buttonText: "Subscribe Now",
      buttonVariant: "default" as const,
      featured: true,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">{t('pricing.title')}</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {t('pricing.subtitle')}
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-secondary">
          {t('pricing.description')}
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                tier.featured ? "bg-gray-50" : ""
              }`}
            >
              <h3 className="text-lg font-semibold leading-8 text-primary">
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-secondary">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-primary">
                  {tier.priceMonthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-secondary">
                  /month
                </span>
              </p>
              <Button
                variant={tier.buttonVariant}
                className="mt-6 w-full"
              >
                {tier.buttonText}
              </Button>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-secondary">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};