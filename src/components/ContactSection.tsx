import { motion } from "framer-motion";
import { ArrowRight, Linkedin, MessageCircle, Mail } from "lucide-react";
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">Ready to talk?</h2>

          <p className="text-primary-foreground/70 text-lg mb-10">
            Targeting PM roles (Leadership and Individual Contributors) abroad
            <br />
            Visa sponsorship required
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:opacity-90 transition-opacity w-full sm:w-auto sm:min-w-[200px]"
            >
              <Mail className="w-4 h-4" />
              <span>{personal.email}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://linkedin.com/in/amirulhadii/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/20 transition-colors w-full sm:w-auto sm:min-w-[200px]"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/6287852298982?text=Hi%20Amirul%2C%20could%20you%20please%20share%20your%20full%20resume%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/20 transition-colors w-full sm:w-auto whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Request Resume</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
