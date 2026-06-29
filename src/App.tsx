import { Routes, Route } from "react-router-dom";
import { ShopProvider } from "@/store/shop";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

import Index from "@/pages/Index";
import About from "@/pages/About";
import Cart from "@/pages/Cart";
import Contact from "@/pages/Contact";
import Product from "@/pages/Product";
import Category from "@/pages/Category";
import Wishlist from "@/pages/Wishlist";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <ShopProvider>
      <div className="flex min-h-screen flex-col bg-background">
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
