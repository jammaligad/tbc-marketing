import Image from "next/image";

import { combos } from "@/config/products";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface CombosProps {
  className?: string;
}

export default function Combos({ className }: CombosProps) {
  return (
    <section
      id="combos"
      className={cn("bg-secondary relative px-4 py-16 sm:py-24", className)}
    >
      <div className="max-w-container mx-auto">
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-muted-foreground mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase">
              <span className="bg-brand h-px w-8" />
              Mix &amp; match
            </div>
            <h2 className="font-serif text-foreground text-3xl leading-tight font-medium sm:text-5xl">
              Can&apos;t pick just{" "}
              <em className="text-brand font-light italic">one</em>?
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed sm:text-base">
            {siteConfig.mixAndMatch.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {combos.map((combo, i) => (
            <article
              key={combo.id}
              className={cn(
                "border-border bg-card group overflow-hidden rounded-3xl border transition-all hover:-translate-y-1 hover:shadow-lg",
                i === 0 && "md:col-span-2",
              )}
            >
              <div
                className={cn(
                  "bg-secondary relative overflow-hidden",
                  i === 0 ? "aspect-[21/9] sm:aspect-[16/7]" : "aspect-[4/3]",
                )}
              >
                <Image
                  src={combo.image}
                  alt={`${combo.name} — ${combo.subtitle}`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes={
                    i === 0
                      ? "(max-width: 1024px) 100vw, 58vw"
                      : "(max-width: 1024px) 100vw, 42vw"
                  }
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="text-muted-foreground mb-2 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  {combo.subtitle}
                </div>
                <h3 className="font-serif text-foreground text-2xl font-medium sm:text-3xl">
                  {combo.name}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
                  {combo.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {combo.items.map((item) => (
                    <li
                      key={item}
                      className="bg-foreground/8 rounded-full px-2.5 py-1 text-xs font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
