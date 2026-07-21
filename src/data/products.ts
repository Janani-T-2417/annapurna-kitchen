// Category banner heroes
import heroPickles from "@/assets/hero-pickles.jpg";
import heroNonveg from "@/assets/hero-nonveg.jpg";
import heroVeg from "@/assets/hero-veg.jpg";
import heroPodi from "@/assets/hero-podi.jpg";
import heroSnacks from "@/assets/hero-snacks.jpg";
import heroSweets from "@/assets/hero-sweets.jpg";
import heroVadiyalu from "@/assets/hero-vadiyalu.jpg";
import heroPapads from "@/assets/hero-papads.jpg";
import heroHoney from "@/assets/hero-honey.jpg";

// Category tile thumbnails (re-used heroes — they render great as cards too)
import catPickles from "@/assets/cat-pickles.jpg";
import catNonveg from "@/assets/cat-nonveg.jpg";
import catVeg from "@/assets/cat-veg.jpg";
import catPodi from "@/assets/cat-podi.jpg";
import catSnacks from "@/assets/cat-snacks.jpg";
import catSweets from "@/assets/cat-sweets.jpg";
import catVadiyalu from "@/assets/cat-vadiyalu.jpg";
import catPapads from "@/assets/cat-papads.jpg";
import catHoney from "@/assets/cat-honey.jpg";
import imgPureHoney from "@/assets/p/pure-honey.jpg";

// Product images — one per SKU
import imgAvakaya from "@/assets/p/avakaya.jpg";
import imgKothapalliKobari from "@/assets/p/kothapalli-kobari-avakaya.jpg";
import imgKakarakaya from "@/assets/p/kakarakaya.jpg";
import imgPachimirchi from "@/assets/p/pachimirchi.jpg";
import imgMagaya from "@/assets/p/magaya.jpg";
import imgGongura from "@/assets/p/gongura.jpg";
import imgTomato from "@/assets/p/tomato.jpg";
import imgUsirikaya from "@/assets/p/usirikaya.jpg";
import imgNimmakaya from "@/assets/p/nimmakaya.jpg";
import imgAllam from "@/assets/p/allam.jpg";
import imgKarivepaku from "@/assets/p/karivepaku.jpg";
import imgPanduMirchi from "@/assets/p/pandu-mirchi.jpg";
import imgGonguraPanduMirchi from "@/assets/p/gongura-pandu-mirchi.jpg";

import imgChickenBoneless from "@/assets/p/chicken-boneless.jpg";
import imgChickenBone from "@/assets/p/chicken-bone.jpg";
import imgPrawn from "@/assets/p/prawn.jpg";
import imgGonguraPrawn from "@/assets/p/gongura-prawn.jpg";
import imgGonguraChicken from "@/assets/p/gongura-chicken.jpg";
import imgFishKoramenu from "@/assets/p/fish-koramenu.jpg";
import imgFishPandugappa from "@/assets/p/fish-pandugappa.jpg";
import imgGonguraMutton from "@/assets/p/gongura-mutton.jpg";
import imgNatuKodi from "@/assets/p/natu-kodi.jpg";

import imgDhabbakaya from "@/assets/p/dhabbakaya.jpg";
import imgVelluli from "@/assets/p/velluli.jpg";
import imgMunakaya from "@/assets/p/munakaya.jpg";
import imgCauliflower from "@/assets/p/cauliflower.jpg";
import imgChinthakaya from "@/assets/p/chinthakaya.jpg";
import imgPanduMirchiChinthakaya from "@/assets/p/pandu-mirchi-chinthakaya.jpg";
import imgMamidiAllam from "@/assets/p/mamidi-allam.jpg";

import imgKarapodi from "@/assets/p/karapodi.jpg";
import imgKandipodi from "@/assets/p/kandipodi.jpg";
import imgNuvvulaPodi from "@/assets/p/nuvvula-podi.jpg";
import imgKarivepakuPodi from "@/assets/p/karivepaku-podi.jpg";
import imgMasalaKaram from "@/assets/p/masala-karam.jpg";
import imgPlainChilli from "@/assets/p/plain-chilli.jpg";
import imgSambarKaram from "@/assets/p/sambar-karam.jpg";
import imgPickleChilli from "@/assets/p/pickle-chilli.jpg";
import imgOrganicTurmeric from "@/assets/p/organic-turmeric.jpg";

import imgKarapusa from "@/assets/p/karapusa.jpg";
import imgChekkalu from "@/assets/p/chekkalu.jpg";
import imgBeetrootChekkalu from "@/assets/p/beetroot-chekkalu.jpg";
import imgChegodilu from "@/assets/p/chegodilu.jpg";
import imgRibbonPakodi from "@/assets/p/ribbon-pakodi.jpg";
import imgCashewFry from "@/assets/p/cashew-fry.jpg";
import imgCashewBadam from "@/assets/p/cashew-badam.jpg";
import imgBoondi from "@/assets/p/boondi.jpg";

import imgDryFruitLaddu from "@/assets/p/dry-fruit-laddu.jpg";
import imgDryFruitMix from "@/assets/p/dry-fruit-mix.jpg";
import imgAthreyapuram from "@/assets/p/athreyapuram-potharekulu.jpg";
import imgBellamPotharekulu from "@/assets/p/bellam-potharekulu.jpg";
import imgSunnivundalu from "@/assets/p/sunnivundalu.jpg";
import imgMamidiTandra from "@/assets/p/mamidi-tandra.jpg";
import imgCashewChikki from "@/assets/p/cashew-chikki.jpg";
import imgPalliChikki from "@/assets/p/palli-chikki.jpg";
import imgMadugulaHalwa from "@/assets/p/madugula-halwa.jpg";
import imgAriselu from "@/assets/p/ariselu.jpg";
import imgNethiAriselu from "@/assets/p/nethi-ariselu.jpg";
import imgBellamGavvalu from "@/assets/p/bellam-gavvalu.jpg";
import imgMalaiPoori from "@/assets/p/malai-poori.jpg";

import imgAaviri from "@/assets/p/aaviri.jpg";
import imgChallaMirapakayalu from "@/assets/p/challa-mirapakayalu.jpg";
import imgGummadi from "@/assets/p/gummadi.jpg";
import imgSagguBiyyam from "@/assets/p/saggu-biyyam.jpg";
import imgMinapa from "@/assets/p/minapa.jpg";
import imgAppadaPuvvulu from "@/assets/p/appada-puvvulu.jpg";

import imgPapad from "@/assets/p/papad.jpg";
import imgMalaiKaja from "@/assets/p/malai-kaja.jpg";
import imgCashewAchu from "@/assets/p/cashew-achu.jpg";
import imgUlavacharuVadiyalu from "@/assets/p/ulavacharu-vadiyalu.jpg";

export type Category = {
  slug: string;
  name: string;
  emoji: string;
  image: string; // small tile
  hero: string; // wide hero banner
  tagline: string;
  /** Tailwind gradient stops for the hero overlay. */
  gradient: string;
};

export type WeightLabel = "250g" | "500g" | "1kg";
export type WeightOption = { label: WeightLabel; grams: number; price: number };

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  weights: Record<WeightLabel, number>;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
  ingredients?: string;
  shelfLife?: string;
  storage?: string;
  benefits?: string;
  availableWeights?: WeightLabel[];
};

export const categories: Category[] = [
  {
    slug: "pickles",
    name: "Pickles",
    emoji: "🥭",
    image: catPickles,
    hero: heroPickles,
    tagline: "Signature Andhra avakaya & more",
    gradient: "from-[#3d1b0a]/85 via-[#7a2e10]/55 to-[#0D7A52]/35",
  },
  {
    slug: "non-veg-pickles",
    name: "Non Veg Pickles",
    emoji: "🍗",
    image: catNonveg,
    hero: heroNonveg,
    tagline: "Fiery chicken, prawn, fish, mutton",
    gradient: "from-[#260a0a]/90 via-[#7a1010]/55 to-[#1a0606]/45",
  },
  {
    slug: "veg-pickles",
    name: "Veg Pickles",
    emoji: "🥬",
    image: catVeg,
    hero: heroVeg,
    tagline: "Garden-fresh, sun-cured pickles",
    gradient: "from-[#0d2918]/85 via-[#0D7A52]/55 to-[#3d1f08]/40",
  },
  {
    slug: "podi",
    name: "Podi",
    emoji: "🌶",
    image: catPodi,
    hero: heroPodi,
    tagline: "Stone-ground spice powders",
    gradient: "from-[#1a0d05]/90 via-[#5a1a0a]/55 to-[#D4AF37]/30",
  },
  {
    slug: "snacks",
    name: "Snacks",
    emoji: "🍘",
    image: catSnacks,
    hero: heroSnacks,
    tagline: "Crispy homemade savouries",
    gradient: "from-[#2a1605]/85 via-[#7a3a0a]/50 to-[#0D7A52]/35",
  },
  {
    slug: "sweets",
    name: "Sweets",
    emoji: "🍪",
    image: catSweets,
    hero: heroSweets,
    tagline: "Festive Andhra mithai",
    gradient: "from-[#1f0a1a]/85 via-[#7a2350]/45 to-[#D4AF37]/35",
  },
  {
    slug: "vadiyalu",
    name: "Vadiyalu",
    emoji: "🍥",
    image: catVadiyalu,
    hero: heroVadiyalu,
    tagline: "Sun-dried fritters",
    gradient: "from-[#2a1d05]/85 via-[#a86a1a]/40 to-[#0D7A52]/35",
  },
  {
    slug: "papads",
    name: "Papads",
    emoji: "🥣",
    image: catPapads,
    hero: heroPapads,
    tagline: "Crisp, golden, hand-rolled",
    gradient: "from-[#1f1405]/90 via-[#7a4a10]/50 to-[#3d1f08]/45",
  },
  {
    slug: "honey",
    name: "Pure Honey",
    emoji: "🍯",
    image: catHoney,
    hero: heroHoney,
    tagline: "100% pure & unprocessed",
    gradient: "from-[#3d2405]/85 via-[#b8800f]/55 to-[#D4AF37]/40",
  },
];

export const weightLabels: WeightLabel[] = ["250g", "500g", "1kg"];
const weightGrams: Record<WeightLabel, number> = { "250g": 250, "500g": 500, "1kg": 1000 };

export const buildWeightPrices = (price1kg: number) =>
  ({
    "250g": Math.round(price1kg / 4),
    "500g": Math.round(price1kg / 2),
    "1kg": price1kg,
  }) as Record<WeightLabel, number>;

export const getWeightOptions = (product: Product): WeightOption[] => {
  const allowed = product.availableWeights ?? weightLabels;
  return allowed.map((label) => ({
    label,
    grams: weightGrams[label],
    price: product.weights[label],
  }));
};

export const getWeightPrice = (product: Product, weightLabel?: string) => {
  const allowed = product.availableWeights ?? weightLabels;
  const normalizedLabel: WeightLabel =
    weightLabel && (allowed as string[]).includes(weightLabel)
      ? (weightLabel as WeightLabel)
      : allowed[0];
  return product.weights[normalizedLabel] ?? product.price ?? 0;
};

export const getDefaultWeightLabel = (product: Product): WeightLabel =>
  (product.availableWeights ?? weightLabels)[0];

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
  weights: buildWeightPrices(basePrice),
  rating: 4.6 + (id.charCodeAt(0) % 4) / 10,
  reviews: 40 + (id.charCodeAt(1) % 120),
  inStock: true,
  ingredients:
    "Hand-picked produce, cold-pressed gingelly oil, rock salt, red chilli, mustard, fenugreek, turmeric.",
  shelfLife: "6 months from manufacture; refrigerate after opening for best taste.",
  storage: "Store in a cool dry place. Use a dry spoon. Top with oil if surface dries.",
  ...opts,
});

// PICKLES
const picklesList: Product[] = [
  [
    "kothapalli-kobari-avakaya",
    "Kothapalli Kobari Avakaya",
    480,
    "A coastal twist on Avakaya with fresh coconut and raw mango.",
    imgKothapalliKobari,
  ],
  [
    "avakaya",
    "Avakaya",
    450,
    "The legendary Andhra mango pickle — bold, fiery and oil-rich.",
    imgAvakaya,
  ],
  [
    "kakarakaya",
    "Kakarakaya Pickle",
    420,
    "Bitter gourd pickle, sun-cured to balance heat and tang.",
    imgKakarakaya,
  ],
  [
    "pachimirchi",
    "Pachimirchi Pickle",
    410,
    "Green chilli pickle with a sharp, bright kick.",
    imgPachimirchi,
  ],
  ["magaya", "Magaya", 460, "Grated mango pickle — sweet-spicy and family-style.", imgMagaya],
  [
    "gongura",
    "Gongura Pickle",
    440,
    "Sorrel leaves slow-cooked into a tangy Andhra classic.",
    imgGongura,
  ],
  [
    "tomato",
    "Tomato Pickle",
    380,
    "Slow-roasted tomato pickle with a glossy red finish.",
    imgTomato,
  ],
  ["usirikaya", "Usirikaya Pickle", 420, "Amla pickle packed with sour brightness.", imgUsirikaya],
  [
    "nimmakaya",
    "Nimmakaya Pickle",
    400,
    "Lemon pickle with the perfect oil-and-spice ratio.",
    imgNimmakaya,
  ],
  ["allam", "Allam Pickle", 430, "Ginger pickle — pungent, warming, deeply aromatic.", imgAllam],
  [
    "karivepaku",
    "Karivepaku Pickle",
    410,
    "Curry leaf pickle, earthy and intensely flavoured.",
    imgKarivepaku,
  ],
  [
    "pandu-mirchi",
    "Pandu Mirchi Pickle",
    440,
    "Ripe red chilli pickle — fiery and unapologetic.",
    imgPanduMirchi,
  ],
  [
    "gongura-pandu-mirchi",
    "Gongura Pandu Mirchi",
    470,
    "Sorrel meets red chilli for double the punch.",
    imgGonguraPanduMirchi,
  ],
].map(([id, name, p, d, img]) =>
  mk(id as string, name as string, "pickles", img as string, p as number, d as string),
);

const kothapalliProduct = picklesList.find((product) => product.id === "kothapalli-kobari-avakaya");
if (kothapalliProduct) {
  kothapalliProduct.price = 200;
  kothapalliProduct.weights = buildWeightPrices(200);
}

// NON-VEG
const nonVegList: Product[] = [
  [
    "chicken-boneless",
    "Chicken Boneless Pickle",
    750,
    "Tender boneless chicken in slow-cooked masala oil.",
    imgChickenBoneless,
  ],
  [
    "chicken-bone",
    "Chicken Pickle",
    720,
    "Traditional bone-in chicken pickle with deep flavour.",
    imgChickenBone,
  ],
  ["prawn", "Prawns Pickle", 890, "Plump prawns layered with chilli and tamarind.", imgPrawn],
  [
    "gongura-prawn",
    "Gongura Prawn Pickle",
    920,
    "Sorrel-laced prawn pickle — coastal Andhra at its best.",
    imgGonguraPrawn,
  ],
  [
    "gongura-chicken",
    "Gongura Chicken Pickle",
    820,
    "Sorrel and chicken slow-cooked with red chilli.",
    imgGonguraChicken,
  ],
  [
    "fish-koramenu",
    "Fish Koramenu Pickle",
    850,
    "Firm river fish in a robust chilli masala.",
    imgFishKoramenu,
  ],
  [
    "fish-pandugappa",
    "Fish Pandugappa Pickle",
    880,
    "Coastal fish pickle with a clean, savoury heat.",
    imgFishPandugappa,
  ],
  [
    "gongura-mutton",
    "Gongura Mutton Pickle",
    980,
    "Mutton & sorrel — rich, slow and indulgent.",
    imgGonguraMutton,
  ],
  [
    "natu-kodi",
    "Natu Kodi Pickle",
    880,
    "Country chicken pickle with old-world depth.",
    imgNatuKodi,
  ],
].map(([id, name, p, d, img]) =>
  mk(id as string, name as string, "non-veg-pickles", img as string, p as number, d as string, {
    badge: "Bestseller",
  }),
);

const chickenBoneless = nonVegList.find((product) => product.id === "chicken-boneless");
if (chickenBoneless) {
  chickenBoneless.price = 1200;
  chickenBoneless.weights = buildWeightPrices(1200);
}

const chickenPickle = nonVegList.find((product) => product.id === "chicken-bone");
if (chickenPickle) {
  chickenPickle.price = 1000;
  chickenPickle.weights = buildWeightPrices(1000);
}

const prawnPickle = nonVegList.find((product) => product.id === "prawn");
if (prawnPickle) {
  prawnPickle.price = 1600;
  prawnPickle.weights = buildWeightPrices(1600);
}

// VEG PICKLES
const vegEntries: [string, string, string][] = [
  ["avakaya", "Avakaya", imgAvakaya],
  ["kothapalli-kobari-avakaya", "Kothapalli Kobari Avakaya", imgKothapalliKobari],
  ["allam", "Allam", imgAllam],
  ["tomato", "Tomato", imgTomato],
  ["magaya", "Magaya", imgMagaya],
  ["nimmakaya", "Nimmakaya", imgNimmakaya],
  ["pandu-mirchi", "Pandu Mirchi", imgPanduMirchi],
  ["pandu-mirchi-gongura", "Pandu Mirchi Gongura", imgGonguraPanduMirchi],
  ["dhabbakaya", "Dhabbakaya", imgDhabbakaya],
  ["gongura", "Gongura", imgGongura],
  ["velluli", "Velluli", imgVelluli],
  ["karivepaku", "Karivepaku", imgKarivepaku],
  ["munakaya", "Munakaya", imgMunakaya],
  ["usirikaya", "Usirikaya", imgUsirikaya],
  ["cauliflower", "Cauliflower", imgCauliflower],
  ["kakarakaya", "Kakarakaya", imgKakarakaya],
  ["chinthakaya", "Chinthakaya", imgChinthakaya],
  ["pandu-mirchi-chinthakaya", "Pandu Mirchi Chinthakaya", imgPanduMirchiChinthakaya],
  ["mamidi-allam", "Mamidi Allam", imgMamidiAllam],
];
const vegList: Product[] = vegEntries.map(([slug, n, img], i) =>
  mk(
    "veg-" + slug,
    n + " Pickle",
    "veg-pickles",
    img,
    380 + ((i * 10) % 120),
    "Traditional Andhra-style " + n.toLowerCase() + " pickle, slow-cured with cold-pressed oil.",
    {
      weights: buildWeightPrices(600),
      price: 600,
    },
  ),
);

const vegPicklePrices: Record<string, { price: number; weights: Record<WeightLabel, number> }> = {
  avakaya: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  "kothapalli-kobari-avakaya": {
    price: 700,
    weights: { "250g": 200, "500g": 350, "1kg": 700 },
  },
  allam: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  tomato: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  magaya: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  nimmakaya: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  "pandu-mirchi": { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  "pandu-mirchi-gongura": { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  dhabbakaya: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  gongura: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  velluli: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  karivepaku: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  munakaya: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  usirikaya: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  cauliflower: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  kakarakaya: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  chinthakaya: { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  "pandu-mirchi-chinthakaya": { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
  "mamidi-allam": { price: 600, weights: { "250g": 150, "500g": 300, "1kg": 600 } },
};

vegList.forEach((product) => {
  const slug = product.id.replace(/^veg-/, "");
  const config = vegPicklePrices[slug];
  if (config) {
    product.price = config.price;
    product.weights = config.weights;
  }
});

// PODI
const podiList: Product[] = [
  ["karapodi", "Karapodi", 650, "Fiery lentil-chilli powder for rice and ghee.", imgKarapodi],
  ["kandipodi", "Kandipodi", 650, "Toor dal podi with garlic and red chilli.", imgKandipodi],
  ["nuvvula-podi", "Nuvvula Podi", 650, "Sesame podi — nutty, rich and warming.", imgNuvvulaPodi],
  [
    "karivepaku-podi",
    "Karivepaku Podi",
    650,
    "Curry leaf podi packed with iron and aroma.",
    imgKarivepakuPodi,
  ],
  [
    "masala-karam",
    "Masala Karam Powder",
    650,
    "All-purpose Andhra masala — your everyday secret.",
    imgMasalaKaram,
  ],
  [
    "plain-chilli",
    "Plain Chilli Powder",
    650,
    "Sun-dried Guntur chillies, stone-ground.",
    imgPlainChilli,
  ],
  [
    "sambar-karam",
    "Sambar Karam",
    650,
    "Hand-blended sambar masala with whole spices.",
    imgSambarKaram,
  ],
  [
    "pickle-chilli",
    "Pickle Chilli Powder",
    650,
    "Coarse pickle-grade chilli for that perfect colour.",
    imgPickleChilli,
  ],
  [
    "organic-turmeric",
    "Organic Turmeric Powder",
    500,
    "High-curcumin turmeric, pesticide-free.",
    imgOrganicTurmeric,
  ],
].map(([id, name, p, d, img]) =>
  mk(id as string, name as string, "podi", img as string, p as number, d as string, {
    badge: "With traditional storage jar",
  }),
);

// SNACKS
const snacksList: Product[] = [
  [
    "karapusa",
    "Homemade Karapusa",
    400,
    "Crisp spiced sev — the perfect tea-time companion.",
    imgKarapusa,
  ],
  [
    "chekkalu",
    "Homemade Chekkalu",
    400,
    "Rice flour crackers with sesame and chilli.",
    imgChekkalu,
  ],
  [
    "beetroot-chekkalu",
    "Beetroot Chekkalu",
    400,
    "A modern twist with deep beetroot colour.",
    imgBeetrootChekkalu,
  ],
  ["chegodilu", "Chegodilu", 400, "Crunchy ring-shaped Andhra snack.", imgChegodilu],
  [
    "ribbon-pakodi",
    "Ribbon Pakodi",
    400,
    "Ribbon-thin gram flour snack, crisp and spicy.",
    imgRibbonPakodi,
  ],
  ["cashew-fry", "Cashew Fry", 400, "Premium roasted cashews in a delicate masala.", imgCashewFry],
  [
    "cashew-badam",
    "Cashew & Badam Mixture",
    400,
    "Festive dry-fruit mixture — rich and aromatic.",
    imgCashewBadam,
  ],
  ["boondi", "Boondi", 400, "Tiny crisp gram flour pearls.", imgBoondi],
].map(([id, name, p, d, img]) => {
  const product = mk(id as string, name as string, "snacks", img as string, p as number, d as string);
  product.price = 400;
  product.weights = { "250g": 100, "500g": 200, "1kg": 400 };
  return product;
});

// SWEETS
const sweetsList: Product[] = [
  [
    "dry-fruit-laddu",
    "Dry Fruit Laddu",
    600,
    "No-sugar laddu bound with dates and ghee.",
    imgDryFruitLaddu,
  ],
  [
    "dry-fruit-mix",
    "Dry Fruit Mix",
    600,
    "Curated mix of nuts, raisins and seeds.",
    imgDryFruitMix,
  ],
  [
    "athreyapuram-potharekulu",
    "Athreyapuram Potharekulu",
    540,
    "The famed paper-thin sweet from Athreyapuram.",
    imgAthreyapuram,
  ],
  [
    "bellam-potharekulu",
    "Bellam Potharekulu",
    520,
    "Jaggery-filled potharekulu — wholesome and rich.",
    imgBellamPotharekulu,
  ],
  [
    "sunnivundalu",
    "Special Sunnivundalu",
    600,
    "Roasted gram laddu with ghee and cardamom.",
    imgSunnivundalu,
  ],
  [
    "mamidi-tandra",
    "Mamidi Tandra",
    480,
    "Sun-dried mango fruit leather, naturally sweet.",
    imgMamidiTandra,
  ],
  ["cashew-chikki", "Cashew Chikki", 620, "Crunchy cashew-jaggery brittle.", imgCashewChikki],
  [
    "palli-chikki",
    "Palli Chikki",
    360,
    "Peanut jaggery chikki — a childhood favourite.",
    imgPalliChikki,
  ],
  [
    "madugula-halwa",
    "Madugula Special Halwa",
    999,
    "Slow-cooked traditional halwa from Madugula.",
    imgMadugulaHalwa,
  ],
  ["ariselu", "Ariselu", 540, "Jaggery-rice festive sweet, fried in ghee.", imgAriselu],
  ["nethi-ariselu", "Nethi Ariselu", 580, "Ghee-laden ariselu — extra rich.", imgNethiAriselu],
  [
    "bellam-gavvalu",
    "Bellam Gavvalu",
    460,
    "Shell-shaped jaggery sweet, crisp inside.",
    imgBellamGavvalu,
  ],
  [
    "malai-poori",
    "Special Malai Poori",
    560,
    "Sweetened cream poori — melts in the mouth.",
    imgMalaiPoori,
  ],
  [
    "malai-kaja",
    "Malai Kaja",
    600,
    "Traditional Andhra sweet with crispy layers, rich milk flavour, and delicious sweetness.",
    imgMalaiKaja,
  ],
  [
    "cashew-achu",
    "Cashew Achu",
    400,
    "Traditional cashew-based sweet, crispy, rich, and handcrafted with premium ingredients.",
    imgCashewAchu,
  ],
].map(([id, name, p, d, img]) => {
  const product = mk(id as string, name as string, "sweets", img as string, p as number, d as string);
  if (id === "sunnivundalu") {
    product.price = 600;
    product.weights = { "250g": 150, "500g": 300, "1kg": 600 };
  } else if (id === "madugula-halwa") {
    product.price = 999;
    product.weights = { "250g": 250, "500g": 500, "1kg": 999 };
  } else if (id === "dry-fruit-laddu" || id === "dry-fruit-mix") {
    product.price = 600;
    product.weights = { "250g": 150, "500g": 300, "1kg": 600 };
  } else if (id === "malai-kaja") {
    product.price = 600;
    product.weights = { "250g": 150, "500g": 300, "1kg": 600 };
    product.ingredients = "Maida, ghee, sugar, milk, cardamom.";
    product.shelfLife = "15 days from packing.";
    product.storage = "Store in an airtight jar in a cool, dry place.";
  } else if (id === "cashew-achu") {
    product.price = 400;
    product.weights = { "250g": 100, "500g": 200, "1kg": 400 };
    product.ingredients = "Cashew nuts, sugar, ghee, cardamom.";
    product.shelfLife = "20 days from packing.";
    product.storage = "Store in an airtight jar in a cool, dry place.";
  }
  return product;
});

// VADIYALU
const vadiyaluList: Product[] = [
  ["aaviri", "Aaviri Vadiyalu", 360, imgAaviri],
  ["challa-mirapakayalu", "Challa Mirapakayalu", 380, imgChallaMirapakayalu],
  ["gummadi", "Gummadi Vadiyalu", 360, imgGummadi],
  ["saggu-biyyam", "Saggu Biyyam Vadiyalu", 340, imgSagguBiyyam],
  ["minapa", "Minapa Vadiyalu", 380, imgMinapa],
  ["appada-puvvulu", "Appada Puvvulu", 360, imgAppadaPuvvulu],
  ["ulavacharu", "Ulavacharu Vadiyalu", 600, imgUlavacharuVadiyalu],
].map(([id, name, p, img]) => {
  const product = mk(
    "vad-" + (id as string),
    name as string,
    "vadiyalu",
    img as string,
    p as number,
    id === "ulavacharu"
      ? "Traditional Andhra horse gram (Ulavacharu) flavoured vadiyalu, handmade and sun-dried."
      : "Sun-dried under Andhra skies, ready to fry to a perfect crisp.",
  );
  product.price = 600;
  product.weights = { "250g": 175, "500g": 300, "1kg": 600 };
  if (id === "ulavacharu") {
    product.ingredients = "Horse gram (ulavalu), urad dal, green chillies, salt, spices.";
    product.shelfLife = "6 months when stored properly.";
    product.storage = "Store in an airtight container in a cool, dry place.";
  }
  return product;
});

// PAPADS
const papadsList: Product[] = [
  {
    ...mk(
      "papad-100",
      "Annapurna Papad",
      "papads",
      imgPapad,
      240,
      "Hand-rolled, sun-dried papads. Crisp, golden, and full of flavour.",
    ),
    weights: buildWeightPrices(240),
    price: 240,
  },
];

// HONEY
const honeyList: Product[] = [
  {
    ...mk(
      "pure-natural-honey",
      "Pure Natural Honey",
      "honey",
      imgPureHoney,
      649,
      "Premium natural honey collected from trusted sources. No added sugar, no preservatives, rich in natural nutrients and antioxidants.",
      {
        badge: "100% Pure",
        ingredients: "100% Pure Natural Honey. No added sugar, no preservatives, no colours.",
        shelfLife: "24 months from manufacture. Best stored away from direct sunlight.",
        storage: "Store in a cool, dry place. Use a dry spoon. Natural crystallisation is normal.",
        benefits:
          "Rich in antioxidants, natural energy booster, soothes sore throat, supports immunity and digestion.",
      },
    ),
    price: 649,
    weights: { "250g": 0, "500g": 329, "1kg": 649 },
    availableWeights: ["500g", "1kg"],
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
  ...honeyList,
];

export const getProductsByCategory = (slug: string) => products.filter((p) => p.category === slug);

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const featuredProducts = (): Product[] => {
  const picks = [
    "avakaya",
    "gongura-prawn",
    "masala-karam",
    "dry-fruit-laddu",
    "karapusa",
    "vad-minapa",
    "papad-100",
    "kothapalli-kobari-avakaya",
  ];
  return picks.map((id) => products.find((p) => p.id === id)!).filter(Boolean);
};
