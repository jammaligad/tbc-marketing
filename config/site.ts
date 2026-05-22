export const siteConfig = {
  name: "The Burp Co.",
  shortName: "TBC",
  url: "https://theburpco.com",
  tagline: "Cakes, brownies, and pies — handmade in Davao.",
  description:
    "Premium cakes, brownies, and pies baked fresh in Davao City. Sulit, lami, and made from scratch at The Burp Co.",
  ogImage: "/og.svg",
  logo: "/products/logo.png",
  icons: {
    favicon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  foundedYear: 2020,
  originStory:
    "Roots in Gulf View, Bago Aplaya — now baking across Mindanao.",
  currency: {
    code: "PHP",
    symbol: "₱",
    locale: "en-PH",
  },
  menuUrl: "#menu",
  aboutUrl: "#about",
  visitUrl: "#visit",
  orderUrl: "mailto:dburpco@gmail.com?subject=Order%20Inquiry",
  getStartedUrl: "#menu",
  phone: "+639668769662",
  phoneDisplay: "0966 876 9662",
  links: {
    instagram: "https://instagram.com/theburpco",
    facebook: "https://facebook.com/theburpco",
    tiktok: "https://tiktok.com/@the.burp.co",
    email: "mailto:dburpco@gmail.com",
    maps: "#visit",
  },
  branches: [
    {
      id: "commissary",
      name: "Commissary Branch",
      address: "Gulf View, Bago Aplaya",
      city: "Davao City",
      region: "Philippines",
      detail:
        "Where it all began in 2020 — our production kitchen and commissary, still baking every cake, brownie, and pie from scratch.",
      isCommissary: true,
    },
    {
      id: "sm-ecoland",
      name: "SM Ecoland",
      address: "2nd Floor, SM Ecoland",
      city: "Davao City",
      region: "Philippines",
      detail:
        "Order and pickup while you shop — whole cakes, slices, and our bestsellers ready to go.",
    },
    {
      id: "sm-zamboanga",
      name: "SM Zamboanga",
      address: "3rd Floor, SM City Zamboanga",
      city: "Zamboanga City",
      region: "Philippines",
      detail:
        "Our newest branch — bringing The Burp Co. to Zamboanga City for the first time.",
      isNewest: true,
    },
  ],
  bestSellers: [
    { name: "Durian Pie", note: "Davao favorite" },
    { name: "Buko Pie", note: "Classic Filipino" },
    { name: "Blueberry Cheesecake Pie", note: "Must try" },
    { name: "Egg Pie", note: "Filipino staple" },
    { name: "Special Choco Moist Cake", note: "Best seller" },
    { name: "Ube Yema Cake", note: "Local twist" },
    { name: "Custard Cake", note: "Fan favorite" },
    { name: "Carrot Cake", note: "Crowd pleaser" },
  ],
  mixAndMatch: {
    title: "Mix n' Match",
    description:
      "Can't pick just one? Combine our chocolate moist cake, cheesecake, and pies in a single dish — a taste of everything The Burp Co. does best.",
  },
  values: [
    {
      title: "Homemade",
      description:
        "Cakes and pies baked fresh every day — never yesterday's stock, never shortcuts.",
    },
    {
      title: "Only the best",
      description:
        "Premium ingredients in every batch, because sulit should still mean lami.",
    },
    {
      title: "Less sugar",
      description:
        "Pastries crafted with less sugar while keeping all the flavor you come back for.",
    },
    {
      title: "Delicious",
      description:
        "Every bite built to deliver — from whole cakes to a single slice on the go.",
    },
  ],
  press: [
    {
      source: "Davao Food Guide",
      quote:
        "Getting traction for their very sulit and barato yet lami whole cakes — quality you can taste in every slice.",
    },
    {
      source: "The Food Therapy",
      quote:
        "Scrumptious freshly baked pastries made with premium, quality ingredients you can trust.",
    },
    {
      source: "Bisag Asa",
      quote: "Their cheesecake pies are a must try — seriously, don't skip them.",
    },
  ],
  stats: {
    years: new Date().getFullYear() - 2020,
    branches: 3,
    bestSellerCount: 8,
    categories: 3,
  },
};

export type SiteConfig = typeof siteConfig;
export type Branch = (typeof siteConfig.branches)[number];
