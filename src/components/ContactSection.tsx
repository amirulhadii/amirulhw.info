import { motion } from "framer-motion";
import { ArrowRight, Linkedin, FileDown, Mail } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export function ContactSection() {
  const { personal } = resumeData;

  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
            Let's talk
          </h2>

          <p className="text-primary-foreground/70 text-lg mb-10">
            Open to PM roles in Europe
            <br />
            (visa sponsorship needed)
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              <span>{personal.email}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://linkedin.com/in/amirulhadiwibowo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/20 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/20 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download resume (PDF)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
