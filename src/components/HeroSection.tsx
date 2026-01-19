import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { AskQuestionBar } from "./AskQuestionBar";
import headshot from "@/assets/headshot.png";

export function HeroSection() {
  const { personal } = resumeData;

  return (
    <section className="relative min-h-[80vh] bg-gradient-hero flex items-center overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Profile Photo and Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-8"
          >
            {/* Headshot */}
            <div className="relative mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-elevated">
                <img 
                  src={headshot} 
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-accent/30 animate-pulse-soft" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-4 tracking-tight text-center">
              {personal.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-medium text-center">
              Product Leader · E-commerce & Logistics · 7+ Years Experience
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10"
          >
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{personal.location}</span>
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{personal.email}</span>
            </a>
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
              <Phone className="w-4 h-4" />
              <span>{personal.phone}</span>
            </div>
            <a
              href={personal.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Portfolio</span>
            </a>
          </motion.div>

          {/* Ask Question Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <AskQuestionBar />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
