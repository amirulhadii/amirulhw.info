import { motion } from "framer-motion";
import { Rocket, TrendingUp, Users } from "lucide-react";

const capabilities = [
  {
    icon: Rocket,
    title: "0-1 Product Development",
    description: "Concept to launch. Built 5 products from scratch.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Monetization",
    description: "Turn usage into $$. Pricing, retention, conversion.",
  },
  {
    icon: Users,
    title: "Cross-functional Leadership",
    description: "Engineering, design, data, ops. Up to 15 people led.",
  },
];

export function WhatIDoSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-16 md:mb-20"
        >
          What I do best
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-6">
                <item.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
