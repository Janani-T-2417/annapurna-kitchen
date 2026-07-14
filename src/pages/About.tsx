import { motion } from "framer-motion";
import { Award, Heart, Leaf, ShieldCheck, Sparkles, Utensils } from "lucide-react";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";

const values = [
  { i: Utensils, t: "Homemade", d: "Every jar is crafted by hand in small, hygienic batches." },
  { i: Leaf, t: "Natural", d: "Cold-pressed oils, rock salt and farm-fresh produce." },
  { i: ShieldCheck, t: "No Preservatives", d: "No chemicals, no artificial flavours — ever." },
  { i: Heart, t: "Made with Love", d: "Recipes passed down through three generations." },
  { i: Sparkles, t: "Traditional Process", d: "Sun-dried, stone-ground, slow-cooked." },
  { i: Award, t: "Family Trust", d: "Loved by 2,400+ families across India." },
];

export default function About() {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/40" />
        </div>
        <div className="relative container-x py-20 md:py-28 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.3em] gold-text font-bold">Our Story</p>
          <h1 className="mt-2 font-display text-5xl md:text-7xl leading-[1.05]">
            A taste of <span className="gold-text">Andhra</span>, made with love.
          </h1>
          <p className="mt-5 text-lg text-foreground/70">
            Annapurna Foods is a family of cooks, farmers and food-lovers keeping coastal Andhra's
            flavours alive — one homemade jar at a time.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl">Born in a sunlit kitchen.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              It started with a clay pot, a basket of raw mangoes and a recipe scribbled on the back
              of an almanac. Three generations later, that same recipe travels in glass jars to
              homes across India — unchanged, uncompromised, and full of love.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We work directly with Andhra farmers, sun-dry our chillies on terrace mats, and press
              our oils at the village ghani. No shortcuts. No preservatives. Just food the way it
              was always meant to be.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-gold/30 to-primary/20 blur-2xl" />
            <div className="relative rounded-[32px] glass p-10 text-center shadow-gold">
              <img src={logo} alt="" className="mx-auto h-48 w-48" />
              <p className="mt-4 font-display text-xl text-primary">The Goddess Of Food</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Blessed by tradition, served with love.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-beige/40">
        <div className="container-x">
          <h2 className="font-display text-4xl text-center">What we stand for</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-[24px] bg-card p-6 shadow-soft hover-lift"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                  <v.i className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
