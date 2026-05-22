"use client";

import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { StampSeal } from "../../ui/illustrations";

export default function Newsletter({ className }: { className?: string }) {
  return (
    <section className={cn("relative px-4 py-20 sm:py-28", className)}>
      <div className="max-w-container mx-auto">
        <div className="border-border bg-brand/8 relative overflow-hidden rounded-3xl border px-6 py-12 sm:px-12 sm:py-16">
          <div className="text-brand/30 pointer-events-none absolute -top-12 -right-12 hidden h-56 w-56 rotate-12 sm:block">
            <StampSeal label="WEEKLY · MENU" />
          </div>
          <div className="grid items-center gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="text-muted-foreground mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase">
                <span className="bg-brand h-px w-8" />
                The weekly bake
              </div>
              <h2 className="font-serif text-foreground text-3xl leading-[1.05] font-medium tracking-tight sm:text-5xl">
                Get the menu before
                <br className="hidden sm:block" /> it hits the case.
              </h2>
              <p className="text-muted-foreground mt-4 max-w-md text-base leading-relaxed">
                Every Sunday night, we email what&apos;s coming out of the oven
                that week. Specials, pre-order links, and the occasional dad
                joke. No spam, ever.
              </p>
            </div>

            <form
              className="md:col-span-2"
              action="#"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="border-foreground/15 bg-card flex items-center gap-2 rounded-full border p-1.5 shadow-sm">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="placeholder:text-muted-foreground/70 text-foreground w-full bg-transparent px-4 py-2 text-sm outline-none"
                />
                <button
                  type="submit"
                  className="group bg-foreground text-background hover:bg-brand inline-flex shrink-0 items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide uppercase transition-colors"
                >
                  Subscribe
                  <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
              <p className="text-muted-foreground mt-3 ml-4 text-xs">
                Sent Sundays. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
