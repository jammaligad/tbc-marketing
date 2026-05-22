import Image from "next/image";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { DividerOrnament } from "../../ui/illustrations";
import { ModeToggle } from "../../ui/mode-toggle";

const COLUMNS = [
  {
    title: "Menu",
    links: [
      { text: "Pies", href: siteConfig.menuUrl },
      { text: "Cakes", href: siteConfig.menuUrl },
      { text: "Brownies", href: siteConfig.menuUrl },
      { text: "Mix n' Match", href: "#combos" },
    ],
  },
  {
    title: "Branches",
    links: siteConfig.branches.map((b) => ({
      text: b.name,
      href: siteConfig.visitUrl,
    })),
  },
  {
    title: "Connect",
    links: [
      { text: "Instagram", href: siteConfig.links.instagram },
      { text: "Facebook", href: siteConfig.links.facebook },
      { text: "TikTok", href: siteConfig.links.tiktok },
      { text: "Email", href: siteConfig.links.email },
      { text: `Call ${siteConfig.phoneDisplay}`, href: `tel:${siteConfig.phone}` },
      { text: "Order inquiry", href: siteConfig.orderUrl },
    ],
  },
];

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "bg-secondary text-foreground relative px-4 pt-20 pb-10",
        className,
      )}
    >
      <div className="max-w-container mx-auto">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="border-border relative size-12 overflow-hidden rounded-full border shadow-sm">
                <Image
                  src={siteConfig.logo}
                  alt="The Burp Co. logo"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </span>
              <span className="font-serif text-3xl font-medium">
                The Burp Co.
              </span>
            </div>
            <p className="font-serif text-foreground/80 mt-6 max-w-md text-2xl leading-snug font-light italic">
              {siteConfig.tagline}
            </p>
            <DividerOrnament className="text-brand mt-8 w-40" />
            <div className="text-muted-foreground mt-6 space-y-3 text-sm">
              {siteConfig.branches.map((branch) => (
                <div key={branch.id}>
                  <div className="text-foreground font-medium">{branch.name}</div>
                  <div>
                    {branch.address}, {branch.city}
                  </div>
                </div>
              ))}
              <div className="space-y-1 pt-2">
                <a
                  href={siteConfig.links.email}
                  className="text-foreground hover:text-brand block"
                >
                  dburpco@gmail.com
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-foreground hover:text-brand block"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-muted-foreground mb-4 text-xs font-semibold tracking-[0.2em] uppercase">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        className="text-foreground/80 hover:text-brand text-sm transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-border/60 mt-16 flex flex-col-reverse items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <div className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} The Burp Co. · Est. {siteConfig.foundedYear}{" "}
            · Davao City, Philippines
          </div>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.links.instagram}
              className="text-muted-foreground hover:text-foreground text-xs"
            >
              Instagram
            </a>
            <a
              href={siteConfig.links.facebook}
              className="text-muted-foreground hover:text-foreground text-xs"
            >
              Facebook
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
