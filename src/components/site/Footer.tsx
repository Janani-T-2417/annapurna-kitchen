import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import { categories } from "@/data/products";
import { WHATSAPP_DISPLAY, waLink } from "@/config/whatsapp";

export function Footer() {
  return (
    <footer className="mt-24 bg-[oklch(0.96_0.02_75)] border-t border-border">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-14 w-14 rounded-full ring-1 ring-gold/40" />
            <div>
              <div className="font-display text-xl text-primary">Annapurna Foods</div>
              <div className="text-[10px] tracking-[0.25em] uppercase gold-text">The Goddess Of Food</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Homemade Andhra delicacies, crafted with tradition, love and 100% natural ingredients.
            No chemicals. No preservatives. Just family recipes, perfected.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Youtube].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-soft hover:bg-primary hover:text-primary-foreground transition"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Categories</h4>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/category/${c.slug}`} className="hover:text-primary">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Quick Links</h4>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/cart" className="hover:text-primary">Cart</Link></li>
            <li><Link to="/wishlist" className="hover:text-primary">Wishlist</Link></li>
            <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
            <li><a href="#" className="hover:text-primary">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-primary">Returns</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Get in Touch</h4>
          <ul className="grid gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +91 98000 12345</li>
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-primary">
                <MessageCircle className="h-4 w-4 mt-0.5 text-[#25D366]" /> WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> hello@annapurnafoods.in</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Vijayawada, Andhra Pradesh, India</li>
          </ul>

          <div className="mt-5">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Newsletter</label>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-2 flex items-center gap-2 rounded-full bg-white p-1 shadow-soft"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 bg-transparent px-3 py-2 text-sm outline-none"
              />
              <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-gold hover:text-gold-foreground transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-5 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 items-center justify-between">
          <p>© {new Date().getFullYear()} Annapurna Foods. All rights reserved.</p>
          <p>Crafted with love in Andhra Pradesh.</p>
        </div>
      </div>
    </footer>
  );
}
