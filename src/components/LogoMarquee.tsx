import { motion } from "framer-motion";
import logoTokopedia from "@/assets/logo-tokopedia.png";
import logoLionParcel from "@/assets/logo-lionparcel.png";
import logoMachineVision from "@/assets/logo-machinevision.png";
import logoByteDance from "@/assets/logo-bytedance.png";

const companies = [
  { name: "Machine Vision Indonesia", logo: logoMachineVision },
  { name: "Tokopedia", logo: logoTokopedia },
  { name: "ByteDance", logo: logoByteDance },
  { name: "Lion Parcel", logo: logoLionParcel },
];

export function LogoMarquee() {
  // Duplicate for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-6 items-center"
          animate={{
            x: [0, -400],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-[220px] h-[80px] bg-muted/50 rounded-2xl"
            >
              <img 
                src={company.logo} 
                alt={company.name} 
                className="h-12 md:h-14 w-auto max-w-[180px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
