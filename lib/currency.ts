import { siteConfig } from "@/config/site";

export function formatPrice(
  amount: number,
  options?: { suffix?: string },
): string {
  const formatted = amount.toLocaleString(siteConfig.currency.locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const price = `${siteConfig.currency.symbol}${formatted}`;

  return options?.suffix ? `${price} ${options.suffix}` : price;
}

export function formatPriceFrom(amount: number, suffix?: string): string {
  return formatPrice(amount, suffix ? { suffix } : undefined);
}
