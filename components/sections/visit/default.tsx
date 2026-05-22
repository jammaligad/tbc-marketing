import { ArrowUpRightIcon, MapPinIcon, PhoneIcon, SparklesIcon } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Sparkle } from "../../ui/illustrations";

const MALL_HOURS = [
  { day: "Monday – Thursday", hours: "10am – 9pm" },
  { day: "Friday – Saturday", hours: "10am – 10pm" },
  { day: "Sunday", hours: "10am – 9pm" },
];

function MindanaoMapIllustration() {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="600" height="400" fill="currentColor" opacity="0.04" />
      <path
        d="M120 80 C180 60 280 70 340 90 C400 110 460 100 520 120 L540 200 C520 260 480 300 420 320 C360 340 280 330 220 310 C160 290 100 260 80 200 C70 160 90 100 120 80 Z"
        fill="currentColor"
        opacity="0.08"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.2"
      />
      <text
        x="300"
        y="55"
        textAnchor="middle"
        fontSize="11"
        fontFamily="var(--font-sans), sans-serif"
        fontWeight="600"
        letterSpacing="3"
        fill="currentColor"
        opacity="0.35"
      >
        MINDANAO
      </text>
      {[
        { x: 280, y: 200, label: "Davao" },
        { x: 180, y: 240, label: "Zamboanga" },
      ].map((pin) => (
        <g key={pin.label} transform={`translate(${pin.x}, ${pin.y})`}>
          <circle r="36" fill="currentColor" opacity="0.08" />
          <path
            d="M 0,-18 C 10,-18 18,-10 18,0 C 18,14 0,28 0,28 C 0,28 -18,14 -18,0 C -18,-10 -10,-18 0,-18 Z"
            fill="currentColor"
          />
          <circle cx="0" cy="0" r="4" fill="var(--background)" />
          <text
            x="0"
            y="44"
            textAnchor="middle"
            fontSize="10"
            fontFamily="var(--font-sans), sans-serif"
            fontWeight="700"
            fill="currentColor"
          >
            {pin.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function Visit({ className }: { className?: string }) {
  return (
    <section
      id="visit"
      className={cn("relative px-4 py-20 sm:py-32", className)}
    >
      <div className="max-w-container mx-auto">
        <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <div className="text-muted-foreground mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase">
              <span className="bg-brand h-px w-8" />
              Visit us
            </div>
            <h2 className="font-serif text-foreground text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl md:text-6xl">
              Three spots across{" "}
              <em className="text-brand font-light italic">Mindanao</em>.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Order and pickup at our commissary in Gulf View, Davao — or grab
            something fresh at SM Ecoland and our newest branch at SM Zamboanga.
            Mall branches follow SM operating hours.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <div className="border-border bg-card relative overflow-hidden rounded-3xl border lg:col-span-5">
            <div className="text-foreground aspect-square sm:aspect-[4/3]">
              <MindanaoMapIllustration />
            </div>
            <div className="border-border border-t p-6">
              <div className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">
                Serving
              </div>
              <div className="font-serif text-foreground mt-1 text-2xl font-medium">
                Davao City &amp; Zamboanga City
              </div>
              <div className="text-muted-foreground mt-1 text-sm">
                Philippines
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-7">
            {siteConfig.branches.map((branch) => (
              <article
                key={branch.id}
                className="border-border bg-card group hover:border-brand/30 relative rounded-2xl border p-6 transition-all hover:shadow-md"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand/10 text-brand flex size-11 shrink-0 items-center justify-center rounded-full">
                      <MapPinIcon className="size-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-serif text-foreground text-xl font-medium">
                          {branch.name}
                        </h3>
                        {branch.isNewest && (
                          <span className="bg-brand text-primary-foreground inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
                            <SparklesIcon className="size-3" />
                            Newest
                          </span>
                        )}
                        {branch.isCommissary && (
                          <span className="border-border text-muted-foreground rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
                            Commissary
                          </span>
                        )}
                      </div>
                      <div className="text-foreground/90 mt-1 font-medium">
                        {branch.address}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {branch.city}, {branch.region}
                      </div>
                      <p className="text-muted-foreground mt-2 max-w-lg text-sm leading-relaxed">
                        {branch.detail}
                      </p>
                    </div>
                  </div>
                  <a
                    href={siteConfig.links.maps}
                    className="border-border text-foreground hover:bg-foreground hover:text-background inline-flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors"
                  >
                    Directions
                    <ArrowUpRightIcon className="size-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="bg-foreground text-background relative overflow-hidden rounded-3xl p-8">
            <Sparkle className="text-background/15 absolute -top-4 -right-4 size-32" />
            <div className="font-serif text-2xl leading-tight font-medium">
              Mall branch hours
            </div>
            <p className="text-background/60 mt-2 text-sm">
              SM Ecoland &amp; SM Zamboanga — hours follow mall schedules.
            </p>
            <ul className="divide-background/15 mt-6 divide-y text-sm">
              {MALL_HOURS.map((row) => (
                <li
                  key={row.day}
                  className="flex items-center justify-between py-3"
                >
                  <span className="text-background/80">{row.day}</span>
                  <span className="font-medium">{row.hours}</span>
                </li>
              ))}
            </ul>
            <div className="border-background/15 mt-6 border-t pt-5 space-y-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-background/80 hover:text-background flex items-center gap-2 text-sm"
              >
                <PhoneIcon className="size-4" />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="border-border bg-card rounded-3xl border p-8">
            <div className="font-serif text-foreground text-2xl leading-tight font-medium">
              Commissary note
            </div>
              <p className="text-muted-foreground mt-4 leading-relaxed">
              Our Gulf View commissary is a production kitchen — not a walk-in
              retail shop. For custom orders, catering, or wholesale, reach us at{" "}
              <a
                href={siteConfig.links.email}
                className="text-foreground underline decoration-brand decoration-2 underline-offset-4"
              >
                dburpco@gmail.com
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-foreground underline decoration-brand decoration-2 underline-offset-4"
              >
                {siteConfig.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
