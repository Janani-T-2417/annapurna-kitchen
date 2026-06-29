import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  children?: ReactNode;
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.3em] gold-text font-bold"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl text-foreground"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-muted-foreground"
        >
          {description}
        </motion.p>
      )}
      {children}
    </div>
  );
}
