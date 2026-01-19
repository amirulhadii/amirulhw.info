import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export function CertificationsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground">
            Recognition and professional development
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid gap-4">
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-soft border border-border"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 shrink-0">
                {cert.toLowerCase().includes("award") ? (
                  <Trophy className="w-5 h-5 text-accent" />
                ) : (
                  <Award className="w-5 h-5 text-accent" />
                )}
              </div>
              <p className="text-foreground text-sm md:text-base">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
