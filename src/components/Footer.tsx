import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, Heart } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export function Footer() {
  const { personal } = resumeData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-bold text-primary-foreground mb-4">
            Let's Connect
          </h3>
          <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
            Open to discussing product leadership opportunities, consulting, or speaking engagements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg text-primary-foreground text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg text-primary-foreground text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            <a
              href={personal.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg text-primary-foreground text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Portfolio</span>
            </a>
          </div>

          <p className="text-primary-foreground/50 text-sm flex items-center justify-center gap-1">
            © {currentYear} {personal.name}. Made with{" "}
            <Heart className="w-3 h-3 fill-current" /> in Jakarta.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
