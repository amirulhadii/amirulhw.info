import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const impactStats = [
  {
    value: "50M+",
    numericValue: 65,
    suffix: "M+",
    label: "Consumer platform reach",
  },
  {
    value: "$5M+",
    numericValue: 5,
    prefix: "$",
    suffix: "M+",
    label: "Annual revenue generated",
  },
  {
    value: "20+",
    numericValue: 20,
    suffix: "+",
    label: "Enterprise clients closed",
  },
  {
    value: "15+",
    numericValue: 15,
    suffix: "+",
    label: "Major 0-1 Launches",
  },
  {
    value: "+12%",
    numericValue: 12,
    prefix: "+",
    suffix: "%",
    label: "AVG Topline revenue uplift",
  },
];

function CountUpNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function ImpactSection() {
  return (
    <section id="records" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-16 md:mb-20"
        >
          Track Record
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
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
                <CountUpNumber
                  value={stat.numericValue}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={1.5 + index * 0.2}
                />
              </div>
              <div className="w-12 h-0.5 bg-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
