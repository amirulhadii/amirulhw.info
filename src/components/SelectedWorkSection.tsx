import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import kulionerImg from "@/assets/portfolio-kulioner.png";
import uixImg from "@/assets/portfolio-uix.png";

const selectedWorks = [
  {
    number: "01",
    title:
      "How Kulioner turned a parcel network into a food marketplace, bringing regional specialties to Jakarta with zero vendor friction",
    metrics: [
      "300+ monthly orders within organic release,",
      "+18% user activation (shipping -> food customers)",
      "80+ SKUs across 5 major Indonesian islands",
    ],
    image: kulionerImg,
    caseStudyLink: "#",
  },
  {
    number: "02",
    title: "Logistics Route Optimization",
    metrics: ["Reduced delivery time 18%,", "saved $400K annually in ops costs.", "10M+ parcels processed."],
    image: uixImg,
    caseStudyLink: "#",
  },
  {
    number: "03",
    title: "0-1 Creator Tools Launch",
    metrics: ["0 to 50K creators in 4 months.", "$1.2M revenue first quarter.", "Led cross-functional team of 12."],
    image: kulionerImg,
    caseStudyLink: "#",
  },
];

export function SelectedWorkSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-16 md:mb-24"
        >
          Selected Work
        </motion.h2>

        <div className="space-y-16 md:space-y-24">
          {selectedWorks.map((work, index) => (
            <motion.div
              key={work.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-border pt-12 md:pt-16"
            >
              <div
                className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`overflow-hidden rounded-2xl bg-muted ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <img src={work.image} alt={work.title} className="w-full h-auto object-cover aspect-[16/10]" />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-display font-bold text-muted-foreground/30">
                      {work.number}
                    </span>
                    <div className="w-12 h-0.5 bg-foreground mt-2" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">{work.title}</h3>

                  <div className="space-y-1 mb-8">
                    {work.metrics.map((metric, i) => (
                      <p key={i} className="text-muted-foreground">
                        {metric}
                      </p>
                    ))}
                  </div>

                  <a
                    href={work.caseStudyLink}
                    className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors group"
                  >
                    <span>View case study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
