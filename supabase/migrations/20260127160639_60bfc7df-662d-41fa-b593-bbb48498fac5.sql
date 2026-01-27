-- Create table to log Q&A questions
CREATE TABLE public.question_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.question_logs ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (anyone can submit questions)
CREATE POLICY "Anyone can insert question logs"
  ON public.question_logs
  FOR INSERT
  WITH CHECK (true);

-- Deny public reads (only you can view logs via backend)
CREATE POLICY "No public reads"
  ON public.question_logs
  FOR SELECT
  USING (false);