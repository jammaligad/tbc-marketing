export const siteConfig = {
  name: "The Burp Co.",
  shortName: "TBC",
  url: "https://theburpco.com",
  description:
    "Handmade pies, cakes, and coffee — baked fresh daily at The Burp Co.",
  ogImage: "/og.svg",
  foundedYear: 2020,
  menuUrl: "#menu",
  aboutUrl: "#about",
  visitUrl: "#visit",
  orderUrl: "#order",
  getStartedUrl: "#menu",
  links: {
    instagram: "https://instagram.com/theburpco",
    facebook: "https://facebook.com/theburpco",
    email: "mailto:hello@theburpco.com",
    maps: "#visit",
  },
  branches: [
    {
      id: "commissary",
      name: "Commissary Branch",
      address: "Gulf View",
      city: "Davao City",
      region: "Philippines",
      detail: "Production kitchen & commissary — where every pie and cake starts.",
      isCommissary: true,
    },
    {
      id: "sm-ecoland",
      name: "SM Ecoland",
      address: "2nd Floor, SM Ecoland",
      city: "Davao City",
      region: "Philippines",
      detail: "Our Davao mall branch — pies, cakes, and coffee while you shop.",
    },
    {
      id: "sm-zamboanga",
      name: "SM Zamboanga",
      address: "3rd Floor, SM City Zamboanga",
      city: "Zamboanga City",
      region: "Philippines",
      detail: "Our newest branch — now serving Zamboanga City.",
      isNewest: true,
    },
  ],
  stats: {
    years: new Date().getFullYear() - 2020,
    branches: 3,
    dailyBatches: 50,
    varieties: 30,
    happyCustomers: "10k+",
  },
};

export type SiteConfig = typeof siteConfig;
export type Branch = (typeof siteConfig.branches)[number];
