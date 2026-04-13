// ─────────────────────────────────────────────────────────────
//  Live Usage Dashboard — Data Constants
//  All metrics, status badges, and activity messages live here.
// ─────────────────────────────────────────────────────────────

export const GPU_STATS = {
  label: "GPU Credits Used",
  used: 7_842,
  total: 10_000,
  unit: "credits",
  get percentage() {
    return Math.round((this.used / this.total) * 100);
  },
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
