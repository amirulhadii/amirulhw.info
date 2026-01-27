import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MAX_QUESTION_LENGTH = 500;
const RATE_LIMIT_MAX_REQUESTS = 10; // 10 questions per hour
const RATE_LIMIT_WINDOW_MINUTES = 60;

// Simple hash function for anonymizing IP addresses
async function hashIP(ip: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(ip + "portfolio-salt-2026");
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.slice(0, 8).map(b => b.toString(16).padStart(2, "0")).join("");
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP from headers (Supabase/Cloudflare provide this)
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
      || req.headers.get('x-real-ip') 
      || 'unknown';

    console.log(`Request from IP: ${clientIP.substring(0, 8)}...`);

    // Parse request body
    const { question } = await req.json();

    // Server-side validation
    if (!question || typeof question !== 'string') {
      console.log('Invalid question: missing or not a string');
      return new Response(
        JSON.stringify({ error: 'Question is required and must be a string' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const trimmedQuestion = question.trim();

    if (trimmedQuestion.length === 0) {
      console.log('Invalid question: empty after trimming');
      return new Response(
        JSON.stringify({ error: 'Question cannot be empty' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (trimmedQuestion.length > MAX_QUESTION_LENGTH) {
      console.log(`Question too long: ${trimmedQuestion.length} chars`);
      return new Response(
        JSON.stringify({ error: `Question must be ${MAX_QUESTION_LENGTH} characters or less` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Hash the IP for privacy and rate limiting
    const hashedIP = await hashIP(clientIP);
    console.log(`Hashed IP: ${hashedIP}`);

    // Create Supabase client with service role for rate limit check
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Check rate limit using database function
    const { data: rateLimitResult, error: rateLimitError } = await supabaseAdmin
      .rpc('check_and_update_rate_limit', {
        p_ip_hash: hashedIP,
        p_max_requests: RATE_LIMIT_MAX_REQUESTS,
        p_window_minutes: RATE_LIMIT_WINDOW_MINUTES
      });

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError);
      // On error, allow the request but log the issue
    } else if (rateLimitResult === false) {
      console.log(`Rate limit exceeded for IP hash: ${hashedIP}`);
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Insert the question log
    const { error: insertError } = await supabaseAdmin
      .from('question_logs')
      .insert({
        question: trimmedQuestion,
        ip_address: hashedIP,
      });

    if (insertError) {
      console.error('Insert error:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to log question' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Question logged successfully');
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
