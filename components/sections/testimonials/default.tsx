import { QuoteIcon } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const VARIANTS = ["cream", "warm", "dark", "rose", "cream"] as const;
const ROTATES = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-2"];

const variantStyles: Record<(typeof VARIANTS)[number], string> = {
  cream: "bg-card text-foreground border-border",
  warm: "bg-brand/10 text-foreground border-brand/20",
  dark: "bg-foreground text-background border-foreground",
  rose: "bg-accent text-foreground border-accent",
};

export default function Testimonials({ className }: { className?: string }) {
  const items = [
    ...siteConfig.press,
    {
      source: "Our customers",
      quote:
        "Whole cakes that are sulit and barato yet lami — the kind you reorder for every celebration.",
    },
    {
      source: "SM Ecoland regulars",
      quote:
        "Mix n' Match is dangerous. You get choco moist, cheesecake, and pie in one dish and suddenly you're planning your next visit.",
    },
  ];

  return (
    <section
      className={cn(
        "bg-secondary relative overflow-hidden px-4 py-20 sm:py-32",
        className,
      )}
    >
      <div className="max-w-container relative mx-auto">
        <div className="mb-16 max-w-3xl">
          <div className="text-muted-foreground mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase">
            <span className="bg-brand h-px w-8" />
            What people say
          </div>
          <h2 className="font-serif text-foreground text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl md:text-6xl">
            Featured in Davao&apos;s food scene —
            <em className="text-brand font-light italic"> and </em>
            loved by customers.
          </h2>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((t, i) => {
            const variant = VARIANTS[i % VARIANTS.length];
            const rotate = ROTATES[i % ROTATES.length];
            return (
              <figure
                key={t.source}
                className={cn(
                  "mb-5 inline-block w-full break-inside-avoid rounded-2xl border p-6 shadow-md transition-transform hover:rotate-0 hover:scale-[1.02]",
                  variantStyles[variant],
                  rotate,
                )}
              >
                <QuoteIcon
                  className={cn(
                    "mb-3 size-6 opacity-60",
                    variant === "dark" ? "text-background/60" : "text-brand",
                  )}
                />
                <blockquote className="font-serif text-xl leading-snug font-medium italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5">
                  <div className="text-sm font-semibold">{t.source}</div>
                  {i < siteConfig.press.length && (
                    <div
                      className={cn(
                        "text-xs",
                        variant === "dark"
                          ? "text-background/60"
                          : "text-muted-foreground",
                      )}
                    >
                      Local food feature
                    </div>
                  )}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
