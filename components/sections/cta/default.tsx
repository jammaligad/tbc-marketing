import { ArrowUpRightIcon, MapPinIcon } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Sparkle } from "../../ui/illustrations";

interface CTAProps {
  className?: string;
}

export default function CTA({ className }: CTAProps) {
  return (
    <section
      className={cn(
        "bg-foreground text-background relative overflow-hidden px-4 py-24 sm:py-36",
        className,
      )}
    >
      <Sparkle
        className="text-background/15 absolute top-12 left-[10%] size-8"
        style={{ animation: "float 6s ease-in-out infinite" }}
      />
      <Sparkle
        className="text-background/20 absolute right-[15%] bottom-20 size-6"
        style={{ animation: "float 7s ease-in-out infinite 1s" }}
      />
      <Sparkle
        className="text-background/10 absolute top-1/3 right-[8%] size-12"
        style={{ animation: "float 8s ease-in-out infinite 2s" }}
      />

      <div className="from-brand/15 absolute inset-0 bg-radial via-transparent to-transparent opacity-60" />

      <div className="max-w-container relative z-10 mx-auto text-center">
        <div className="text-background/60 mb-6 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase">
          <span className="bg-background/40 h-px w-8" />
          Ready when you are
          <span className="bg-background/40 h-px w-8" />
        </div>

        <h2 className="font-serif text-background text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] font-medium tracking-tight">
          Something sweet
          <br />
          is <em className="text-brand-foreground font-light italic">waiting</em>.
        </h2>

        <p className="text-background/70 mx-auto mt-8 max-w-xl text-lg leading-relaxed">
          Can&apos;t make it to a branch? Email{" "}
          <a
            href={siteConfig.links.email}
            className="text-background underline decoration-brand-foreground decoration-2 underline-offset-4"
          >
            dburpco@gmail.com
          </a>{" "}
          for orders, or call{" "}
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-background underline decoration-brand-foreground decoration-2 underline-offset-4"
          >
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.orderUrl}
            className="group bg-background text-foreground hover:bg-brand hover:text-primary-foreground inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all hover:gap-4"
          >
            Order ahead
            <ArrowUpRightIcon className="size-4 transition-transform group-hover:rotate-45" />
          </a>
          <a
            href={siteConfig.visitUrl}
            className="border-background/30 hover:border-background hover:bg-background hover:text-foreground inline-flex items-center gap-2 rounded-full border px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all"
          >
            <MapPinIcon className="size-4" />
            Find the bakery
          </a>
        </div>
      </div>
    </section>
  );
}
