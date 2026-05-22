import { featuredProducts } from "@/config/products";
import { cn } from "@/lib/utils";

import { ProductCard } from "../../ui/product-card";

interface BestsellersProps {
  className?: string;
}

export default function Bestsellers({ className }: BestsellersProps) {
  const [hero, ...rest] = featuredProducts;

  return (
    <section className={cn("relative px-4 py-16 sm:py-24", className)}>
      <div className="max-w-container mx-auto">
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-muted-foreground mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase">
              <span className="bg-brand h-px w-8" />
              Best sellers
            </div>
            <h2 className="font-serif text-foreground text-3xl leading-tight font-medium sm:text-5xl">
              The ones people{" "}
              <em className="text-brand font-light italic">order again</em>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed sm:text-base">
            Fan favorites from our Davao kitchen — whole cakes, cheesecake pies,
            and brownies that built our name.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4">
          {hero && (
            <ProductCard
              product={hero}
              featured
              className="col-span-2 row-span-2 md:col-span-2 md:row-span-2"
            />
          )}
          {rest.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
