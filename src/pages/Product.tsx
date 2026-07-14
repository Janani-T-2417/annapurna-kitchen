import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ChevronRight, Heart, Leaf, Minus, PackageCheck, Plus, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import { categories, getProduct, getProductsByCategory, type Product } from "@/data/products";
import { useShop } from "@/store/shop";
import { ProductCard } from "@/components/site/ProductCard";
import { waLink, waProductMessage } from "@/config/whatsapp";

type Weight = Product["weights"][number];
import { cn } from "@/lib/utils";

function openWhatsApp(message: string) {
  const url = waLink(message);
  console.log("[Product Page] Opening WhatsApp:", url);
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function Product() {
  const { id } = useParams();
  const product = getProduct(id!);
  if (!product) return <NotFound />;
  const cat = categories.find((c) => c.slug === product.category);
  const { addToCart, toggleWishlist, inWishlist } = useShop();
  const [weight, setWeight] = useState(product.weights[0].label);
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState(false);
  const w = product.weights.find((x: Weight) => x.label === weight) ?? product.weights[0];

  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div>
      <div className="container-x pt-8">
        <nav className="flex items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          {cat && (
            <>
              <Link to={`/category/${cat.slug}`} className="hover:text-primary">{cat.name}</Link>
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

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="inline-flex items-center gap-1.5"><PackageCheck className="h-3.5 w-3.5" /> Premium Jar Packaging</span>
            </div>
            <div className="rounded-full bg-gold/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
              <span className="inline-flex items-center gap-1.5"><Leaf className="h-3.5 w-3.5" /> Natural Ingredients</span>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-primary/10 bg-card p-5 shadow-soft">
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Price</div>
            <div className="mt-2 flex items-end gap-3">
              <div className="font-display text-4xl text-primary">₹{w.price}</div>
              <div className="text-sm text-muted-foreground">/ {w.label} · incl. taxes</div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-primary">
              <PackageCheck className="h-4 w-4" /> Freshly Packed in Premium Jar
            </div>
            <div className="mt-4 space-y-2 text-sm text-foreground/80">
              {[
                "✔ Hygienically Packed",
                "✔ Premium Food Grade Jar",
                "✔ Leak Proof Packaging",
                "✔ Freshly Sealed",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <PackageCheck className="h-4 w-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Weight Options</p>
            <div className="flex flex-wrap gap-2">
              {product.weights.map((opt: Weight) => (
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

          <button
            onClick={() => openWhatsApp(waProductMessage(product.name))}
            type="button"
            title={`Order ${product.name} on WhatsApp`}
            className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,211,102,0.5)] hover:bg-[#1da851] hover:scale-[1.01] transition"
          >
            <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.7.888.674 0 2.275-.616 2.59-1.32.156-.345.256-.717.256-1.103 0-.157-.043-.3-.072-.45-.115-.4-1.722-1.137-2.066-1.137zm-2.952 7.21c-5.04 0-9.13-4.092-9.13-9.13 0-5.04 4.09-9.13 9.13-9.13 5.038 0 9.128 4.09 9.128 9.13 0 5.038-4.09 9.13-9.13 9.13zM16.15 4.155c-6.273 0-11.13 5.122-11.13 11.387 0 2.13.66 4.225 1.722 6.034l-2.06 6.246 6.45-2.018a11.18 11.18 0 0 0 5.018 1.214H16.18c6.272 0 11.823-5.122 11.823-11.387 0-3.04-1.466-5.893-3.62-8.048a11.394 11.394 0 0 0-8.232-3.43z" />
            </svg>
            Order on WhatsApp
          </button>


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
