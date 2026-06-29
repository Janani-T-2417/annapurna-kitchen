import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { useShop } from "@/store/shop";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist — Annapurna Foods" },
      { name: "description", content: "Your saved homemade Andhra favourites." },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
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
          <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold hover:text-gold-foreground transition">
            Browse products
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-4">
          {items.map((p) => (
            <div key={p.id} className="flex gap-4 rounded-3xl bg-card p-4 shadow-soft border border-border/60">
              <img src={p.image} alt={p.name} className="h-24 w-24 rounded-2xl object-cover" />
              <div className="flex-1 min-w-0">
                <Link to="/product/$id" params={{ id: p.id }} className="font-display text-lg hover:text-primary">{p.name}</Link>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{p.description}</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="font-display text-lg text-primary">₹{p.price}</span>
                  <button
                    onClick={() => { addToCart(p); toggleWishlist(p.id); }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-gold hover:text-gold-foreground transition"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" /> Move to Cart
                  </button>
                  <button onClick={() => toggleWishlist(p.id)} className="text-xs text-muted-foreground hover:text-brand-red">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
