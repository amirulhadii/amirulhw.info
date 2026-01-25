import { motion } from "framer-motion";

const impactStats = [
  {
    value: "50M+",
    label: "Consumer platform reach",
  },
  {
    value: "$5M+",
    label: "Annual revenue generated",
  },
  {
    value: "20+",
    label: "Enterprise clients closed",
  },
  {
    value: "15+",
    label: "Major 0-1 Launches",
  },
  {
    value: "+12%",
    label: "AVG Topline revenue uplift",
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
          Running Impact by The Numbers
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 max-w-5xl mx-auto">
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
