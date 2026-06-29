import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { categories, getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.cat.name} — Annapurna Foods` },
          { name: "description", content: `Shop premium homemade ${loaderData.cat.name.toLowerCase()} — ${loaderData.cat.tagline}.` },
          { property: "og:title", content: `${loaderData.cat.name} — Annapurna Foods` },
          { property: "og:description", content: loaderData.cat.tagline },
          { property: "og:image", content: loaderData.cat.hero },
        ]
      : [],
  }),
  component: CategoryPage,
});

// Deterministic pseudo-random for floating particle positions
const particles = Array.from({ length: 14 }).map((_, i) => ({
  left: ((i * 73) % 100),
  top: ((i * 47) % 100),
  size: 6 + ((i * 11) % 14),
  delay: (i % 7) * 0.4,
  dur: 7 + (i % 5),
}));

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const all = getProductsByCategory(cat.slug);
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");

  const products = useMemo(() => {
    const list = [...all];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [all, sort]);

  return (
    <div>
      {/* HERO — full-bleed, vibrant, opaque */}
      <section
        className="relative isolate overflow-hidden"
        style={{ minHeight: "clamp(420px, 56vw, 500px)" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={cat.hero}
            alt=""
            className="h-full w-full object-cover scale-105"
          />
        </div>

        {/* Rich opaque color overlay (per-category) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient}`} />
        {/* Bottom darken for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
        {/* Gold radial glow */}
        <div
          className="absolute inset-0 opacity-60 mix-blend-screen pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 80% at 80% 30%, rgba(212,175,55,0.35), transparent 60%), radial-gradient(50% 70% at 10% 80%, rgba(13,122,82,0.35), transparent 60%)",
          }}
        />

        {/* Floating golden particles / leaves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                background:
                  "radial-gradient(circle, rgba(255,225,150,0.95) 0%, rgba(212,175,55,0.4) 50%, rgba(212,175,55,0) 70%)",
                boxShadow: "0 0 12px rgba(212,175,55,0.55)",
                animation: `floaty ${p.dur}s ease-in-out ${p.delay}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative container-x flex flex-col justify-center py-16 md:py-24 min-h-[inherit]" style={{ minHeight: "clamp(420px, 56vw, 500px)" }}>
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 text-xs text-white/85 mb-5"
          >
            <Link to="/" className="hover:text-gold transition">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold font-semibold">{cat.name}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 }}
            className="inline-flex h-14 w-14 items-center justify-center rounded-2xl glass text-3xl shadow-gold mb-4"
          >
            {cat.emoji}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[11px] uppercase tracking-[0.35em] font-bold gold-text mb-2"
          >
            Annapurna Foods · The Goddess of Food
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-display text-5xl md:text-7xl text-white leading-[1.05] drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]"
          >
            {cat.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-4 max-w-xl text-white/90 text-base md:text-lg"
          >
            {cat.tagline}. Made fresh, in small batches, with love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {all.length} premium products
            </span>
          </motion.div>
        </div>
      </section>

      {/* Slim toolbar */}
      <section className="container-x mt-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-2xl md:text-3xl">
            Shop <span className="gold-text">{cat.name}</span>
          </h2>
          <label className="inline-flex items-center gap-2 text-sm">
            <span className="text-muted-foreground hidden sm:inline">Sort by</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </label>
        </div>
      </section>

      {/* Grid */}
      <section className="container-x py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        {cat.slug === "podi" && (
          <p className="mt-8 text-center text-sm text-muted-foreground italic">
            Available with traditional storage jar.
          </p>
        )}
      </section>
    </div>
  );
}
