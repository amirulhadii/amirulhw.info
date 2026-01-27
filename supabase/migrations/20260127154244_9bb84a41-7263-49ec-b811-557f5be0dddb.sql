-- Create table for Q&A pairs
CREATE TABLE public.qa_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  keywords TEXT[] NOT NULL,
  answer TEXT NOT NULL,
  priority INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.qa_responses ENABLE ROW LEVEL SECURITY;

-- Allow public read access (no auth required for portfolio site)
CREATE POLICY "Anyone can read Q&A responses"
ON public.qa_responses
FOR SELECT
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_qa_responses_updated_at
BEFORE UPDATE ON public.qa_responses
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert all the Q&A data from the hardcoded responses
INSERT INTO public.qa_responses (keywords, answer, priority) VALUES
-- Relocation
(ARRAY['relocation', 'relocate', 'move', 'country', 'countries', 'location preference'], 
'Yes, absolutely. My primary targets are UK, Europe (particularly Netherlands, Germany, France), broader EMEA region, and Singapore. I completed my Master''s at Imperial College London, so I''m familiar with the UK environment.

That said, I''m open to discussing opportunities in other regions as well—what matters most is working with companies where technology drives the core business, not just supports it.', 10),

-- Notice period
(ARRAY['notice period', 'notice', 'when can you start', 'start date', 'availability'],
'45 days minimum, plus visa processing requirements. I hold Indonesian citizenship, so I''ll need visa sponsorship for international roles.

Happy to coordinate timeline expectations once we align on the opportunity—I understand hiring teams need clarity on start dates, so I''m flexible on working through visa logistics efficiently.', 10),

-- Salary
(ARRAY['salary', 'compensation', 'pay', 'expected range'],
'I''m open to negotiation based on the scope of the role, company stage, and responsibilities involved. However, I''m more focused on finding the right company fit than hitting a specific number.

What''s most important to me is joining a company where technology is the main revenue driver, with clear growth trajectory and ownership over meaningful product areas.', 10),

-- Biggest achievement
(ARRAY['biggest', 'achievement', 'proud', 'best product', 'greatest'],
'Kulioner—turning Lion Parcel''s logistics network into a food marketplace.

The challenge: Traditional food vendors in regional Indonesia don''t use apps, can''t manage inventory systems, don''t want commission structures. But they make products Jakarta customers would pay for.

The insight: Lion Parcel already moved packages between cities daily. Could we turn parcels into products?

Results within first quarter:
• 300+ monthly orders from 100K user base (16% new user activation)
• 80+ SKUs across 5 major Indonesian islands
• 98% operational performance
• Proved logistics assets could support commerce without new infrastructure

This wasn''t about scale—it was about proving a model. Most PMs optimize existing products. I built a new business model by seeing what existing assets could do if you asked a different question.', 10),

-- Remote/international teams
(ARRAY['remote', 'international team', 'distributed', 'timezone', 'time zone'],
'Yes, extensively at ByteDance. I managed product workstreams with mainland China engineering teams and UK-based stakeholders, often across 5-7 hour time zone differences.

I learned that distributed teams require over-communication and clear ownership boundaries. I built systems: detailed PRDs, recorded decision logs, async updates via Slack/Lark, and strategic use of overlap hours for critical discussions.

The result: we shipped major integration milestones for Tokopedia × TikTok Shop merger without geographic friction becoming a blocker.', 10),

-- Why leaving
(ARRAY['why leaving', 'why leave', 'why left', 'leaving your', 'looking for new', 'change job'],
'I''m looking to deepen my impact at a company where technology is the main revenue driver, not an enabler.

At Lion Parcel, technology supports the core business—logistics operations. Product decisions are often constrained by operational realities. It''s valuable work, but the leverage is limited.

I want to work somewhere technology IS the business. Where product decisions directly move revenue. Where experimentation can scale without physical constraints. Where I can own P&L and growth metrics end-to-end.

I joined Lion Parcel to prove I could operate in operationally-heavy environments and build 0-1 products in constrained conditions (Kulioner). I''ve done that. Now I''m ready to apply those skills where technology leverage is higher.', 10),

-- Team size/management
(ARRAY['team size', 'how many', 'manage', 'report', 'direct report', 'management style'],
'Direct reports: 2-7 PMs across different seniority levels (APM to Senior PM)

Cross-functional coordination: 30-50 people in a single tribe—engineers, data analysts, designers, business operations, marketing

Management style: I focus on outcomes, not output. I give PMs ownership over their domains with clear success metrics, then unblock them rather than micromanage.

The hardest part isn''t managing down—it''s managing up and across. Keeping execs informed without over-reporting. Negotiating engineering resources with peer PMs. Aligning marketing on launch timing. That''s where most PMs struggle, and it''s where I''ve built the most reps.', 10),

-- Product metrics
(ARRAY['metric', 'kpi', 'measure', 'success track'],
'Primary metrics: Conversion, retention, acquisition—ultimately driving GMV/revenue.

But specific metrics depend on product stage:

• For 0-1 launches (Kulioner, GoTo PLUS): Focus on activation and early retention. Unit economics can wait—first prove people want it.

• For growth optimization (Tokopedia, ByteDance): Conversion and revenue. A 2.7% conversion increase on 20M daily visitors is massive.

• For retention products (GoTo PLUS): Order frequency, LTV, churn.

I avoid vanity metrics. My mantra at ByteDance was: "If this metric improves 10%, can I walk into the VP''s office and say we made more money or kept more users?" If not, it''s not the right metric.', 10),

-- CV/Portfolio request
(ARRAY['cv', 'resume', 'portfolio', 'linkedin'],
'Yes—please email me at amirulhadiw@gmail.com and I''ll send over my complete CV.

You can also review my portfolio here on the site, or connect with me on LinkedIn to see recommendations from former managers and peers at ByteDance, Tokopedia, and Lion Parcel.

If you''re evaluating for a specific role, let me know the company and scope—I''m happy to tailor the conversation to what''s most relevant for your needs.', 10),

-- Visa/sponsorship
(ARRAY['visa', 'sponsorship', 'work permit', 'citizenship'],
'I hold Indonesian citizenship, so I''ll need visa sponsorship for international roles. I completed my Master''s at Imperial College London, so I''m familiar with UK visa processes.

My primary targets are UK, Europe (Netherlands, Germany, France), EMEA, and Singapore. I''m flexible on working through visa logistics efficiently and can coordinate timeline expectations once we align on the opportunity.', 10),

-- Name and contact
(ARRAY['name', 'who is', 'who are'],
'This is Amirul Hadi Wibowo, a Product Leader based in Jakarta, Indonesia. You can reach them at amirulhadiw@gmail.com.', 5),

-- Contact info
(ARRAY['contact', 'email', 'phone', 'reach'],
'You can contact Amirul Hadi Wibowo via:
• Email: amirulhadiw@gmail.com
• Phone: (+62) 878-5229-8982
• Website: https://amirulwibowo.my.canva.site/main', 5),

-- Location
(ARRAY['where', 'live', 'based', 'location'],
'Amirul Hadi Wibowo is based in Jakarta, Indonesia.', 5),

-- Education
(ARRAY['education', 'study', 'university', 'degree', 'school', 'college'],
'Education:
• Master of Science in Future Power Networks with Merit from Imperial College London (Nov 2019 – Nov 2020)
• Bachelor of Engineering with a GPA of 3.39/4.00 from Institut Teknologi Sepuluh Nopember (Sep 2014 – Aug 2018)', 5),

-- Current role
(ARRAY['current', 'work now', 'doing now'],
'Currently, Amirul Hadi Wibowo is Head of Product, Customer Apps at Lion Parcel. Part of Lion Air Group (Indonesia''s largest airline by market share), operating as a top-tier logistics player in Indonesia''s express delivery market.', 5),

-- Experience / work history
(ARRAY['experience', 'work', 'career', 'job'],
'Amirul Hadi Wibowo has 7+ years of product leadership experience:
• Head of Product, Customer Apps at Lion Parcel (Jul 2025 - Present)
• Product Manager, E-commerce Product Lead for Buyer Experience at ByteDance (Feb 2024 - Jul 2025)
• Product Manager → Product Lead - Product Detail Page & Restriction Engine at Tokopedia (Jun 2021 - Feb 2024)
• Chief Business Development Officer / Head of Digital Transformation at Machine Vision Indonesia (Jan 2020 – Mar 2021)', 5),

-- ByteDance
(ARRAY['bytedance', 'tiktok'],
'At ByteDance (Feb 2024 - Jul 2025), Amirul Hadi Wibowo was Product Manager, E-commerce Product Lead for Buyer Experience (~70% GMV share).

Key achievements:
• Led buyer transaction experience reporting to SEA VP Product, managing 2 PMs and coordinating 5+ Engineering, Design, and Data leaders
• Delivered GMV lifts of 5-15% through systematic experimentation and UX optimization', 5),

-- Tokopedia
(ARRAY['tokopedia', 'goto'],
'At Tokopedia (Jun 2021 - Feb 2024), Amirul Hadi Wibowo was Product Manager → Product Lead - Product Detail Page & Restriction Engine.

Key achievements:
• Managed buyer experience for ~20M daily visitors (team of 2 APMs, 35+ engineers/designers)
• Spearheaded Tokopedia''s first AR virtual try-on for cosmetics, driving +15% paid orders and +20% engagement
• Expanded Average Order Value +8% through modular basket-building experience
• Founded GoTo PLUS, Indonesia''s first cross-platform subscription (Tokopedia + Gojek), driving 7% MRR growth
• Advanced variant interaction +15% by redesigning PDP with direct thumbnail selection', 5),

-- Lion Parcel
(ARRAY['lion', 'parcel', 'logistics'],
'At Lion Parcel (Jul 2025 - Present), Amirul Hadi Wibowo is Head of Product, Customer Apps.

Key achievements:
• Directed multi-platform customer app product (3 PMs, 2 BDs) with CEO visibility, serving 100K+ MAU and 150K+ monthly shipments
• Drove 20% YoY channel revenue growth through 13% power user expansion
• Operated 0-1 launch of Kulioner, Indonesia''s first same-day inter-island food delivery service
• Reduced in-app conversion friction by 16-33% through systematic AB testing and UX optimization
• Scaling informal commerce platform from 100K to 300K orders/month using NLP-powered WhatsApp automation', 5),

-- Skills
(ARRAY['skill', 'expertise', 'good at', 'specialize'],
'Key skills and expertise:
• Product Strategy
• 0-1 Product Launch
• E-commerce
• Logistics
• AI/ML Implementation
• Growth & Retention
• A/B Testing
• Cross-functional Leadership
• UX Optimization
• Data-driven Decision Making', 5),

-- Certifications
(ARRAY['certif', 'award', 'achievement', 'recognition'],
'Certifications & Achievements:
• Consulting Leadership Development Program by McKinsey & Company - 2024
• Top Performers Award Bytedance SEA Product - 2024
• Professional Scrum Product Owner I (PSPO I) from Scrum.org - 2023
• Employee award "Growth Mindset" of Tokopedia - 2022, 2023
• Master''s degree scholarship from Indonesia Endowment Fund (LPDP) - 2018', 5),

-- Summary / about
(ARRAY['about', 'summary', 'tell me about', 'background'],
'I''m Amirul, a product leader and engineer who builds things that move metrics and matter to users.

Over 7 years, I''ve scaled a bootstrapped B2B SaaS to 3x revenue, increased e-commerce conversion by 10% across 20M+ users, and currently a Head of Product at Lion Parcel, solving revenue generation challenges in Southeast Asia''s logistics industry.

Beyond my full-time work, I''ve helped over 5+ companies launch products as an Indie CPO and shared insights on product leadership at Bytedance, Grab, and Telkomsel, among others.

I build products that work in the real world, where user behavior doesn''t follow common playbooks.', 5),

-- AI / ML
(ARRAY['ai', 'machine learning', 'ml', 'automation'],
'Amirul Hadi Wibowo has significant AI/ML experience:
• NLP-powered WhatsApp commerce automation at Lion Parcel
• AI-powered retention optimization driving 20% YoY revenue growth
• AR virtual try-on implementation at Tokopedia
• Industrial AI solutions at Machine Vision Indonesia', 5),

-- Products launched
(ARRAY['launch', 'product', 'build', 'create'],
'Notable 0-1 product launches:
• Kulioner: Indonesia''s first same-day inter-island food delivery (Lion Parcel)
• GoTo PLUS: Indonesia''s first cross-platform subscription (Tokopedia + Gojek)
• AR virtual try-on for cosmetics (Tokopedia)
• Indonesia''s first AR/VR learning management system (Machine Vision)', 5),

-- Leadership
(ARRAY['lead', 'manage', 'team'],
'Leadership experience:
• Currently directing 3 PMs and 2 BDs at Lion Parcel with CEO visibility
• Led buyer transaction experience at ByteDance, managing 2 PMs and 5+ cross-functional leaders
• Managed team of 2 APMs and 35+ engineers/designers at Tokopedia
• Scaled Machine Vision Indonesia from 10 to 25+ employees', 5),

-- Metrics / impact
(ARRAY['metric', 'impact', 'result', 'growth', 'revenue'],
'Key impact metrics:
• 20% YoY channel revenue growth at Lion Parcel
• 100K+ MAU and 150K+ monthly shipments managed
• GMV lifts of 5-15% at ByteDance
• ~20M daily visitors experience managed at Tokopedia
• +15% paid orders with AR try-on feature
• 3x revenue growth at Machine Vision Indonesia', 5);