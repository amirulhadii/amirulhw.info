import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { AskQuestionBar } from "./AskQuestionBar";
import { Navbar } from "./Navbar";
import headshot from "@/assets/headshot.png";
export function HeroSection() {
  const { personal } = resumeData;
  return (
    <section className="relative bg-background flex flex-col pt-28 pb-8 overflow-hidden rounded-none">
      <Navbar />

      <div className="container flex-1 flex flex-col justify-center px-0 rounded-none border-0">
        {/* Main Content - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Large Typography + Question Bar */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="text-left"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-display font-bold leading-[0.9] tracking-tight">
              <span className="text-foreground">Ships</span>
              <br />
              <span className="text-foreground">Results</span>
            </h1>

            {/* Ask Question Bar */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.7,
              }}
              className="w-full max-w-md mt-8"
            >
              <AskQuestionBar />
            </motion.div>
          </motion.div>

          {/* Right Side - Photo and Description */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="flex flex-col items-end gap-6"
          >
            {/* Photo */}
            <div className="w-full max-w-xs lg:max-w-sm">
              <img src={headshot} alt={personal.name} className="w-full h-auto object-contain rounded-lg" />
            </div>

            {/* Description Text */}
            <p className="text-sm md:text-base text-right text-muted-foreground max-w-xs leading-relaxed">
              Hi, I'm <span className="text-foreground font-medium">Amirul</span>. I ship 0-1 products at scale—from
              concept to millions of users and millions in revenue. 7+ years across marketplaces, logistics, and
              consumer tech.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
