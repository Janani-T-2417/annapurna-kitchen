import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getWeightPrice, type Product, type WeightLabel } from "@/data/products";

export type CartItem = {
  productId: string;
  weightLabel: string;
  price: number;
  qty: number;
  product: Product;
};

type ShopState = {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (p: Product, weightLabel?: string, qty?: number) => void;
  removeFromCart: (productId: string, weightLabel: string) => void;
  updateQty: (productId: string, weightLabel: string, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (id: string) => void;
  inWishlist: (id: string) => boolean;
  cartCount: number;
  cartTotal: number;
};

const Ctx = createContext<ShopState | null>(null);

const LS_CART = "annapurna.cart.v1";
const LS_WISH = "annapurna.wishlist.v1";

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const c = localStorage.getItem(LS_CART);
      const w = localStorage.getItem(LS_WISH);
      if (c) setCart(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
    } catch (error) {
      console.warn("Failed to hydrate shop storage", error);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(LS_CART, JSON.stringify(cart));
  }, [cart, hydrated]);
  useEffect(() => {
    if (hydrated) localStorage.setItem(LS_WISH, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const value = useMemo<ShopState>(() => {
    const addToCart: ShopState["addToCart"] = (p, weightLabel, qty = 1) => {
      const label = (weightLabel as WeightLabel | undefined) ?? "250g";
      const price = getWeightPrice(p, label);
      setCart((prev) => {
        const i = prev.findIndex((it) => it.productId === p.id && it.weightLabel === label);
        if (i >= 0) {
          const next = [...prev];
          next[i] = { ...next[i], qty: next[i].qty + qty, price: price };
          return next;
        }
        return [...prev, { productId: p.id, weightLabel: label, price, qty, product: p }];
      });
    };
    return {
      cart,
      wishlist,
      addToCart,
      removeFromCart: (id, wl) =>
        setCart((prev) => prev.filter((it) => !(it.productId === id && it.weightLabel === wl))),
      updateQty: (id, wl, qty) =>
        setCart((prev) =>
          prev.map((it) =>
            it.productId === id && it.weightLabel === wl ? { ...it, qty: Math.max(1, qty) } : it,
          ),
        ),
      clearCart: () => setCart([]),
      toggleWishlist: (id) =>
        setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
      inWishlist: (id) => wishlist.includes(id),
      cartCount: cart.reduce((a, b) => a + b.qty, 0),
      cartTotal: cart.reduce((a, b) => a + b.qty * b.price, 0),
    };
  }, [cart, wishlist]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useShop = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useShop must be used inside ShopProvider");
  return v;
};
