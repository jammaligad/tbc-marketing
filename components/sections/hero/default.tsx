import { ArrowUpRightIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

import { products } from "@/config/products";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import {
  CakeIllustration,
  PieIllustration,
  Sparkle,
  StampSeal,
} from "../../ui/illustrations";

const heroProduct = products.find((p) => p.id === "durian-pie")!;
const chocoMoist = products.find((p) => p.id === "special-choco-moist-cake")!;
const cheesecake = products.find(
  (p) => p.id === "blueberry-cheesecake-pie",
)!;

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section
      id="top"
      className={cn(
        "relative overflow-hidden px-4 pt-24 pb-12 sm:pt-32 sm:pb-20",
        className,
      )}
    >
      <div className="text-brand/8 pointer-events-none absolute -top-32 -right-40 hidden lg:block">
        <PieIllustration className="h-[560px] w-[560px] -rotate-12" />
      </div>
      <div className="text-brand/6 pointer-events-none absolute -bottom-24 -left-32 hidden lg:block">
        <CakeIllustration className="h-[420px] w-[420px] rotate-6" />
      </div>

      <div className="max-w-container relative z-10 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="text-muted-foreground animate-appear mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase opacity-0">
              <span className="bg-brand inline-block h-1.5 w-1.5 rounded-full" />
              <span>Est. {siteConfig.foundedYear}</span>
              <span className="opacity-40">·</span>
              <span>Davao City</span>
              <span className="opacity-40">·</span>
              <span className="text-brand inline-flex items-center gap-1.5">
                <MapPinIcon className="size-3" />
                {siteConfig.stats.branches} branches · Mindanao
              </span>
            </div>

            <h1 className="animate-appear font-serif text-foreground text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] font-medium tracking-tight">
              <span className="block">Cakes, brownies,</span>
              <span className="block">
                and pies that are{" "}
                <em className="text-brand font-light italic">sulit</em>
              </span>
              <span className="relative inline-block">
                <span>and seriously </span>
                <Sparkle className="text-brand absolute -top-2 -right-6 size-5 sm:-top-4 sm:-right-8 sm:size-7" />
              </span>
              <span className="decoration-brand/40 underline decoration-wavy underline-offset-[0.15em]">
                lami
              </span>
              .
            </h1>

            <p className="animate-appear text-muted-foreground mt-8 max-w-xl text-lg leading-relaxed text-balance opacity-0 delay-100 sm:text-xl">
              {siteConfig.description} We also serve coffee at our mall
              branches — but our heart is in the oven: from scratch, baked
              fresh, and made for sharing.
            </p>

            <div className="animate-appear mt-10 flex flex-wrap items-center gap-4 opacity-0 delay-300">
              <a
                href={siteConfig.orderUrl}
                className="group bg-brand text-primary-foreground hover:bg-brand/90 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold tracking-wide uppercase transition-all hover:gap-4"
              >
                Order now
                <ArrowUpRightIcon className="size-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href={siteConfig.visitUrl}
                className="border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background group inline-flex items-center gap-2 rounded-full border px-7 py-4 text-sm font-semibold tracking-wide uppercase transition-all"
              >
                <MapPinIcon className="size-4" />
                Find a branch
              </a>
            </div>

            <div className="mt-14 hidden items-center gap-8 sm:flex">
              <div>
                <div className="font-serif text-foreground text-3xl font-medium">
                  {siteConfig.stats.years}+
                </div>
                <div className="text-muted-foreground mt-1 text-xs tracking-wide uppercase">
                  Years baking in Davao
                </div>
              </div>
              <div className="bg-border h-12 w-px" />
              <div>
                <div className="font-serif text-foreground text-3xl font-medium">
                  {siteConfig.stats.branches}
                </div>
                <div className="text-muted-foreground mt-1 text-xs tracking-wide uppercase">
                  Branches across Mindanao
                </div>
              </div>
              <div className="bg-border h-12 w-px" />
              <div>
                <div className="font-serif text-foreground text-3xl font-medium">
                  Daily
                </div>
                <div className="text-muted-foreground mt-1 text-xs tracking-wide uppercase">
                  Baked fresh from scratch
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-square max-w-[480px]">
              <div className="bg-brand/12 absolute inset-0 rounded-full blur-3xl" />

              <div
                className="bg-card border-border absolute top-[6%] left-[8%] h-[88%] w-[84%] overflow-hidden rounded-[2rem] border shadow-2xl"
                style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.18)" }}
              >
                <Image
                  src={heroProduct.image}
                  alt={`${heroProduct.name} from The Burp Co.`}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
              </div>

              <div
                className="border-border absolute top-[2%] -right-2 h-28 w-28 rotate-12 overflow-hidden rounded-2xl border shadow-xl sm:h-32 sm:w-32"
                style={{ animation: "float 6s ease-in-out infinite" }}
              >
                <Image
                  src={cheesecake.image}
                  alt={`${cheesecake.name} from The Burp Co.`}
                  fill
                  className="object-cover object-center"
                  sizes="128px"
                />
              </div>

              <div
                className="border-foreground absolute -bottom-2 -left-4 h-24 w-24 -rotate-12 overflow-hidden rounded-full border-2 shadow-xl sm:h-28 sm:w-28"
                style={{ animation: "float 7s ease-in-out infinite 1s" }}
              >
                <Image
                  src={chocoMoist.image}
                  alt={`${chocoMoist.name} from The Burp Co.`}
                  fill
                  className="object-cover object-center"
                  sizes="112px"
                />
              </div>

              <div className="text-brand/40 absolute right-2 -bottom-8 size-32 sm:right-8">
                <StampSeal label={`EST · ${siteConfig.foundedYear}`} />
              </div>

              <Sparkle
                className="text-brand absolute top-12 -left-2 size-5"
                style={{ animation: "float 5s ease-in-out infinite 0.5s" }}
              />
              <Sparkle
                className="text-brand absolute top-1/3 right-0 size-3 opacity-60"
                style={{ animation: "float 8s ease-in-out infinite 2s" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="from-background to-background/0 pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t" />
    </section>
  );
}
