import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import {
  getDefaultWeightLabel,
  getWeightOptions,
  getWeightPrice,
  products,
  type Product,
  type WeightLabel,
} from "@/data/products";
import { useShop } from "@/store/shop";
import { useState } from "react";

function WishlistRow({ product }: { product: Product }) {
  const { addToCart, toggleWishlist } = useShop();
  const weightOptions = getWeightOptions(product);
  const [weight, setWeight] = useState<WeightLabel>(() => getDefaultWeightLabel(product));
  const selectedWeight =
    weightOptions.find((option) => option.label === weight) ?? weightOptions[0];

  return (
    <div className="flex gap-4 rounded-3xl bg-card p-4 shadow-soft border border-border/60">
      <img src={product.image} alt={product.name} className="h-24 w-24 rounded-2xl object-cover" />
      <div className="flex-1 min-w-0">
        <Link to={`/product/${product.id}`} className="font-display text-lg hover:text-primary">
          {product.name}
        </Link>
        {weightOptions.length > 1 ? (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {weightOptions.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setWeight(opt.label)}
                className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${weight === opt.label ? "bg-primary text-primary-foreground border-primary" : "border-border bg-warm"}`}
              >
                {opt.displayLabel}
              </button>
            ))}
          </div>
        ) : null}
        <div className="mt-3 flex items-center gap-3 flex-wrap">
          <span className="font-display text-lg text-primary">
            ₹{getWeightPrice(product, weight)}
          </span>
          <span className="text-xs text-muted-foreground">{selectedWeight.displayLabel}</span>
          <button
            onClick={() => {
              addToCart(product, weight, 1);
              toggleWishlist(product.id);
            }}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-gold hover:text-gold-foreground transition"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Move to Cart
          </button>
          <button
            onClick={() => toggleWishlist(product.id)}
            className="text-xs text-muted-foreground hover:text-brand-red"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useShop();
  const items = products.filter((p) => wishlist.includes(p.id));

  return (
    <section className="container-x py-12">
      <h1 className="font-display text-4xl md:text-5xl">Wishlist</h1>
      <p className="mt-2 text-muted-foreground">{items.length} saved items</p>

      {items.length === 0 ? (
        <div className="mt-16 text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-beige">
            <Heart className="h-8 w-8 text-brand-red" />
          </div>
          <p className="mt-4 text-muted-foreground">No favourites yet — start exploring!</p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold hover:text-gold-foreground transition"
          >
            Browse products
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-4">
          {items.map((p) => (
            <WishlistRow key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
