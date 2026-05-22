import { ArrowUpRightIcon } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import {
  CakeIllustration,
  CoffeeIllustration,
  CroissantIllustration,
  PieIllustration,
} from "../../ui/illustrations";

interface MenuCard {
  title: string;
  tagline: string;
  description: string;
  priceFrom: string;
  illustration: ReactNode;
  accent: "cream" | "warm" | "dark" | "rose";
  featured?: boolean;
  items: string[];
}

const MENU: MenuCard[] = [
  {
    title: "Pies",
    tagline: "Our signature",
    description:
      "Buttery, all-butter crusts crimped by hand. Seasonal fruit, deep-dish savories, and the apple pie people drive across town for.",
    priceFrom: "$8",
    illustration: <PieIllustration className="h-full w-full" />,
    accent: "warm",
    featured: true,
    items: [
      "Brown butter apple",
      "Bourbon pecan",
      "Wild blueberry lattice",
      "Chicken pot pie",
    ],
  },
  {
    title: "Cakes",
    tagline: "Made to order",
    description:
      "Layer cakes, slices, and celebration showstoppers — frosted by hand, with the kind of crumb you write home about.",
    priceFrom: "$6 / slice",
    illustration: <CakeIllustration className="h-full w-full" />,
    accent: "rose",
    items: [
      "Olive oil & citrus",
      "Brown sugar chiffon",
      "Triple chocolate fudge",
      "Custom celebration cakes",
    ],
  },
  {
    title: "Coffee",
    tagline: "Brewed to order",
    description:
      "Single-origin espresso, slow pour-overs, and the seasonal latte everyone&apos;s talking about. Made by people who care about milk texture.",
    priceFrom: "$4",
    illustration: <CoffeeIllustration className="h-full w-full" />,
    accent: "dark",
    items: [
      "House espresso",
      "Cardamom oat latte",
      "Maple cortado",
      "Pour-over of the week",
    ],
  },
  {
    title: "Pastries",
    tagline: "Morning ritual",
    description:
      "Croissants laminated over three days. Morning buns, scones, and seasonal galettes — gone by lunch most days.",
    priceFrom: "$5",
    illustration: <CroissantIllustration className="h-full w-full" />,
    accent: "cream",
    items: [
      "Plain & almond croissants",
      "Maple morning buns",
      "Buttermilk scones",
      "Seasonal galettes",
    ],
  },
];

const accentStyles: Record<MenuCard["accent"], string> = {
  cream: "bg-secondary text-foreground",
  warm: "bg-brand/8 text-foreground",
  dark: "bg-foreground text-background",
  rose: "bg-accent text-foreground",
};

const accentIllustrationStyles: Record<MenuCard["accent"], string> = {
  cream: "text-brand",
  warm: "text-brand",
  dark: "text-background",
  rose: "text-brand",
};

export default function Menu({ className }: { className?: string }) {
  return (
    <section
      id="menu"
      className={cn("relative px-4 py-20 sm:py-32", className)}
    >
      <div className="max-w-container mx-auto">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:mb-20 md:flex-row md:items-end">
          <div>
            <div className="text-muted-foreground mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase">
              <span className="bg-brand h-px w-8" />
              The menu
            </div>
            <h2 className="font-serif text-foreground max-w-3xl text-5xl leading-[1] font-medium tracking-tight sm:text-7xl">
              Four things,
              <br />
              done <em className="text-brand font-light italic">very</em> well.
            </h2>
          </div>
          <a
            href={siteConfig.menuUrl}
            className="group text-foreground inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase"
          >
            Full menu
            <span className="border-foreground/30 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background flex size-9 items-center justify-center rounded-full border transition-all">
              <ArrowUpRightIcon className="size-4" />
            </span>
          </a>
        </div>

        <div className="grid auto-rows-fr gap-5 md:grid-cols-6">
          {MENU.map((card) => (
            <article
              key={card.title}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1",
                accentStyles[card.accent],
                card.featured ? "md:col-span-4 md:row-span-2" : "md:col-span-2",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    className={cn(
                      "mb-2 text-[10px] font-semibold tracking-[0.25em] uppercase",
                      card.accent === "dark"
                        ? "text-background/60"
                        : "text-muted-foreground",
                    )}
                  >
                    {card.tagline}
                  </div>
                  <h3 className="font-serif text-3xl font-medium sm:text-4xl">
                    {card.title}
                  </h3>
                </div>
                <div
                  className={cn(
                    "border-current/20 inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap",
                    card.accent === "dark"
                      ? "border-background/30"
                      : "border-foreground/15",
                  )}
                >
                  from {card.priceFrom}
                </div>
              </div>

              <p
                className={cn(
                  "mt-4 max-w-md text-sm leading-relaxed sm:text-base",
                  card.accent === "dark"
                    ? "text-background/70"
                    : "text-muted-foreground",
                )}
              >
                {card.description}
              </p>

              {card.featured ? (
                <div className="relative mt-8 flex flex-1 items-end">
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 font-medium"
                      >
                        <span
                          className={cn(
                            "h-1 w-1 rounded-full",
                            card.accent === "dark"
                              ? "bg-background/60"
                              : "bg-brand",
                          )}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-12 -bottom-12 size-72 transition-transform group-hover:scale-105 sm:-right-8 sm:-bottom-8",
                      accentIllustrationStyles[card.accent],
                    )}
                  >
                    {card.illustration}
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className={cn(
                      "pointer-events-none mt-6 -mr-8 -mb-8 ml-auto size-40 transition-transform group-hover:scale-105 sm:size-48",
                      accentIllustrationStyles[card.accent],
                    )}
                  >
                    {card.illustration}
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5 text-xs font-medium">
                    {card.items.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "rounded-full px-2.5 py-1",
                          card.accent === "dark"
                            ? "bg-background/15"
                            : "bg-foreground/8",
                        )}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
