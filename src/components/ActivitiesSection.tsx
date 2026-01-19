import { motion } from "framer-motion";
import { Lightbulb, Mic, Users } from "lucide-react";
import { resumeData } from "@/data/resumeData";

const getIcon = (activity: string) => {
  if (activity.toLowerCase().includes("speaker")) return Mic;
  if (activity.toLowerCase().includes("instructor")) return Users;
  return Lightbulb;
};

export function ActivitiesSection() {
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
            Activities & Projects
          </h2>
          <p className="text-muted-foreground">
            Beyond the day job
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid gap-4 md:grid-cols-3">
          {resumeData.activities.map((activity, index) => {
            const Icon = getIcon(activity);
            return (
              <motion.div
                key={activity}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-5 shadow-soft border border-border text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground text-sm">{activity}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
