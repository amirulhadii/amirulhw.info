import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export function SummarySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            About
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            {resumeData.summary}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
