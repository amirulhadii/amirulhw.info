import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import tokopediaImg from "@/assets/portfolio-tokopedia.png";

const metrics = [
  { value: "+5.95%", label: "topline platform GMV" },
  { value: "+2.7%", label: "conversion to paid orders" },
  { value: "+13.3%", label: "click rate on promoted products" },
];

const keyLessons = [
  {
    number: "1",
    title: "End-to-end pricing consistency beats point optimization",
    description:
      "Fixing pricing at checkout wouldn't have worked if users saw different prices at discovery, PDP, and cart. Consistency across the entire funnel—from first impression to purchase—eliminated friction at every decision point.",
  },
  {
    number: "2",
    title: "Promotional complexity can coexist with simple UX",
    description:
      "More promotions increased GMV without hurting conversion—when the platform automated optimization across the entire journey instead of making users calculate best pricing at each step.",
  },
  {
    number: "3",
    title: "Behavioral data reveals hidden friction",
    description:
      "40%+ checkout back-navigation wasn't \"engagement\"—it was users struggling with product complexity. Metrics showed the problem; user research explained why.",
  },
  {
    number: "4",
    title: "Trust requires transparency",
    description:
      "Automated pricing only worked because users could see the breakdown. \"Best price\" claims without proof would have created skepticism, not confidence.",
  },
  {
    number: "5",
    title: "Default behavior drives adoption",
    description:
      "80%+ of users trusted automated pricing because it was the default, not an option buried in settings. Good defaults beat optional features.",
  },
];

const userJourneySteps = [
  "Browse products on homepage or search",
  "See a price (but is it the best price?)",
  "Click to product detail page",
  "See different price with some promotions shown",
  "Wonder if there are better vouchers available",
  "Navigate to promotions page to check",
  "Browse 15+ available vouchers",
  "Return to product page",
  "Add to cart, see price change again",
  "Proceed to checkout, notice different promotions could apply",
  "Back out to verify they're getting the best deal",
  "Either complete purchase frustrated, or abandon entirely",
];

const behavioralData = [
  { stat: "40%+", description: "of users navigated away from product or checkout pages to check for better promotions" },
  { stat: "3-5 min", description: "average increase in time-to-purchase when users manually searched for vouchers" },
  { stat: "20%+", description: "of users who checked promotions abandoned cart without completing purchase" },
  { stat: "30%+", description: "of buyers weren't confident they got the best deal—even after buying" },
];

export default function CaseStudyTokopedia() {
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
              How Tokopedia eliminated promo anxiety at checkout
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Converting browsers into buyers by automatically applying best available pricing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mb-16 md:mb-24"
      >
        <div className="rounded-2xl overflow-hidden bg-muted max-w-4xl">
          <img
            src={tokopediaImg}
            alt="Tokopedia Checkout Experience"
            className="w-full aspect-video object-cover"
          />
        </div>
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
            By automatically applying best available pricing, Tokopedia removed 
            the back-and-forth journey that killed conversions. The result? 
            Customers stopped second-guessing and started buying.
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
            The hidden tax of promotional complexity
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
            Tokopedia ran dozens of simultaneous promotions. Flash sales. Merchant 
            vouchers. Platform discounts. Cashback offers. Payment method bonuses. 
            Category-specific deals.
          </p>
          <p>
            For the business, this promotional diversity drove engagement and GMV. 
            For users, it created decision paralysis.
          </p>
        </motion.div>

        {/* User Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-8 bg-muted/50 rounded-2xl max-w-3xl"
        >
          <h4 className="text-xl font-display font-bold mb-6">
            The user journey looked like this:
          </h4>
          <ol className="space-y-3">
            {userJourneySteps.map((step, index) => (
              <li key={index} className="flex gap-4 text-muted-foreground">
                <span className="text-muted-foreground/50 font-mono text-sm w-6 shrink-0">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-foreground font-medium mt-8">
            The pricing changed at every step. What users saw on search results 
            didn't match the product page. What they saw on the product page didn't 
            match the cart. What they saw in the cart might not reflect all available promotions.
          </p>
        </motion.div>

        {/* Behavioral Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-3xl"
        >
          <h4 className="text-xl font-display font-bold mb-6">
            Behavioral data confirmed the problem:
          </h4>
          <div className="grid sm:grid-cols-2 gap-6">
            {behavioralData.map((item, index) => (
              <div key={index} className="border-l-2 border-border pl-4">
                <div className="text-2xl font-display font-bold text-foreground mb-1">
                  {item.stat}
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-3xl space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            The root cause wasn't that promotions existed. It was that the cognitive 
            burden of finding the optimal stack fell entirely on users.
          </p>
          <p>
            Tokopedia's promotional engine could calculate best pricing automatically. 
            But the product design required users to do the math themselves, hunt for 
            applicable vouchers, and hope they didn't miss something better.
          </p>
          <p className="text-foreground font-medium">
            Every second spent comparing vouchers was a second closer to cart abandonment.
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
            Automated best-price guarantee across the entire journey
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
            Rather than simplifying promotions (which would hurt GMV) or eliminating 
            choice (which would anger power users), the solution was to flip the 
            responsibility: make the platform show the best deal everywhere, not just at checkout.
          </p>
        </motion.div>

        {/* End-to-end pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="text-2xl font-display font-bold mb-4">
            End-to-end pricing transparency
          </h4>
          <div className="max-w-3xl space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Built a real-time pricing engine that calculated optimal pricing at 
              every touchpoint in the user journey:
            </p>
          </div>

          <div className="mt-8 space-y-6 max-w-3xl">
            <div className="p-6 bg-muted/50 rounded-xl">
              <h5 className="font-display font-bold mb-3">Discovery funnel (homepage, search, discovery pages)</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Products displayed with best available price already applied</li>
                <li>• No "base price" that would change later</li>
                <li>• Users saw actual purchase price from first impression</li>
              </ul>
            </div>

            <div className="p-6 bg-muted/50 rounded-xl">
              <h5 className="font-display font-bold mb-3">Product detail pages (PDP)</h5>
              <p className="text-muted-foreground mb-3">All applicable promotions pre-calculated and stacked automatically:</p>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Merchant vouchers</li>
                <li>• Platform-wide discounts</li>
                <li>• Payment method bonuses</li>
                <li>• Shipping promotions</li>
                <li>• Category flash sales</li>
                <li>• First-time buyer offers</li>
                <li>• Loyalty program benefits</li>
              </ul>
              <p className="text-muted-foreground mt-3">Pricing breakdown visible before adding to cart. No surprises between browsing and buying.</p>
            </div>

            <div className="p-6 bg-muted/50 rounded-xl">
              <h5 className="font-display font-bold mb-3">Cart and checkout</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Best price carried through seamlessly</li>
                <li>• All promotions automatically applied</li>
                <li>• Users saw consistent pricing from discovery to purchase</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 max-w-3xl">
            <p className="text-foreground font-medium">
              From the user's perspective: the price you see when you discover a product 
              is the price you pay. No hunting for vouchers. No back-and-forth navigation. 
              No "let me check if there's a better deal" anxiety.
            </p>
          </div>
        </motion.div>

        {/* Seamless pricing integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="text-2xl font-display font-bold mb-4">
            Seamless pricing integration
          </h4>
          <div className="max-w-3xl space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Instead of showing users 15 voucher options at checkout and asking them 
              to optimize, the system calculated the best combination at every step:
            </p>
            <ul className="space-y-2">
              <li>• <strong className="text-foreground">Homepage search results:</strong> best price displayed in grid view</li>
              <li>• <strong className="text-foreground">Product detail page:</strong> full breakdown of applied promotions</li>
              <li>• <strong className="text-foreground">Cart review:</strong> pricing confirmed with automatic application</li>
              <li>• <strong className="text-foreground">Checkout:</strong> final price matched what user saw from the beginning</li>
            </ul>
            <p>
              The psychological impact: users trusted the price at first glance. No need 
              to verify or second-guess. The platform had already done the optimization work.
            </p>
          </div>
        </motion.div>

        {/* Transparent pricing breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="text-2xl font-display font-bold mb-4">
            Transparent pricing breakdown
          </h4>
          <div className="max-w-3xl space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Users still saw exactly which promotions they were receiving, maintaining 
              trust and preventing "black box" anxiety. The breakdown appeared as:
            </p>
          </div>

          <div className="mt-6 p-6 bg-muted/80 rounded-xl max-w-md font-mono text-sm">
            <div className="space-y-1 text-muted-foreground">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>Rp 150,000</span>
              </div>
              <div className="flex justify-between text-green-600 dark:text-green-400">
                <span>- Platform Voucher 10%:</span>
                <span>-Rp 15,000</span>
              </div>
              <div className="flex justify-between text-green-600 dark:text-green-400">
                <span>- Payment Cashback 5%:</span>
                <span>-Rp 7,500</span>
              </div>
              <div className="flex justify-between text-green-600 dark:text-green-400">
                <span>- Free Shipping:</span>
                <span>-Rp 12,000</span>
              </div>
              <div className="border-t border-border my-2"></div>
              <div className="flex justify-between font-bold text-foreground">
                <span>Total:</span>
                <span>Rp 115,500</span>
              </div>
            </div>
          </div>

          <div className="mt-6 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              If users wanted to manually override (swap vouchers, try different payment 
              methods), the option remained available. But the default behavior was 
              "best price, automatically applied."
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
