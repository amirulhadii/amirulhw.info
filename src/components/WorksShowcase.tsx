import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
import businessImpactPlaceholder from "/business-impact-placeholder.svg";

interface WorkItem {
  image: string;
  title: string;
  tag: string;
  description: string;
  popupImages: string[];
  longDescription: string;
  readMoreLink?: string;
}

// Helper to render description text only (without link)
const renderDescriptionText = (text: string) => {
  return <span className="whitespace-pre-line">{text}</span>;
};

const works: WorkItem[] = [
  {
    image: workSpeaker1,
    tag: "Speaking",
    title: "Corporate Training",
    description: "Friendly chat to discuss more about Product and Technology",
    popupImages: [workSpeaker1, workSpeaker2],
    longDescription:
      "Friendly chat to discuss more about Product and Technology.\n\nHave been actively conducting sharing session within Product & Technology expertise for various clients approached by various training providers (eg. Hacktiv8, ITS campus, Binar Academy).\n\nNotable end clients: Grab, Tokopedia, Bytedance, Telkomsel, Telkomcel, Kampus Merdeka, and many more to come.",
  },
  {
    image: workLionParcel,
    tag: "Logistics",
    title: "Lion Parcel UX",
    description: "Reduced conversion friction by 16-33% through systematic UX optimization and A/B testing",
    popupImages: [workLionParcel],
    longDescription:
      "Reduced conversion friction by 16-33% through systematic UX optimization and A/B testing.\n\nLed complete UX overhaul for Lion Parcel's customer apps serving 100K+ MAU and 150K+ monthly shipments.\n\nResults:\n• Cut tariff check time from 24s to 16s (-33% friction)\n• Reduced drop-off flow from 18s to 15s (-16% friction)",
  },
  {
    image: workBeautyAr1,
    tag: "AR/VR",
    title: "Beauty AR Try-On",
    description: "Launched AR virtual try-on during COVID-19, driving +15% paid orders for the featured products",
    popupImages: [workBeautyAr1, workBeautyAr2],
    longDescription:
      "Launched AR virtual try-on during COVID-19, driving +15% paid orders for the featured products.\n\nPioneered Tokopedia's first augmented reality feature for cosmetics during pandemic lockdowns when physical try-on wasn't possible. Led product strategy, UX design, and cross-functional launch (engineering, beauty brands, marketing).\n\nImpact:\n• +15% paid orders in featured cosmetics\n• +20% user engagement (session time, product interactions)\n• Restored category sales to pre-pandemic levels\n• Reduced return rates by helping customers make confident purchase decisions\n\nTechnical implementation integrated real-time face tracking, color matching algorithms, and seamless camera-to-cart. Proved AR could drive measurable commerce outcomes, not just gimmick engagement.",
    readMoreLink:
      "https://www.tokopedia.com/blog/tokopedia-hadirkan-fitur-augmented-reality-ar-masyarakat-bisa-mencoba-makeup-secara-virtual-rls/",
  },
  {
    image: workTiktokTokopedia,
    tag: "Integration",
    title: "Tokopedia × TikTok",
    description: "Led buyer experience integration for SEA's largest marketplace merger, managing 70% GMV share",
    popupImages: [workTiktokTokopedia],
    longDescription:
      "Led buyer experience integration for SEA's largest marketplace merger, managing 70% GMV share.\n\nManaged critical integration workstreams for ByteDance's acquisition of Tokopedia, ensuring seamless buyer experience across merged platforms.\n\nLed Product Detail Page, Reviews, and Shop Page integration serving ~20M daily visitors.\n\nKey launches:\n• **Review system integration**: Unified review display across Tokopedia and TikTok Shop, maintaining trust signals during platform merge\n• **Post-ATC basket building**: Optimized add-to-cart journey with cross-platform recommendations, driving +0.5% GMV uplift\n• **Shop page redesign**: Context-aware merchant pages with complementary algorithms based on user journey, achieving +7% Shop GMV\n\nCoordinated PMs and Engineering/Design/Data leaders across Indonesia, Singapore, Thailand, Vietnam, Philippines markets. Delivered integration milestones while maintaining platform stability and growth metrics.",
    readMoreLink:
      "https://www.thejakartapost.com/business/2023/12/11/tiktok-marks-e-commerce-return-with-1-5-billion-deal-to-acquire-tokopedia.html",
  },
  {
    image: workVrTraining,
    tag: "AR/VR",
    title: "VR Training System",
    description: "Built Indonesia's first AR/VR learning management system for industrial safety training",
    popupImages: [workVrTraining],
    longDescription:
      "Built Indonesia's first AR/VR learning management system for industrial safety training.\n\nPartnered with PT Petrokimia Gresik (state-owned fertilizer manufacturer) to develop immersive training platform for hazardous environment procedures.\n\nThe system enabled workers to practice emergency procedures, equipment operation, and safety protocols in virtual environments before entering actual production facilities. Initial contract established scalable training standard for Indonesia's fertilizer industry while reducing training costs and improving safety protocol retention.\n\nThis project became the anchor portfolio that secured Oculus Facebook partnership as Asia-Pacific Independent Software Vendor, positioned the company as ASEAN Global Startup Awards 2020 Finalist, and obtained government grant supporting Indonesia's Ministry of Industry 4.0 roadmap. Proved VR/AR could deliver measurable ROI in industrial training, not just entertainment applications.",
    readMoreLink: "https://hcdev.petrokimia-gresik.com/learningexperience/vr.html",
  },
  {
    image: workSwing1,
    tag: "Platform",
    title: "Swing Sports App",
    description: "End-to-end sports platform connecting venues, players, and tournaments across Indonesia",
    popupImages: [workSwing1, workSwing2, workSwing3],
    longDescription:
      "End-to-end sports platform connecting venues, players, and tournaments across Indonesia.\n\nAct as indie product developer for comprehensive sports management app, starting with golf booking and expanding to multi-sport coverage. Secured private investor funding in late 2025, validating product-market fit in Indonesia's growing recreational sports market.\n\nFeatures:\n• **Venue booking**: Real-time court/field availability across multiple sports facilities with instant confirmation\n• **Tournament management**: Automated bracket generation, live scoring, player registration, and prize distribution\n• **Marketplace**: Peer-to-peer trading for sports equipment and gear\n• **Community building**: Skill-based player matching, local rankings, and sports community discovery\n\nBuilt to solve the coordination friction in golf initially, as this vertical was pretty conventional. With proven willingness-to-pay, expanding to padel, badminton, tennis, and futsal based on demand patterns.",
    readMoreLink: "https://getswing.app",
  },
  {
    image: workArsitag,
    tag: "Marketplace",
    title: "Arsitag Platform",
    description: "Platform connecting property owners with verified design professionals and contractors",
    popupImages: [workArsitag],
    longDescription:
      "Platform connecting property owners with verified design professionals and contractors.\n\nAct as indie product developer for marketplace addressing fragmentation in residential construction and renovation services. Product enables homeowners to discover, compare, and hire architects, interior designers, and contractors through transparent pricing and portfolio reviews.\n\nKey features:\n• **Professional portfolios**: Project galleries, certifications, client reviews\n• **Quote comparison**: Multiple bids for same project scope, transparent pricing\n• **Project management**: Milestone tracking, payment escrow, progress documentation\n• **Quality assurance**: Verification system for professional credentials and past work",
    readMoreLink: "https://www.arsitag.com/",
  },
  {
    image: workCareerProgression,
    tag: "Career",
    title: "7 Years of Growth",
    description: "7 years from engineer to Head of Product across SEA's leading tech companies",
    popupImages: [workCareerProgression],
    longDescription:
      '**Professional Trajectory**\n\n2025 (ongoing) - Head of Product, Lion Parcel Customer Apps\nManaging 100K+ MAU across customer-facing channels, driving 20% YoY revenue growth\n\n2024 - Product Manager, ByteDance SEA (E-Commerce Lead)\nLed buyer experience for ~20M daily visitors across Tokopedia and TikTok Shop integration\n\n2023 - Senior Product Manager (Acting Lead), Tokopedia\nPromoted to leadership role managing PDP and restriction engine products\n\n2021-2023 - Product Manager I/II, Tokopedia\nAccepted into Tokopedia Product Acceleration Program, launched GoTo PLUS subscription\n\n2020-2021 - Chief Business Development Officer, Machine Vision Indonesia\nPromoted from Head of Digital Transformation, scaled team 10→25 employees, 3x revenue growth\n\n**Education**\n\nMSc Future Power Networks, Imperial College London - 2020\nLPDP Master\'s Scholarship (Ministry of Finance full-ride) - Merit degree\n\nBEng Electrical Engineering, Institut Teknologi Sepuluh Nopember - 2018\nGPA 3.39/4.00\n\n**Recognition & Achievements**\n• Consulting Leadership Program - McKinsey & Company (2024)\n• Top Performers Award - ByteDance SEA Product (2024)\n• Tokopedia Ignite Future Leaders (2023)\n• Employee Award "Growth Mindset" - Tokopedia (2022, 2023)\n• Generasi Gigih Instructor - GoTo Foundation (2022)\n• Professional Scrum Product Owner I (PSPO I) - Scrum.org (2023)\n• Global Business Skills - GoAccelerate GBS (2023)',
  },
  {
    image: businessImpactPlaceholder,
    tag: "Impact",
    title: "Business Metrics",
    description: "Every product decision backed by measurable business outcomes—conversion, revenue, and retention",
    popupImages: [businessImpactPlaceholder],
    longDescription:
      `Every product decision backed by measurable business outcomes—conversion, revenue, and retention.

**Lion Parcel**
• +20% YoY revenue growth (customer apps - 100K+ MAU)
• +13% power user expansion (retention programs)
• 16-33% friction reduction (UX optimization)
• Reduced tariff check time 24s→16s (-33% friction)
• Reduced drop-off flow 18s→15s (-16% friction)
• 300+ monthly orders, 98% ops performance (Kulioner, first same-day inter-island food delivery)
• 100K→300K orders/month scaled (informal commerce via WhatsApp automation)

**ByteDance**
• Led products serving 20M+ daily platform visitors
• +7% Shop GMV (context-aware shop page redesign)
• +0.5% GMV uplift (post-ATC basket building)
• Coordinated PMs across Indonesia, Singapore, Thailand, Vietnam, Philippines

**Tokopedia**
• +5.95% platform GMV lift (promotional optimization - ~20M daily visitors)
• +15% paid orders (AR virtual try-on for cosmetics)
• +20% engagement (AR try-on feature)
• +8% order creation (Flash Payment on PDP)
• +14% add-to-cart rate (automated product storytelling)
• +12% CTR (recommendation entry point optimization)
• +3% add-to-cart conversion (shop credibility features)
• +15% variant interaction (PDP redesign)
• +13% MRR from seller promotional marketplace
• +6% platform commission through merchant tiering optimization
• 200K subscribers (GoTo PLUS, Indonesia's first e-commerce subscription)
• +30% daily subscriber growth (PLUS launch phase)
• 4% MRR growth (GoTo PLUS founding contribution)

**Machine Vision**
• 3x revenue growth (team scale 10→25 employees)
• 5+ enterprise deals closed, $100K total project value
• $50K AR/VR training project (PT Petrokimia Gresik)
• $30K multi-facility expansion deals (OEE monitoring)
• 6% operational efficiency gains (OEE monitoring for manufacturing)

**Leadership & Scale**
• Managed 2-7 direct report PMs across levels
• Coordinated 30-50 person tribes (engineering, data, design, operations)
• Products deployed across Southeast Asia (Indonesia, Malaysia, Singapore, Thailand, Vietnam, Philippines)`,
  },
];

export function WorksShowcase() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold tracking-tight"
        >
          Everything I've Built
        </motion.h2>
      </div>

      {/* 2x4 Grid */}
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div
                onClick={() => setSelectedWork(work)}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer hover:border-foreground/20 transition-all duration-300 hover:shadow-xl"
              >
                {/* Header with tag and arrow */}
                <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-3 md:p-4">
                  <span className="px-2 py-1 md:px-3 md:py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-[10px] md:text-xs font-medium text-foreground border border-border">
                    {work.tag}
                  </span>
                  <button className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-background/90 backdrop-blur-sm rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-colors">
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>

                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                    {work.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dialog for detailed view */}
      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedWork && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-display">
                  {selectedWork.title}
                </DialogTitle>
                {selectedWork.readMoreLink && (
                  <a
                    href={selectedWork.readMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline text-sm mt-2"
                  >
                    Read more <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </DialogHeader>

              {/* Image gallery */}
              <div className="space-y-4 mt-4">
                {selectedWork.popupImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${selectedWork.title} ${i + 1}`}
                    className="w-full rounded-lg"
                  />
                ))}
              </div>

              {/* Description */}
              <div className="mt-6 text-muted-foreground leading-relaxed">
                {renderDescriptionText(selectedWork.longDescription)}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
