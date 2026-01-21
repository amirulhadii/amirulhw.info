import { motion } from "framer-motion";
import logoTokopedia from "@/assets/logo-tokopedia.png";
import logoLionParcel from "@/assets/logo-lionparcel.png";
import logoMachineVision from "@/assets/logo-machinevision.png";
import logoByteDance from "@/assets/logo-bytedance.png";

const companies = [
  { name: "Machine Vision Indonesia", logo: logoMachineVision, scale: 1 },
  { name: "Tokopedia", logo: logoTokopedia, scale: 1 },
  { name: "ByteDance", logo: logoByteDance, scale: 1.4 },
  { name: "Lion Parcel", logo: logoLionParcel, scale: 1.1 },
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
                className="w-[180px] h-[56px] md:w-[190px] md:h-[60px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                style={{ transform: `scale(${company.scale})` }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
