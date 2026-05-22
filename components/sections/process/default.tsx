import { HeartIcon, HomeIcon, SparklesIcon, StarIcon } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const VALUE_ICONS = [HomeIcon, StarIcon, HeartIcon, SparklesIcon];

export default function Process({ className }: { className?: string }) {
  return (
    <section className={cn("relative px-4 py-20 sm:py-32", className)}>
      <div className="max-w-container mx-auto">
        <div className="mb-16 max-w-2xl">
          <div className="text-muted-foreground mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase">
            <span className="bg-brand h-px w-8" />
            What we stand for
          </div>
          <h2 className="font-serif text-foreground text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl md:text-6xl">
            The sweetest experiences,
            <br />
            <em className="text-brand font-light italic">baked in</em> every day.
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            Our bakers are dedicated to top-quality pastries and the friendliest
            service around — the same promise we made when we first opened our
            doors in Davao.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.values.map((value, i) => {
            const Icon = VALUE_ICONS[i] ?? SparklesIcon;
            return (
              <article
                key={value.title}
                className="group border-border bg-card relative flex flex-col rounded-3xl border p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="bg-brand/10 text-brand mb-6 inline-flex size-12 items-center justify-center rounded-full">
                  <Icon className="size-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-foreground text-2xl leading-tight font-medium">
                  {value.title}
                </h3>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
