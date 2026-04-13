// ─────────────────────────────────────────────────────────────
//  AI Prompt Lab — Data Constants
//  Keep all display data here; component only handles UI + state.
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
