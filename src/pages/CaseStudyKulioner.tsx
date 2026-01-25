import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import kulionerImg from "@/assets/portfolio-kulioner.png";
import kulionerDocs1 from "@/assets/kulioner-docs-1.png";
import kulionerDocs2 from "@/assets/kulioner-docs-2.png";
import kulionerDocs3 from "@/assets/kulioner-docs-3.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const metrics = [
  { value: "300+", label: "monthly orders within organic release period" },
  { value: "+18%", label: "new user activation (shipping → food customers)" },
  { value: "80+", label: "SKUs across 5 major Indonesian islands" },
];

const keyLessons = [
  {
    number: "1",
    title: "Asset leverage beats asset building",
    description:
      "Building a cross-island food delivery network from scratch would cost millions. Using Lion Parcel's existing routes cost nothing. The product challenge was identifying what could work within existing constraints, not building new capabilities.",
  },
  {
    number: "2",
    title: "Low friction vendor model enabled curation",
    description:
      "Zero vendor onboarding meant we could source based on quality alone. Vendors who made great products but couldn't manage apps were perfect partners. The model worked because we didn't ask them to change.",
  },
  {
    number: "3",
    title: "User activation from existing base reduces CAC",
    description:
      "18% activation from current users delivered growth without marketing spend. Customers already trusted Lion Parcel. Extending that trust to a new product category was easier than acquiring cold users.",
  },
  {
    number: "4",
    title: "Small scale allows operational learning",
    description:
      "At 300+ orders monthly, we could manually test every assumption. Which products survived shipping? What packaging worked? Which regions had demand? These learnings would inform scale, but couldn't be gathered at scale.",
  },
  {
    number: "5",
    title: "Strategic value exceeds revenue",
    description:
      "Kulioner's impact wasn't the food GMV. It was proving Lion Parcel could support marketplace behavior, activate users into new categories, and extract more value from existing network infrastructure without capital investment.",
  },
];

export default function CaseStudyKulioner() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="container pt-8"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to home</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Case Study
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mt-4 mb-6">
              How Kulioner turned a parcel network into a food marketplace
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Bringing regional specialties to Jakarta with zero vendor friction
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documentation Gallery */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mb-16 md:mb-24"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {[
              { src: kulionerImg, alt: "Kulioner App Interface", caption: "In-app product discovery" },
              { src: kulionerDocs1, alt: "Packaged products ready for shipment", caption: "Packages prepared for cross-island transit" },
              { src: kulionerDocs2, alt: "Delivery handoff to customer", caption: "Last-mile delivery to Jakarta customers" },
              { src: kulionerDocs3, alt: "Kulioner branded packaging", caption: "Branded packaging for customer delight" },
            ].map((image, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-2/5">
                <div className="rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="p-4 bg-muted/80">
                    <p className="text-sm text-muted-foreground">{image.caption}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </motion.section>

      {/* Summary */}
      <section className="container mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Built on Lion Parcel's existing logistics infrastructure, Kulioner
            connected regional food artisans across Indonesia with Jakarta
            customers—without requiring vendors to change a single operational
            process. The result? Authentic local specialties traveling across
            islands with the same reliability as packages.
          </p>
        </motion.div>
      </section>

      {/* Metrics */}
      <section className="container mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-border pt-6"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <p className="text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* The Opportunity */}
      <section className="container mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            The Opportunity
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-8">
            The hidden marketplace in an existing network
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            Lion Parcel operated one of Indonesia's largest logistics networks,
            moving packages across Java, Sumatra, Kalimantan, Sulawesi, and
            beyond. The infrastructure existed. The customer base existed—300,000+
            active users familiar with reliable cross-island shipping.
          </p>
          <p>
            But these customers only thought of Lion Parcel when they needed to
            send something, not when they wanted to buy something.
          </p>
          <p>
            Meanwhile, Indonesia's best food products remained trapped in their
            regions of origin. Fish Porridge from Pontianak that tourists rave
            about. Grilled Tuna from Manado that Jakartans remember from childhood
            visits. Bika Ambon from Medan that relatives bring back as gifts.
            These weren't common products you could find in Jakarta supermarkets,
            and existing food delivery platforms only served local restaurants.
          </p>
          <p>
            The gap wasn't logistics—Lion Parcel already moved packages between
            these cities daily. The gap was curation, trust, and product-market
            fit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-8 bg-muted/50 rounded-2xl max-w-3xl"
        >
          <h4 className="text-xl font-display font-bold mb-4">
            The constraint that became the insight:
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Traditional food vendors in regional cities couldn't be onboarded to
            complex merchant platforms. They didn't want to manage inventory
            systems or deal with commission structures. They had businesses that
            worked, serving local customers who walked in daily.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            But they had products Jakarta customers would pay for, if someone
            solved the distribution problem without disrupting their operations.
          </p>
          <p className="text-foreground font-medium mt-6">
            Lion Parcel's network could move the products. The question was: could
            we build a food marketplace that required zero operational changes
            from vendors?
          </p>
        </motion.div>
      </section>

      {/* The Solution */}
      <section className="container mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            The Solution
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-8">
            Building the marketplace layer on top of existing infrastructure
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl space-y-6 text-lg text-muted-foreground leading-relaxed mb-12"
        >
          <p>
            Rather than creating another merchant onboarding platform, Kulioner's
            approach eliminated the vendor-side technology entirely. The product
            strategy: we handle everything between the vendor's kitchen and the
            customer's door.
          </p>
        </motion.div>

        {/* Curation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="text-2xl font-display font-bold mb-4">
            Curation instead of onboarding
          </h4>
          <div className="max-w-3xl space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Instead of asking vendors to list products on an app, we did the
              sourcing ourselves. Traveled to Medan, Bali, Manado, Pontianak,
              Semarang—identified the local heroes whose products had genuine
              reputation in their home markets. The soup place that locals queue
              for. The beef curry vendor that's been in the family for three
              generations.
            </p>
            <p>
              These vendors didn't need to understand e-commerce. They just needed
              to keep making what they already made, and Lion Parcel would pick it
              up when orders came in.
            </p>
            <p>
              From the vendor's perspective, nothing changed. A courier showed up
              periodically with a pickup slip. They handed over packaged product.
              That was the entire integration.
            </p>
          </div>
        </motion.div>

        {/* Logistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="text-2xl font-display font-bold mb-4">
            Leveraging existing logistics without modification
          </h4>
          <div className="max-w-3xl space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Lion Parcel already had daily routes between major Indonesian
              cities. Kulioner orders simply became parcels in the existing flow.
              A Bika Ambon order from Medan to Jakarta followed the same route,
              handling procedures, and delivery SLAs as any other priority
              package.
            </p>
            <p>
              The entire operation used what already existed. Ice packs instead of
              cold chain infrastructure. High-density delivery zones instead of
              full network expansion. Extra income for existing drivers instead of
              a new fleet. Every constraint became a design decision. The product
              worked because it didn't ask Lion Parcel to become something it
              wasn't.
            </p>
            <p>
              This meant product selection had to account for shipping
              realities—shelf-stable foods, vacuum-sealed preparations, packaging
              that survived multi-points transit. But these weren't bugs, they
              were features.
            </p>
          </div>
        </motion.div>
      </section>

      {/* The Operational Insight */}
      <section className="container mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 bg-muted/50 rounded-2xl max-w-4xl"
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            The Operational Insight
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              300+ monthly orders sounds small compared to major e-commerce
              platforms. But that wasn't the point. The point was proving you
              could activate existing logistics users into marketplace behavior,
              curate regional products without vendor platform dependency, and
              deliver cross-island food orders through a parcel network.
            </p>
            <p>
              At that scale, every operational decision could be manual. Vendor
              sourcing was personal. Quality control was hands-on. Customer
              service could address every edge case individually.
            </p>
            <p className="text-foreground font-medium">
              The question wasn't "can this scale to millions of orders?" The
              question was "does this model work at all?" And at 300+ orders with
              18% user activation and 80+ SKUs across major islands, the answer
              was yes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Key Lessons */}
      <section className="container mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Key Lessons
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-12">
            What we learned
          </h3>
        </motion.div>

        <div className="space-y-8">
          {keyLessons.map((lesson, index) => (
            <motion.div
              key={lesson.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-border pt-8 max-w-3xl"
            >
              <div className="flex gap-6">
                <span className="text-3xl font-display font-bold text-muted-foreground/30">
                  {lesson.number}
                </span>
                <div>
                  <h4 className="text-xl font-display font-bold mb-3">
                    {lesson.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Back to Work */}
      <section className="container pb-20 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-border pt-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all work</span>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
