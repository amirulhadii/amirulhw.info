import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { AskQuestionBar } from "./AskQuestionBar";
import { Navbar } from "./Navbar";
import headshot from "@/assets/headshot.png";

export function HeroSection() {
  const { personal } = resumeData;

  return (
    <section className="relative min-h-screen bg-background flex flex-col items-center pt-28 pb-16 overflow-hidden">
      <Navbar />

      <div className="container flex flex-col items-center text-center px-6">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight tracking-tight">
            {personal.name}
            <br />
            <br />
            Ships 0-1 products at scale. Millions of users, millions in revenue.
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-muted-foreground mb-10"
        >
          7+ years of Consumer Products. Indonesia based.
        </motion.p>

        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full max-w-md md:max-w-lg lg:max-w-xl mb-12"
        >
          <img src={headshot} alt={personal.name} className="w-full h-auto object-contain" />
        </motion.div>

        {/* Ask Question Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full max-w-2xl"
        >
          <AskQuestionBar />
        </motion.div>
      </div>
    </section>
  );
}
