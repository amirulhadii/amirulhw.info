import { motion } from "framer-motion";
import logoTokopedia from "@/assets/logo-tokopedia.png";
import logoLionParcel from "@/assets/logo-lionparcel.png";
import logoMachineVision from "@/assets/logo-machinevision.png";
import logoByteDance from "@/assets/logo-bytedance.png";

const companies = [
  { name: "Machine Vision Indonesia", logo: logoMachineVision, hasLogo: true },
  { name: "Tokopedia", logo: logoTokopedia, hasLogo: true },
  { name: "ByteDance", logo: logoByteDance, hasLogo: true },
  { name: "Lion Parcel", logo: logoLionParcel, hasLogo: true, larger: true },
];

export function LogoMarquee() {
  // Duplicate for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-16 items-center"
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
              className="flex-shrink-0 flex items-center justify-center px-8 py-6 bg-muted/50 rounded-lg min-w-[200px]"
            >
              {company.hasLogo && company.logo ? (
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className={`${company.larger ? 'h-10 md:h-14' : 'h-8 md:h-10'} w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300`}
                />
              ) : (
                <span className="text-lg md:text-xl font-semibold text-foreground/80 whitespace-nowrap">
                  {company.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
