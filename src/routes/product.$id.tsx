import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Heart, Minus, Plus, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import { categories, getProduct, getProductsByCategory } from "@/data/products";
import { useShop } from "@/store/shop";
import { ProductCard } from "@/components/site/ProductCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    const cat = categories.find((c) => c.slug === product.category);
    return { product, cat };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Annapurna Foods` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} — Annapurna Foods` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product, cat } = Route.useLoaderData();
  const { addToCart, toggleWishlist, inWishlist } = useShop();
  const [weight, setWeight] = useState(product.weights[0].label);
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState(false);
  const w = product.weights.find((x) => x.label === weight) ?? product.weights[0];

  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div>
      <div className="container-x pt-8">
        <nav className="flex items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          {cat && (
            <>
              <Link to="/category/$slug" params={{ slug: cat.slug }} className="hover:text-primary">{cat.name}</Link>
              <ChevronRight className="h-3 w-3" />
            </>
          )}
          <span className="text-foreground line-clamp-1">{product.name}</span>
        </nav>
      </div>

      <section className="container-x mt-6 grid lg:grid-cols-2 gap-10">
        {/* Gallery */}
        <div>
          <motion.div
            layout
            className={cn(
              "relative overflow-hidden rounded-[28px] bg-beige/40 shadow-card cursor-zoom-in aspect-square",
            )}
            onClick={() => setZoom((v) => !v)}
          >
            <img
              src={product.image}
              alt={product.name}
              className={cn(
                "h-full w-full object-cover transition-transform duration-700",
                zoom ? "scale-150" : "scale-100",
              )}
            />
            {product.badge && (
              <span className="absolute top-4 left-4 rounded-full bg-gold/95 text-gold-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 shadow">
                {product.badge}
              </span>
            )}
          </motion.div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden border border-border bg-card">
                <img src={product.image} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] gold-text font-bold">{cat?.name}</p>
          <h1 className="mt-2 font-display text-4xl lg:text-5xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" fill={i < Math.round(product.rating) ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{product.rating.toFixed(1)} · {product.reviews} reviews</span>
          </div>
          <p className="mt-4 text-foreground/80 leading-relaxed">{product.description}</p>

          <div className="mt-6 flex items-end gap-3">
            <div className="font-display text-4xl text-primary">₹{w.price}</div>
            <div className="text-sm text-muted-foreground">/ {w.label} · incl. taxes</div>
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Weight</p>
            <div className="flex flex-wrap gap-2">
              {product.weights.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setWeight(opt.label)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    weight === opt.label
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border bg-warm hover:border-primary/40",
                  )}
                >
                  {opt.label} — ₹{opt.price}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-border bg-warm">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center hover:text-primary">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="grid h-11 w-11 place-items-center hover:text-primary">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() => addToCart(product, weight, qty)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-gold hover:text-gold-foreground transition"
            >
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </button>
            <Link
              to="/cart"
              onClick={() => addToCart(product, weight, qty)}
              className="rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition"
            >
              Buy Now
            </Link>
            <button
              onClick={() => toggleWishlist(product.id)}
              className={cn(
                "grid h-11 w-11 place-items-center rounded-full border border-border hover:text-brand-red transition",
                inWishlist(product.id) && "bg-brand-red text-white border-brand-red",
              )}
              aria-label="Wishlist"
            >
              <Heart className="h-4 w-4" fill={inWishlist(product.id) ? "currentColor" : "none"} />
            </button>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
            {[
              { i: Truck, t: "Free over ₹999" },
              { i: ShieldCheck, t: "100% Natural" },
              { i: Star, t: "Loved by 2,400+" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 rounded-2xl bg-card p-3 shadow-soft">
                <b.i className="h-4 w-4 text-primary" /> {b.t}
              </div>
            ))}
          </div>

          {/* Info accordion */}
          <div className="mt-8 grid gap-3">
            {[
              { t: "Ingredients", v: product.ingredients },
              { t: "Shelf Life", v: product.shelfLife },
              { t: "Storage Instructions", v: product.storage },
            ].map((row) => (
              <details key={row.t} className="group rounded-2xl bg-card p-4 shadow-soft">
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold">
                  {row.t}
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90 text-primary" />
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{row.v}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="container-x section-pad">
          <h2 className="font-display text-3xl md:text-4xl">You may also love</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </section>
      )}
    </div>
  );
}
