import Image from "next/image";

import { brandAssets, featuredProducts } from "@/config/products";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { DividerOrnament, WheatSprig } from "../../ui/illustrations";

interface StoryProps {
  className?: string;
}

export default function Story({ className }: StoryProps) {
  const years = siteConfig.stats.years;
  const spotlight = featuredProducts[0];

  return (
    <section
      id="about"
      className={cn(
        "bg-secondary relative overflow-hidden px-4 py-20 sm:py-32",
        className,
      )}
    >
      <div className="text-brand/15 pointer-events-none absolute top-12 left-4 hidden lg:block">
        <WheatSprig className="h-80 w-20" />
      </div>
      <div className="text-brand/15 pointer-events-none absolute right-8 bottom-12 hidden -scale-x-100 lg:block">
        <WheatSprig className="h-80 w-20" />
      </div>

      <div className="max-w-container relative mx-auto">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-muted-foreground mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase">
              <span className="bg-brand h-px w-8" />
              Our story
            </div>
            <h2 className="font-serif text-foreground text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl md:text-7xl">
              Started in{" "}
              <em className="font-light italic">{siteConfig.foundedYear}</em>,
              <br />
              rooted in Davao.
            </h2>

            <DividerOrnament className="text-brand my-10 w-48 max-w-full" />

            <div className="text-foreground/80 max-w-2xl space-y-5 text-lg leading-relaxed">
              <p>
                The Burp Co. began during the pandemic in {siteConfig.foundedYear}
                — out of Gulf View, Bago Aplaya, Davao City, with a stand
                mixer, a stubborn love of pastry, and customers who kept
                ordering anyway.
              </p>
              <p>
                What started in our home barangay grew into three branches
                across Mindanao: our commissary in Gulf View, a mall counter at SM
                Ecoland, and our newest spot on the 3rd floor of SM Zamboanga.
              </p>
              <p className="font-serif text-foreground text-2xl leading-snug font-medium italic sm:text-3xl">
                &ldquo;We&apos;re here to satisfy your cravings for premium
                pastries — fresh, interesting, and mouthwatering.&rdquo;
              </p>
              <p className="text-muted-foreground text-sm tracking-wide uppercase">
                — The Burp Co. team
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="border-foreground/10 bg-card overflow-hidden rounded-3xl border shadow-xl">
              <div className="bg-secondary relative aspect-[16/10] w-full">
                <Image
                  src={brandAssets.heroDisplay}
                  alt="Special choco moist cakes fresh from The Burp Co. display case"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <p className="text-muted-foreground px-6 py-4 text-xs tracking-wide uppercase">
                Baked fresh daily — straight from our display case
              </p>
            </div>

            <div className="border-foreground/10 bg-card rounded-3xl border p-8 shadow-xl">
              <div className="text-muted-foreground mb-6 text-xs font-semibold tracking-[0.2em] uppercase">
                By the numbers
              </div>
              <dl className="divide-foreground/10 divide-y">
                {[
                  { label: "Years in business", value: String(years) },
                  { label: "Branches across Mindanao", value: "3" },
                  { label: "Best sellers on the menu", value: "8+" },
                  { label: "Core categories", value: "Cakes · Brownies · Pies" },
                  { label: "Started during", value: String(siteConfig.foundedYear) },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between gap-4 py-4"
                  >
                    <dt className="text-foreground/80 text-sm">{stat.label}</dt>
                    <dd className="font-serif text-foreground text-right text-2xl font-medium tracking-tight sm:text-3xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              {spotlight && (
                <div className="border-foreground/10 mt-8 border-t pt-6">
                  <div className="text-muted-foreground text-xs tracking-wide uppercase">
                    Currently obsessed with
                  </div>
                  <div className="font-serif text-foreground mt-2 text-xl font-medium italic">
                    {spotlight.name} — {spotlight.tag?.toLowerCase()}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
