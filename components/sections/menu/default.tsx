import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

import { combos, products } from "@/config/products";
import { siteConfig } from "@/config/site";
import { formatPriceFrom } from "@/lib/currency";
import { cn } from "@/lib/utils";

import { BrownieIllustration } from "../../ui/illustrations";

interface MenuCard {
  title: string;
  tagline: string;
  description: string;
  priceFrom: number;
  priceSuffix?: string;
  image?: string;
  imageAlt?: string;
  illustration?: React.ReactNode;
  accent: "cream" | "warm" | "dark" | "rose";
  items: string[];
}

const pieHero = products.find((p) => p.id === "durian-pie")!;
const cakeHero = products.find((p) => p.id === "special-choco-moist-cake")!;
const comboHero = combos.find((c) => c.id === "mix-match-4")!;

const MENU: MenuCard[] = [
  {
    title: "Pies",
    tagline: "Our signature",
    description:
      "Filipino classics and creative twists — durian, buko, egg pie, and cheesecake pies that put us on the map.",
    priceFrom: 350,
    image: pieHero.image,
    imageAlt: `${pieHero.name} from The Burp Co.`,
    accent: "warm",
    items: [
      "Durian pie",
      "Buko pie",
      "Blueberry cheesecake pie",
      "Apple crumble pie",
      "Oreo cheesecake pie",
      "Egg pie",
    ],
  },
  {
    title: "Cakes",
    tagline: "Whole & by the slice",
    description:
      "Moist choco cakes, ube yema, and celebration whole cakes — sulit, barato, and lami for every occasion.",
    priceFrom: 180,
    priceSuffix: "/ slice",
    image: cakeHero.image,
    imageAlt: `${cakeHero.name} from The Burp Co.`,
    accent: "rose",
    items: [
      "Choco moist cake",
      "Ube yema cake",
      "Custard cake",
      "Custom whole cakes",
    ],
  },
  {
    title: "Brownies",
    tagline: "Rich & fudgy",
    description:
      "Double chocolate brownies baked dense and decadent — the perfect pairing with our pies and cakes.",
    priceFrom: 120,
    illustration: <BrownieIllustration className="h-full w-full" />,
    accent: "dark",
    items: ["Double choco brownie", "Best seller batch", "Party trays"],
  },
  {
    title: "Mix n' Match",
    tagline: siteConfig.mixAndMatch.title,
    description: siteConfig.mixAndMatch.description,
    priceFrom: 250,
    image: comboHero.image,
    imageAlt: `${comboHero.name} from The Burp Co.`,
    accent: "cream",
    items: [
      "Choco moist + cheesecake",
      "Pie sampler combo",
      "Build your own dish",
    ],
  },
];

const accentStyles: Record<MenuCard["accent"], string> = {
  cream: "bg-secondary text-foreground",
  warm: "bg-brand/8 text-foreground",
  dark: "bg-foreground text-background",
  rose: "bg-accent text-foreground",
};

function MenuVisual({ card }: { card: MenuCard }) {
  if (card.image) {
    return (
      <div className="bg-background/40 relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm">
        <Image
          src={card.image}
          alt={card.imageAlt ?? card.title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative mt-6 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl",
        card.accent === "dark" ? "bg-background/10" : "bg-foreground/5",
      )}
    >
      <div
        className={cn(
          "pointer-events-none size-40 transition-transform group-hover:scale-105 sm:size-48",
          card.accent === "dark" ? "text-background" : "text-brand",
        )}
      >
        {card.illustration}
      </div>
    </div>
  );
}

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
              Cakes, brownies,
              <br />
              and pies —{" "}
              <em className="text-brand font-light italic">our way</em>.
            </h2>
          </div>
          <a
            href={siteConfig.orderUrl}
            className="group text-foreground inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase"
          >
            Order for pickup
            <span className="border-foreground/30 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background flex size-9 items-center justify-center rounded-full border transition-all">
              <ArrowUpRightIcon className="size-4" />
            </span>
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MENU.map((card) => (
            <article
              key={card.title}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1",
                accentStyles[card.accent],
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
                    "border-current/20 inline-flex shrink-0 items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap",
                    card.accent === "dark"
                      ? "border-background/30"
                      : "border-foreground/15",
                  )}
                >
                  from {formatPriceFrom(card.priceFrom, card.priceSuffix)}
                </div>
              </div>

              <p
                className={cn(
                  "mt-4 text-sm leading-relaxed sm:text-base",
                  card.accent === "dark"
                    ? "text-background/70"
                    : "text-muted-foreground",
                )}
              >
                {card.description}
              </p>

              <MenuVisual card={card} />

              <ul className="mt-4 flex flex-wrap gap-1.5 text-xs font-medium">
                {card.items.map((item) => (
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
