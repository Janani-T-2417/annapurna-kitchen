import { useState } from "react";
import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Send, Youtube } from "lucide-react";
import { WHATSAPP_DISPLAY, waLink } from "@/config/whatsapp";

function openWhatsApp() {
  const url = waLink();
  console.log("[Contact Page] Opening WhatsApp:", url);
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="container-x py-16">
        <p className="text-[11px] uppercase tracking-[0.3em] gold-text font-bold">Contact</p>
        <h1 className="mt-2 font-display text-5xl md:text-6xl">We'd love to hear from you.</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Questions about a product, bulk orders, festive hampers or partnerships — drop us a line.
        </p>
      </section>

      <section className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-10 pb-16">
        {/* Info */}
        <div className="grid gap-4">
          {/* Featured WhatsApp Card */}
          <button
            onClick={openWhatsApp}
            type="button"
            title="Chat with us on WhatsApp"
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-6 text-white shadow-card hover-lift text-left"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-white/20 backdrop-blur shrink-0">
                <MessageCircle className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-[0.25em] opacity-90">WhatsApp</div>
                <div className="mt-1 font-display text-2xl">Chat with us on WhatsApp</div>
                <div className="mt-1 text-sm opacity-90">{WHATSAPP_DISPLAY}</div>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#128C7E] shadow">
                  Open WhatsApp
                </span>
              </div>
            </div>
          </button>

          {[
            { i: Phone, t: "Call us", v: "+91 98000 12345", h: "tel:+919800012345", isWhatsApp: false },
            { i: MessageCircle, t: "WhatsApp", v: WHATSAPP_DISPLAY, h: waLink(), isWhatsApp: true },
            { i: Mail, t: "Email", v: "hello@annapurnafoods.in", h: "mailto:hello@annapurnafoods.in", isWhatsApp: false },
            { i: MapPin, t: "Address", v: "Annapurna House, Vijayawada, Andhra Pradesh 520010", h: "#", isWhatsApp: false },
            { i: Clock, t: "Business Hours", v: "Mon — Sat · 9:00 AM to 7:00 PM", h: "#", isWhatsApp: false },
          ].map((c) => {
            if (c.isWhatsApp) {
              return (
                <button
                  key={c.t}
                  onClick={openWhatsApp}
                  type="button"
                  className="flex items-start gap-4 rounded-3xl bg-card p-5 shadow-soft hover-lift text-left"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary shrink-0">
                    <c.i className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="mt-1 font-semibold">{c.v}</div>
                  </div>
                </button>
              );
            }
            return (
              <a
                key={c.t}
                href={c.h}
                className="flex items-start gap-4 rounded-3xl bg-card p-5 shadow-soft hover-lift"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary shrink-0">
                  <c.i className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                  <div className="mt-1 font-semibold">{c.v}</div>
                </div>
              </a>
            );
          })}

          <div className="flex gap-2 mt-2">
            {[Facebook, Instagram, Youtube].map((I, i) => (
              <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-full bg-card shadow-soft hover:bg-primary hover:text-primary-foreground transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-2 rounded-3xl overflow-hidden border border-border bg-beige/40 aspect-video grid place-items-center text-muted-foreground">
            <div className="text-center">
              <MapPin className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-2 text-sm">Map placeholder — Vijayawada, AP</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-[28px] bg-card p-6 md:p-8 shadow-card border border-border/60"
        >
          <h2 className="font-display text-3xl">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We typically reply within a few hours.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" />
            <Field label="Subject" name="subject" />
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              rows={5}
              required
              className="mt-2 w-full rounded-2xl border border-border bg-warm p-3 text-sm outline-none focus:border-primary"
              placeholder="Tell us what's on your mind..."
            />
          </div>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-gold hover:text-gold-foreground transition">
            <Send className="h-4 w-4" /> Send Message
          </button>
          {sent && <p className="mt-4 text-sm text-primary">Thank you! We'll get back to you shortly.</p>}
        </form>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-warm px-3 py-2.5 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
