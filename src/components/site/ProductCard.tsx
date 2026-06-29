import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/data/products";
import { useShop } from "@/store/shop";
import { cn } from "@/lib/utils";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart, toggleWishlist, inWishlist } = useShop();
  const [weight, setWeight] = useState(product.weights[0].label);
  const w = product.weights.find((x) => x.label === weight) ?? product.weights[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
      className="group relative flex flex-col rounded-[20px] bg-card shadow-soft hover-lift overflow-hidden border border-border/60"
    >
      {/* Image */}
      <Link to="/product/$id" params={{ id: product.id }} className="relative block aspect-square overflow-hidden bg-beige/40">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-gold/95 text-gold-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow">
            {product.badge}
          </span>
        )}
        <span className={cn(
          "absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow",
          product.inStock ? "bg-primary/95 text-primary-foreground" : "bg-brand-red text-white",
        )}>
          {product.inStock ? "In Stock" : "Sold Out"}
        </span>

        {/* Quick actions */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full bg-white shadow hover:bg-primary hover:text-primary-foreground transition",
              inWishlist(product.id) && "bg-brand-red text-white",
            )}
            aria-label="Wishlist"
          >
            <Heart className="h-4 w-4" fill={inWishlist(product.id) ? "currentColor" : "none"} />
          </button>
          <Link
            to="/product/$id"
            params={{ id: product.id }}
            className="grid h-10 w-10 place-items-center rounded-full bg-white shadow hover:bg-primary hover:text-primary-foreground transition"
            aria-label="Quick view"
          >
            <Eye className="h-4 w-4" />
          </Link>
        </div>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5" fill={i < Math.round(product.rating) ? "currentColor" : "none"} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">{product.rating.toFixed(1)} ({product.reviews})</span>
        </div>
        <h3 className="font-display text-lg leading-snug line-clamp-2">
          <Link to="/product/$id" params={{ id: product.id }} className="hover:text-primary transition">
            {product.name}
          </Link>
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>

        {/* Weight selector */}
        <div className="flex flex-wrap gap-1.5">
          {product.weights.map((opt) => (
            <button
              key={opt.label}
              onClick={() => setWeight(opt.label)}
              className={cn(
                "rounded-full border px-2.5 py-1 text-[11px] font-medium transition",
                weight === opt.label
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border bg-warm hover:border-primary/40",
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div>
            <div className="font-display text-xl text-primary">₹{w.price}</div>
            <div className="text-[10px] text-muted-foreground">incl. of taxes</div>
          </div>
          <button
            onClick={() => addToCart(product, weight, 1)}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-soft hover:bg-gold hover:text-gold-foreground transition"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}
