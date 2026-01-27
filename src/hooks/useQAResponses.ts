import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface QAResponse {
  id: string;
  keywords: string[];
  answer: string;
  priority: number;
}

export function useQAResponses() {
  const [responses, setResponses] = useState<QAResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchResponses() {
      const { data, error } = await supabase
        .from("qa_responses")
        .select("id, keywords, answer, priority")
        .order("priority", { ascending: false });

      if (error) {
        console.error("Error fetching Q&A responses:", error);
      } else {
        setResponses(data || []);
      }
      setIsLoading(false);
    }

    fetchResponses();
  }, []);

  const findAnswer = (query: string): string | null => {
    const q = query.toLowerCase();

    // Find matching response based on keywords
    for (const response of responses) {
      for (const keyword of response.keywords) {
        if (q.includes(keyword.toLowerCase())) {
          return response.answer;
        }
      }
    }

    return null;
  };

  return { responses, isLoading, findAnswer };
}
