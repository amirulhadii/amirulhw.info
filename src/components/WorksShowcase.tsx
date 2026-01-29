import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
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
  description: string;
  popupImages: string[];
  longDescription: string;
  readMoreLink?: string;
}

interface BubbleState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

// Helper to render text with clickable links
const renderDescription = (text: string, readMoreLink?: string) => {
  return (
    <>
      <span className="whitespace-pre-line">{text}</span>
      {readMoreLink && (
        <>
          <br />
          <br />
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
    longDescription:
      "Friendly chat to discuss more about Product and Technology.\n\nHave been actively conducting sharing session within Product & Technology expertise for various clients approached by various training providers (eg. Hacktiv8, ITS campus, Binar Academy).\n\nNotable end clients: Grab, Tokopedia, Bytedance, Telkomsel, Telkomcel, Kampus Merdeka, and many more to come.",
  },
  {
    image: workLionParcel,
    title: "Lion Parcel Customer Apps - Friction Reduction",
    description: "Reduced conversion friction by 16-33% through systematic UX optimization and A/B testing",
    popupImages: [workLionParcel],
    longDescription:
      "Reduced conversion friction by 16-33% through systematic UX optimization and A/B testing.\n\nLed complete UX overhaul for Lion Parcel's customer apps serving 100K+ MAU and 150K+ monthly shipments.\n\nResults:\n• Cut tariff check time from 24s to 16s (-33% friction)\n• Reduced drop-off flow from 18s to 15s (-16% friction)",
  },
  {
    image: workBeautyAr1,
    title: "Indonesia's First Beauty AR for E-Commerce",
    description: "Launched AR virtual try-on during COVID-19, driving +15% paid orders for the featured products",
    popupImages: [workBeautyAr1, workBeautyAr2],
    longDescription:
      "Launched AR virtual try-on during COVID-19, driving +15% paid orders for the featured products.\n\nPioneered Tokopedia's first augmented reality feature for cosmetics during pandemic lockdowns when physical try-on wasn't possible. Led product strategy, UX design, and cross-functional launch (engineering, beauty brands, marketing).\n\nImpact:\n• +15% paid orders in featured cosmetics\n• +20% user engagement (session time, product interactions)\n• Restored category sales to pre-pandemic levels\n• Reduced return rates by helping customers make confident purchase decisions\n\nTechnical implementation integrated real-time face tracking, color matching algorithms, and seamless camera-to-cart. Proved AR could drive measurable commerce outcomes, not just gimmick engagement.",
    readMoreLink:
      "https://www.tokopedia.com/blog/tokopedia-hadirkan-fitur-augmented-reality-ar-masyarakat-bisa-mencoba-makeup-secara-virtual-rls/",
  },
  {
    image: workTiktokTokopedia,
    title: "Core Product Integration - Tokopedia × TikTok Shop",
    description: "Led buyer experience integration for SEA's largest marketplace merger, managing 70% GMV share",
    popupImages: [workTiktokTokopedia],
    longDescription:
      "Led buyer experience integration for SEA's largest marketplace merger, managing 70% GMV share.\n\nManaged critical integration workstreams for ByteDance's acquisition of Tokopedia, ensuring seamless buyer experience across merged platforms.\n\nLed Product Detail Page, Reviews, and Shop Page integration serving ~20M daily visitors.\n\nKey launches:\n• **Review system integration**: Unified review display across Tokopedia and TikTok Shop, maintaining trust signals during platform merge\n• **Post-ATC basket building**: Optimized add-to-cart journey with cross-platform recommendations, driving +0.5% GMV uplift\n• **Shop page redesign**: Context-aware merchant pages with complementary algorithms based on user journey, achieving +7% Shop GMV\n\nCoordinated PMs and Engineering/Design/Data leaders across Indonesia, Singapore, Thailand, Vietnam, Philippines markets. Delivered integration milestones while maintaining platform stability and growth metrics.",
    readMoreLink:
      "https://www.thejakartapost.com/business/2023/12/11/tiktok-marks-e-commerce-return-with-1-5-billion-deal-to-acquire-tokopedia.html",
  },
  {
    image: workVrTraining,
    title: "AR/VR Training System for Fertilizer Manufacturing",
    description: "Built Indonesia's first AR/VR learning management system for industrial safety training",
    popupImages: [workVrTraining],
    longDescription:
      "Built Indonesia's first AR/VR learning management system for industrial safety training.\n\nPartnered with PT Petrokimia Gresik (state-owned fertilizer manufacturer) to develop immersive training platform for hazardous environment procedures.\n\nThe system enabled workers to practice emergency procedures, equipment operation, and safety protocols in virtual environments before entering actual production facilities. Initial contract established scalable training standard for Indonesia's fertilizer industry while reducing training costs and improving safety protocol retention.\n\nThis project became the anchor portfolio that secured Oculus Facebook partnership as Asia-Pacific Independent Software Vendor, positioned the company as ASEAN Global Startup Awards 2020 Finalist, and obtained government grant supporting Indonesia's Ministry of Industry 4.0 roadmap. Proved VR/AR could deliver measurable ROI in industrial training, not just entertainment applications.",
    readMoreLink: "https://hcdev.petrokimia-gresik.com/learningexperience/vr.html",
  },
  {
    image: workSwing1,
    title: "Swing - Sports Booking, Tournament, and Marketplace",
    description: "End-to-end sports platform connecting venues, players, and tournaments across Indonesia",
    popupImages: [workSwing1, workSwing2, workSwing3],
    longDescription:
      "End-to-end sports platform connecting venues, players, and tournaments across Indonesia.\n\nAct as indie product developer for comprehensive sports management app, starting with golf booking and expanding to multi-sport coverage. Secured private investor funding in late 2025, validating product-market fit in Indonesia's growing recreational sports market.\n\nFeatures:\n• **Venue booking**: Real-time court/field availability across multiple sports facilities with instant confirmation\n• **Tournament management**: Automated bracket generation, live scoring, player registration, and prize distribution\n• **Marketplace**: Peer-to-peer trading for sports equipment and gear\n• **Community building**: Skill-based player matching, local rankings, and sports community discovery\n\nBuilt to solve the coordination friction in golf initially, as this vertical was pretty conventional. With proven willingness-to-pay, expanding to padel, badminton, tennis, and futsal based on demand patterns.",
    readMoreLink: "https://getswing.app",
  },
  {
    image: workArsitag,
    title: "Marketplace for Architects, Designers & Contractors",
    description: "Platform connecting property owners with verified design professionals and contractors",
    popupImages: [workArsitag],
    longDescription:
      "Platform connecting property owners with verified design professionals and contractors.\n\nAct as indie product developer for marketplace addressing fragmentation in residential construction and renovation services. Product enables homeowners to discover, compare, and hire architects, interior designers, and contractors through transparent pricing and portfolio reviews.\n\nKey features:\n• **Professional portfolios**: Project galleries, certifications, client reviews\n• **Quote comparison**: Multiple bids for same project scope, transparent pricing\n• **Project management**: Milestone tracking, payment escrow, progress documentation\n• **Quality assurance**: Verification system for professional credentials and past work",
    readMoreLink: "https://www.arsitag.com/",
  },
  {
    image: workCareerProgression,
    title: "Career Progression & Industry Recognition",
    description: "7 years from engineer to Head of Product across SEA's leading tech companies",
    popupImages: [workCareerProgression],
    longDescription:
      '**Professional Trajectory**\n\n2025 (ongoing) - Head of Product, Lion Parcel Customer Apps\nManaging 100K+ MAU across customer-facing channels, driving 20% YoY revenue growth\n\n2024 - Product Manager, ByteDance SEA (E-Commerce Lead)\nLed buyer experience for ~20M daily visitors across Tokopedia and TikTok Shop integration\n\n2023 - Senior Product Manager (Acting Lead), Tokopedia\nPromoted to leadership role managing PDP and restriction engine products\n\n2021-2023 - Product Manager I/II, Tokopedia\nAccepted into Tokopedia Product Acceleration Program, launched GoTo PLUS subscription\n\n2020-2021 - Chief Business Development Officer, Machine Vision Indonesia\nPromoted from Head of Digital Transformation, scaled team 10→25 employees, 3x revenue growth\n\n**Education**\n\nMSc Future Power Networks, Imperial College London - 2020\nLPDP Master\'s Scholarship (Ministry of Finance full-ride) - Merit degree\n\nBEng Electrical Engineering, Institut Teknologi Sepuluh Nopember - 2018\nGPA 3.39/4.00\n\n**Recognition & Achievements**\n• Consulting Leadership Program - McKinsey & Company (2024)\n• Top Performers Award - ByteDance SEA Product (2024)\n• Tokopedia Ignite Future Leaders (2023)\n• Employee Award "Growth Mindset" - Tokopedia (2022, 2023)\n• Generasi Gigih Instructor - GoTo Foundation (2022)\n• Professional Scrum Product Owner I (PSPO I) - Scrum.org (2023)\n• Global Business Skills - GoAccelerate GBS (2023)',
  },
  {
    image: businessImpactPlaceholder,
    title: "Business Impact Across 7+ Years",
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

// Generate random initial positions
const generateInitialBubbles = (count: number, containerWidth: number, containerHeight: number): BubbleState[] => {
  const bubbles: BubbleState[] = [];
  const sizes = [80, 100, 120, 140, 100, 120, 80, 100, 120]; // Varied sizes
  
  for (let i = 0; i < count; i++) {
    const size = sizes[i % sizes.length];
    const padding = size / 2;
    bubbles.push({
      x: padding + Math.random() * (containerWidth - size - padding * 2),
      y: padding + Math.random() * (containerHeight - size - padding * 2),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size,
    });
  }
  return bubbles;
};

export function WorksShowcase() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [bubbles, setBubbles] = useState<BubbleState[]>([]);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [crackingIndex, setCrackingIndex] = useState<number | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>();
  const dragStart = useRef<{ x: number; y: number; bubbleX: number; bubbleY: number } | null>(null);

  // Handle opening dialog with optional crack animation
  const openWithCrack = useCallback((index: number, withCrack: boolean) => {
    if (withCrack) {
      setCrackingIndex(index);
      // Wait for crack animation to complete before opening dialog
      setTimeout(() => {
        setCrackingIndex(null);
        setSelectedWork(works[index]);
      }, 600);
    } else {
      setSelectedWork(works[index]);
    }
  }, []);

  // Initialize bubbles on mount and resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
        setBubbles(generateInitialBubbles(works.length, rect.width, rect.height));
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Physics animation loop
  useEffect(() => {
    if (containerSize.width === 0 || containerSize.height === 0) return;

    const animate = () => {
      setBubbles((prev) =>
        prev.map((bubble, index) => {
          if (index === draggingIndex) return bubble;

          let { x, y, vx, vy, size } = bubble;

          // Apply velocity
          x += vx;
          y += vy;

          // Apply friction
          vx *= 0.995;
          vy *= 0.995;

          // Bounce off walls
          if (x <= 0 || x >= containerSize.width - size) {
            vx = -vx * 0.8;
            x = Math.max(0, Math.min(x, containerSize.width - size));
          }
          if (y <= 0 || y >= containerSize.height - size) {
            vy = -vy * 0.8;
            y = Math.max(0, Math.min(y, containerSize.height - size));
          }

          return { x, y, vx, vy, size };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [containerSize, draggingIndex]);

  const handlePointerDown = useCallback((e: React.PointerEvent, index: number) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setDraggingIndex(index);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      bubbleX: bubbles[index]?.x || 0,
      bubbleY: bubbles[index]?.y || 0,
    };
  }, [bubbles]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (draggingIndex === null || !dragStart.current) return;

    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;

    setBubbles((prev) =>
      prev.map((bubble, index) => {
        if (index !== draggingIndex) return bubble;
        const newX = Math.max(0, Math.min(dragStart.current!.bubbleX + dx, containerSize.width - bubble.size));
        const newY = Math.max(0, Math.min(dragStart.current!.bubbleY + dy, containerSize.height - bubble.size));
        return { ...bubble, x: newX, y: newY };
      })
    );
  }, [draggingIndex, containerSize]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (draggingIndex !== null && dragStart.current) {
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      
      // If barely moved, treat as click (no crack animation)
      if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {
        openWithCrack(draggingIndex, false);
      } else {
        // Dropped after drag - trigger egg crack animation then open
        openWithCrack(draggingIndex, true);
      }
    }
    setDraggingIndex(null);
    dragStart.current = null;
  }, [draggingIndex, openWithCrack]);

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-muted/30">
      <div className="container mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold tracking-tight"
        >
          Everything I've Built
        </motion.h2>
        <p className="text-muted-foreground mt-2 text-sm">Click and drag the bubbles to play!</p>
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto h-[500px] md:h-[600px] max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-background via-muted/50 to-background border border-border"
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {bubbles.map((bubble, index) => (
          <motion.div
            key={works[index].title}
            className={`absolute cursor-grab active:cursor-grabbing select-none ${
              crackingIndex === index ? "egg-crack" : ""
            }`}
            style={{
              left: bubble.x,
              top: bubble.y,
              width: bubble.size,
              height: bubble.size,
            }}
            animate={{
              scale: draggingIndex === index ? 1.1 : crackingIndex === index ? 1.2 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onPointerDown={(e) => handlePointerDown(e, index)}
          >
            <div
              className={`w-full h-full rounded-full overflow-hidden border-4 border-background shadow-lg hover:shadow-xl transition-shadow bg-card relative ${
                crackingIndex === index ? "egg-crack-inner" : ""
              }`}
              style={{
                boxShadow: draggingIndex === index 
                  ? "0 20px 40px rgba(0,0,0,0.3)" 
                  : crackingIndex === index
                    ? "0 0 40px rgba(255,200,100,0.6)"
                    : "0 8px 24px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={works[index].image}
                alt={works[index].title}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              {/* Crack overlay */}
              {crackingIndex === index && (
                <div className="absolute inset-0 egg-crack-overlay">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      className="crack-line"
                      d="M50 0 L45 20 L55 35 L40 50 L60 65 L45 80 L50 100"
                      stroke="white"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      className="crack-line delay-1"
                      d="M30 30 L40 45 L25 60"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      className="crack-line delay-2"
                      d="M70 40 L60 55 L75 70"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* Title tooltip on hover */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
              <span className="text-xs bg-foreground text-background px-2 py-1 rounded">
                {works[index].title.length > 25 ? works[index].title.slice(0, 25) + "..." : works[index].title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Dialog */}
      <Dialog open={!!selectedWork} onOpenChange={(open) => !open && setSelectedWork(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold">{selectedWork?.title}</DialogTitle>
          </DialogHeader>

          {selectedWork && (
            <div className="space-y-6">
              {/* Images Grid */}
              <div
                className={`grid gap-4 ${
                  selectedWork.popupImages.length === 1
                    ? "grid-cols-1"
                    : selectedWork.popupImages.length === 2
                      ? "grid-cols-2"
                      : "grid-cols-1 md:grid-cols-3"
                }`}
              >
                {selectedWork.popupImages.map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg border border-border">
                    <img src={img} alt={`${selectedWork.title} - ${idx + 1}`} className="w-full h-auto object-cover" />
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
