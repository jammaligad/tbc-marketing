export type ProductCategory = "pies" | "cakes" | "combos";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  tag?: string;
  featured?: boolean;
};

export type Combo = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  items: string[];
};

export const products: Product[] = [
  {
    id: "durian-pie",
    name: "Durian Pie",
    category: "pies",
    description:
      "Premium variety of durian fruit. No jams or flavoring added — baked fresh daily.",
    image: "/products/durian-pie.png",
    tag: "Davao favorite",
    featured: true,
  },
  {
    id: "buko-pie",
    name: "Buko Pie",
    category: "pies",
    description:
      "Tender coconut filling in a golden, flaky crust for a classic, delicious treat.",
    image: "/products/buko-pie.png",
    tag: "Classic Filipino",
    featured: true,
  },
  {
    id: "egg-pie",
    name: "Egg Pie",
    category: "pies",
    description: "Rich, creamy custard in a golden, flaky crust.",
    image: "/products/egg-pie.png",
    tag: "Filipino staple",
    featured: true,
  },
  {
    id: "blueberry-cheesecake-pie",
    name: "Blueberry Cheesecake Pie",
    category: "pies",
    description:
      "Enjoy every cheesecake bite like you never had before.",
    image: "/products/blueberry-cheesecake-pie.png",
    tag: "Must try",
    featured: true,
  },
  {
    id: "special-choco-moist-cake",
    name: "Special Choco Moist Cake",
    category: "cakes",
    description:
      "Rich chocolate layers and creamy yema in the middle — our signature best seller.",
    image: "/products/special-choco-moist-cake.png",
    tag: "Best seller",
    featured: true,
  },
  {
    id: "ube-yema-cake",
    name: "Ube Yema Cake",
    category: "cakes",
    description:
      "Fluffy ube layers filled with creamy yema for a delightful surprise.",
    image: "/products/ube-yema-cake.png",
    tag: "Local twist",
    featured: true,
  },
  {
    id: "custard-cake",
    name: "Custard Cake",
    category: "cakes",
    description:
      "Creamy and rich, topped with smooth leche flan for a sweet treat.",
    image: "/products/custard-cake.png",
    tag: "Fan favorite",
    featured: true,
  },
  {
    id: "carrot-cake",
    name: "Carrot Cake",
    category: "cakes",
    description:
      "Soft and moist, topped with rich cream cheese frosting and crunchy nuts.",
    image: "/products/carrot-cake.png",
    tag: "Crowd pleaser",
    featured: true,
  },
  {
    id: "ube-bento-cake",
    name: "Ube Bento Cake",
    category: "cakes",
    description: "Mini layered ube delight with creamy frosting.",
    image: "/products/ube-bento-cake.png",
    tag: "Perfect for gifting",
  },
  {
    id: "new-york-cheesecake",
    name: "New York Cheesecake",
    category: "cakes",
    description: "Available in Biscoff and Blueberry.",
    image: "/products/new-york-cheesecake.png",
    tag: "Whole cake",
  },
];

export const combos: Combo[] = [
  {
    id: "sampler",
    name: "The Burp Co. Sampler",
    subtitle: "8 flavors in one",
    description:
      "Can't decide? Try eight of our bestsellers in a single wheel — pies, cakes, and cheesecake all in one order.",
    image: "/products/sampler.png",
    items: [
      "Buko pie",
      "Durian pie",
      "Egg pie",
      "Blueberry cheesecake pie",
      "Strawberry cheesecake pie",
      "Special choco moist cake",
      "Custard cake",
      "Apple crumble pie",
    ],
  },
  {
    id: "mix-match-4",
    name: "Mix & Match 4-in-1",
    subtitle: "Build your combo",
    description:
      "Buko pie, durian pie, egg pie, and strawberry & blueberry cheesecake pie — four favorites, one dish.",
    image: "/products/combos.png",
    items: [
      "Buko pie",
      "Durian pie",
      "Egg pie",
      "Strawberry & blueberry cheesecake",
    ],
  },
  {
    id: "doble-cara",
    name: "Doble Cara 2-in-1",
    subtitle: "Two-way treat",
    description:
      "Half blueberry cheesecake pie, half special choco moist cake — the best of both worlds.",
    image: "/products/sampler-display.png",
    items: ["Blueberry cheesecake pie", "Special choco moist cake"],
  },
];

export const brandAssets = {
  logo: "/products/logo.png",
  heroDisplay: "/products/choco-moist-display.png",
} as const;

export const featuredProducts = products.filter((p) => p.featured);
export const pieProducts = products.filter((p) => p.category === "pies");
export const cakeProducts = products.filter((p) => p.category === "cakes");
