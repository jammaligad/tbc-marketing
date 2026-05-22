import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import TBC from "../../logos/tbc";
import { DividerOrnament } from "../../ui/illustrations";
import { ModeToggle } from "../../ui/mode-toggle";

const COLUMNS = [
  {
    title: "Menu",
    links: [
      { text: "Pies", href: siteConfig.menuUrl },
      { text: "Cakes", href: siteConfig.menuUrl },
      { text: "Coffee", href: siteConfig.menuUrl },
      { text: "Pastries", href: siteConfig.menuUrl },
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
      { text: "Email", href: siteConfig.links.email },
      { text: "Press", href: siteConfig.links.email },
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
              <span className="bg-foreground text-background flex size-12 items-center justify-center rounded-full">
                <TBC className="size-6" />
              </span>
              <span className="font-serif text-3xl font-medium">
                The Burp Co.
              </span>
            </div>
            <p className="font-serif text-foreground/80 mt-6 max-w-md text-2xl leading-snug font-light italic">
              Pies you dream about, coffee that keeps you coming back.
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
              <div className="pt-2">
                <a
                  href={siteConfig.links.email}
                  className="text-foreground hover:text-brand"
                >
                  hello@theburpco.com
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
            · Mindanao, Philippines
          </div>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.url}
              className="text-muted-foreground hover:text-foreground text-xs"
            >
              Privacy
            </a>
            <a
              href={siteConfig.url}
              className="text-muted-foreground hover:text-foreground text-xs"
            >
              Terms
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
