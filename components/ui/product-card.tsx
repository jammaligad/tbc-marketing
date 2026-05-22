import Image from "next/image";

import type { Product } from "@/config/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
  className?: string;
}

export function ProductCard({
  product,
  featured = false,
  className,
}: ProductCardProps) {
  return (
    <article
      className={cn(
        "border-border bg-card group hover:border-brand/40 relative overflow-hidden rounded-2xl border transition-all hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <div
        className={cn(
          "bg-secondary relative overflow-hidden",
          featured ? "aspect-[4/5] sm:aspect-square" : "aspect-square",
        )}
      >
        <Image
          src={product.image}
          alt={`${product.name} from The Burp Co.`}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 40vw"
              : "(max-width: 768px) 50vw, 20vw"
          }
        />
        {product.tag && (
          <span className="bg-background/90 text-foreground absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase backdrop-blur-sm">
            {product.tag}
          </span>
        )}
      </div>
      <p className="text-muted-foreground sr-only">{product.description}</p>
    </article>
  );
}
