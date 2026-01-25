import { motion } from "framer-motion";
import kulionerImg from "@/assets/portfolio-kulioner.png";
import tokopediaImg from "@/assets/portfolio-tokopedia.png";
import gotoplusImg from "@/assets/portfolio-gotoplus.png";
import uixImg from "@/assets/portfolio-uix.png";
import kulionerDocs1 from "@/assets/kulioner-docs-1.png";
import kulionerDocs2 from "@/assets/kulioner-docs-2.png";
import kulionerDocs3 from "@/assets/kulioner-docs-3.png";

const works = [
  { image: kulionerImg, title: "Kulioner", description: "Food marketplace" },
  { image: tokopediaImg, title: "Tokopedia", description: "Promo discovery" },
  { image: gotoplusImg, title: "GoTo PLUS", description: "E-commerce subscription" },
  { image: uixImg, title: "UIX Overhaul", description: "Logistics platform" },
  { image: kulionerDocs1, title: "Order Flow", description: "Checkout experience" },
  { image: kulionerDocs2, title: "Vendor Dashboard", description: "Seller management" },
  { image: kulionerDocs3, title: "Tracking System", description: "Delivery tracking" },
  { image: tokopediaImg, title: "Search UX", description: "Discovery patterns" },
  { image: gotoplusImg, title: "Membership", description: "Loyalty program" },
  { image: uixImg, title: "Route Optimization", description: "Delivery efficiency" },
  { image: kulionerImg, title: "Mobile App", description: "Native experience" },
  { image: kulionerDocs1, title: "Analytics", description: "Data insights" },
  { image: kulionerDocs2, title: "Onboarding", description: "User activation" },
  { image: tokopediaImg, title: "Payments", description: "Checkout flow" },
  { image: gotoplusImg, title: "Rewards", description: "Gamification" },
];

// Split into 3 rows of 5
const rows = [
  works.slice(0, 5),
  works.slice(5, 10),
  works.slice(10, 15),
];

export function WorksShowcase() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-muted/30">
      <div className="container mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold tracking-tight"
        >
          Works Showcase
        </motion.h2>
      </div>

      <div className="space-y-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative">
            <motion.div
              className="flex gap-6"
              animate={{
                x: rowIndex % 2 === 0 ? [0, -1200] : [-1200, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30 + rowIndex * 5,
                  ease: "linear",
                },
              }}
            >
              {/* Double the items for seamless loop */}
              {[...row, ...row, ...row].map((work, index) => (
                <motion.div
                  key={`${work.title}-${index}`}
                  className="flex-shrink-0 w-64 md:w-80 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-sm">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-foreground text-sm md:text-base">
                        {work.title}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
