import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import gotoplusImg from "@/assets/portfolio-gotoplus.png";

const metrics = [
  { value: "200K", label: "subscribers within MVP period" },
  { value: "+33%", label: "orders per subscriber (P50)" },
  { value: "+7%", label: "monthly recurring revenue" },
];

const keyLessons = [
  {
    number: "01",
    title: "Market-specific design beats copying proven models",
    description:
      "Amazon Prime's model wouldn't work in Indonesia without adaptation. Lower price point, partner benefits over content streaming, and explicit MVP discounting to prove value before charging full price.",
  },
  {
    number: "02",
    title: "Retention metrics matter more than acquisition metrics",
    description:
      "+33% order frequency and +23.5% TIV per user meant each subscriber was worth significantly more lifetime value. That justified higher CAC and proved unit economics at scale.",
  },
  {
    number: "03",
    title: "Geographic constraints enable operational quality",
    description:
      "Limiting to Java initially meant GoTo could actually deliver on fast shipping promises. Better to succeed in controlled rollout than fail nationally with inconsistent experience.",
  },
  {
    number: "04",
    title: "Behavioral data reveals product-market fit segments",
    description:
      "Female users with daily staples category located on dense urban areas showed strongest engagement. This informed expansion strategy: double down on segments with proven retention before broad rollout.",
  },
  {
    number: "05",
    title: "Subscription revenue creates competitive moats",
    description:
      "Recurring revenue funded better partner deals and logistics investments. Competitors without subscription base couldn't match benefit depth, creating defensible differentiation beyond price competition.",
  },
];

const marketChallenges = [
  "Low credit card penetration (most transactions via e-wallets or bank transfer)",
  "Price sensitivity—users wouldn't pay for \"premium\" features without clear value",
  "Cultural skepticism of subscriptions (why pay monthly when you can shop for free?)",
  "Logistics infrastructure varied wildly—promising reliable shipping was risky",
];

const businessCase = [
  "Lock in high-frequency buyers through shipping benefits",
  "Create a new revenue stream beyond transaction fees",
  "Increase order frequency through lower barriers (free shipping, lower minimums)",
  "Build exclusive partner ecosystem that competitors couldn't easily replicate",
];

const partnerBenefits = [
  "Medicine discounts on Halodoc & Tokopedia Sehat",
  "Vidio vouchers during Football World Cup '22",
  "Cashback coupons from Tokopedia NOW!",
  "Priority customer support",
  "Upcoming travel & entertainment deals (OYO, etc.)",
];

export default function CaseStudyGotoPlus() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-20">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4">
            <span className="text-5xl md:text-6xl font-display font-bold text-muted-foreground/30">
              03
            </span>
            <div className="w-12 h-0.5 bg-foreground mt-2" />
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 max-w-4xl">
            How GoTo PLUS created Indonesia's first e-commerce subscription, turning casual buyers into power users
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Built as Indonesia's first monthly subscription for e-commerce, GoTo PLUS transformed one-time shoppers into high-frequency buyers through shipping benefits and exclusive perks. The result? Measurably higher engagement, more orders, and a new revenue stream.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="overflow-hidden rounded-2xl bg-muted">
            <img
              src={gotoplusImg}
              alt="GoTo PLUS Interface"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <div className="text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* The Opportunity Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
            The Opportunity
          </h2>
          <p className="text-lg text-accent mb-8">
            Building loyalty in a price-sensitive, low-frequency market
          </p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Indonesian e-commerce faced a structural problem: customers shopped infrequently and switched platforms constantly based on promotions. The average user purchased 2-3 times per month across multiple platforms. Brand loyalty was weak. Customer acquisition costs were high. Retention mechanics barely existed.
            </p>
            <p>
              Meanwhile, subscription models had proven successful in Western markets (eg. Amazon Prime), where membership programs converted casual shoppers into loyal customers. But Indonesia presented unique challenges:
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {marketChallenges.map((challenge, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="text-accent font-bold">{index + 1}.</span>
                <span>{challenge}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-muted/50 rounded-xl">
            <h3 className="font-display font-bold text-foreground mb-4">
              The business case:
            </h3>
            <p className="text-muted-foreground mb-4">
              GoTo's platform had high-value users who ordered frequently, but even these power users split purchases across competitors. If we could build a subscription that made sense economically and culturally, we could:
            </p>
            <div className="space-y-2">
              {businessCase.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-accent font-bold">{index + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 border border-border rounded-xl">
            <p className="text-lg text-foreground italic">
              The question: could we design a subscription valuable enough that Indonesians would pay monthly, in a market where "free" was the expectation?
            </p>
          </div>
        </motion.div>

        {/* The Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
            The Solution
          </h2>
          <p className="text-lg text-accent mb-8">
            Subscription mechanics designed for Indonesian market behavior
          </p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Rather than copying Western subscription models, GoTo PLUS was built around what actually drove purchase decisions in Indonesia: shipping costs and exclusive access.
            </p>
          </div>

          {/* Core Value Proposition */}
          <div className="mt-10 space-y-8">
            <div className="p-6 bg-muted/50 rounded-xl">
              <h3 className="font-display font-bold text-foreground mb-2">
                Core value proposition: Remove friction from frequent ordering
              </h3>
              <p className="text-muted-foreground mb-4">
                The primary barrier to higher order frequency wasn't product selection—it was the cost and uncertainty of shipping. Free shipping promotions drove massive spikes in orders, but users waited for deals rather than buying when they needed something.
              </p>
              <p className="text-foreground font-medium">
                GoTo PLUS flipped the model:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-xl">
                <h4 className="font-display font-bold text-foreground mb-4">
                  Unlimited free and fast shipping
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Free same-day delivery option (up to 30K subsidy per order)</li>
                  <li>• Lower minimum purchase threshold (25K instead of typical 50-100K)</li>
                  <li>• No calculating "am I buying enough to qualify for free shipping?"</li>
                </ul>
                <p className="mt-4 text-sm text-accent">
                  This removed the mental math that delayed purchases. Need something? Just buy it. No threshold optimization.
                </p>
              </div>

              <div className="p-6 border border-border rounded-xl">
                <h4 className="font-display font-bold text-foreground mb-4">
                  Exclusive partner benefits
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  {partnerBenefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-accent">
                  PLUS members get access to deals non-members can't see. This created FOMO-driven adoption beyond pure shipping economics.
                </p>
              </div>
            </div>

            {/* Pricing Strategy */}
            <div className="p-6 bg-muted/50 rounded-xl">
              <h3 className="font-display font-bold text-foreground mb-4">
                Pricing strategy: Prove value before asking full price
              </h3>
              <p className="text-muted-foreground mb-4">
                MVP launched at 50% discount—IDR 150K for 6 months (roughly $10 USD). This wasn't the target price; it was a prove-the-value-prop phase.
              </p>
              <p className="text-foreground">
                <strong>The bet:</strong> if users experienced the benefits for 6 months at discount, they'd convert to full-price subscriptions once they saw behavioral change (ordering more frequently, saving on shipping).
              </p>
            </div>

            {/* MVP Scope */}
            <div className="p-6 border border-border rounded-xl">
              <h3 className="font-display font-bold text-foreground mb-4">
                MVP scope: Java island only
              </h3>
              <p className="text-muted-foreground mb-4">
                Limited geographic rollout to Java where GoTo's logistics density was highest. This ensured we could actually deliver on "fast, reliable shipping" promises. Better to prove model in controlled environment than over-promise nationally and fail.
              </p>
              <p className="text-muted-foreground">
                All high-value sellers (Brand Official stores) in Java were auto-enrolled—their products appeared in PLUS-exclusive deals without requiring merchant onboarding. This gave immediate catalog depth.
              </p>
            </div>

            {/* Behavioral Design */}
            <div className="p-6 bg-accent/10 rounded-xl">
              <h3 className="font-display font-bold text-foreground mb-4">
                Behavioral design: Make subscription invisible after signup
              </h3>
              <p className="text-muted-foreground">
                Once subscribed, the product just worked. Free shipping applied automatically. Exclusive deals surfaced in search. Partner benefits appeared when relevant.
              </p>
              <p className="text-foreground mt-4 font-medium">
                No monthly decisions. No "am I using this enough?" anxiety. The product removed friction, then got out of the way.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Lessons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
            Key Lessons
          </h2>

          <div className="space-y-6">
            {keyLessons.map((lesson, index) => (
              <motion.div
                key={lesson.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-6 bg-muted/30 rounded-xl"
              >
                <span className="text-3xl font-display font-bold text-muted-foreground/50">
                  {lesson.number}
                </span>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-2">
                    {lesson.title}
                  </h3>
                  <p className="text-muted-foreground">{lesson.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back to Work Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-border pt-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all work</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
