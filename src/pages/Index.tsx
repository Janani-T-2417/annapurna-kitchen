import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  ChevronRight,
  Leaf,
  PackageCheck,
  Percent,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Truck,
  Utensils,
  Users,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import { categories, featuredProducts } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { waLink, WHATSAPP_DEFAULT_MESSAGE } from "@/config/whatsapp";

function openWhatsApp() {
  const url = waLink(WHATSAPP_DEFAULT_MESSAGE);
  console.log("[Index Page] Opening WhatsApp:", url);
  window.open(url, "_blank", "noopener,noreferrer");
}

const trust = [
  { icon: Utensils, label: "100% Homemade" },
  { icon: Leaf, label: "No Chemicals" },
  { icon: ShieldCheck, label: "No Preservatives" },
  { icon: Sparkles, label: "Natural Process" },
  { icon: Award, label: "Hygienically Made" },
  { icon: Truck, label: "Pan-India Shipping" },
];

const premiumCaptions = [
  "🌿 No Chemicals",
  "🌿 No Preservatives",
  "🫙 Packed in Premium Food Grade Jars",
  "🌶 Traditional Andhra Recipes",
  "❤️ Homemade With Love",
  "🥭 Fresh Ingredients",
];

const whyChoose = [
  {
    icon: Utensils,
    title: "Homemade Recipes",
    text: "Every batch is stirred and sealed in small kitchens with age-old Andhra flavour.",
  },
  {
    icon: PackageCheck,
    title: "Premium Jar Packaging",
    text: "Freshly packed in food-grade jars that keep every bite rich and hygienic.",
  },
  {
    icon: Leaf,
    title: "No Chemicals",
    text: "Pure ingredients, no artificial additives, and no shortcut methods.",
  },
  {
    icon: ShieldCheck,
    title: "No Preservatives",
    text: "Crafted for freshness with traditional recipes and careful storage.",
  },
  {
    icon: Sparkles,
    title: "100% Natural",
    text: "Sun-dried chilli, hand-picked produce and cold-pressed oils only.",
  },
  {
    icon: BadgeCheck,
    title: "Traditional Andhra Taste",
    text: "Bold, authentic flavours inspired by family kitchens across the coast.",
  },
  {
    icon: Star,
    title: "Freshly Prepared",
    text: "Made in small batches so every jar feels as fresh as the first.",
  },
];

const testimonials = [
  {
    name: "Lakshmi P.",
    city: "Hyderabad",
    text: "The Avakaya tastes exactly like my grandmother used to make. Pure nostalgia in every bite!",
    img: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Ravi Teja",
    city: "Bengaluru",
    text: "Premium packaging, fresh produce and unbelievable taste. Annapurna is now a household staple.",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Sneha R.",
    city: "Vijayawada",
    text: "Gongura prawn pickle is heavenly. You can taste the freshness and the love in every spoon.",
    img: "https://i.pravatar.cc/100?img=32",
  },
];

const faqs = [
  {
    q: "What is the shelf life of your products?",
    a: "Pickles last 6 months from manufacture; podi up to 4 months. Refrigerate after opening for best taste.",
  },
  {
    q: "Do you ship across India?",
    a: "Yes. We ship pan-India within 3–6 business days via trusted courier partners.",
  },
  {
    q: "Are your products preservative-free?",
    a: "Absolutely. We use only cold-pressed oils, rock salt and traditional spices — no chemicals, no preservatives.",
  },
  {
    q: "How should I store my pickle?",
    a: "Use a dry spoon and keep the surface covered with a thin layer of oil. Store in a cool, dry place.",
  },
  {
    q: "What's your return policy?",
    a: "If the product is damaged in transit, share an unboxing video within 24 hours for a free replacement.",
  },
  {
    q: "Are ingredients sourced locally?",
    a: "Yes. Mangoes, chillies, gongura and spices are sourced directly from Andhra farms each season.",
  },
];

export default function Index() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <CategoriesSection />
      <DiscountSection />
      <WholesaleSection />
      <FeaturedSection />
      <WhyChooseSection />
      <StoryBand />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      </div>

      {/* Floating decorative spice elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[12%] right-[6%] h-24 w-24 rounded-full bg-saffron/30 blur-2xl float-slow" />
        <div className="absolute top-[40%] right-[20%] h-16 w-16 rounded-full bg-primary/20 blur-xl float-med" />
        <div className="absolute bottom-[20%] left-[8%] h-32 w-32 rounded-full bg-gold/25 blur-2xl float-slow" />
      </div>

      <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center min-h-[78vh] py-16">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" /> The Goddess Of Food
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground"
          >
            Authentic <span className="gold-text">Homemade</span> Andhra Foods
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-foreground/70 max-w-lg"
          >
            Prepared with love, tradition, and 100% natural ingredients — pickles, podi, sweets and
            snacks from the heart of Andhra Pradesh.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/category/pickles"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-gold hover:text-gold-foreground transition"
            >
              Shop Now <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/70 backdrop-blur px-7 py-3.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition"
            >
              Explore Categories
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {premiumCaptions.map((caption) => (
              <span
                key={caption}
                className="rounded-full border border-primary/20 bg-white/80 px-3 py-1 text-xs font-semibold text-primary shadow-sm"
              >
                {caption}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center gap-5 text-sm"
          >
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" fill="currentColor" />
              ))}
            </div>
            <p className="text-foreground/70">
              <span className="font-semibold text-foreground">4.9/5</span> from 2,400+ happy
              families
            </p>
          </motion.div>
        </div>

        {/* Right decorative card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <div className="relative ml-auto max-w-md">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-gold/30 to-primary/20 blur-2xl" />
            <div className="relative rounded-[32px] glass p-8 shadow-gold">
              <img src={logo} alt="" className="mx-auto h-44 w-44 float-med" />
              <p className="mt-4 text-center text-sm text-foreground/70">
                A taste of tradition, blessed by the goddess of nourishment.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: "25+", v: "Recipes" },
                  { k: "100%", v: "Natural" },
                  { k: "0", v: "Preservatives" },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl bg-white/80 p-3">
                    <div className="font-display text-xl text-primary">{s.k}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-border bg-warm/60">
      <div className="container-x py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {trust.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-3"
          >
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary shrink-0">
              <t.icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-foreground/80">{t.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section id="categories" className="section-pad spice-bg">
      <div className="container-x">
        <SectionTitle
          eyebrow="Shop by Tradition"
          title="Our Categories"
          description="From fiery pickles to festive sweets — a complete Andhra pantry, crafted in small batches."
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 4) * 0.06 }}
            >
              <Link
                to={`/category/${c.slug}`}
                className="group relative block rounded-[20px] overflow-hidden shadow-soft hover-lift"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <div className="text-2xl">{c.emoji}</div>
                    <h3 className="mt-1 font-display text-xl">{c.name}</h3>
                    <p className="text-xs opacity-80 line-clamp-2">{c.tagline}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiscountSection() {
  return (
    <section className="section-pad pt-0">
      <div className="container-x grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-primary/15 bg-gradient-to-br from-[#0D7A52] via-[#0f8b59] to-[#1f6b41] p-8 text-primary-foreground shadow-gold"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            <Percent className="h-3.5 w-3.5" /> Special Offers
          </div>
          <h2 className="mt-5 font-display text-3xl md:text-4xl">Purchase above ₹2000</h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-primary-foreground/90">
            Enjoy an instant 10% OFF when you stock up on your favourite homemade delicacies for
            family feasts and celebrations.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ffe18a] px-4 py-2 text-sm font-semibold text-[#5b3c02]">
            <Sparkles className="h-4 w-4" /> Get 10% OFF
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="rounded-[28px] border border-gold/30 bg-card/95 p-8 shadow-soft"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Store className="h-3.5 w-3.5" /> Bulk Savings
          </div>
          <h2 className="mt-5 font-display text-3xl md:text-4xl">Buy More & Save More</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            For bulk chilli powder orders above 5 kg, our team can offer a premium discount with
            faster dispatch.
          </p>
          <div className="mt-6 rounded-2xl border border-primary/10 bg-warm p-4 text-sm text-foreground/80">
            <p className="font-semibold text-primary">Special Discount Available</p>
            <p className="mt-1">
              Perfect for apartments, gated communities, and large family gatherings.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WholesaleSection() {
  return (
    <section className="section-pad pt-0">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-primary/10 bg-gradient-to-br from-cream via-white to-[#fef6d9] p-8 shadow-card"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] gold-text">
                Wholesale Orders
              </p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">
                Premium supply for apartments, gated communities and bulk groups
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We offer wholesale pricing for large family groups, resident welfare associations
                and corporate gifting needs.
              </p>
            </div>
            <button
              onClick={openWhatsApp}
              type="button"
              title="Contact us on WhatsApp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-gold hover:text-gold-foreground transition"
            >
              <PackageCheck className="h-4 w-4" /> Contact on WhatsApp
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Apartments", icon: Store },
              { title: "Gated Communities", icon: ShieldCheck },
              { title: "Groups & Bulk Orders", icon: Users },
              { title: "Trusted Packaging", icon: PackageCheck },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-white/80 p-4 shadow-soft"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-foreground/80">
            {["Whole Chillies", "Chilli Powder", "Masala Powder", "Organic Turmeric Powder"].map(
              (product) => (
                <span
                  key={product}
                  className="rounded-full border border-primary/15 bg-white/80 px-3 py-1.5 shadow-sm"
                >
                  {product}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionTitle
          eyebrow="Bestsellers"
          title="Crowd Favourites"
          description="Hand-picked, family-tested recipes our customers reorder month after month."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts().map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="section-pad pt-0">
      <div className="container-x">
        <SectionTitle
          eyebrow="Why Annapurna"
          title="Why Choose Annapurna Foods?"
          description="A premium pantry rooted in Andhra tradition, trusted by families who value freshness and authenticity."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyChoose.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-[24px] border border-border/70 bg-card p-6 shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StoryBand() {
  return (
    <section className="section-pad">
      <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-[32px] overflow-hidden shadow-card">
            <img src={hero} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 rounded-3xl glass p-5 shadow-gold max-w-[60%]">
            <div className="font-display text-2xl text-primary">Since 2010</div>
            <p className="text-xs text-muted-foreground mt-1">
              Three generations of Andhra recipes, one trusted brand.
            </p>
          </div>
        </motion.div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] gold-text font-bold">Our Story</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">
            A Family Recipe, Perfected Over Generations
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Annapurna Foods began in a sunlit kitchen in coastal Andhra, where mangoes were sliced
            at dawn, chillies were sun-dried on terraces, and gingelly oil came straight from the
            village ghani. Today we bring those same recipes to your home — unchanged,
            uncompromised, and full of love.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {[
              "Hand-picked Andhra produce",
              "Stone-ground masalas",
              "Cold-pressed gingelly oil",
              "Small-batch, hygienic packing",
            ].map((x) => (
              <li key={x} className="flex items-center gap-2 text-sm">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                  <Leaf className="h-3.5 w-3.5" />
                </span>
                {x}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold hover:text-gold-foreground transition"
          >
            Read Our Story <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-pad bg-beige/40">
      <div className="container-x">
        <SectionTitle eyebrow="Loved by Families" title="What our customers say" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-[24px] bg-card p-6 shadow-soft hover-lift"
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-foreground/80 leading-relaxed">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="section-pad">
      <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <SectionTitle
            eyebrow="FAQ"
            title="Questions, answered."
            align="left"
            description="Everything you need to know about our products, shipping and storage."
          />
        </div>
        <div className="grid gap-3">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group rounded-2xl bg-card p-5 shadow-soft open:shadow-card"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold">
                {f.q}
                <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90 text-primary" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
