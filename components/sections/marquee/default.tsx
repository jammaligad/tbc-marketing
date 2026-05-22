import { cn } from "@/lib/utils";

import { Sparkle } from "../../ui/illustrations";

interface MarqueeProps {
  items?: string[];
  className?: string;
  variant?: "brand" | "ghost";
}

const DEFAULT_ITEMS = [
  "Baked fresh daily",
  "Brewed strong always",
  "Crimped by hand",
  "Pulled to order",
  "Hand-frosted with care",
  "Small batch, big love",
];

export default function Marquee({
  items = DEFAULT_ITEMS,
  className,
  variant = "brand",
}: MarqueeProps) {
  const loopItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        "border-y overflow-hidden py-5",
        variant === "brand" &&
          "bg-foreground text-background border-foreground",
        variant === "ghost" && "bg-card text-foreground border-border",
        className,
      )}
    >
      <div className="flex w-max animate-[marquee_40s_linear_infinite] items-center gap-10 whitespace-nowrap">
        {loopItems.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-serif text-xl font-medium tracking-wide italic sm:text-2xl">
              {item}
            </span>
            <Sparkle className="size-4 opacity-60" />
          </div>
        ))}
      </div>
    </div>
  );
}
