import { products } from "./schema";

export const seedProducts: {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  sizes: string;
  inStock: boolean;
  featured: boolean;
}[] = [
  {
    id: 1,
    slug: "way-cis-basic",
    name: "Way Cis Tee",
    description:
      "Classic fit cotton tee with 'Way Cis' on the front and 'All Right Extremist' on the back. Because the truth doesn't need a filter.",
    price: "29.99",
    image: "/products/way-cis-basic.jpg",
    category: "t-shirts",
    sizes: "S,M,L,XL,2XL,3XL",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    slug: "way-cis-premium",
    name: "Way Cis Premium Tee",
    description:
      "Heavyweight 240gsm cotton tee. 'Way Cis' front print. 'All Right Extremist' back print. Built different.",
    price: "44.99",
    image: "/products/way-cis-premium.jpg",
    category: "t-shirts",
    sizes: "S,M,L,XL,2XL,3XL",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    slug: "backyard-patriot",
    name: "Backyard Patriot Hoodie",
    description:
      "Fleece-lined hoodie. 'Backyard Patriot' on front. 'All Right Extremist' logo on back. For the guys who actually do the work.",
    price: "64.99",
    image: "/products/backyard-patriot.jpg",
    category: "hoodies",
    sizes: "S,M,L,XL,2XL,3XL",
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    slug: "gravel-road",
    name: "Gravel Road Cap",
    description:
      "Unstructured 6-panel cap. Embroidered 'Gravel Road' front. Small ARE logo on side. Fits the real America.",
    price: "28.99",
    image: "/products/gravel-road-cap.jpg",
    category: "hats",
    sizes: "One Size",
    inStock: true,
    featured: false,
  },
  {
    id: 5,
    slug: "tall-tales",
    name: "Tall Tales Long Sleeve",
    description:
      "Ring-spun cotton long sleeve. 'Tall Tales' across the chest. 'All Right Extremist' on the back. Because facts aren't opinions.",
    price: "39.99",
    image: "/products/tall-tales-ls.jpg",
    category: "t-shirts",
    sizes: "S,M,L,XL,2XL,3XL",
    inStock: true,
    featured: false,
  },
  {
    id: 6,
    slug: "red-dirt",
    name: "Red Dirt T-Shirt",
    description:
      "Washed black tee. 'Red Dirt' in vintage lettering on front. ARE crest on back. Made for working men.",
    price: "32.99",
    image: "/products/red-dirt.jpg",
    category: "t-shirts",
    sizes: "S,M,L,XL,2XL,3XL",
    inStock: true,
    featured: false,
  },
  {
    id: 7,
    slug: "no-apologies",
    name: "No Apologies Tank",
    description:
      "Athletic fit tank top. 'No Apologies' in bold block letters. Front and back. For the gym or the barn.",
    price: "26.99",
    image: "/products/no-apologies-tank.jpg",
    category: "t-shirts",
    sizes: "S,M,L,XL,2XL",
    inStock: true,
    featured: false,
  },
  {
    id: 8,
    slug: "freedom-farm",
    name: "Freedom Farm Polo",
    description:
      "Performance polo. 'Freedom Farm' embroidered on chest. ARE logo on sleeve. Business on top, country on bottom.",
    price: "49.99",
    image: "/products/freedom-farm-polo.jpg",
    category: "t-shirts",
    sizes: "S,M,L,XL,2XL,3XL",
    inStock: true,
    featured: false,
  },
  {
    id: 9,
    slug: "truth-crew",
    name: "Truth Crewneck Sweatshirt",
    description:
      "French terry crewneck. 'Truth' in large vintage script front. 'All Right Extremist' back print. Soft, warm, unapologetic.",
    price: "59.99",
    image: "/products/truth-crew.jpg",
    category: "hoodies",
    sizes: "S,M,L,XL,2XL,3XL",
    inStock: true,
    featured: true,
  },
  {
    id: 10,
    slug: "real-america",
    name: "Real America Snapback",
    description:
      "High-profile snapback. 'Real America' front panel embroidery. ARE flag on back. For folks who know who they are.",
    price: "32.99",
    image: "/products/real-america-snapback.jpg",
    category: "hats",
    sizes: "One Size",
    inStock: true,
    featured: false,
  },
  {
    id: 11,
    slug: "common-sense",
    name: "Common Sense Graphic Tee",
    description:
      "Classic fit tee. 'Common Sense' in bold retro typography. 'All Right Extremist' small chest logo. Because it should just be common sense.",
    price: "31.99",
    image: "/products/common-sense.jpg",
    category: "t-shirts",
    sizes: "S,M,L,XL,2XL,3XL",
    inStock: true,
    featured: false,
  },
  {
    id: 12,
    slug: "country-guy",
    name: "Country Guy Zip-Up Hoodie",
    description:
      "Full-zip hoodie. 'Country Guy' on front, 'All Right Extremist' on back. Double-layered hood. Built for cool mornings and long days.",
    price: "69.99",
    image: "/products/country-guy-zip.jpg",
    category: "hoodies",
    sizes: "S,M,L,XL,2XL,3XL",
    inStock: true,
    featured: true,
  },
];
