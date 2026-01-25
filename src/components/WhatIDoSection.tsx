import { motion } from "framer-motion";
import logoTokopedia from "@/assets/logo-tokopedia.png";
import logoGrab from "@/assets/logo-grab.png";
import logoHiteta from "@/assets/logo-hiteta.png";

const testimonials = [
  {
    logo: logoGrab,
    logoAlt: "Grab",
    quote: "Amirul skips the textbook stuff and gets straight to what matters. He read the room well and adjusted his examples to what people actually wanted to hear. It felt like learning from someone who's done the work, not another theory session. The real-world stories made it genuinely useful. We'd bring him back without hesitation.",
    role: "Program Manager",
    year: "2025",
  },
  {
    logo: logoTokopedia,
    logoAlt: "Tokopedia",
    quote: "Amirul always goes above and beyond to deliver value to our team, from taking on many projects from discovery to delivery. He builds strong collaborative relationships with many stakeholders in Tokopedia, everyone respects and values his contribution.",
    role: "AVP of Product",
    year: "2024",
  },
  {
    logo: logoHiteta,
    logoAlt: "Hiteta",
    quote: "Arsitag really needed a brand new look and feel and we struggled in that aspect. Thankfully Hiteta came in and recommended the right UI/UX designer to finally complete what couldn't be done by ourselves alone.",
    role: "Cofounder Arsitag",
    year: "2023",
  },
];

export function WhatIDoSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold mb-16 md:mb-20"
        >
          Testimony
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.logoAlt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -4, 
                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.15)",
                transition: { type: "spring", stiffness: 400, damping: 25 } 
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col p-6 rounded-2xl bg-secondary/50 border border-border/50 hover:border-border cursor-default"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm mb-6">
                <img
                  src={item.logo}
                  alt={item.logoAlt}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base italic">
                "{item.quote}"
              </p>
              <p className="text-foreground font-medium mt-auto text-sm">
                {item.role} - {item.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
