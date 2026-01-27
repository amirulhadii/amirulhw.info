-- Create a table to track rate limits by IP hash
CREATE TABLE public.rate_limits (
  ip_hash TEXT PRIMARY KEY,
  question_count INTEGER NOT NULL DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on rate_limits table
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- No public access to rate_limits table (only edge function with service role can access)
CREATE POLICY "No public access to rate limits"
ON public.rate_limits
FOR ALL
USING (false)
WITH CHECK (false);

-- Create a function to check and update rate limit (returns true if allowed)
CREATE OR REPLACE FUNCTION public.check_and_update_rate_limit(
  p_ip_hash TEXT,
  p_max_requests INTEGER DEFAULT 10,
  p_window_minutes INTEGER DEFAULT 60
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_current_count INTEGER;
  v_window_start TIMESTAMP WITH TIME ZONE;
  v_window_cutoff TIMESTAMP WITH TIME ZONE;
BEGIN
  v_window_cutoff := now() - (p_window_minutes || ' minutes')::INTERVAL;
  
  -- Try to get existing rate limit record
  SELECT question_count, window_start INTO v_current_count, v_window_start
  FROM rate_limits
  WHERE ip_hash = p_ip_hash;
  
  -- If no record exists, create one and allow
  IF v_current_count IS NULL THEN
    INSERT INTO rate_limits (ip_hash, question_count, window_start)
    VALUES (p_ip_hash, 1, now());
    RETURN TRUE;
  END IF;
  
  -- If window has expired, reset counter and allow
  IF v_window_start < v_window_cutoff THEN
    UPDATE rate_limits
    SET question_count = 1, window_start = now()
    WHERE ip_hash = p_ip_hash;
    RETURN TRUE;
  END IF;
  
  -- If within limit, increment and allow
  IF v_current_count < p_max_requests THEN
    UPDATE rate_limits
    SET question_count = question_count + 1
    WHERE ip_hash = p_ip_hash;
    RETURN TRUE;
  END IF;
  
  -- Rate limit exceeded
  RETURN FALSE;
END;
$$;