import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

// ─────────────────────────────────────────────────────────────
//  AI Prompt Lab — Data Constants
// ─────────────────────────────────────────────────────────────

export const PROMPT_CATEGORIES = [
  "All",
  "Code",
  "Creative",
  "Business",
  "Marketing",
  "Data",
];

export const PROMPT_CARDS = [
  {
    id: "pl-01",
    category: "Code",
    title: "React Component Generator",
    description:
      "Generate production-ready React components with TypeScript, props, and unit tests.",
    prompt:
      "Create a reusable React component called [ComponentName] that accepts the following props: [props]. Include TypeScript types, default props, and a Jest test file.",
    icon: "⚛️",
  },
  {
    id: "pl-02",
    category: "Code",
    title: "API Endpoint Builder",
    description:
      "Scaffold RESTful API endpoints with validation, error handling, and documentation.",
    prompt:
      "Build a REST API endpoint for [resource] with GET, POST, PUT, DELETE methods. Include input validation with Zod, error handling middleware, and OpenAPI documentation comments.",
    icon: "🔌",
  },
  {
    id: "pl-03",
    category: "Code",
    title: "SQL Query Optimizer",
    description:
      "Analyze and optimize slow SQL queries with index recommendations.",
    prompt:
      "Analyze this SQL query for performance issues: [query]. Suggest index additions, query rewrites, and explain the execution plan improvements.",
    icon: "🗄️",
  },
  {
    id: "pl-04",
    category: "Creative",
    title: "Brand Story Writer",
    description:
      "Craft compelling brand narratives that resonate with your target audience.",
    prompt:
      "Write a brand origin story for [company] that targets [audience]. Include emotional hooks, a clear value proposition, and a call-to-action. Tone: [tone].",
    icon: "✍️",
  },
  {
    id: "pl-05",
    category: "Creative",
    title: "UI Micro-copy Crafter",
    description:
      "Generate delightful micro-copy for buttons, tooltips, empty states, and error messages.",
    prompt:
      "Write 5 variations of micro-copy for a [element type] in a [product type] app. The action is [action]. Tone should be [friendly/professional/playful]. Include an empty-state message.",
    icon: "💬",
  },
  {
    id: "pl-06",
    category: "Creative",
    title: "Video Script Outline",
    description:
      "Structure engaging video scripts with hooks, beats, and CTAs.",
    prompt:
      "Create a 60-second video script for [product/topic]. Include a pattern-interrupt hook in the first 3 seconds, 3 key benefit beats, social proof, and a clear CTA.",
    icon: "🎬",
  },
  {
    id: "pl-07",
    category: "Business",
    title: "Competitive Analysis",
    description:
      "Generate structured competitor breakdowns with SWOT and positioning maps.",
    prompt:
      "Perform a competitive analysis of [company] vs [competitor 1], [competitor 2]. Include a SWOT analysis for each, a feature comparison matrix, pricing comparison, and market positioning recommendations.",
    icon: "📊",
  },
  {
    id: "pl-08",
    category: "Business",
    title: "OKR Framework Builder",
    description:
      "Define quarterly objectives and measurable key results for any team.",
    prompt:
      "Create OKRs for a [team type] team for Q[quarter] [year]. Define 3 objectives with 3 measurable key results each. Include target metrics and tracking cadence.",
    icon: "🎯",
  },
  {
    id: "pl-09",
    category: "Business",
    title: "Investor Pitch Deck",
    description:
      "Structure a compelling pitch deck narrative with key slides and talking points.",
    prompt:
      "Outline a 12-slide pitch deck for [startup] raising a [stage] round. Include problem, solution, market size (TAM/SAM/SOM), business model, traction, team, and ask slides with talking points.",
    icon: "💼",
  },
  {
    id: "pl-10",
    category: "Marketing",
    title: "Email Sequence Builder",
    description:
      "Design automated email drip campaigns with subject lines and conversion hooks.",
    prompt:
      "Create a 5-email onboarding sequence for [product]. Include subject lines (under 50 chars), preview text, email body with personalization tokens, and CTA for each. Goal: activate users within 7 days.",
    icon: "📧",
  },
  {
    id: "pl-11",
    category: "Marketing",
    title: "SEO Content Strategy",
    description:
      "Generate keyword clusters, content briefs, and topical authority maps.",
    prompt:
      "Build an SEO content strategy for [website] targeting [niche]. Include 10 keyword clusters, search intent mapping, suggested content formats, internal linking plan, and a 3-month publishing calendar.",
    icon: "🔍",
  },
  {
    id: "pl-12",
    category: "Data",
    title: "Dashboard KPI Designer",
    description:
      "Define key metrics, chart types, and data sources for analytics dashboards.",
    prompt:
      "Design a KPI dashboard for a [business type]. Include 8 key metrics with definitions, recommended chart types, data refresh frequency, alert thresholds, and a layout wireframe description.",
    icon: "📈",
  },
  {
    id: "pl-13",
    category: "Data",
    title: "Data Pipeline Architect",
    description:
      "Design ETL/ELT pipelines with source-to-warehouse mapping and scheduling.",
    prompt:
      "Design a data pipeline for ingesting [data source] into [warehouse]. Include extraction method, transformation logic, loading strategy, error handling, monitoring, and a cron schedule.",
    icon: "🔄",
  },
  {
    id: "pl-14",
    category: "Marketing",
    title: "Social Media Calendar",
    description:
      "Plan a month of platform-specific social content with hashtag strategies.",
    prompt:
      "Create a 4-week social media calendar for [brand] across Instagram, LinkedIn, and Twitter/X. Include 3 posts per week per platform, content themes, hashtag sets, and best posting times.",
    icon: "📅",
  },
];

// ─────────────────────────────────────────────────────────────
//  Live Usage Dashboard — Data Constants
// ─────────────────────────────────────────────────────────────

export const GPU_STATS = {
  label: "GPU Credits Used",
  used: 7_842,
  total: 10_000,
  unit: "credits",
  percentage: Math.round((7_842 / 10_000) * 100),
};

export const SYSTEM_METRICS = [
  {
    id: "sm-01",
    label: "Uptime",
    value: "99.98%",
    change: "+0.02%",
    trend: "up",
    icon: "⏱️",
  },
  {
    id: "sm-02",
    label: "Avg Latency",
    value: "42ms",
    change: "-8ms",
    trend: "down",
    icon: "⚡",
  },
  {
    id: "sm-03",
    label: "Requests / min",
    value: "12,847",
    change: "+1,204",
    trend: "up",
    icon: "📡",
  },
  {
    id: "sm-04",
    label: "Active Users",
    value: "3,291",
    change: "+186",
    trend: "up",
    icon: "👥",
  },
];

export const STATUS_ITEMS = [
  { id: "st-01", name: "API Gateway", status: "operational" },
  { id: "st-02", name: "GPU Cluster", status: "operational" },
  { id: "st-03", name: "Vector DB", status: "operational" },
  { id: "st-04", name: "CDN Edge", status: "operational" },
  { id: "st-05", name: "Auth Service", status: "operational" },
  { id: "st-06", name: "Model Inference", status: "degraded" },
];

export const ACTIVITY_MESSAGES = [
  { user: "alice_dev", action: "deployed model v3.2.1 to production", type: "deploy" },
  { user: "bob_ml", action: "started fine-tuning on dataset-XR-09", type: "training" },
  { user: "carol_eng", action: "scaled GPU cluster to 8 nodes", type: "infra" },
  { user: "dave_ops", action: "resolved latency spike in us-east-1", type: "incident" },
  { user: "eve_data", action: "exported 2.4M embeddings to warehouse", type: "data" },
  { user: "frank_ai", action: "created new prompt template 'Summarizer-v2'", type: "prompt" },
  { user: "grace_pm", action: "approved billing upgrade for Team Alpha", type: "billing" },
  { user: "heidi_sec", action: "rotated API keys for staging environment", type: "security" },
  { user: "ivan_dev", action: "merged PR #847 — streaming response handler", type: "deploy" },
  { user: "judy_ml", action: "benchmarked GPT-4o vs internal model on MMLU", type: "training" },
  { user: "karl_ops", action: "enabled auto-scaling for inference pods", type: "infra" },
  { user: "luna_eng", action: "migrated vector index to HNSW algorithm", type: "data" },
];