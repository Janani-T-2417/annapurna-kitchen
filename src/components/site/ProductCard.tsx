import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Heart, PackageCheck, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import {
  getDefaultWeightLabel,
  getWeightOptions,
  getWeightPrice,
  type Product,
  type WeightLabel,
} from "@/data/products";
import { useShop } from "@/store/shop";
import { waLink, waProductMessage } from "@/config/whatsapp";
import { cn } from "@/lib/utils";

function openWhatsApp(message: string) {
  const url = waLink(message);
  console.log("[ProductCard] Opening WhatsApp:", url);
  window.open(url, "_blank", "noopener,noreferrer");
}

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart, toggleWishlist, inWishlist } = useShop();
  const weightOptions = getWeightOptions(product);
  const [weight, setWeight] = useState<WeightLabel>(() => getDefaultWeightLabel(product));
  const selectedWeight =
    weightOptions.find((option) => option.label === weight) ?? weightOptions[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
      className="group relative flex flex-col rounded-[20px] bg-card shadow-soft hover-lift overflow-hidden border border-border/60"
    >
      {/* Image */}
      <Link
        to={`/product/${product.id}`}
        className="relative block aspect-square overflow-hidden bg-beige/40"
      >
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
        <span
          className={cn(
            "absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow",
            product.inStock ? "bg-primary/95 text-primary-foreground" : "bg-brand-red text-white",
          )}
        >
          {product.inStock ? "In Stock" : "Sold Out"}
        </span>

        {/* Quick actions */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full bg-white shadow hover:bg-primary hover:text-primary-foreground transition",
              inWishlist(product.id) && "bg-brand-red text-white",
            )}
            aria-label="Wishlist"
          >
            <Heart className="h-4 w-4" fill={inWishlist(product.id) ? "currentColor" : "none"} />
          </button>
          <Link
            to={`/product/${product.id}`}
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
            <Star
              key={i}
              className="h-3.5 w-3.5"
              fill={i < Math.round(product.rating) ? "currentColor" : "none"}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <h3 className="font-display text-lg leading-snug line-clamp-2">
          <Link to={`/product/${product.id}`} className="hover:text-primary transition">
            {product.name}
          </Link>
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>

        {/* Weight selector */}
        <div className="flex flex-wrap gap-1.5">
          {weightOptions.map((opt) => (
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
              {opt.displayLabel}
            </button>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-2 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary">
          <PackageCheck className="h-3.5 w-3.5" /> Packed in Premium Food Grade Jars
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Price
            </div>
            <div className="font-display text-xl text-primary">₹{selectedWeight.price}</div>
            <div className="text-[10px] text-muted-foreground">
              {selectedWeight.label} · incl. of taxes
            </div>
          </div>
          <button
            onClick={() => addToCart(product, weight, 1)}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-soft hover:bg-gold hover:text-gold-foreground transition"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Add
          </button>
        </div>
        <button
          onClick={() =>
            openWhatsApp(waProductMessage(product.name, weight, getWeightPrice(product, weight)))
          }
          type="button"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-white shadow-soft hover:bg-[#1da851] transition"
          title={`Order ${product.name} on WhatsApp`}
        >
          <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.7.888.674 0 2.275-.616 2.59-1.32.156-.345.256-.717.256-1.103 0-.157-.043-.3-.072-.45-.115-.4-1.722-1.137-2.066-1.137zm-2.952 7.21c-5.04 0-9.13-4.092-9.13-9.13 0-5.04 4.09-9.13 9.13-9.13 5.038 0 9.128 4.09 9.128 9.13 0 5.038-4.09 9.13-9.13 9.13zM16.15 4.155c-6.273 0-11.13 5.122-11.13 11.387 0 2.13.66 4.225 1.722 6.034l-2.06 6.246 6.45-2.018a11.18 11.18 0 0 0 5.018 1.214H16.18c6.272 0 11.823-5.122 11.823-11.387 0-3.04-1.466-5.893-3.62-8.048a11.394 11.394 0 0 0-8.232-3.43z" />
          </svg>
          Order on WhatsApp
        </button>
      </div>
    </motion.div>
  );
}
