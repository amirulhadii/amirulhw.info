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
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight">
            <span className="text-foreground">{personal.name.split(" ")[0]}</span>{" "}
            <span className="text-muted-foreground">{personal.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight tracking-tight mt-4">
            Ships 0-1 products at scale.
            <br />
            Millions of users, millions in revenue.
          </h2>
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
