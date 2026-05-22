import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

interface FAQItem {
  question: string;
  answer: ReactNode;
}

const ITEMS: FAQItem[] = [
  {
    question: "Where are your branches?",
    answer: (
      <>
        <p className="mb-4">
          We have three locations across Mindanao:
        </p>
        <ul className="space-y-3">
          {siteConfig.branches.map((branch) => (
            <li key={branch.id}>
              <span className="text-foreground font-medium">{branch.name}</span>
              {" — "}
              {branch.address}, {branch.city}, {branch.region}
              {branch.isCommissary && (
                <span className="text-muted-foreground"> (commissary — not walk-in retail)</span>
              )}
              {branch.isNewest && (
                <span className="text-brand"> · our newest branch</span>
              )}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    question: "What are your hours?",
    answer: (
      <p>
        Our mall branches at SM Ecoland (Davao) and SM Zamboanga follow SM mall
        operating hours — typically 10am to 9pm daily, with extended hours on
        weekends. The Gulf View commissary is a production kitchen and not open
        for walk-in retail. See our{" "}
        <Link
          href={siteConfig.visitUrl}
          className="text-foreground underline decoration-brand decoration-2 underline-offset-4"
        >
          visit page
        </Link>{" "}
        for details.
      </p>
    ),
  },
  {
    question: "Do you take custom orders or pre-orders?",
    answer: (
      <p>
        Yes! Custom cakes and large pie orders should be placed at least 48
        hours in advance through our commissary. For catering, give us a week.
        Walk-ins at our mall branches are always welcome for whatever&apos;s
        fresh in the case.
      </p>
    ),
  },
  {
    question: "Can you accommodate allergies or dietary needs?",
    answer: (
      <p>
        We always have a few options on select items. Our kitchen handles nuts,
        gluten, and dairy though, so we can&apos;t guarantee anything is
        allergen-free. Ask our team about ingredients for any item — we&apos;re
        happy to walk through it.
      </p>
    ),
  },
  {
    question: "When did The Burp Co. start?",
    answer: (
      <p>
        We started in {siteConfig.foundedYear}, right in the middle of the
        pandemic, from a commissary kitchen in Gulf View, Davao City. What
        began as a small-batch operation has grown into three branches across
        Mindanao — but we still bake everything the same way we did on day one.
      </p>
    ),
  },
];

interface FAQProps {
  className?: string;
}

export default function FAQ({ className }: FAQProps) {
  return (
    <section className={cn("relative px-4 py-20 sm:py-32", className)}>
      <div className="max-w-container mx-auto">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-muted-foreground mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase">
              <span className="bg-brand h-px w-8" />
              Good questions
            </div>
            <h2 className="font-serif text-foreground text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl">
              Things people <em className="text-brand font-light italic">ask</em>
              .
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Send us a note at{" "}
              <a
                href={siteConfig.links.email}
                className="text-foreground underline decoration-brand decoration-2 underline-offset-4"
              >
                hello@theburpco.com
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {ITEMS.map((item, i) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${i + 1}`}
                  className="border-border border-b last:border-b"
                >
                  <AccordionTrigger className="font-serif text-foreground py-6 text-left text-xl font-medium hover:no-underline sm:text-2xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
