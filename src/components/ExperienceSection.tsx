import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export function ExperienceSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Experience
          </h2>
          <p className="text-muted-foreground">
            7+ years of product leadership across Southeast Asia
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border hover:shadow-elevated transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-accent font-medium">{exp.role}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {exp.region}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground md:text-right whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-foreground/70 mb-4 text-sm">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
