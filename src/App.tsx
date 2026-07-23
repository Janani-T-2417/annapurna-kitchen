import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { ShopProvider } from "@/store/shop";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ScrollToTop } from "@/components/site/ScrollToTop";

import Index from "@/pages/Index";
import About from "@/pages/About";
import Cart from "@/pages/Cart";
import Contact from "@/pages/Contact";
import Product from "@/pages/Product";
import Category from "@/pages/Category";
import Wishlist from "@/pages/Wishlist";
import NotFound from "@/pages/NotFound";

function AnnouncementBar() {
  const messages = [
    "🌿 100% Homemade & Natural",
    "🎉 Get 10% OFF on Orders Above ₹2000",
    "🫙 All Pickles Delivered in Premium Food Grade Jars",
    "🏢 Wholesale Orders Available for Apartments & Gated Communities",
    "🚚 Fast Delivery Across India",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((value) => (value + 1) % messages.length), 4000);
    return () => window.clearInterval(id);
  }, [messages.length]);

  return (
    <div className="border-b border-border/70 bg-primary/95 text-primary-foreground">
      <div className="container-x flex items-center justify-center gap-2 py-2.5 text-center text-sm font-medium">
        <Sparkles className="h-4 w-4 shrink-0" />
        <span>{messages[index]}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </ShopProvider>
  );
}
