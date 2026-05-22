"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { text: "Menu", href: siteConfig.menuUrl },
  { text: "Our Story", href: siteConfig.aboutUrl },
  { text: "Visit", href: siteConfig.visitUrl },
];

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md",
        "bg-background/70 border-border/60 border-b",
        className,
      )}
    >
      <div className="max-w-container relative mx-auto flex items-center justify-between gap-4 px-4 py-4">
        <a
          href="#top"
          className="text-foreground flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <span className="border-border relative size-9 overflow-hidden rounded-full border shadow-sm">
            <Image
              src={siteConfig.logo}
              alt="The Burp Co. logo"
              fill
              className="object-cover"
              sizes="36px"
              priority
            />
          </span>
          <span className="font-serif text-xl font-medium tracking-tight">
            The Burp Co.
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-foreground relative text-sm font-medium tracking-wide transition-colors"
            >
              {link.text}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="text-muted-foreground flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
            <span className="bg-brand size-1.5 rounded-full" />
            {siteConfig.stats.branches} branches · Mindanao
          </span>
          <a
            href={siteConfig.orderUrl}
            className="bg-foreground text-background hover:bg-brand rounded-full px-5 py-2 text-xs font-semibold tracking-wide uppercase transition-colors"
          >
            Order ahead
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="border-border text-foreground inline-flex size-10 items-center justify-center rounded-full border md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <div
        className={cn(
          "border-border bg-background grid overflow-hidden border-t transition-all duration-300 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0",
        )}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-foreground hover:bg-secondary font-serif rounded-xl px-3 py-3 text-lg font-medium transition-colors"
              >
                {link.text}
              </a>
            ))}
            <a
              href={siteConfig.orderUrl}
              onClick={() => setOpen(false)}
              className="bg-foreground text-background mt-2 rounded-full py-3 text-center text-sm font-semibold tracking-wide uppercase"
            >
              Order ahead
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
