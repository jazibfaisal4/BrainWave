import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import clsx from "clsx";
import Section from "./Section";
import Heading from "./Heading";
import {
  GPU_STATS,
  SYSTEM_METRICS,
  STATUS_ITEMS,
  ACTIVITY_MESSAGES,
} from "../constants";

// ── Animation Variants (hoisted — never re-created) ─────────
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// ── Color maps (hoisted — never re-created) ──────────────────
const TYPE_COLORS = {
  deploy: "bg-color-1",
  training: "bg-color-2",
  infra: "bg-color-5",
  incident: "bg-color-3",
  data: "bg-color-4",
  prompt: "bg-color-6",
  billing: "bg-color-2",
  security: "bg-color-3",
};

// ── Utility (hoisted — SSR-safe, no browser API usage) ───────
const timeAgo = (date) => {
  const seconds = Math.round((Date.now() - date.getTime()) / 1000);
  if (seconds < 10) return "just now";
  if (seconds < 60) return `${seconds}s ago`;
  return `${Math.floor(seconds / 60)}m ago`;
};

// ── Subcomponents ────────────────────────────────────────────

/** Animated number counter — SSR-safe */
const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // SSR guard — performance & rAF are browser-only
    if (typeof window === "undefined") {
      setDisplay(value);
      return;
    }

    const numericVal = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(numericVal)) {
      setDisplay(value);
      return;
    }

    const duration = 1200;
    const start = performance.now();
    let rafId;

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * numericVal;

      setDisplay(
        numericVal >= 100
          ? Math.round(current).toLocaleString()
          : current.toFixed(2)
      );

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };

    rafId = requestAnimationFrame(step);

    // Cleanup: cancel any pending animation frame
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

/** GPU Credits progress bar — animates on scroll */
const GpuProgressBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      custom={1}
      className="col-span-1 md:col-span-2 lg:col-span-2 rounded-2xl border border-n-6/40 bg-n-7/60 backdrop-blur-xl p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">🔥</span>
          <h4 className="text-base font-semibold text-n-1">
            {GPU_STATS.label}
          </h4>
        </div>
        <span className="text-sm font-code text-n-3">
          {GPU_STATS.used.toLocaleString()} /{" "}
          {GPU_STATS.total.toLocaleString()} {GPU_STATS.unit}
        </span>
      </div>

      {/* Track */}
      <div className="relative h-4 w-full rounded-full bg-n-6/60 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, #AC6AFF 0%, #79FFF7 50%, #FFC876 100%)",
          }}
          initial={{ width: "0%" }}
          animate={
            isInView
              ? { width: `${GPU_STATS.percentage}%` }
              : { width: "0%" }
          }
          transition={{
            duration: 1.4,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3,
          }}
        />
        {/* Shimmer */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full opacity-40"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            width: "30%",
          }}
          animate={isInView ? { x: ["0%", "400%"] } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "linear",
            delay: 1.5,
          }}
        />
      </div>

      <div className="flex items-center justify-between mt-3">
        <span className="text-xs text-n-4 font-code">0</span>
        <span className="text-sm font-bold text-color-1">
          {GPU_STATS.percentage}% utilized
        </span>
        <span className="text-xs text-n-4 font-code">
          {GPU_STATS.total.toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
};

/** System metric card */
const MetricCard = ({ metric, index }) => (
  <motion.div
    variants={fadeInUp}
    custom={index + 2}
    className={clsx(
      "group rounded-2xl border border-n-6/40 bg-n-7/60 backdrop-blur-xl p-5",
      "transition-all duration-300",
      "hover:border-color-1/30 hover:shadow-[0_0_24px_rgba(172,106,255,0.1)]"
    )}
  >
    <div className="flex items-center justify-between mb-3">
      <span className="text-2xl">{metric.icon}</span>
      <span
        className={clsx(
          "text-xs font-bold px-2 py-0.5 rounded-md",
          metric.trend === "up"
            ? "text-color-4 bg-color-4/10"
            : "text-color-3 bg-color-3/10"
        )}
      >
        {metric.change}
      </span>
    </div>
    <p className="text-2xl font-bold text-n-1 mb-1 font-code">
      <AnimatedCounter value={metric.value} />
    </p>
    <p className="text-xs text-n-4 uppercase tracking-wider font-semibold">
      {metric.label}
    </p>
  </motion.div>
);

/** Live activity feed — SSR-safe */
const ActivityFeed = () => {
  // Lazy initializer uses a function to avoid SSR Date issues
  const [activities, setActivities] = useState(() => {
    const now = typeof window !== "undefined" ? Date.now() : 0;
    return ACTIVITY_MESSAGES.slice(0, 4).map((msg, i) => ({
      ...msg,
      id: `init-${i}`,
      timestamp: new Date(now - (4 - i) * 60_000),
    }));
  });

  useEffect(() => {
    // Only run intervals in the browser
    if (typeof window === "undefined") return;

    const interval = setInterval(() => {
      const randomMsg =
        ACTIVITY_MESSAGES[
          Math.floor(Math.random() * ACTIVITY_MESSAGES.length)
        ];
      const newEntry = {
        ...randomMsg,
        id: `act-${Date.now()}`,
        timestamp: new Date(),
      };
      setActivities((prev) => [newEntry, ...prev].slice(0, 6));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={fadeInUp}
      custom={6}
      className="col-span-1 md:col-span-2 rounded-2xl border border-n-6/40 bg-n-7/60 backdrop-blur-xl p-6 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-color-4 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-color-4" />
          </span>
          <h4 className="text-base font-semibold text-n-1">
            Real-time Activity
          </h4>
        </div>
        <span className="text-xs text-n-4 font-code">Live Feed</span>
      </div>

      {/* Feed */}
      <div className="space-y-3 flex-1 overflow-hidden">
        <AnimatePresence initial={false}>
          {activities.map((act) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, height: 0, x: -20 }}
              animate={{ opacity: 1, height: "auto", x: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex items-start gap-3 rounded-xl bg-n-8/60 border border-n-6/20 px-4 py-3"
            >
              <span
                className={clsx(
                  "mt-1 h-2 w-2 rounded-full shrink-0",
                  TYPE_COLORS[act.type] || "bg-n-4"
                )}
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-n-2 leading-snug truncate">
                  <span className="font-semibold text-n-1">
                    @{act.user}
                  </span>{" "}
                  {act.action}
                </p>
                <p className="text-[0.65rem] text-n-5 mt-0.5 font-code">
                  {timeAgo(act.timestamp)}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/** System status panel */
const SystemStatus = () => (
  <motion.div
    variants={fadeInUp}
    custom={7}
    className="col-span-1 md:col-span-2 lg:col-span-2 rounded-2xl border border-n-6/40 bg-n-7/60 backdrop-blur-xl p-6"
  >
    <div className="flex items-center justify-between mb-5">
      <h4 className="text-base font-semibold text-n-1">System Status</h4>
      <span className="px-2.5 py-1 rounded-lg text-[0.65rem] font-bold uppercase tracking-wider bg-color-4/10 text-color-4 border border-color-4/20">
        All Systems Go
      </span>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {STATUS_ITEMS.map((item) => (
        <div
          key={item.id}
          className={clsx(
            "flex items-center gap-2.5 rounded-xl bg-n-8/60 border border-n-6/20 px-3.5 py-3",
            "transition-all duration-300 hover:border-n-5/40"
          )}
        >
          <span
            className={clsx(
              "h-2 w-2 rounded-full shrink-0",
              item.status === "operational"
                ? "bg-color-4"
                : "bg-color-2 animate-pulse"
            )}
          />
          <div>
            <p className="text-sm text-n-1 font-medium leading-tight">
              {item.name}
            </p>
            <p
              className={clsx(
                "text-[0.6rem] uppercase tracking-wider font-bold",
                item.status === "operational"
                  ? "text-color-4"
                  : "text-color-2"
              )}
            >
              {item.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

// ── Main Component ───────────────────────────────────────────
const LiveUsage = () => {
  return (
    <Section id="live-usage" crosses>
      <div className="container relative z-2">
        <Heading
          tag="Live System Status"
          title="Real-Time Usage & Analytics"
          text="Monitor infrastructure health, track GPU consumption, and watch live activity across the platform."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {/* Row 1: GPU Bar (2 cols) + 2 metric cards */}
          <GpuProgressBar />
          {SYSTEM_METRICS.slice(0, 2).map((m, i) => (
            <MetricCard key={m.id} metric={m} index={i} />
          ))}

          {/* Row 2: 2 metric cards + System Status (2 cols) */}
          {SYSTEM_METRICS.slice(2).map((m, i) => (
            <MetricCard key={m.id} metric={m} index={i + 2} />
          ))}
          <SystemStatus />

          {/* Row 3: Activity feed */}
          <ActivityFeed />
        </motion.div>
      </div>
    </Section>
  );
};

export default LiveUsage;
