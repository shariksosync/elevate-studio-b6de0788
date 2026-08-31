import type {
  PortfolioItem,
  ProcessStep,
  Service,
  SiteSettings,
  TeamMember,
  Testimonial,
} from "@/types";

export const COMPANY = {
  name: "SOSync AI Tech IT Solutions",
  brand: "SOSync AI Tech",
  tagline: "Innovate. Integrate. Elevate.",
  subTagline: "Digital Solutions for a Smarter Tomorrow",
  primaryPhone: "+91 91724 03714",
  secondaryPhone: "+91 90212 67894",
  supportEmail: "support@sosyncaitech.in",
  officeAddress: "Kharadi, Pune, Maharashtra 411014, India",
  operatingHours: "Mon – Sat, 9:30 AM – 7:00 PM IST",
  mapEmbed:
    "https://www.google.com/maps?q=Kharadi,+Pune,+Maharashtra+411014&output=embed",
  socials: {
    linkedin: "https://www.linkedin.com/company/sosyncaitech",
    instagram: "https://www.instagram.com/sosyncaitech",
    facebook: "https://www.facebook.com/sosyncaitech",
    twitter: "https://twitter.com/sosyncaitech",
  },
} as const;

export const SERVICE_CATEGORIES = [
  "Website Development",
  "Custom Software & ERP",
  "Enterprise IT & Tech",
  "Growth & Digital Marketing",
  "Graphic Design",
  "AI Services & Automation",
] as const;

export const SERVICES: Service[] = [
  {
    id: "svc-web",
    title: "Website Development",
    category: "Website Development",
    icon: "Globe",
    description:
      "High-performance corporate sites, e-commerce storefronts and landing funnels engineered for speed, SEO and conversion.",
    features: [
      "Business & corporate websites",
      "Shopify / custom e-commerce builds",
      "Core Web Vitals & technical SEO",
      "CMS + self-serve content editing",
    ],
    deliverables: [
      "Responsive UI across all breakpoints",
      "Payment gateway integration (Razorpay / Stripe)",
      "Analytics, pixels & conversion tracking",
      "Hosting, SSL & domain setup",
    ],
    startingAt: "₹24,999",
  },
  {
    id: "svc-software",
    title: "Custom Software & ERP",
    category: "Custom Software & ERP",
    icon: "Boxes",
    description:
      "Tailored ERP, CRM and internal operations platforms that replace spreadsheets with auditable, role-based workflows.",
    features: [
      "ERP for billing, inventory & accounts",
      "CRM & lead pipeline automation",
      "Role-based admin dashboards",
      "REST APIs & third-party integrations",
    ],
    deliverables: [
      "Database architecture & data migration",
      "Multi-role permission matrix",
      "Reporting & export modules",
      "Admin handover documentation",
    ],
    startingAt: "₹79,999",
  },
  {
    id: "svc-it",
    title: "Enterprise IT & Tech",
    category: "Enterprise IT & Tech",
    icon: "ServerCog",
    description:
      "Cloud infrastructure, DevOps pipelines and managed IT support that keep production estates fast, secure and observable.",
    features: [
      "AWS / cloud architecture & migration",
      "CI/CD pipelines with Docker & Kubernetes",
      "Uptime monitoring & incident response",
      "Security hardening & backup strategy",
    ],
    deliverables: [
      "Infrastructure-as-code setup",
      "Monitoring dashboards & alerting",
      "Disaster recovery runbook",
      "Ongoing managed support plans",
    ],
    startingAt: "₹49,999",
  },
  {
    id: "svc-growth",
    title: "Growth & Digital Marketing",
    category: "Growth & Digital Marketing",
    icon: "TrendingUp",
    description:
      "Performance marketing across Meta and Google with creative, funnels and analytics tied directly to pipeline revenue.",
    features: [
      "Meta & Google Ads management",
      "SEO strategy and content clusters",
      "Landing page CRO experiments",
      "Social media & brand campaigns",
    ],
    deliverables: [
      "Campaign structure & audience research",
      "Creative sets and ad copy variants",
      "Weekly performance reporting",
      "Lead routing to CRM / WhatsApp",
    ],
    startingAt: "₹19,999/mo",
  },
  {
    id: "svc-design",
    title: "Graphic Design",
    category: "Graphic Design",
    icon: "PenTool",
    description:
      "Brand identity, UI systems and campaign creative that make growing businesses look category-leading.",
    features: [
      "Logo & full brand identity kits",
      "UI/UX design systems in Figma",
      "Social media creative packs",
      "Packaging, brochures & pitch decks",
    ],
    deliverables: [
      "Editable source files handover",
      "Brand guideline document",
      "Multi-format export bundles",
      "Two revision rounds per asset",
    ],
    startingAt: "₹9,999",
  },
  {
    id: "svc-ai",
    title: "AI Services & Automation",
    category: "AI Services & Automation",
    icon: "BrainCircuit",
    description:
      "RAG assistants, document intelligence and workflow automation that remove repetitive operational work.",
    features: [
      "Custom AI chatbots & RAG knowledge bases",
      "Document & invoice data extraction",
      "Computer vision quality inspection",
      "Workflow automation & AI integrations",
    ],
    deliverables: [
      "Model / provider selection & evaluation",
      "Secure API layer with usage limits",
      "Prompt & retrieval pipeline tuning",
      "Accuracy benchmark report",
    ],
    startingAt: "₹59,999",
  },
];

export const STATS = [
  { label: "Projects Delivered", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 50, suffix: "+" },
  { label: "Senior Engineers", value: 8, suffix: "+" },
  { label: "Countries Served", value: 12, suffix: "+" },
];

export const TECH_STACK = [
  { name: "React", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "TypeScript", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: "Python", group: "Backend" },
  { name: "AWS", group: "Cloud" },
  { name: "Docker", group: "Cloud" },
  { name: "Kubernetes", group: "Cloud" },
  { name: "AI/ML", group: "AI" },
  { name: "NLP", group: "AI" },
  { name: "RAG", group: "AI" },
  { name: "Computer Vision", group: "AI" },
  { name: "PowerBI", group: "Data" },
  { name: "Razorpay", group: "Payments" },
];

export const HERO_SLIDES = [
  {
    badge: "Custom Software Engineering",
    title: "Build Smarter. Automate Faster. Scale Further.",
    description:
      "Enterprise-grade web platforms, ERP systems and AI automation delivered by a senior in-house engineering squad.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
  },
  {
    badge: "AI Services & Automation",
    title: "AI That Works Inside Your Business, Not Beside It.",
    description:
      "RAG assistants, document intelligence and workflow automation wired directly into the tools your team already uses.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80",
  },
  {
    badge: "Growth & Digital Marketing",
    title: "Ship Fast, Rank High, Convert Consistently.",
    description:
      "Performance marketing and conversion-first websites that turn traffic into measurable pipeline revenue.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "prj-morpankh",
    name: "Morpankh Saree",
    client: "Morpankh Saree, Pune",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Direct-to-consumer saree storefront with catalogue merchandising and UPI-first checkout.",
    challenge:
      "Sales ran entirely through WhatsApp with no catalogue, no inventory truth and heavy manual order tracking.",
    solution:
      "Built a custom storefront with variant-level inventory, Razorpay checkout, shipping integration and an owner-facing order dashboard.",
    results: [
      "3.1x increase in online orders in 90 days",
      "Checkout drop-off reduced by 38%",
      "Manual order handling time cut by 12 hrs/week",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Razorpay", "AWS"],
    featured: true,
    timeline: "3 weeks",
  },
  {
    id: "prj-spart",
    name: "SP Art Hubs",
    client: "SP Art Hubs",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Curated art marketplace with artist profiles, commission enquiries and secure payments.",
    challenge:
      "Artwork was showcased on social media only, making pricing, availability and enquiries impossible to manage.",
    solution:
      "Delivered a gallery-grade catalogue with artist storefronts, commission request flows and automated enquiry routing.",
    results: [
      "220+ artworks catalogued and searchable",
      "Qualified commission enquiries up 4x",
      "Average enquiry response time under 2 hours",
    ],
    tech: ["React", "TypeScript", "Node.js", "Cloudinary", "Razorpay"],
    featured: true,
    timeline: "2 weeks",
  },
  {
    id: "prj-suraj",
    name: "Suraj Naturo Dry Fruits",
    client: "Suraj Naturo Foods",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1596273312170-8ecb855913f5?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Premium dry fruits store with subscription packs, coupon engine and B2B bulk enquiry portal.",
    challenge:
      "Retail and bulk buyers shared one price list, causing margin leaks and constant manual quoting.",
    solution:
      "Split retail and B2B journeys with tiered pricing, GST invoicing, coupon rules and a bulk quotation workflow.",
    results: [
      "B2B quote turnaround down from 2 days to 20 minutes",
      "Repeat purchase rate improved 27%",
      "GST-compliant invoicing fully automated",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "Razorpay", "Docker"],
    featured: true,
    timeline: "3 weeks",
  },
  {
    id: "prj-sonai-school",
    name: "Sonai Residential World School",
    client: "Sonai Residential World School",
    category: "Portals",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Institutional portal with admission enquiry pipeline, notices and campus galleries.",
    challenge:
      "Admission enquiries arrived through scattered phone calls with no tracking or follow-up ownership.",
    solution:
      "Built a public portal plus admin console for enquiry stages, notice publishing and gallery management.",
    results: [
      "100% of admission enquiries tracked in one pipeline",
      "Admin notice publishing without developer help",
      "Mobile traffic engagement up 46%",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    featured: true,
    timeline: "2 weeks",
  },
  {
    id: "prj-karyon",
    name: "Karyon College",
    client: "Karyon College",
    category: "Portals",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Course discovery portal with structured programme pages and counsellor lead routing.",
    challenge:
      "Programme information was buried in PDFs, so prospective applicants dropped off before enquiring.",
    solution:
      "Structured every programme into filterable pages with fee tables, eligibility logic and instant counsellor routing.",
    results: [
      "Enquiry conversion rate improved 2.4x",
      "Organic search impressions up 63%",
      "Counsellor assignment automated by stream",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
    featured: false,
    timeline: "3 weeks",
  },
  {
    id: "prj-sonai-group",
    name: "Sona I Group of Institutes",
    client: "Sona I Group of Institutes",
    category: "ERP / Software",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Multi-campus ERP covering admissions, fee collection, staff records and MIS reporting.",
    challenge:
      "Each campus maintained separate registers and spreadsheets, making group-level reporting impossible.",
    solution:
      "Delivered a unified ERP with campus-scoped roles, online fee receipts, staff records and consolidated MIS dashboards.",
    results: [
      "Group-level MIS reports generated in seconds",
      "Fee reconciliation effort reduced by 70%",
      "4 campuses running on a single source of truth",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "PowerBI", "Docker"],
    featured: true,
    timeline: "6 weeks",
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "tm-shashant",
    name: "Shashant Shekhar",
    role: "Founder & Project Manager",
    group: "Leadership",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    expertise: ["Delivery Strategy", "Client Success", "Solution Architecture"],
  },
  {
    id: "tm-omkar",
    name: "Omkar Bachanatti",
    role: "Founder & Head of Operations",
    group: "Leadership",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    expertise: ["Operations", "Vendor Management", "Process Design"],
  },
  {
    id: "tm-sanika",
    name: "Sanika Chougule",
    role: "Founder & Head of HR",
    group: "Leadership",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    expertise: ["Talent Acquisition", "Team Culture", "Client Onboarding"],
  },
  {
    id: "tm-vivek",
    name: "Vivek Dhumal",
    role: "Head of Digital Marketing",
    group: "Leadership",
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=600&q=80",
    expertise: ["SEO", "Performance Funnels", "Analytics"],
  },
  {
    id: "tm-aslam",
    name: "Aslam Pathan",
    role: "Meta Ads Specialist",
    group: "Leadership",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    expertise: ["Meta Ads", "Creative Testing", "Lead Generation"],
  },
  {
    id: "tm-tridev",
    name: "Tridev Sharma",
    role: "Senior Full Stack Engineer",
    group: "Senior Full Stack Squad",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80",
    expertise: ["React", "Node.js", "System Design"],
  },
  {
    id: "tm-sharik",
    name: "Sharik Ahmed",
    role: "Senior Full Stack Engineer",
    group: "Senior Full Stack Squad",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80",
    expertise: ["Next.js", "TypeScript", "Cloud Infra"],
  },
  {
    id: "tm-vicky",
    name: "Vicky Kumar",
    role: "Senior Backend Engineer",
    group: "Senior Full Stack Squad",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    expertise: ["Python", "APIs", "PostgreSQL"],
  },
  {
    id: "tm-ashish",
    name: "Ashish Ranjan",
    role: "Senior AI Engineer",
    group: "Senior Full Stack Squad",
    image:
      "https://images.unsplash.com/photo-1618568949779-6f4e4d61b30e?auto=format&fit=crop&w=600&q=80",
    expertise: ["RAG", "NLP", "Computer Vision"],
  },
  {
    id: "tm-anurag",
    name: "Anurag Kumar",
    role: "Senior DevOps Engineer",
    group: "Senior Full Stack Squad",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80",
    expertise: ["Docker", "Kubernetes", "AWS"],
  },
];

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "Discovery workshops to map business goals, users, edge cases and success metrics before a line of code.",
  },
  {
    step: "02",
    title: "Architecture Roadmap",
    description:
      "Data models, integrations, hosting plan and sprint milestones documented and signed off.",
  },
  {
    step: "03",
    title: "UI/UX Prototype",
    description:
      "Clickable high-fidelity prototypes so you approve the experience before development starts.",
  },
  {
    step: "04",
    title: "Clean Development",
    description:
      "Modular, reviewed code built in short sprints with visible progress at every checkpoint.",
  },
  {
    step: "05",
    title: "QA & Security",
    description:
      "Functional, cross-device and load testing plus security hardening and access review.",
  },
  {
    step: "06",
    title: "Client Demo",
    description:
      "Guided walkthrough on staging where feedback is captured and resolved in the same sprint.",
  },
  {
    step: "07",
    title: "Production Deployment",
    description:
      "Zero-drama go-live with domain, SSL, backups, monitoring and analytics fully configured.",
  },
  {
    step: "08",
    title: "Admin Handover & Training",
    description:
      "Complete source code, credentials, documentation and live training for your internal team.",
  },
  {
    step: "09",
    title: "6 Months Free Support Warranty",
    description:
      "Bug fixes, server troubleshooting and uptime monitoring included at no additional cost.",
  },
];

export const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most websites and landing funnels ship in 1–3 weeks. Custom software and ERP platforms typically run 4–8 weeks depending on module count and integrations.",
  },
  {
    q: "What is included in the 6 months free technical support?",
    a: "Bug fixes, server troubleshooting, uptime monitoring, minor content updates and business-hours support (Mon–Sat, 9:30 AM–7:00 PM IST) — worth ₹25,000+, included free.",
  },
  {
    q: "Do we own the source code?",
    a: "Yes. You receive 100% full IP and source code transfer on final delivery, along with all credentials and documentation.",
  },
  {
    q: "How does the ₹1 demo consultation work?",
    a: "Book a slot for ₹1 and get a 30-minute working session with a senior engineer covering scope, architecture options, timeline and a transparent quotation.",
  },
  {
    q: "What is the referral commission?",
    a: "Refer a client who signs with us and you earn 10% commission on the project value, paid after the client's first milestone payment.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We currently serve clients across 12 countries and work in overlapping time windows for standups and demos.",
  },
];

export const DEFAULT_SETTINGS: SiteSettings = {
  primaryPhone: COMPANY.primaryPhone,
  secondaryPhone: COMPANY.secondaryPhone,
  supportEmail: COMPANY.supportEmail,
  officeAddress: COMPANY.officeAddress,
  operatingHours: COMPANY.operatingHours,
  announcementText:
    "🚀 Book a ₹1 demo consultation — 6 months FREE technical support on every project.",
  announcementEnabled: true,
  maintenanceMode: false,
};

export const SEED_TESTIMONIALS: Testimonial[] = [
  {
    id: "ts-1",
    name: "Rohit Deshmukh",
    company: "Morpankh Saree",
    role: "Owner",
    rating: 5,
    message:
      "Our storefront went live in three weeks and orders tripled. The team handled payments, shipping and training without us chasing anyone.",
    approved: true,
    createdAt: "2026-02-11T09:00:00.000Z",
  },
  {
    id: "ts-2",
    name: "Dr. Anita Kulkarni",
    company: "Sona I Group of Institutes",
    role: "Director",
    rating: 5,
    message:
      "The ERP unified four campuses. Group-level reports that used to take a week now take seconds.",
    approved: true,
    createdAt: "2026-03-04T09:00:00.000Z",
  },
  {
    id: "ts-3",
    name: "Faisal Shaikh",
    company: "Suraj Naturo Foods",
    role: "Co-Founder",
    rating: 5,
    message:
      "Separating retail and B2B pricing fixed our margin leak immediately. Bulk quotes now go out in minutes.",
    approved: true,
    createdAt: "2026-04-19T09:00:00.000Z",
  },
  {
    id: "ts-4",
    name: "Sneha Patil",
    company: "SP Art Hubs",
    role: "Founder",
    rating: 5,
    message:
      "They understood the aesthetic instantly. Commission enquiries are up four times and everything is trackable.",
    approved: true,
    createdAt: "2026-05-22T09:00:00.000Z",
  },
];

export const ADMIN_CREDENTIALS = {
  email: "admin@sosyncaitech.in",
  password: "admin123",
} as const;
