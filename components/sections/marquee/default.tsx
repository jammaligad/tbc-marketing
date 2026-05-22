import { cn } from "@/lib/utils";

import { Sparkle } from "../../ui/illustrations";

interface MarqueeProps {
  className?: string;
  variant?: "brand" | "ghost";
}

export default function Marquee({
  className,
  variant = "brand",
}: MarqueeProps) {
  const items = [
    "Baked fresh daily",
    "Made from scratch",
    "Less sugar, all the flavor",
    "Cheesecake pies — must try",
    "Whole cakes, sulit & lami",
    "Premium ingredients only",
  ];
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
