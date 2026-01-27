-- Add RLS policies to protect qa_responses from unauthorized writes
CREATE POLICY "No public inserts on Q&A responses"
ON public.qa_responses
FOR INSERT
WITH CHECK (false);

CREATE POLICY "No public updates on Q&A responses"
ON public.qa_responses
FOR UPDATE
USING (false);

CREATE POLICY "No public deletes on Q&A responses"
ON public.qa_responses
FOR DELETE
USING (false);

-- Add length constraint on question_logs to prevent storage abuse
ALTER TABLE public.question_logs
ADD CONSTRAINT question_length_check
CHECK (length(question) <= 500);