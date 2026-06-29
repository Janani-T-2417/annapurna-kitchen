import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
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
          { property: "og:image", content: loaderData.cat.image },
        ]
      : [],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const all = getProductsByCategory(cat.slug);
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [maxPrice, setMaxPrice] = useState<number>(() =>
    Math.max(...all.map((p) => p.price), 100),
  );

  const products = useMemo(() => {
    let list = all.filter((p) => p.price <= maxPrice);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [all, sort, maxPrice]);

  return (
    <div>
      {/* Banner */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={cat.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/40" />
        </div>
        <div className="relative container-x py-16 md:py-24">
          <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{cat.name}</span>
          </nav>
          <div className="text-3xl">{cat.emoji}</div>
          <h1 className="mt-2 font-display text-4xl md:text-6xl">{cat.name}</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">{cat.tagline}. Made fresh, in small batches, with love.</p>
        </div>
      </section>

      {/* Toolbar */}
      <section className="container-x mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between rounded-2xl bg-card p-4 shadow-soft border border-border/60">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <SlidersHorizontal className="h-4 w-4" />
            <span>{products.length} products</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">Max ₹{maxPrice}</span>
              <input
                type="range"
                min={50}
                max={Math.max(...all.map((p) => p.price), 100)}
                value={maxPrice}
                onChange={(e) => setMaxPrice(+e.target.value)}
                className="accent-primary"
              />
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="rounded-full border border-border bg-warm px-4 py-2 text-sm font-medium"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container-x py-12">
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
