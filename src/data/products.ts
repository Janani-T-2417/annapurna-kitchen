import pickles from "@/assets/cat-pickles.jpg";
import nonveg from "@/assets/cat-nonveg.jpg";
import veg from "@/assets/cat-veg.jpg";
import podi from "@/assets/cat-podi.jpg";
import snacks from "@/assets/cat-snacks.jpg";
import sweets from "@/assets/cat-sweets.jpg";
import vadiyalu from "@/assets/cat-vadiyalu.jpg";
import papads from "@/assets/cat-papads.jpg";

export type Category = {
  slug: string;
  name: string;
  emoji: string;
  image: string;
  tagline: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number; // for 250g default
  weights: { label: string; grams: number; price: number }[];
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
  ingredients?: string;
  shelfLife?: string;
  storage?: string;
};

export const categories: Category[] = [
  { slug: "pickles", name: "Pickles", emoji: "🥭", image: pickles, tagline: "Signature Andhra avakaya & more" },
  { slug: "non-veg-pickles", name: "Non Veg Pickles", emoji: "🍗", image: nonveg, tagline: "Fiery chicken, prawn, fish, mutton" },
  { slug: "veg-pickles", name: "Veg Pickles", emoji: "🥬", image: veg, tagline: "Garden-fresh, sun-cured pickles" },
  { slug: "podi", name: "Podi", emoji: "🌶", image: podi, tagline: "Stone-ground spice powders" },
  { slug: "snacks", name: "Snacks", emoji: "🍘", image: snacks, tagline: "Crispy homemade savouries" },
  { slug: "sweets", name: "Sweets", emoji: "🍪", image: sweets, tagline: "Festive Andhra mithai" },
  { slug: "vadiyalu", name: "Vadiyalu", emoji: "🍥", image: vadiyalu, tagline: "Sun-dried fritters" },
  { slug: "papads", name: "Papads", emoji: "🥣", image: papads, tagline: "Crisp, golden, hand-rolled" },
];

const mk = (
  id: string,
  name: string,
  category: string,
  image: string,
  basePrice: number,
  description: string,
  opts: Partial<Product> = {},
): Product => ({
  id,
  name,
  category,
  image,
  description,
  price: basePrice,
  weights: [
    { label: "250 g", grams: 250, price: basePrice },
    { label: "500 g", grams: 500, price: Math.round(basePrice * 1.9) },
    { label: "1 kg", grams: 1000, price: Math.round(basePrice * 3.6) },
  ],
  rating: 4.6 + (id.charCodeAt(0) % 4) / 10,
  reviews: 40 + (id.charCodeAt(1) % 120),
  inStock: true,
  ingredients: "Hand-picked produce, cold-pressed gingelly oil, rock salt, red chilli, mustard, fenugreek, turmeric.",
  shelfLife: "6 months from manufacture; refrigerate after opening for best taste.",
  storage: "Store in a cool dry place. Use a dry spoon. Top with oil if surface dries.",
  ...opts,
});

// PICKLES (mixed)
const picklesList: Product[] = [
  ["kothapalli-kobari-avakaya", "Kothapalli Kobari Avakaya", 480, "A coastal twist on Avakaya with fresh coconut and raw mango."],
  ["avakaya", "Avakaya", 450, "The legendary Andhra mango pickle — bold, fiery and oil-rich."],
  ["kakarakaya", "Kakarakaya Pickle", 420, "Bitter gourd pickle, sun-cured to balance heat and tang."],
  ["pachimirchi", "Pachimirchi Pickle", 410, "Green chilli pickle with a sharp, bright kick."],
  ["magaya", "Magaya", 460, "Grated mango pickle — sweet-spicy and family-style."],
  ["gongura", "Gongura Pickle", 440, "Sorrel leaves slow-cooked into a tangy Andhra classic."],
  ["tomato", "Tomato Pickle", 380, "Slow-roasted tomato pickle with a glossy red finish."],
  ["usirikaya", "Usirikaya Pickle", 420, "Amla pickle packed with sour brightness."],
  ["nimmakaya", "Nimmakaya Pickle", 400, "Lemon pickle with the perfect oil-and-spice ratio."],
  ["allam", "Allam Pickle", 430, "Ginger pickle — pungent, warming, deeply aromatic."],
  ["karivepaku", "Karivepaku Pickle", 410, "Curry leaf pickle, earthy and intensely flavoured."],
  ["pandu-mirchi", "Pandu Mirchi Pickle", 440, "Ripe red chilli pickle — fiery and unapologetic."],
  ["gongura-pandu-mirchi", "Gongura Pandu Mirchi", 470, "Sorrel meets red chilli for double the punch."],
].map(([id, name, p, d]) => mk(id as string, name as string, "pickles", pickles, p as number, d as string));

// NON-VEG
const nonVegList: Product[] = [
  ["chicken-boneless", "Chicken Boneless Pickle", 750, "Tender boneless chicken in slow-cooked masala oil."],
  ["chicken-bone", "Chicken Bone Pickle", 720, "Traditional bone-in chicken pickle with deep flavour."],
  ["prawn", "Prawn Pickle", 890, "Plump prawns layered with chilli and tamarind."],
  ["gongura-prawn", "Gongura Prawn Pickle", 920, "Sorrel-laced prawn pickle — coastal Andhra at its best."],
  ["gongura-chicken", "Gongura Chicken Pickle", 820, "Sorrel and chicken slow-cooked with red chilli."],
  ["fish-koramenu", "Fish Koramenu Pickle", 850, "Firm river fish in a robust chilli masala."],
  ["fish-pandugappa", "Fish Pandugappa Pickle", 880, "Coastal fish pickle with a clean, savoury heat."],
  ["gongura-mutton", "Gongura Mutton Pickle", 980, "Mutton & sorrel — rich, slow and indulgent."],
  ["natu-kodi", "Natu Kodi Pickle", 880, "Country chicken pickle with old-world depth."],
].map(([id, name, p, d]) => mk(id as string, name as string, "non-veg-pickles", nonveg, p as number, d as string, { badge: "Bestseller" }));

// VEG PICKLES
const vegList: Product[] = [
  "Avakaya","Kothapalli Kobari Avakaya","Allam","Tomato","Magaya","Nimmakaya","Pandu Mirchi","Pandu Mirchi Gongura","Dhabbakaya","Gongura","Velluli","Karivepaku","Munakaya","Usirikaya","Cauliflower","Kakarakaya","Chinthakaya","Pandu Mirchi Chinthakaya","Mamidi Allam",
].map((n, i) => mk(
  "veg-" + n.toLowerCase().replace(/\s+/g, "-"),
  n + " Pickle",
  "veg-pickles",
  veg,
  380 + (i * 10) % 120,
  "Traditional Andhra-style " + n.toLowerCase() + " pickle, slow-cured with cold-pressed oil."
));

// PODI
const podiList: Product[] = [
  ["karapodi", "Karapodi", 520, "Fiery lentil-chilli powder for rice and ghee."],
  ["kandipodi", "Kandipodi", 540, "Toor dal podi with garlic and red chilli."],
  ["nuvvula-podi", "Nuvvula Podi", 560, "Sesame podi — nutty, rich and warming."],
  ["karivepaku-podi", "Karivepaku Podi", 520, "Curry leaf podi packed with iron and aroma."],
  ["masala-karam", "Masala Karam Powder", 650, "All-purpose Andhra masala — your everyday secret."],
  ["plain-chilli", "Plain Chilli Powder", 600, "Sun-dried Guntur chillies, stone-ground."],
  ["sambar-karam", "Sambar Karam", 650, "Hand-blended sambar masala with whole spices."],
  ["pickle-chilli", "Pickle Chilli Powder", 650, "Coarse pickle-grade chilli for that perfect colour."],
  ["organic-turmeric", "Organic Turmeric Powder", 500, "High-curcumin turmeric, pesticide-free."],
].map(([id, name, p, d]) => mk(id as string, name as string, "podi", podi, p as number, d as string, { badge: "With traditional storage jar" }));

// SNACKS
const snacksList: Product[] = [
  ["karapusa", "Homemade Karapusa", 320, "Crisp spiced sev — the perfect tea-time companion."],
  ["chekkalu", "Homemade Chekkalu", 300, "Rice flour crackers with sesame and chilli."],
  ["beetroot-chekkalu", "Beetroot Chekkalu", 340, "A modern twist with deep beetroot colour."],
  ["chegodilu", "Chegodilu", 320, "Crunchy ring-shaped Andhra snack."],
  ["ribbon-pakodi", "Ribbon Pakodi", 310, "Ribbon-thin gram flour snack, crisp and spicy."],
  ["cashew-fry", "Cashew Fry", 690, "Premium roasted cashews in a delicate masala."],
  ["cashew-badam", "Cashew & Badam Mixture", 720, "Festive dry-fruit mixture — rich and aromatic."],
  ["boondi", "Boondi", 280, "Tiny crisp gram flour pearls."],
].map(([id, name, p, d]) => mk(id as string, name as string, "snacks", snacks, p as number, d as string));

// SWEETS
const sweetsList: Product[] = [
  ["dry-fruit-laddu", "Dry Fruit Laddu", 780, "No-sugar laddu bound with dates and ghee."],
  ["dry-fruit-mix", "Dry Fruit Mix", 820, "Curated mix of nuts, raisins and seeds."],
  ["athreyapuram-potharekulu", "Athreyapuram Potharekulu", 540, "The famed paper-thin sweet from Athreyapuram."],
  ["bellam-potharekulu", "Bellam Potharekulu", 520, "Jaggery-filled potharekulu — wholesome and rich."],
  ["sunnivundalu", "Special Sunnivundalu", 560, "Roasted gram laddu with ghee and cardamom."],
  ["mamidi-tandra", "Mamidi Tandra", 480, "Sun-dried mango fruit leather, naturally sweet."],
  ["cashew-chikki", "Cashew Chikki", 620, "Crunchy cashew-jaggery brittle."],
  ["palli-chikki", "Palli Chikki", 360, "Peanut jaggery chikki — a childhood favourite."],
  ["madugula-halwa", "Madugula Special Halwa", 720, "Slow-cooked traditional halwa from Madugula."],
  ["ariselu", "Ariselu", 540, "Jaggery-rice festive sweet, fried in ghee."],
  ["nethi-ariselu", "Nethi Ariselu", 580, "Ghee-laden ariselu — extra rich."],
  ["bellam-gavvalu", "Bellam Gavvalu", 460, "Shell-shaped jaggery sweet, crisp inside."],
  ["malai-poori", "Special Malai Poori", 560, "Sweetened cream poori — melts in the mouth."],
].map(([id, name, p, d]) => mk(id as string, name as string, "sweets", sweets, p as number, d as string));

// VADIYALU
const vadiyaluList: Product[] = [
  ["aaviri", "Aaviri Vadiyalu", 360],
  ["challa-mirapakayalu", "Challa Mirapakayalu", 380],
  ["gummadi", "Gummadi Vadiyalu", 360],
  ["saggu-biyyam", "Saggu Biyyam Vadiyalu", 340],
  ["minapa", "Minapa Vadiyalu", 380],
  ["appada-puvvulu", "Appada Puvvulu", 360],
].map(([id, name, p]) => mk("vad-" + id, name as string, "vadiyalu", vadiyalu, p as number, "Sun-dried under Andhra skies, ready to fry to a perfect crisp."));

// PAPADS
const papadsList: Product[] = [
  {
    ...mk("papad-100", "Annapurna Papad", "papads", papads, 25, "Hand-rolled, sun-dried papads. Crisp, golden, and full of flavour."),
    weights: [
      { label: "100 g", grams: 100, price: 25 },
      { label: "250 g", grams: 250, price: 60 },
    ],
    price: 25,
  },
];

export const products: Product[] = [
  ...picklesList,
  ...nonVegList,
  ...vegList,
  ...podiList,
  ...snacksList,
  ...sweetsList,
  ...vadiyaluList,
  ...papadsList,
];

export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const featuredProducts = (): Product[] => {
  const picks = ["avakaya", "gongura-prawn", "masala-karam", "dry-fruit-laddu", "karapusa", "vad-minapa", "papad-100", "kothapalli-kobari-avakaya"];
  return picks.map((id) => products.find((p) => p.id === id)!).filter(Boolean);
};
