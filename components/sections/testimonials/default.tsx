import { QuoteIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  detail: string;
  rotate: string;
  variant: "cream" | "warm" | "dark" | "rose";
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Started ordering from them during lockdown in 2020. Still here every weekend. The durian custard pie is illegal levels of good.",
    author: "Priya N.",
    detail: "Davao regular since 2020",
    rotate: "-rotate-2",
    variant: "cream",
  },
  {
    quote:
      "Finally tried the new SM Zamboanga branch. Worth the trip from the city proper. That cardamom oat latte though.",
    author: "Marcus T.",
    detail: "SM Zamboanga opening week",
    rotate: "rotate-1",
    variant: "warm",
  },
  {
    quote:
      "We had them do our wedding cake. Three tiers, brown sugar chiffon, fresh figs. People are still talking about it nine months later.",
    author: "Jordan & Avery",
    detail: "married, very happy",
    rotate: "-rotate-1",
    variant: "dark",
  },
  {
    quote:
      "SM Ecoland branch saved my mall trips. One slice of pie and a coffee — that&apos;s the whole plan.",
    author: "Sam K.",
    detail: "SM Ecoland regular",
    rotate: "rotate-2",
    variant: "rose",
  },
  {
    quote:
      "Three branches now and I&apos;ve tried them all. Gulf View commissary pies hit different when you know they&apos;re baked fresh that morning.",
    author: "Lex R.",
    detail: "branch hopper",
    rotate: "-rotate-2",
    variant: "cream",
  },
];

const variantStyles: Record<Testimonial["variant"], string> = {
  cream: "bg-card text-foreground border-border",
  warm: "bg-brand/10 text-foreground border-brand/20",
  dark: "bg-foreground text-background border-foreground",
  rose: "bg-accent text-foreground border-accent",
};

export default function Testimonials({ className }: { className?: string }) {
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
            From the guest book
          </div>
          <h2 className="font-serif text-foreground text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl md:text-6xl">
            Things people have said
            <em className="text-brand font-light italic"> out loud </em>
            in the bakery.
          </h2>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className={cn(
                "mb-5 inline-block w-full break-inside-avoid rounded-2xl border p-6 shadow-md transition-transform hover:rotate-0 hover:scale-[1.02]",
                variantStyles[t.variant],
                t.rotate,
              )}
            >
              <QuoteIcon
                className={cn(
                  "mb-3 size-6 opacity-60",
                  t.variant === "dark" ? "text-background/60" : "text-brand",
                )}
              />
              <blockquote
                className="font-serif text-xl leading-snug font-medium italic"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
              />
              <figcaption className="mt-5 flex items-center gap-3">
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full text-sm font-bold",
                    t.variant === "dark"
                      ? "bg-background/15 text-background"
                      : "bg-brand/15 text-brand",
                  )}
                >
                  {t.author
                    .split(" ")
                    .map((s) => s[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.author}</div>
                  <div
                    className={cn(
                      "text-xs",
                      t.variant === "dark"
                        ? "text-background/60"
                        : "text-muted-foreground",
                    )}
                  >
                    {t.detail}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
