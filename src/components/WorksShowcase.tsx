import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import kulionerImg from "@/assets/portfolio-kulioner.png";
import tokopediaImg from "@/assets/portfolio-tokopedia.png";
import gotoplusImg from "@/assets/portfolio-gotoplus.png";
import uixImg from "@/assets/portfolio-uix.png";
import kulionerDocs1 from "@/assets/kulioner-docs-1.png";
import kulionerDocs2 from "@/assets/kulioner-docs-2.png";
import kulionerDocs3 from "@/assets/kulioner-docs-3.png";

interface WorkItem {
  image: string;
  title: string;
  description: string;
  popupImages: string[];
  longDescription: string;
}

const works: WorkItem[] = [
  {
    image: kulionerImg,
    title: "Kulioner",
    description: "Food marketplace",
    popupImages: [kulionerImg, kulionerDocs1, kulionerDocs2],
    longDescription: "Kulioner is a revolutionary food marketplace that connects regional food vendors across Indonesian islands with customers in major cities. The platform leverages existing parcel delivery networks to enable same-day delivery of authentic regional specialties. We designed the entire user journey from discovery to checkout, focusing on trust-building elements and seamless vendor onboarding. The result was 300+ monthly orders within the organic release period and an 18% increase in user activation rates."
  },
  {
    image: tokopediaImg,
    title: "Tokopedia",
    description: "Promo discovery",
    popupImages: [tokopediaImg],
    longDescription: "Led the redesign of Tokopedia's promotion discovery experience to eliminate 'promo anxiety' at checkout. Users often abandoned carts due to fear of missing better deals. We implemented a contextual promo surfacing system that shows relevant promotions at the right moment in the shopping journey. This resulted in a 5.95% increase in platform GMV, 2.7% higher conversion to paid orders, and 13.3% improvement in promotion product click rates."
  },
  {
    image: gotoplusImg,
    title: "GoTo PLUS",
    description: "E-commerce subscription",
    popupImages: [gotoplusImg],
    longDescription: "Created Indonesia's first e-commerce subscription program, transforming casual buyers into power users. GoTo PLUS offers exclusive benefits including free shipping, priority customer service, and member-only deals. The behavioral design focused on habit formation and value perception. During the MVP period, we acquired 200K subscribers with a 33% increase in orders per subscriber and generated 7% additional MRR through this new revenue stream."
  },
  {
    image: uixImg,
    title: "UIX Overhaul",
    description: "Logistics platform",
    popupImages: [uixImg, kulionerDocs3],
    longDescription: "Complete redesign of the logistics platform experience for Lion Parcel, Indonesia's leading logistics company. The project involved reimagining the entire user interface from shipment creation to tracking and delivery confirmation. We focused on reducing cognitive load and streamlining common workflows for both B2B and B2C users. The overhaul resulted in significant improvements in task completion rates and customer satisfaction scores."
  },
  {
    image: kulionerDocs1,
    title: "Order Flow",
    description: "Checkout experience",
    popupImages: [kulionerDocs1, kulionerDocs2],
    longDescription: "Redesigned the checkout experience to minimize cart abandonment and increase conversion rates. The new flow features progressive disclosure, smart defaults, and contextual help. We implemented address auto-complete, saved payment methods, and real-time delivery time estimates. User testing showed a 40% reduction in checkout time and significantly higher completion rates."
  },
  {
    image: kulionerDocs2,
    title: "Vendor Dashboard",
    description: "Seller management",
    popupImages: [kulionerDocs2, kulionerDocs3],
    longDescription: "Built a comprehensive vendor dashboard that empowers sellers to manage their products, orders, and analytics in one place. The design prioritizes actionable insights and quick actions for common tasks. Features include inventory management, order fulfillment tracking, revenue analytics, and customer feedback management. Vendor onboarding time was reduced by 60% with the new intuitive interface."
  },
  {
    image: kulionerDocs3,
    title: "Tracking System",
    description: "Delivery tracking",
    popupImages: [kulionerDocs3],
    longDescription: "Designed a real-time delivery tracking system that keeps customers informed throughout their order journey. The system provides proactive notifications, accurate ETAs, and easy communication with delivery partners. We integrated live map tracking and implemented smart notifications that reduce customer support inquiries while improving satisfaction scores."
  },
  {
    image: tokopediaImg,
    title: "Search UX",
    description: "Discovery patterns",
    popupImages: [tokopediaImg],
    longDescription: "Reimagined the search and discovery experience to help users find products faster and discover new items they'll love. The project included autocomplete optimization, visual search capabilities, and personalized recommendations. We implemented faceted navigation and smart filters that adapt to user behavior, resulting in improved search-to-purchase conversion rates."
  },
  {
    image: gotoplusImg,
    title: "Membership",
    description: "Loyalty program",
    popupImages: [gotoplusImg],
    longDescription: "Designed a tiered membership program that rewards customer loyalty and encourages repeat purchases. The program features clear progression paths, meaningful rewards, and gamification elements that drive engagement. Members receive personalized offers based on their shopping patterns, exclusive early access to sales, and priority customer support."
  },
  {
    image: uixImg,
    title: "Route Optimization",
    description: "Delivery efficiency",
    popupImages: [uixImg],
    longDescription: "Developed an intelligent route optimization system for delivery operations. The system considers multiple factors including traffic patterns, delivery windows, package sizes, and driver capacity. The interface provides drivers with clear navigation and allows dispatchers to manage exceptions in real-time. Implementation resulted in 25% improvement in delivery efficiency and reduced fuel costs."
  },
];

// Split into 2 rows of 5
const rows = [
  works.slice(0, 5),
  works.slice(5, 10),
];

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
                <p className="text-muted-foreground leading-relaxed">
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
