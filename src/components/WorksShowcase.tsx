import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import workSpeaker1 from "@/assets/work-speaker-1.png";
import workSpeaker2 from "@/assets/work-speaker-2.png";

interface WorkItem {
  image: string;
  title: string;
  description: string;
  popupImages: string[];
  longDescription: string;
}

const works: WorkItem[] = [
  {
    image: workSpeaker1,
    title: "Speakers for Corporate Training",
    description: "Friendly chat to discuss more about Product and Technology",
    popupImages: [workSpeaker1, workSpeaker2],
    longDescription: "Have been actively conducting sharing session within Product & Technology expertise for various clients approached by various training providers (eg. Hacktiv8, ITS campus, Binar Academy).\n\nNotable end clients: Grab, Tokopedia, Bytedance, Telkomsel, Telkomcel, Kampus Merdeka, and many more to come."
  },
];

// Split into 2 rows dynamically
const midpoint = Math.ceil(works.length / 2);
const rows = [
  works.slice(0, midpoint),
  works.slice(midpoint),
].filter(row => row.length > 0);

export function WorksShowcase() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const isPaused = selectedWork !== null;

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-muted/30">
      <div className="container mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold tracking-tight"
        >
          Works Showcase
        </motion.h2>
      </div>

      <div className="space-y-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative">
            <motion.div
              className="flex gap-6"
              animate={{
                x: isPaused ? undefined : (rowIndex % 2 === 0 ? [0, -1200] : [-1200, 0]),
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30 + rowIndex * 5,
                  ease: "linear",
                },
              }}
              style={isPaused ? { animationPlayState: "paused" } : undefined}
            >
              {/* Double the items for seamless loop */}
              {[...row, ...row, ...row].map((work, index) => (
                <motion.div
                  key={`${work.title}-${index}`}
                  className="flex-shrink-0 w-64 md:w-80 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedWork(work)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-foreground text-sm md:text-base">
                        {work.title}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Popup Dialog */}
      <Dialog open={!!selectedWork} onOpenChange={(open) => !open && setSelectedWork(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold">
              {selectedWork?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedWork && (
            <div className="space-y-6">
              {/* Images Grid */}
              <div className={`grid gap-4 ${
                selectedWork.popupImages.length === 1 
                  ? "grid-cols-1" 
                  : selectedWork.popupImages.length === 2 
                    ? "grid-cols-2" 
                    : "grid-cols-1 md:grid-cols-3"
              }`}>
                {selectedWork.popupImages.map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg border border-border">
                    <img
                      src={img}
                      alt={`${selectedWork.title} - ${idx + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Long Description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {selectedWork.longDescription}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
