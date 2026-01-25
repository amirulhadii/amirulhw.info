import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, X, Loader2 } from "lucide-react";
import { getResumeTextContent, resumeData } from "@/data/resumeData";
interface AskQuestionBarProps {
  onClose?: () => void;
}
export function AskQuestionBar({ onClose }: AskQuestionBarProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const findAnswer = (query: string): string => {
    const q = query.toLowerCase();
    const data = resumeData;
    const content = getResumeTextContent().toLowerCase();

    // HR/Recruiter Questions

    // Relocation
    if (q.includes("relocation") || q.includes("relocate") || q.includes("move") || q.includes("country") || q.includes("countries") || q.includes("location preference")) {
      return `Yes, absolutely. My primary targets are UK, Europe (particularly Netherlands, Germany, France), broader EMEA region, and Singapore. I completed my Master's at Imperial College London, so I'm familiar with the UK environment.\n\nThat said, I'm open to discussing opportunities in other regions as well—what matters most is working with companies where technology drives the core business, not just supports it.`;
    }

    // Notice period
    if (q.includes("notice period") || q.includes("notice") || q.includes("when can you start") || q.includes("start date") || q.includes("availability")) {
      return `45 days minimum, plus visa processing requirements. I hold Indonesian citizenship, so I'll need visa sponsorship for international roles.\n\nHappy to coordinate timeline expectations once we align on the opportunity—I understand hiring teams need clarity on start dates, so I'm flexible on working through visa logistics efficiently.`;
    }

    // Salary
    if (q.includes("salary") || q.includes("compensation") || q.includes("pay") || q.includes("expected") && q.includes("range")) {
      return `I'm open to negotiation based on the scope of the role, company stage, and responsibilities involved. However, I'm more focused on finding the right company fit than hitting a specific number.\n\nWhat's most important to me is joining a company where technology is the main revenue driver, with clear growth trajectory and ownership over meaningful product areas.`;
    }

    // Biggest achievement
    if (q.includes("biggest") || q.includes("achievement") || q.includes("proud") || q.includes("best product") || q.includes("greatest")) {
      return `Kulioner—turning Lion Parcel's logistics network into a food marketplace.\n\nThe challenge: Traditional food vendors in regional Indonesia don't use apps, can't manage inventory systems, don't want commission structures. But they make products Jakarta customers would pay for.\n\nThe insight: Lion Parcel already moved packages between cities daily. Could we turn parcels into products?\n\nResults within first quarter:\n• 300+ monthly orders from 100K user base (16% new user activation)\n• 80+ SKUs across 5 major Indonesian islands\n• 98% operational performance\n• Proved logistics assets could support commerce without new infrastructure\n\nThis wasn't about scale—it was about proving a model. Most PMs optimize existing products. I built a new business model by seeing what existing assets could do if you asked a different question.`;
    }

    // Remote/international teams
    if (q.includes("remote") || q.includes("international team") || q.includes("distributed") || q.includes("timezone") || q.includes("time zone")) {
      return `Yes, extensively at ByteDance. I managed product workstreams with mainland China engineering teams and UK-based stakeholders, often across 5-7 hour time zone differences.\n\nI learned that distributed teams require over-communication and clear ownership boundaries. I built systems: detailed PRDs, recorded decision logs, async updates via Slack/Lark, and strategic use of overlap hours for critical discussions.\n\nThe result: we shipped major integration milestones for Tokopedia × TikTok Shop merger without geographic friction becoming a blocker.`;
    }

    // Why leaving
    if (q.includes("why leaving") || q.includes("why leave") || q.includes("why left") || q.includes("leaving your") || q.includes("looking for new") || q.includes("change job")) {
      return `I'm looking to deepen my impact at a company where technology is the main revenue driver, not an enabler.\n\nAt Lion Parcel, technology supports the core business—logistics operations. Product decisions are often constrained by operational realities. It's valuable work, but the leverage is limited.\n\nI want to work somewhere technology IS the business. Where product decisions directly move revenue. Where experimentation can scale without physical constraints. Where I can own P&L and growth metrics end-to-end.\n\nI joined Lion Parcel to prove I could operate in operationally-heavy environments and build 0-1 products in constrained conditions (Kulioner). I've done that. Now I'm ready to apply those skills where technology leverage is higher.`;
    }

    // Team size/management
    if (q.includes("team size") || q.includes("how many") && (q.includes("manage") || q.includes("report")) || q.includes("direct report") || q.includes("management style")) {
      return `Direct reports: 2-7 PMs across different seniority levels (APM to Senior PM)\n\nCross-functional coordination: 30-50 people in a single tribe—engineers, data analysts, designers, business operations, marketing\n\nManagement style: I focus on outcomes, not output. I give PMs ownership over their domains with clear success metrics, then unblock them rather than micromanage.\n\nThe hardest part isn't managing down—it's managing up and across. Keeping execs informed without over-reporting. Negotiating engineering resources with peer PMs. Aligning marketing on launch timing. That's where most PMs struggle, and it's where I've built the most reps.`;
    }

    // Product metrics
    if (q.includes("metric") || q.includes("kpi") || q.includes("measure") || q.includes("success") && q.includes("track")) {
      return `Primary metrics: Conversion, retention, acquisition—ultimately driving GMV/revenue.\n\nBut specific metrics depend on product stage:\n\n• For 0-1 launches (Kulioner, GoTo PLUS): Focus on activation and early retention. Unit economics can wait—first prove people want it.\n\n• For growth optimization (Tokopedia, ByteDance): Conversion and revenue. A 2.7% conversion increase on 20M daily visitors is massive.\n\n• For retention products (GoTo PLUS): Order frequency, LTV, churn.\n\nI avoid vanity metrics. My mantra at ByteDance was: "If this metric improves 10%, can I walk into the VP's office and say we made more money or kept more users?" If not, it's not the right metric.`;
    }

    // CV/Portfolio request
    if (q.includes("cv") || q.includes("resume") || q.includes("portfolio") || q.includes("linkedin")) {
      return `Yes—please email me at ${data.personal.email} and I'll send over my complete CV.\n\nYou can also review my portfolio here on the site, or connect with me on LinkedIn to see recommendations from former managers and peers at ByteDance, Tokopedia, and Lion Parcel.\n\nIf you're evaluating for a specific role, let me know the company and scope—I'm happy to tailor the conversation to what's most relevant for your needs.`;
    }

    // Visa/sponsorship
    if (q.includes("visa") || q.includes("sponsorship") || q.includes("work permit") || q.includes("citizenship")) {
      return `I hold Indonesian citizenship, so I'll need visa sponsorship for international roles. I completed my Master's at Imperial College London, so I'm familiar with UK visa processes.\n\nMy primary targets are UK, Europe (Netherlands, Germany, France), EMEA, and Singapore. I'm flexible on working through visa logistics efficiently and can coordinate timeline expectations once we align on the opportunity.`;
    }

    // Name and contact
    if (q.includes("name") || q.includes("who is") || q.includes("who are")) {
      return `This is ${data.personal.name}, a Product Leader based in ${data.personal.location}. You can reach them at ${data.personal.email}.`;
    }

    // Contact info
    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach")) {
      return `You can contact ${data.personal.name} via:\n• Email: ${data.personal.email}\n• Phone: ${data.personal.phone}\n• Website: ${data.personal.website}`;
    }

    // Location
    if (q.includes("where") && (q.includes("live") || q.includes("based") || q.includes("location"))) {
      return `${data.personal.name} is based in ${data.personal.location}.`;
    }

    // Education
    if (
      q.includes("education") ||
      q.includes("study") ||
      q.includes("university") ||
      q.includes("degree") ||
      q.includes("school") ||
      q.includes("college")
    ) {
      const edu = data.education.map((e) => `• ${e.degree} from ${e.institution} (${e.period})`).join("\n");
      return `Education:\n${edu}`;
    }

    // Current role / job
    if (q.includes("current") || (q.includes("work") && q.includes("now")) || q.includes("doing now")) {
      const current = data.experience[0];
      return `Currently, ${data.personal.name} is ${current.role} at ${current.company}. ${current.description}`;
    }

    // Experience / work history
    if (q.includes("experience") || q.includes("work") || q.includes("career") || q.includes("job")) {
      return `${data.personal.name} has 7+ years of product leadership experience:\n${data.experience.map((e) => `• ${e.role} at ${e.company} (${e.period})`).join("\n")}`;
    }

    // ByteDance
    if (q.includes("bytedance") || q.includes("tiktok")) {
      const bd = data.experience.find((e) => e.company === "ByteDance");
      if (bd) {
        return `At ByteDance (${bd.period}), ${data.personal.name} was ${bd.role}.\n\nKey achievements:\n${bd.highlights.map((h) => `• ${h}`).join("\n")}`;
      }
    }

    // Tokopedia
    if (q.includes("tokopedia") || q.includes("goto")) {
      const tk = data.experience.find((e) => e.company === "Tokopedia");
      if (tk) {
        return `At Tokopedia (${tk.period}), ${data.personal.name} was ${tk.role}.\n\nKey achievements:\n${tk.highlights.map((h) => `• ${h}`).join("\n")}`;
      }
    }

    // Lion Parcel
    if (q.includes("lion") || q.includes("parcel") || q.includes("logistics")) {
      const lp = data.experience.find((e) => e.company === "Lion Parcel");
      if (lp) {
        return `At Lion Parcel (${lp.period}), ${data.personal.name} is ${lp.role}.\n\nKey achievements:\n${lp.highlights.map((h) => `• ${h}`).join("\n")}`;
      }
    }

    // Skills
    if (q.includes("skill") || q.includes("expertise") || q.includes("good at") || q.includes("specialize")) {
      return `Key skills and expertise:\n${data.skills.map((s) => `• ${s}`).join("\n")}`;
    }

    // Certifications
    if (q.includes("certif") || q.includes("award") || q.includes("achievement") || q.includes("recognition")) {
      return `Certifications & Achievements:\n${data.certifications.map((c) => `• ${c}`).join("\n")}`;
    }

    // Summary / about
    if (q.includes("about") || q.includes("summary") || q.includes("tell me about") || q.includes("background")) {
      return data.summary;
    }

    // AI / ML
    if (q.includes("ai") || q.includes("machine learning") || q.includes("ml") || q.includes("automation")) {
      return `${data.personal.name} has significant AI/ML experience:\n• NLP-powered WhatsApp commerce automation at Lion Parcel\n• AI-powered retention optimization driving 20% YoY revenue growth\n• AR virtual try-on implementation at Tokopedia\n• Industrial AI solutions at Machine Vision Indonesia`;
    }

    // Products launched
    if (q.includes("launch") || q.includes("product") || q.includes("build") || q.includes("create")) {
      return `Notable 0-1 product launches:\n• Kulioner: Indonesia's first same-day inter-island food delivery (Lion Parcel)\n• GoTo PLUS: Indonesia's first cross-platform subscription (Tokopedia + Gojek)\n• AR virtual try-on for cosmetics (Tokopedia)\n• Indonesia's first AR/VR learning management system (Machine Vision)`;
    }

    // Leadership
    if (q.includes("lead") || q.includes("manage") || q.includes("team")) {
      return `Leadership experience:\n• Currently directing 3 PMs and 2 BDs at Lion Parcel with CEO visibility\n• Led buyer transaction experience at ByteDance, managing 2 PMs and 5+ cross-functional leaders\n• Managed team of 2 APMs and 35+ engineers/designers at Tokopedia\n• Scaled Machine Vision Indonesia from 10 to 25+ employees`;
    }

    // Metrics / impact
    if (
      q.includes("metric") ||
      q.includes("impact") ||
      q.includes("result") ||
      q.includes("growth") ||
      q.includes("revenue")
    ) {
      return `Key impact metrics:\n• 20% YoY channel revenue growth at Lion Parcel\n• 100K+ MAU and 150K+ monthly shipments managed\n• GMV lifts of 5-15% at ByteDance\n• ~20M daily visitors experience managed at Tokopedia\n• +15% paid orders with AR try-on feature\n• 3x revenue growth at Machine Vision Indonesia`;
    }

    // Generic fallback - search for keywords in content
    const keywords = q.split(" ").filter((w) => w.length > 3);
    for (const keyword of keywords) {
      if (content.includes(keyword)) {
        if (q.includes("?") || q.includes("what") || q.includes("how") || q.includes("why") || q.includes("when")) {
          return `Based on the resume, ${data.personal.name} has experience related to "${keyword}". For more specific information, try asking about their work experience, skills, education, or specific companies they've worked at.`;
        }
      }
    }
    return `I couldn't find specific information about that. Try asking about:\n• Work experience & career history\n• Education background\n• Skills & expertise\n• Specific companies (ByteDance, Tokopedia, Lion Parcel)\n• Achievements & certifications\n• Contact information`;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setIsLoading(true);
    setAnswer(null);

    // Simulate processing time for better UX
    setTimeout(() => {
      const result = findAnswer(question);
      setAnswer(result);
      setIsLoading(false);
    }, 600);
  };
  const clearAnswer = () => {
    setAnswer(null);
    setQuestion("");
  };
  return (
    <motion.div
      initial={{
        y: -20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="w-full bg-card shadow-elevated rounded-2xl overflow-hidden border border-border"
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center gap-3 p-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
            placeholder="30 seconds? Ask about my work"
          />
          {question && (
            <button type="button" onClick={clearAnswer} className="p-2 hover:bg-muted rounded-lg transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
          </button>
        </div>
      </form>

      <AnimatePresence>
        {answer && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="border-t border-border"
          >
            <div className="p-4 bg-secondary/30">
              <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                Answer
              </p>
              <p className="text-foreground whitespace-pre-line leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
