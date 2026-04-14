import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Copy, Check } from "lucide-react";
import Section from "./Section";
import Heading from "./Heading";
import { PROMPT_CATEGORIES, PROMPT_CARDS } from "../constants";

// ── Animation Variants (hoisted — never re-created) ─────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

// ── Color map (hoisted — never re-created) ───────────────────
const CATEGORY_COLORS = {
  Code: "text-color-5 bg-color-5/10 border-color-5/20",
  Creative: "text-color-6 bg-color-6/10 border-color-6/20",
  Business: "text-color-2 bg-color-2/10 border-color-2/20",
  Marketing: "text-color-3 bg-color-3/10 border-color-3/20",
  Data: "text-color-4 bg-color-4/10 border-color-4/20",
};

// ── Subcomponents ────────────────────────────────────────────

const CategoryButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={clsx(
      "relative px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap",
      isActive
        ? "bg-color-1/20 text-color-1 shadow-[0_0_20px_rgba(172,106,255,0.3)]"
        : "bg-n-7/50 text-n-3 hover:text-n-1 hover:bg-n-6/60"
    )}
  >
    {isActive && (
      <motion.span
        layoutId="activePill"
        className="absolute inset-0 rounded-xl border border-color-1/50"
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      />
    )}
    {label}
  </button>
);

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    // SSR guard — navigator is browser-only
    if (typeof window === "undefined" || !navigator?.clipboard) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard API not available — degrade silently */
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={clsx(
        "flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer",
        copied
          ? "bg-color-4/20 text-color-4 shadow-[0_0_12px_rgba(122,219,120,0.25)]"
          : "bg-n-6/50 text-n-3 hover:bg-color-1/20 hover:text-color-1 hover:shadow-[0_0_12px_rgba(172,106,255,0.2)] active:scale-95"
      )}
    >
      {copied ? (
        <>
          <Check size={14} strokeWidth={2.5} />
          Copied
        </>
      ) : (
        <>
          <Copy size={14} strokeWidth={2} />
          Copy
        </>
      )}
    </button>
  );
};

const PromptCard = ({ card }) => (
  <motion.div
    variants={cardVariants}
    layout
    className={clsx(
      "group relative flex flex-col rounded-2xl border border-n-6/40 bg-n-7/60 backdrop-blur-xl p-6",
      "transition-all duration-500",
      "hover:border-color-1/30 hover:shadow-[0_0_30px_rgba(172,106,255,0.12)]"
    )}
  >
    {/* Glow overlay on hover */}
    <div
      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(172,106,255,0.06), transparent 40%)",
      }}
    />

    {/* Header */}
    <div className="flex items-start justify-between mb-4">
      <span className="text-3xl leading-none">{card.icon}</span>
      <span
        className={clsx(
          "px-2.5 py-1 rounded-lg text-[0.65rem] font-bold uppercase tracking-wider border",
          CATEGORY_COLORS[card.category] || "text-n-3 bg-n-6/50 border-n-5/30"
        )}
      >
        {card.category}
      </span>
    </div>

    {/* Body */}
    <h4 className="text-lg font-semibold text-n-1 mb-2 leading-snug">
      {card.title}
    </h4>
    <p className="text-sm text-n-3 leading-relaxed mb-5 flex-1">
      {card.description}
    </p>

    {/* Prompt preview */}
    <div className="rounded-xl bg-n-8/80 border border-n-6/30 p-3.5 mb-4">
      <p className="text-xs text-n-4 font-code leading-relaxed line-clamp-3">
        {card.prompt}
      </p>
    </div>

    {/* Actions */}
    <div className="flex items-center justify-between mt-auto">
      <span className="text-[0.65rem] text-n-4 uppercase tracking-wider font-semibold">
        Prompt Template
      </span>
      <CopyButton text={card.prompt} />
    </div>
  </motion.div>
);

// ── Main Component ───────────────────────────────────────────
const PromptLab = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCards = useMemo(
    () =>
      activeFilter === "All"
        ? PROMPT_CARDS
        : PROMPT_CARDS.filter((c) => c.category === activeFilter),
    [activeFilter]
  );

  const handleFilterChange = useCallback((cat) => {
    setActiveFilter(cat);
  }, []);

  return (
    <Section id="prompt-lab" crosses>
      <div className="container relative z-2">
        <Heading
          tag="AI Prompt Lab"
          title="Explore & Copy Ready-Made Prompts"
          text="Browse curated prompt templates across categories. One click to copy, instant productivity."
        />

        {/* ── Filter Bar ─────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12 lg:mb-16">
          {PROMPT_CATEGORIES.map((cat) => (
            <CategoryButton
              key={cat}
              label={cat}
              isActive={activeFilter === cat}
              onClick={() => handleFilterChange(cat)}
            />
          ))}
        </div>

        {/* ── Card Grid ──────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filteredCards.map((card) => (
              <PromptCard key={card.id} card={card} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom counter ─────────────────────────────── */}
        <motion.p
          key={`count-${activeFilter}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-n-4 text-sm mt-10"
        >
          Showing{" "}
          <span className="text-n-1 font-semibold">{filteredCards.length}</span>{" "}
          prompt{filteredCards.length !== 1 && "s"}
          {activeFilter !== "All" && (
            <>
              {" "}in{" "}
              <span className="text-color-1 font-semibold">{activeFilter}</span>
            </>
          )}
        </motion.p>
      </div>
    </Section>
  );
};

export default PromptLab;
