import { Link } from "react-router-dom";
import { useState } from "react";
import { Minus, Plus, ShoppingBag, Tag, Trash2 } from "lucide-react";
import { useShop } from "@/store/shop";
import { getWeightOptions } from "@/data/products";

export default function Cart() {
  const { cart, updateQty, removeFromCart, cartTotal, clearCart } = useShop();
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState<number>(0);

  const subtotal = cartTotal;
  const shipping = subtotal === 0 ? 0 : subtotal >= 999 ? 0 : 79;
  const gst = Math.round(subtotal * 0.05);
  const grand = Math.max(0, subtotal + shipping + gst - applied);

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "WELCOME10") setApplied(Math.round(subtotal * 0.1));
    else setApplied(0);
  };

  if (cart.length === 0) {
    return (
      <section className="container-x py-24 text-center">
        <div className="mx-auto max-w-md">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-beige">
            <ShoppingBag className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mt-6 font-display text-4xl">Your cart is empty</h1>
          <p className="mt-3 text-muted-foreground">
            Looks like you haven't added any goodness yet.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold hover:text-gold-foreground transition"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container-x py-12">
      <h1 className="font-display text-4xl md:text-5xl">Your Cart</h1>
      <p className="mt-2 text-muted-foreground">
        {cart.length} item{cart.length > 1 ? "s" : ""} ready to ship
      </p>

      <div className="mt-8 grid lg:grid-cols-[1fr_380px] gap-8">
        <div className="grid gap-4">
          {cart.map((it) => (
            <div
              key={it.productId + it.weightLabel}
              className="flex gap-4 rounded-3xl bg-card p-4 shadow-soft border border-border/60"
            >
              <img
                src={it.product.image}
                alt={it.product.name}
                className="h-24 w-24 rounded-2xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <Link
                  to={`/product/${it.productId}`}
                  className="font-display text-lg hover:text-primary"
                >
                  {it.product.name}
                </Link>
                <p className="text-xs text-muted-foreground">
                  {getWeightOptions(it.product).find((opt) => opt.label === it.weightLabel)?.displayLabel ?? it.weightLabel}
                </p>
                <div className="mt-3 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center rounded-full border border-border bg-warm">
                    <button
                      onClick={() => updateQty(it.productId, it.weightLabel, it.qty - 1)}
                      className="grid h-9 w-9 place-items-center"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{it.qty}</span>
                    <button
                      onClick={() => updateQty(it.productId, it.weightLabel, it.qty + 1)}
                      className="grid h-9 w-9 place-items-center"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="font-display text-lg text-primary">₹{it.price * it.qty}</div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(it.productId, it.weightLabel)}
                className="self-start text-muted-foreground hover:text-brand-red"
                aria-label="Remove"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="text-xs text-muted-foreground hover:text-brand-red self-start"
          >
            Clear cart
          </button>
        </div>

        {/* Summary */}
        <aside className="rounded-3xl bg-card p-6 shadow-card border border-border/60 h-fit">
          <h2 className="font-display text-2xl">Order Summary</h2>
          <div className="mt-4 grid gap-2 text-sm">
            <Row label="Subtotal" value={`₹${subtotal}`} />
            <Row label={`Shipping ${shipping === 0 ? "(Free)" : ""}`} value={`₹${shipping}`} />
            <Row label="GST (5%)" value={`₹${gst}`} />
            {applied > 0 && <Row label="Coupon (WELCOME10)" value={`-₹${applied}`} accent />}
          </div>
          <div className="mt-4 border-t border-border pt-4 flex items-center justify-between">
            <span className="font-display text-lg">Grand Total</span>
            <span className="font-display text-2xl text-primary">₹{grand}</span>
          </div>

          <div className="mt-5 flex items-center gap-2 rounded-full border border-border bg-warm p-1">
            <Tag className="h-4 w-4 ml-3 text-muted-foreground" />
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon code"
              className="flex-1 bg-transparent px-2 py-2 text-sm outline-none"
            />
            <button
              onClick={applyCoupon}
              className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-gold hover:text-gold-foreground transition"
            >
              Apply
            </button>
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            Try <span className="font-semibold">WELCOME10</span> for 10% off.
          </p>

          <button className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-gold hover:text-gold-foreground transition">
            Proceed to Checkout
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Free shipping on orders above ₹999
          </p>
        </aside>
      </div>
    </section>
  );
}

function Row({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={accent ? "text-primary font-semibold" : ""}>{value}</span>
    </div>
  );
}
