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
            {personal.name} is
            <br />
            Head of Product
            <br />
            at Lion Parcel
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-muted-foreground mb-10"
        >
          7+ years of Product. Indonesian. Jakarta based.
        </motion.p>

        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mb-12"
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={headshot}
              alt={personal.name}
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>
          {/* Fade at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
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
