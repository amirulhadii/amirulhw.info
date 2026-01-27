import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, X, Loader2 } from "lucide-react";
import { resumeData } from "@/data/resumeData";
import { useQAResponses } from "@/hooks/useQAResponses";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface AskQuestionBarProps {
  onClose?: () => void;
}

const MAX_QUESTION_LENGTH = 500;
const SUBMIT_COOLDOWN_MS = 5000; // 5 seconds between submissions

// Simple hash function for anonymizing IP addresses (client-side)
async function hashIP(ip: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(ip + "portfolio-salt-2026");
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  // Return first 16 hex characters for anonymized storage
  return hashArray.slice(0, 8).map(b => b.toString(16).padStart(2, "0")).join("");
}

// Log question to database with hashed IP address
async function logQuestion(questionText: string) {
  try {
    // Get IP address from a public API
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipResponse.json();
    const ipAddress = ipData.ip || null;
    
    // Hash the IP for privacy protection
    const hashedIP = ipAddress ? await hashIP(ipAddress) : null;

    await supabase.from("question_logs").insert({
      question: questionText,
      ip_address: hashedIP,
    });
  } catch (error) {
    console.error("Failed to log question:", error);
  }
}

export function AskQuestionBar({ onClose }: AskQuestionBarProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const lastSubmitTimeRef = useRef<number>(0);
  const { findAnswer, isLoading: isLoadingResponses } = useQAResponses();
  const data = resumeData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuestion = question.trim();
    
    if (!trimmedQuestion) return;
    
    // Length validation
    if (trimmedQuestion.length > MAX_QUESTION_LENGTH) {
      toast({
        title: "Question too long",
        description: `Please keep your question under ${MAX_QUESTION_LENGTH} characters.`,
        variant: "destructive",
      });
      return;
    }
    
    // Rate limiting
    const now = Date.now();
    if (now - lastSubmitTimeRef.current < SUBMIT_COOLDOWN_MS) {
      toast({
        title: "Please wait",
        description: "You can submit another question in a few seconds.",
        variant: "destructive",
      });
      return;
    }
    lastSubmitTimeRef.current = now;
    
    setIsSearching(true);
    setAnswer(null);

    // Log the question to database (fire and forget)
    logQuestion(trimmedQuestion);

    // Simulate processing time for better UX
    setTimeout(() => {
      const result = findAnswer(question);
      if (result) {
        setAnswer(result);
      } else {
        // Fallback response
        setAnswer(
          `I don't have that specific detail, but ${data.personal.name} would be happy to discuss it directly.\n\n📧 Email: ${data.personal.email}\n📱 Phone: ${data.personal.phone}\n\nOr feel free to ask me about:\n• Work experience at ByteDance, Tokopedia, Lion Parcel\n• Skills, education, or certifications\n• Availability, relocation, or salary expectations`
        );
      }
      setIsSearching(false);
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
            disabled={isSearching || isLoadingResponses || !question.trim()}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
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
