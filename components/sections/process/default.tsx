import { ChefHatIcon, LeafIcon, SunriseIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProcessStep {
  step: string;
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const STEPS: ProcessStep[] = [
  {
    step: "01",
    time: "4:30am",
    title: "We start before the sun",
    description:
      "Our bakers arrive while the city is still asleep. Doughs that started yesterday are folded, shaped, and proofed. Coffee gets brewed for us first — we need it.",
    icon: <SunriseIcon className="size-5" strokeWidth={1.5} />,
  },
  {
    step: "02",
    time: "Mid-morning",
    title: "We bake in small batches",
    description:
      "Nothing sits on the shelf for long. We bake in waves so what you take home is what came out of the oven an hour ago. If we sell out, we sell out — and that&apos;s how we like it.",
    icon: <ChefHatIcon className="size-5" strokeWidth={1.5} />,
  },
  {
    step: "03",
    time: "All day",
    title: "We source close to home",
    description:
      "Durian from Davao orchards, cacao from local farms, and butter we source close to home. We know the people who grow our ingredients, and we put their names on the chalkboard.",
    icon: <LeafIcon className="size-5" strokeWidth={1.5} />,
  },
];

export default function Process({ className }: { className?: string }) {
  return (
    <section
      className={cn("relative px-4 py-20 sm:py-32", className)}
    >
      <div className="max-w-container mx-auto">
        <div className="mb-16 max-w-2xl">
          <div className="text-muted-foreground mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase">
            <span className="bg-brand h-px w-8" />
            How we do it
          </div>
          <h2 className="font-serif text-foreground text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl md:text-6xl">
            A day in <em className="text-brand font-light italic">the kitchen</em>
            , from first light to last customer.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <article
              key={step.step}
              className="group border-border bg-card relative flex flex-col rounded-3xl border p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="bg-brand/10 text-brand inline-flex size-12 items-center justify-center rounded-full">
                  {step.icon}
                </div>
                <span className="font-serif text-muted-foreground/40 text-5xl font-medium italic">
                  {step.step}
                </span>
              </div>

              <div className="text-brand mb-2 text-xs font-semibold tracking-[0.2em] uppercase">
                {step.time}
              </div>
              <h3 className="font-serif text-foreground text-2xl leading-tight font-medium">
                {step.title}
              </h3>
              <p
                className="text-muted-foreground mt-4 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
