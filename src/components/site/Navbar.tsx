import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { categories } from "@/data/products";
import { useShop } from "@/store/shop";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  ...categories.map((c) => ({ to: `/category/${c.slug}`, label: c.name })),
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { cartCount, wishlist } = useShop();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]" : "bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="container-x">
        <div className="flex items-center justify-between gap-4 py-3">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Annapurna Foods" className="h-12 w-12 rounded-full ring-1 ring-gold/40" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-xl text-primary">Annapurna Foods</div>
              <div className="text-[10px] uppercase tracking-[0.25em] gold-text">The Goddess Of Food</div>
            </div>
          </Link>

          {/* Top row icons (desktop) */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button aria-label="Search" className="hidden sm:grid h-10 w-10 place-items-center rounded-full hover:bg-beige/60 transition">
              <Search className="h-5 w-5" />
            </button>
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-beige/60 transition"
            >
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-brand-red text-[10px] font-bold text-white px-1">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              aria-label="Cart"
              className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-beige/60 transition"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground px-1">
                  {cartCount}
                </span>
              )}
            </Link>
            <button aria-label="Profile" className="hidden sm:grid h-10 w-10 place-items-center rounded-full hover:bg-beige/60 transition">
              <User className="h-5 w-5" />
            </button>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-beige/60 transition"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Main nav (desktop) */}
        <nav className="hidden lg:flex items-center justify-center gap-1 pb-3 overflow-x-auto">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-1.5 text-sm font-medium rounded-full text-foreground/70 hover:text-primary hover:bg-beige/60 transition"
              activeProps={{ className: "px-3 py-1.5 text-sm font-semibold rounded-full text-primary bg-beige" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container-x py-4 grid gap-1 max-h-[70vh] overflow-y-auto">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="block px-3 py-2.5 rounded-xl text-foreground/80 hover:bg-beige/60"
                activeProps={{ className: "block px-3 py-2.5 rounded-xl text-primary font-semibold bg-beige" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
