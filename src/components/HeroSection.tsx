import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { AskQuestionBar } from "./AskQuestionBar";
import { Navbar } from "./Navbar";
import headshot from "@/assets/headshot.png";

export function HeroSection() {
  const { personal } = resumeData;

  return (
    <section className="relative min-h-screen bg-background flex flex-col pt-28 pb-16 overflow-hidden">
      <Navbar />

      <div className="container px-6 flex-1 flex flex-col justify-center">
        {/* Main Content - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Large Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-left"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-display font-bold leading-[0.9] tracking-tight">
              <span className="text-foreground">Product</span>
              <br />
              <span className="text-foreground">Manager</span>
            </h1>
          </motion.div>

          {/* Right Side - Photo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-end gap-6"
          >
            {/* Photo */}
            <div className="w-full max-w-xs lg:max-w-sm">
              <img 
                src={headshot} 
                alt={personal.name} 
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            
            {/* Description Text */}
            <p className="text-sm md:text-base text-right text-muted-foreground max-w-xs leading-relaxed">
              Hi, I'm <span className="text-foreground font-medium">Amirul</span>. I ship 0-1 products at scale—from concept to millions of users and millions in revenue. 7+ years across marketplaces, logistics, and consumer tech.
            </p>
          </motion.div>
        </div>

        {/* Ask Question Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full max-w-2xl mt-16"
        >
          <AskQuestionBar />
        </motion.div>
      </div>
    </section>
  );
}
