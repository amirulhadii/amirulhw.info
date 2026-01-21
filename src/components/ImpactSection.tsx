import { motion } from "framer-motion";

const impactStats = [
  {
    value: "34%",
    label: "Avg conversion lift",
  },
  {
    value: "$3.7M",
    label: "Revenue generated",
  },
  {
    value: "60M+",
    label: "Users reached",
  },
];

export function ImpactSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-16 md:mb-20"
        >
          Impact by the numbers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-4xl mx-auto">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-foreground mb-3">
                {stat.value}
              </div>
              <div className="w-16 h-0.5 bg-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
