import React, { useState, useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodeCommit,
  faCodeBranch,
  faSearch,
  faClock,
  faArrowLeft,
  faTerminal,
  faTag,
  faCalendar,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

// ---------------------------------------------------------------------------
// Data — swap this out for real posts (MDX, CMS, or a JSON file) later.
// ---------------------------------------------------------------------------
const POSTS = [
  {
    hash: "a3f9c1e",
    title: "Building a JWT auth flow with refresh-token rotation",
    excerpt:
      "How I wired up Passport.js and rotating refresh tokens for a MERN app, and the edge cases that broke my first three attempts.",
    date: "2026-07-28",
    readMins: 8,
    branch: "backend",
    tags: ["Node.js", "Express", "JWT", "Security"],
    stats: { added: 214, removed: 32 },
    pinned: true,
    body: `Most JWT tutorials stop at "sign a token, put it in a header" — the part\nthat actually matters is what happens when that token expires while a user\nis mid-flow.\n\nThe approach I landed on: a short-lived access token (15 min) issued\nalongside a long-lived, httpOnly refresh token. On expiry, the client\nsilently calls /auth/refresh, the server checks the refresh token against a\nhashed record in MongoDB, rotates it, and reissues both tokens.\n\nThree things broke my first attempt:\n\n1. Storing the raw refresh token in the DB — always hash it with bcrypt,\n   the same as a password.\n2. Not invalidating old refresh tokens on rotation, which left a replay\n   window open.\n3. Race conditions from two tabs refreshing at once — solved with a short\n   grace period that accepts the immediately-previous token once.\n\nExpress middleware, a Mongoose schema for token records, and\nexpress-rate-limit on the refresh route rounded out the setup.`,
  },
  {
    hash: "7e21bd4",
    title: "Why I moved my portfolio from Next.js to plain React + Vite",
    excerpt:
      "Static hosting, no SSR needs, and a build that finishes before I've let go of the keyboard.",
    date: "2026-07-14",
    readMins: 5,
    branch: "frontend",
    tags: ["React", "Vite", "Tailwind CSS"],
    stats: { added: 96, removed: 141 },
    pinned: false,
    body: `Next.js is the right call when you need SSR, ISR, or an API layer\nliving next to your frontend. A portfolio site is none of those things —\nit's a handful of static routes that don't change per-request.\n\nSwitching to Vite + React Router cut my build time from ~14s to under 2s,\nand removed a whole category of "why is this rendering server-side"\ndebugging. Tailwind CSS handles the styling, react-icons covers the\nicon set, and the whole thing deploys as static files — no server to\nmaintain.\n\nIf a project later needs auth-gated pages or server rendering for SEO on\ndynamic content, that's a real reason to reach for Next.js again. Until\nthen, plain React keeps the mental model small.`,
  },
  {
    hash: "c88a05f",
    title: "MongoDB schema design for a multi-tenant SaaS side project",
    excerpt:
      "Embedding vs. referencing isn't a rule of thumb — it's a question about how each field actually gets queried.",
    date: "2026-06-30",
    readMins: 10,
    branch: "database",
    tags: ["MongoDB", "Mongoose", "System Design"],
    stats: { added: 178, removed: 19 },
    pinned: false,
    body: `The classic MongoDB advice — "embed what you read together, reference\nwhat changes independently" — is correct but too abstract to act on\nuntil you've drawn out the actual access patterns.\n\nFor a multi-tenant app, I ended up with:\n\n- Tenant settings embedded directly in the Tenant document, since\n  they're always read together and rarely change.\n- Users referenced by tenantId, since a tenant can have thousands of\n  users and I never need to load them all at once.\n- Audit logs in a separate, unindexed-by-default collection, written\n  far more than they're read.\n\nThe rule that actually held up: model around your three or four most\nfrequent queries first, and let the schema fall out of that — not the\nother way around.`,
  },
  {
    hash: "1f6d9aa",
    title: "A rate limiter, helmet, and multer walkthrough for Express APIs",
    excerpt: "Three small middleware packages that quietly do most of the security work.",
    date: "2026-06-12",
    readMins: 6,
    branch: "backend",
    tags: ["Express", "Security", "Node.js"],
    stats: { added: 87, removed: 4 },
    pinned: false,
    body: `helmet sets sane HTTP headers by default — one line, and a chunk of\ncommon header-based attacks are off the table. express-rate-limit stops\nbrute-force login attempts with a sliding window, tuned per-route rather\nthan globally. multer handles file uploads without buffering everything\nin memory, as long as you set storage limits explicitly.\n\nNone of these are exciting on their own, but wiring all three in before\nthe first deploy has saved me from re-doing security work under time\npressure later.`,
  },
  {
    hash: "e40b271",
    title: "Notes from my final-year project: a MERN classroom platform",
    excerpt:
      "What shipped, what got cut, and the CGPA-adjacent lessons about scope that no course teaches.",
    date: "2026-05-22",
    readMins: 7,
    branch: "projects",
    tags: ["React", "MongoDB", "Firebase"],
    stats: { added: 302, removed: 58 },
    pinned: false,
    body: `The original scope had live video, assignment grading, and analytics\ndashboards. What actually shipped by the deadline: auth (Firebase),\nassignment submission with file uploads, and a teacher dashboard built\nwith React Router and Axios talking to an Express/Mongoose backend.\n\nThe cut features weren't wasted time — sketching them out early forced\nclearer data models for the parts that did ship. The biggest lesson\nwasn't technical: it was learning to timebox exploration and commit to a\nslice early enough to polish it.`,
  },
];

const BRANCHES = ["all", ...Array.from(new Set(POSTS.map((p) => p.branch)))];

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Blog() {
  const [query, setQuery] = useState("");
  const [branch, setBranch] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const matchesBranch = branch === "all" || p.branch === branch;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesBranch && matchesQuery;
    });
  }, [query, branch]);

  const pinned = filtered.find((p) => p.pinned);
  const rest = filtered.filter((p) => !p.pinned);

  return (
    <div
      style={{
        background: "#0F1117",
        color: "#E8E8ED",
        minHeight: "100vh",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
      className="w-full"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .commit-line {
          background: linear-gradient(to bottom, #262936, #262936);
        }
        .post-card:hover { border-color: #5EEAD4 !important; transform: translateX(2px); }
        .branch-pill { transition: all 0.15s ease; }
        ::selection { background: #5EEAD4; color: #0F1117; }
      `}</style>

      {selected ? (
        <PostDetail post={selected} onBack={() => setSelected(null)} />
      ) : (
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="mb-12">
            <div
              className="font-mono text-sm mb-3 flex items-center gap-2"
              style={{ color: "#5EEAD4" }}
            >
              <FontAwesomeIcon icon={faTerminal} size="sm" />
              <span>~/portfolio/blog</span>
            </div>
            <h1 className="font-display text-4xl font-semibold mb-2">
              Blog
            </h1>
            <p style={{ color: "#8B8FA3" }} className="text-[15px] leading-relaxed">
              Notes on what I built, what broke, and what I'd do differently
              next time — logged like commits.
            </p>
          </div>

          {/* Search + branch filter */}
          <div className="mb-10 space-y-3">
            <div
              className="flex items-center gap-2 px-4 py-3 rounded-lg font-mono text-sm"
              style={{ background: "#171923", border: "1px solid #262936" }}
            >
              <span style={{ color: "#5EEAD4" }}>$</span>
              <span style={{ color: "#8B8FA3" }}>git log --grep=</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='"jwt", "mongodb", "react"...'
                className="bg-transparent outline-none flex-1 font-mono"
                style={{ color: "#E8E8ED" }}
              />
              <FontAwesomeIcon icon={faSearch} size="sm" style={{ color: "#8B8FA3" }} />
            </div>

            <div className="flex flex-wrap gap-2">
              {BRANCHES.map((b) => (
                <button
                  key={b}
                  onClick={() => setBranch(b)}
                  className="branch-pill font-mono text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"
                  style={{
                    background: branch === b ? "#5EEAD4" : "#171923",
                    color: branch === b ? "#0F1117" : "#8B8FA3",
                    border: `1px solid ${branch === b ? "#5EEAD4" : "#262936"}`,
                  }}
                >
                  <FontAwesomeIcon icon={faCodeBranch} size="xs" />
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Pinned / HEAD post */}
          {pinned && (
            <button
              onClick={() => setSelected(pinned)}
              className="post-card w-full text-left mb-8 p-5 rounded-xl block"
              style={{
                background: "#171923",
                border: "1px solid #262936",
                transition: "border-color 0.15s ease",
              }}
            >
              <div className="flex items-center gap-2 mb-3 font-mono text-xs">
                <span
                  className="px-2 py-0.5 rounded"
                  style={{ background: "#F5A623", color: "#0F1117" }}
                >
                  HEAD → main
                </span>
                <span style={{ color: "#5EEAD4" }}>{pinned.hash}</span>
              </div>
              <h2 className="font-display text-xl font-semibold mb-2">
                {pinned.title}
              </h2>
              <p
                className="text-[14px] leading-relaxed mb-4"
                style={{ color: "#8B8FA3" }}
              >
                {pinned.excerpt}
              </p>
              <PostMeta post={pinned} />
            </button>
          )}

          {/* Commit-log list */}
          <div className="relative">
            {rest.length === 0 && !pinned && (
              <p className="font-mono text-sm py-12 text-center" style={{ color: "#8B8FA3" }}>
                No commits match that query.
              </p>
            )}
            {rest.map((post, i) => (
              <div key={post.hash} className="relative pl-10">
                {/* timeline dot + line */}
                <div
                  className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2"
                  style={{ background: "#0F1117", borderColor: "#5EEAD4" }}
                />
                {i < rest.length - 1 && (
                  <div
                    className="commit-line absolute left-[5px] top-4 w-[2px]"
                    style={{ height: "calc(100% - 8px)" }}
                  />
                )}

                <button
                  onClick={() => setSelected(post)}
                  className="post-card w-full text-left mb-7 p-4 rounded-lg block"
                  style={{
                    background: "#12141C",
                    border: "1px solid transparent",
                    transition: "border-color 0.15s ease, transform 0.15s ease",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                    <span style={{ color: "#5EEAD4" }}>{post.hash}</span>
                    <span style={{ color: "#3A3E4C" }}>·</span>
                    <span style={{ color: "#8B8FA3" }}>{post.branch}</span>
                  </div>
                  <h3 className="font-display text-[17px] font-semibold mb-1.5">
                    {post.title}
                  </h3>
                  <p
                    className="text-[13.5px] leading-relaxed mb-3"
                    style={{ color: "#8B8FA3" }}
                  >
                    {post.excerpt}
                  </p>
                  <PostMeta post={post} compact />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PostMeta({ post, compact }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-2 font-mono ${compact ? "text-[11px]" : "text-xs"
        }`}
      style={{ color: "#8B8FA3" }}
    >
      <span className="flex items-center gap-1">
        <FontAwesomeIcon icon={faCalendar} size={compact ? "xs" : "sm"} /> {formatDate(post.date)}
      </span>
      <span className="flex items-center gap-1">
        <FontAwesomeIcon icon={faClock} size={compact ? "xs" : "sm"} /> {post.readMins} min read
      </span>
      <span>
        <span style={{ color: "#5EEAD4" }}>+{post.stats.added}</span>{" "}
        <span style={{ color: "#E06C75" }}>-{post.stats.removed}</span>
      </span>
      <span className="flex items-center gap-1.5 flex-wrap">
        <FontAwesomeIcon icon={faTag} size={compact ? "xs" : "sm"} />
        {post.tags.map((t) => (
          <span
            key={t}
            className="px-1.5 py-0.5 rounded"
            style={{ background: "#171923", border: "1px solid #262936" }}
          >
            {t}
          </span>
        ))}
      </span>
    </div>
  );
}

function PostDetail({ post, onBack }) {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <button
        onClick={onBack}
        className="font-mono text-sm mb-10 flex items-center gap-2"
        style={{ color: "#5EEAD4" }}
      >
        <FontAwesomeIcon icon={faArrowLeft} size="sm" /> git checkout main
      </button>

      <div className="flex items-center gap-2 mb-4 font-mono text-xs">
        <FontAwesomeIcon icon={faCodeCommit} size="sm" style={{ color: "#5EEAD4" }} />
        <span style={{ color: "#5EEAD4" }}>{post.hash}</span>
        <span style={{ color: "#3A3E4C" }}>on</span>
        <span
          className="px-2 py-0.5 rounded"
          style={{ background: "#171923", border: "1px solid #262936", color: "#8B8FA3" }}
        >
          {post.branch}
        </span>
      </div>

      <h1 className="font-display text-3xl font-semibold mb-4 leading-tight">
        {post.title}
      </h1>

      <div className="mb-8">
        <PostMeta post={post} />
      </div>

      <div
        className="text-[15px] leading-[1.85] whitespace-pre-line"
        style={{ color: "#C7C9D4" }}
      >
        {post.body}
      </div>
    </div>
  );
}