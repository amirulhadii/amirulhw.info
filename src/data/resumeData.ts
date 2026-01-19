export const resumeData = {
  personal: {
    name: "Amirul Hadi Wibowo",
    location: "Jakarta, Indonesia",
    phone: "(+62) 878-5229-8982",
    email: "amirulhadiw@gmail.com",
    website: "https://amirulwibowo.my.canva.site/main",
  },
  summary:
    "Welcome to my personal wall of progress.\n\nI'm Amirul, a product leader and engineer who builds things that move metrics and matter to users.\n\nOver 7 years, I've scaled a bootstrapped B2B SaaS to 3x revenue, increased e-commerce conversion by 10% across 20M+ users, and currently a Head of Product at Lion Parcel, solving revenue generation challenges in Southeast Asia's logistics industry.\n\nBeyond my full-time work, I've helped over 5+ companies launch products as an Indie CPO and shared insights on product leadership at Bytedance, Grab, and Telkomsel, among others.\n\nI build products that work in the real world, where user behavior doesn't follow common playbooks.",
  education: [
    {
      institution: "Imperial College London",
      location: "London, United Kingdom",
      degree: "Master of Science in Future Power Networks with Merit",
      period: "Nov 2019 – Nov 2020",
    },
    {
      institution: "Institut Teknologi Sepuluh Nopember",
      location: "Surabaya, Indonesia",
      degree: "Bachelor of Engineering with a GPA of 3.39/4.00",
      period: "Sep 2014 – Aug 2018",
    },
  ],
  experience: [
    {
      company: "Lion Parcel",
      region: "South East Asia (Indonesia, Malaysia)",
      period: "Jul 2025 - Present",
      description:
        "Part of Lion Air Group (Indonesia's largest airline by market share), operating as a top-tier logistics player in Indonesia's express delivery market.",
      role: "Head of Product, Customer Apps",
      highlights: [
        "Directed multi-platform customer app product (3 PMs, 2 BDs) with CEO visibility, serving 100K+ MAU and 150K+ monthly shipments",
        "Drove 20% YoY channel revenue growth through 13% power user expansion",
        "Operated 0-1 launch of Kulioner, Indonesia's first same-day inter-island food delivery service",
        "Reduced in-app conversion friction by 16-33% through systematic AB testing and UX optimization",
        "Scaling informal commerce platform from 100K to 300K orders/month using NLP-powered WhatsApp automation",
      ],
    },
    {
      company: "ByteDance",
      region: "South East Asia",
      period: "Feb 2024 - Jul 2025",
      description:
        "Part of the E-commerce SEA Product Team, overseeing Tokopedia and TikTok Shop operations.",
      role: "Product Manager, E-commerce Product Lead for Buyer Experience (~70% GMV share)",
      highlights: [
        "Led buyer transaction experience reporting to SEA VP Product, managing 2 PMs and coordinating 5+ Engineering, Design, and Data leaders",
        "Delivered GMV lifts of 5-15% through systematic experimentation and UX optimization",
      ],
    },
    {
      company: "Tokopedia",
      region: "Jakarta, Indonesia",
      period: "Jun 2021 - Feb 2024",
      description: "#1 e-commerce in Indonesia, part of the GoTo Group (IDX: GOTO)",
      role: "Product Manager → Product Lead - Product Detail Page & Restriction Engine",
      highlights: [
        "Managed buyer experience for ~20M daily visitors (team of 2 APMs, 35+ engineers/designers)",
        "Spearheaded Tokopedia's first AR virtual try-on for cosmetics, driving +15% paid orders and +20% engagement",
        "Expanded Average Order Value +8% through modular basket-building experience",
        "Founded GoTo PLUS, Indonesia's first cross-platform subscription (Tokopedia + Gojek), driving 7% MRR growth",
        "Advanced variant interaction +15% by redesigning PDP with direct thumbnail selection",
      ],
    },
    {
      company: "Machine Vision Indonesia",
      region: "Surabaya, Indonesia",
      period: "Jan 2020 – Mar 2021",
      description: "Industrial AI and AR/VR solutions startup",
      role: "Chief Business Development Officer / Head of Digital Transformation",
      highlights: [
        "Scaled founding team from 10 to 25+ employees and achieved 3x revenue growth",
        "Secured 5+ enterprise deals worth $100K in total project value",
        "ASEAN Global Startup Awards 2020 Finalist",
        "Pioneered Indonesia's first AR/VR learning management system for industrial training",
        "Secured Oculus Facebook partnership as Asia-Pacific Independent Software Vendor",
      ],
    },
  ],
  certifications: [
    "Consulting Leadership Development Program by McKinsey & Company - 2024",
    "Top Performers Award Bytedance SEA Product - 2024",
    "Professional Scrum Product Owner I (PSPO I) from Scrum.org - 2023",
    'Employee award "Growth Mindset" of Tokopedia - 2022, 2023',
    "Master's degree scholarship from Indonesia Endowment Fund (LPDP) - 2018",
  ],
  activities: [
    "Indie Developer for consumer products in hospitality, architecture, and sports",
    "Active speaker for Product Management Training at Grab, Telkomsel, and ITS",
    "Soft Skills Class Instructor of Generasi Gigih 2.0 by GoTo - 2022",
  ],
  skills: [
    "Product Strategy",
    "0-1 Product Launch",
    "E-commerce",
    "Logistics",
    "AI/ML Implementation",
    "Growth & Retention",
    "A/B Testing",
    "Cross-functional Leadership",
    "UX Optimization",
    "Data-driven Decision Making",
  ],
};

// Helper function for Q&A feature - scrapes all text content
export function getResumeTextContent(): string {
  const { personal, summary, education, experience, certifications, activities, skills } = resumeData;
  
  let content = `
Name: ${personal.name}
Location: ${personal.location}
Email: ${personal.email}
Phone: ${personal.phone}

SUMMARY:
${summary}

EDUCATION:
${education.map(e => `${e.institution} (${e.location}) - ${e.degree}, ${e.period}`).join('\n')}

WORK EXPERIENCE:
${experience.map(exp => `
${exp.company} (${exp.region}) - ${exp.role}
Period: ${exp.period}
${exp.description}
Key Achievements:
${exp.highlights.map(h => `- ${h}`).join('\n')}
`).join('\n')}

CERTIFICATIONS & ACHIEVEMENTS:
${certifications.map(c => `- ${c}`).join('\n')}

ACTIVITIES & PROJECTS:
${activities.map(a => `- ${a}`).join('\n')}

SKILLS:
${skills.join(', ')}
`;
  
  return content;
}
