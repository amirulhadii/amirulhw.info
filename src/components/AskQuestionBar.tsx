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
    if (q.includes("education") || q.includes("study") || q.includes("university") || q.includes("degree") || q.includes("school") || q.includes("college")) {
      const edu = data.education.map(e => `• ${e.degree} from ${e.institution} (${e.period})`).join("\n");
      return `Education:\n${edu}`;
    }

    // Current role / job
    if (q.includes("current") || (q.includes("work") && q.includes("now")) || q.includes("doing now")) {
      const current = data.experience[0];
      return `Currently, ${data.personal.name} is ${current.role} at ${current.company}. ${current.description}`;
    }

    // Experience / work history
    if (q.includes("experience") || q.includes("work") || q.includes("career") || q.includes("job")) {
      return `${data.personal.name} has 7+ years of product leadership experience:\n${data.experience.map(e => `• ${e.role} at ${e.company} (${e.period})`).join("\n")}`;
    }

    // ByteDance
    if (q.includes("bytedance") || q.includes("tiktok")) {
      const bd = data.experience.find(e => e.company === "ByteDance");
      if (bd) {
        return `At ByteDance (${bd.period}), ${data.personal.name} was ${bd.role}.\n\nKey achievements:\n${bd.highlights.map(h => `• ${h}`).join("\n")}`;
      }
    }

    // Tokopedia
    if (q.includes("tokopedia") || q.includes("goto")) {
      const tk = data.experience.find(e => e.company === "Tokopedia");
      if (tk) {
        return `At Tokopedia (${tk.period}), ${data.personal.name} was ${tk.role}.\n\nKey achievements:\n${tk.highlights.map(h => `• ${h}`).join("\n")}`;
      }
    }

    // Lion Parcel
    if (q.includes("lion") || q.includes("parcel") || q.includes("logistics")) {
      const lp = data.experience.find(e => e.company === "Lion Parcel");
      if (lp) {
        return `At Lion Parcel (${lp.period}), ${data.personal.name} is ${lp.role}.\n\nKey achievements:\n${lp.highlights.map(h => `• ${h}`).join("\n")}`;
      }
    }

    // Skills
    if (q.includes("skill") || q.includes("expertise") || q.includes("good at") || q.includes("specialize")) {
      return `Key skills and expertise:\n${data.skills.map(s => `• ${s}`).join("\n")}`;
    }

    // Certifications
    if (q.includes("certif") || q.includes("award") || q.includes("achievement") || q.includes("recognition")) {
      return `Certifications & Achievements:\n${data.certifications.map(c => `• ${c}`).join("\n")}`;
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
    if (q.includes("metric") || q.includes("impact") || q.includes("result") || q.includes("growth") || q.includes("revenue")) {
      return `Key impact metrics:\n• 20% YoY channel revenue growth at Lion Parcel\n• 100K+ MAU and 150K+ monthly shipments managed\n• GMV lifts of 5-15% at ByteDance\n• ~20M daily visitors experience managed at Tokopedia\n• +15% paid orders with AR try-on feature\n• 3x revenue growth at Machine Vision Indonesia`;
    }

    // Generic fallback - search for keywords in content
    const keywords = q.split(" ").filter(w => w.length > 3);
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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
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
            placeholder="Got a question? Ask about experience, skills, education..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
          />
          {question && (
            <button
              type="button"
              onClick={clearAnswer}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>

      <AnimatePresence>
        {answer && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border"
          >
            <div className="p-4 bg-secondary/30">
              <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                Answer
              </p>
              <p className="text-foreground whitespace-pre-line leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
