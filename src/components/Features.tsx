import { Check, Sparkles, Zap, Clock } from "lucide-react";

const features = [
  {
    name: "AI-Powered Writing",
    description: "Advanced AI algorithms help you write better content faster.",
    icon: Sparkles,
  },
  {
    name: "Real-time Improvements",
    description: "Get instant suggestions to enhance your writing style.",
    icon: Zap,
  },
  {
    name: "Time-Saving Templates",
    description: "Start with pre-made templates for various content types.",
    icon: Clock,
  },
];

export const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">
            Write Better, Faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Everything you need to create amazing content
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