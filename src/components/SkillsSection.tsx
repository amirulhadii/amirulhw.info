import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export function SkillsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-3">
            Skills & Expertise
          </h2>
          <p className="text-primary-foreground/70">
            Core competencies developed over 7+ years
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {resumeData.skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-5 py-2.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full text-sm font-medium text-primary-foreground hover:bg-primary-foreground/20 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
