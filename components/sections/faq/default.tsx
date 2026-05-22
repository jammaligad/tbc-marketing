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
          We have three locations across Mindanao — available for ordering and
          pickup:
        </p>
        <ul className="space-y-3">
          {siteConfig.branches.map((branch) => (
            <li key={branch.id}>
              <span className="text-foreground font-medium">{branch.name}</span>
              {" — "}
              {branch.address}, {branch.city}, {branch.region}
              {branch.isCommissary && (
                <span className="text-muted-foreground">
                  {" "}
                  (commissary — production kitchen, not walk-in retail)
                </span>
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
    question: "How do I place an order?",
    answer: (
      <p>
        Email us at{" "}
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
        . You can also visit our SM Ecoland or SM Zamboanga branches during mall
        hours for walk-in orders.
      </p>
    ),
  },
  {
    question: "Do you take custom orders or pre-orders?",
    answer: (
      <p>
        Yes! Custom whole cakes and large orders should be placed in advance
        through our commissary. For catering or wholesale inquiries, contact{" "}
        <a
          href={siteConfig.links.email}
          className="text-foreground underline decoration-brand decoration-2 underline-offset-4"
        >
          dburpco@gmail.com
        </a>
        . Walk-ins at our mall branches are welcome for whatever&apos;s fresh.
      </p>
    ),
  },
  {
    question: "What is Mix n' Match?",
    answer: <p>{siteConfig.mixAndMatch.description}</p>,
  },
  {
    question: "When did The Burp Co. start?",
    answer: (
      <p>
        We started in {siteConfig.foundedYear} during the pandemic, in Gulf View,
        Bago Aplaya, Davao City. What began as a small cakes-and-pies
        operation from our commissary has grown into three branches across
        Mindanao — but we still bake everything from scratch, the same way we
        did on day one.
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
              For press or wholesale inquiries, reach us at{" "}
              <a
                href={siteConfig.links.email}
                className="text-foreground underline decoration-brand decoration-2 underline-offset-4"
              >
                dburpco@gmail.com
              </a>{" "}
              or{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-foreground underline decoration-brand decoration-2 underline-offset-4"
              >
                {siteConfig.phoneDisplay}
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
