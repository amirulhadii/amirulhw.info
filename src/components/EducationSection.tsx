import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export function EducationSection() {
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
            Education
          </h2>
          <p className="text-muted-foreground">
            World-class academic foundation
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {edu.institution}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {edu.location}
              </p>
              <p className="text-foreground/80 text-sm mb-2">{edu.degree}</p>
              <p className="text-xs text-accent font-medium">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
