import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import workSpeaker1 from "@/assets/work-speaker-1.png";
import workSpeaker2 from "@/assets/work-speaker-2.png";
import workLionParcel from "@/assets/work-lionparcel.png";
import workBeautyAr1 from "@/assets/work-beauty-ar-1.png";
import workBeautyAr2 from "@/assets/work-beauty-ar-2.png";
import workTiktokTokopedia from "@/assets/work-tiktok-tokopedia.png";
import workVrTraining from "@/assets/work-vr-training.png";
import workSwing1 from "@/assets/work-swing-1.png";
import workSwing2 from "@/assets/work-swing-2.png";
import workSwing3 from "@/assets/work-swing-3.png";
import workArsitag from "@/assets/work-arsitag.png";
import workCareerProgression from "@/assets/work-career-progression.png";

interface WorkItem {
  image: string;
  title: string;
  description: string;
  popupImages: string[];
  longDescription: string;
  readMoreLink?: string;
}

// Helper to render text with clickable links
const renderDescription = (text: string, readMoreLink?: string) => {
  
  return (
    <>
      <span className="whitespace-pre-line">{text}</span>
      {readMoreLink && (
        <>
          <br /><br />
          <a 
            href={readMoreLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            Read more →
          </a>
        </>
      )}
    </>
  );
};

const works: WorkItem[] = [
  {
    image: workSpeaker1,
    title: "Speakers for Corporate Training",
    description: "Friendly chat to discuss more about Product and Technology",
    popupImages: [workSpeaker1, workSpeaker2],
    longDescription: "Friendly chat to discuss more about Product and Technology.\n\nHave been actively conducting sharing session within Product & Technology expertise for various clients approached by various training providers (eg. Hacktiv8, ITS campus, Binar Academy).\n\nNotable end clients: Grab, Tokopedia, Bytedance, Telkomsel, Telkomcel, Kampus Merdeka, and many more to come."
  },
  {
    image: workLionParcel,
    title: "Lion Parcel Customer Apps - Friction Reduction",
    description: "Reduced conversion friction by 16-33% through systematic UX optimization and A/B testing",
    popupImages: [workLionParcel],
    longDescription: "Reduced conversion friction by 16-33% through systematic UX optimization and A/B testing.\n\nLed complete UX overhaul for Lion Parcel's customer apps serving 100K+ MAU and 150K+ monthly shipments.\n\nResults:\n• Cut tariff check time from 24s to 16s (-33% friction)\n• Reduced drop-off flow from 18s to 15s (-16% friction)"
  },
  {
    image: workBeautyAr1,
    title: "Indonesia's First Beauty AR for E-Commerce",
    description: "Launched AR virtual try-on during COVID-19, driving +15% paid orders for the featured products",
    popupImages: [workBeautyAr1, workBeautyAr2],
    longDescription: "Launched AR virtual try-on during COVID-19, driving +15% paid orders for the featured products.\n\nPioneered Tokopedia's first augmented reality feature for cosmetics during pandemic lockdowns when physical try-on wasn't possible. Led product strategy, UX design, and cross-functional launch (engineering, beauty brands, marketing).\n\nImpact:\n• +15% paid orders in featured cosmetics\n• +20% user engagement (session time, product interactions)\n• Restored category sales to pre-pandemic levels\n• Reduced return rates by helping customers make confident purchase decisions\n\nTechnical implementation integrated real-time face tracking, color matching algorithms, and seamless camera-to-cart. Proved AR could drive measurable commerce outcomes, not just gimmick engagement.",
    readMoreLink: "https://www.tokopedia.com/blog/tokopedia-hadirkan-fitur-augmented-reality-ar-masyarakat-bisa-mencoba-makeup-secara-virtual-rls/"
  },
  {
    image: workTiktokTokopedia,
    title: "Core Product Integration - Tokopedia × TikTok Shop",
    description: "Led buyer experience integration for SEA's largest marketplace merger, managing 70% GMV share",
    popupImages: [workTiktokTokopedia],
    longDescription: "Led buyer experience integration for SEA's largest marketplace merger, managing 70% GMV share.\n\nManaged critical integration workstreams for ByteDance's acquisition of Tokopedia, ensuring seamless buyer experience across merged platforms.\n\nLed Product Detail Page, Reviews, and Shop Page integration serving ~20M daily visitors.\n\nKey launches:\n• **Review system integration**: Unified review display across Tokopedia and TikTok Shop, maintaining trust signals during platform merge\n• **Post-ATC basket building**: Optimized add-to-cart journey with cross-platform recommendations, driving +0.5% GMV uplift\n• **Shop page redesign**: Context-aware merchant pages with complementary algorithms based on user journey, achieving +7% Shop GMV\n\nCoordinated PMs and Engineering/Design/Data leaders across Indonesia, Singapore, Thailand, Vietnam, Philippines markets. Delivered integration milestones while maintaining platform stability and growth metrics.",
    readMoreLink: "https://www.thejakartapost.com/business/2023/12/11/tiktok-marks-e-commerce-return-with-1-5-billion-deal-to-acquire-tokopedia.html"
  },
  {
    image: workVrTraining,
    title: "AR/VR Training System for Fertilizer Manufacturing",
    description: "Built Indonesia's first AR/VR learning management system for industrial safety training",
    popupImages: [workVrTraining],
    longDescription: "Built Indonesia's first AR/VR learning management system for industrial safety training.\n\nPartnered with PT Petrokimia Gresik (state-owned fertilizer manufacturer) to develop immersive training platform for hazardous environment procedures.\n\nThe system enabled workers to practice emergency procedures, equipment operation, and safety protocols in virtual environments before entering actual production facilities. Initial contract established scalable training standard for Indonesia's fertilizer industry while reducing training costs and improving safety protocol retention.\n\nThis project became the anchor portfolio that secured Oculus Facebook partnership as Asia-Pacific Independent Software Vendor, positioned the company as ASEAN Global Startup Awards 2020 Finalist, and obtained government grant supporting Indonesia's Ministry of Industry 4.0 roadmap. Proved VR/AR could deliver measurable ROI in industrial training, not just entertainment applications.",
    readMoreLink: "https://hcdev.petrokimia-gresik.com/learningexperience/vr.html"
  },
  {
    image: workSwing1,
    title: "Swing - Sports Booking, Tournament, and Marketplace",
    description: "End-to-end sports platform connecting venues, players, and tournaments across Indonesia",
    popupImages: [workSwing1, workSwing2, workSwing3],
    longDescription: "End-to-end sports platform connecting venues, players, and tournaments across Indonesia.\n\nAct as indie product developer for comprehensive sports management app, starting with golf booking and expanding to multi-sport coverage. Secured private investor funding in late 2025, validating product-market fit in Indonesia's growing recreational sports market.\n\nFeatures:\n• **Venue booking**: Real-time court/field availability across multiple sports facilities with instant confirmation\n• **Tournament management**: Automated bracket generation, live scoring, player registration, and prize distribution\n• **Marketplace**: Peer-to-peer trading for sports equipment and gear\n• **Community building**: Skill-based player matching, local rankings, and sports community discovery\n\nBuilt to solve the coordination friction in golf initially, as this vertical was pretty conventional. With proven willingness-to-pay, expanding to padel, badminton, tennis, and futsal based on demand patterns.",
    readMoreLink: "https://getswing.app"
  },
  {
    image: workArsitag,
    title: "Marketplace for Architects, Designers & Contractors",
    description: "Platform connecting property owners with verified design professionals and contractors",
    popupImages: [workArsitag],
    longDescription: "Platform connecting property owners with verified design professionals and contractors.\n\nAct as indie product developer for marketplace addressing fragmentation in residential construction and renovation services. Product enables homeowners to discover, compare, and hire architects, interior designers, and contractors through transparent pricing and portfolio reviews.\n\nKey features:\n• **Professional portfolios**: Project galleries, certifications, client reviews\n• **Quote comparison**: Multiple bids for same project scope, transparent pricing\n• **Project management**: Milestone tracking, payment escrow, progress documentation\n• **Quality assurance**: Verification system for professional credentials and past work",
    readMoreLink: "https://www.arsitag.com/"
  },
  {
    image: workCareerProgression,
    title: "Career Progression & Industry Recognition",
    description: "7 years from engineer to Head of Product across SEA's leading tech companies",
    popupImages: [workCareerProgression],
    longDescription: "**Professional Trajectory**\n\n2025 (ongoing) - Head of Product, Lion Parcel Customer Apps\nManaging 100K+ MAU across customer-facing channels, driving 20% YoY revenue growth\n\n2024 - Product Manager, ByteDance SEA (E-Commerce Lead)\nLed buyer experience for ~20M daily visitors across Tokopedia and TikTok Shop integration\n\n2023 - Senior Product Manager (Acting Lead), Tokopedia\nPromoted to leadership role managing PDP and restriction engine products\n\n2021-2023 - Product Manager I/II, Tokopedia\nAccepted into Tokopedia Product Acceleration Program, launched GoTo PLUS subscription\n\n2020-2021 - Chief Business Development Officer, Machine Vision Indonesia\nPromoted from Head of Digital Transformation, scaled team 10→25 employees, 3x revenue growth\n\n**Education**\n\nMSc Future Power Networks, Imperial College London - 2020\nLPDP Master's Scholarship (Ministry of Finance full-ride) - Merit degree\n\nBEng Electrical Engineering, Institut Teknologi Sepuluh Nopember - 2018\nGPA 3.39/4.00\n\n**Recognition & Achievements**\n• Consulting Leadership Program - McKinsey & Company (2024)\n• Top Performers Award - ByteDance SEA Product (2024)\n• Tokopedia Ignite Future Leaders (2023)\n• Employee Award \"Growth Mindset\" - Tokopedia (2022, 2023)\n• Generasi Gigih Instructor - GoTo Foundation (2022)\n• Professional Scrum Product Owner I (PSPO I) - Scrum.org (2023)\n• Global Business Skills - GoAccelerate GBS (2023)"
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
                    <div className="p-4 h-24 flex flex-col">
                      <h3 className="font-display font-semibold text-foreground text-sm md:text-base line-clamp-1">
                        {work.title}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm line-clamp-2 mt-1">
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
                <div className="text-muted-foreground leading-relaxed">
                  {renderDescription(selectedWork.longDescription, selectedWork.readMoreLink)}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
