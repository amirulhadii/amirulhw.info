import { motion } from "framer-motion";

const companies = [
  "Machine Vision Indonesia",
  "Tokopedia",
  "ByteDance",
  "Lion Parcel",
];

export function LogoMarquee() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="py-12 bg-muted/30 overflow-hidden border-y border-border/50">
      <div className="relative">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -50 * companies.length * 4],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex-shrink-0 px-8 py-4 bg-background border border-border rounded-lg shadow-sm"
            >
              <span className="text-sm md:text-base font-medium text-foreground whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
