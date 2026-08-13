import React, { useState, useEffect, useRef } from "react";
import {
  Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin,
  Menu, X, ChevronRight, Radio
} from "lucide-react";

const INK = "#10283A";
const INK_SOFT = "#3C5A6B";
const PAPER = "#EEF3F5";
const PAPER_LINE = "#CFDEE4";
const CARD = "#FFFFFF";
const COPPER = "#C1723C";
const TEAL = "#2E6E78";

const skillGroups = [
  { label: "FRONT-END", items: ["React.js", "JavaScript", "Angular", "React Native", "HTML / CSS"] },
  { label: "BACK-END", items: ["C# / .NET", "ASP.NET Core", "Java", "Python / Flask", "REST APIs"] },
  { label: "DATA", items: ["MS SQL Server", "MySQL", "Stored Procedures"] },
  { label: "SECURITY", items: ["JWT / OAuth", "RBAC", "API Security"] },
  { label: "CLOUD / OPS", items: ["AWS (EC2, S3)", "Docker", "Jenkins CI/CD", "Git"] },
];

const experience = [
  {
    role: "Software Developer",
    org: "Fluid Intellect",
    dates: "Jan 2023 — Jan 2026",
    points: [
      "Architected RESTful backend services in C#/.NET and Java powering AI-driven reporting pipelines.",
      "Designed cross-system APIs integrating 5+ data sources, cutting manual reconciliation effort.",
      "Optimised MS SQL Server — indexing & stored procedures — for ~35% faster key reports.",
      "Led development of Satori, an in-house generative AI data platform.",
    ],
  },
  {
    role: "Software Developer",
    org: "XGile-IT",
    dates: "Jun 2022 — Dec 2022",
    points: [
      "Built REST APIs for high-volume transactional systems in the financial sector.",
      "Integrated Java/.NET services with React.js front-ends for seamless data flow.",
    ],
  },
];

const projects = [
  {
    id: "01",
    name: "FaceGuard AI",
    tag: "Honours Capstone — Security",
    desc: "Full-stack facial-recognition access control system with role-based permissions and live security alerting.",
    stack: ["Python", "Flask", "MySQL", "React.js", "React Native", "SocketIO"],
  },
  {
    id: "02",
    name: "Satori",
    tag: "Generative AI Data Analyst",
    desc: "Natural-language data platform: SSE streaming, JWT auth, and automated chart generation over structured data.",
    stack: ["Python", "Flask", "LangChain", "OpenAI", "MySQL"],
  },
  {
    id: "03",
    name: "Assistable",
    tag: "Service Marketplace",
    desc: "Full-stack booking marketplace with secure JWT auth, real-time messaging, and location services.",
    stack: ["Java", "C#/.NET", "React Native", "Node.js", "SQL Server"],
  },
  {
    id: "04",
    name: "Canteen System",
    tag: "Ordering & Inventory",
    desc: "Digital food-ordering and inventory platform with role-based dashboards for schools and offices.",
    stack: ["Node.js", "React.js", "React Native", "MySQL"],
  },
];

const education = [
  { deg: "BSc Honours — Computer Science", org: "Tshwane University of Technology", dates: "2026 — Present" },
  { deg: "Advanced Diploma — Computer Science", org: "Tshwane University of Technology", dates: "2025" },
  { deg: "National Diploma — Computer Science", org: "Tshwane University of Technology", dates: "2023" },
];

function GridBackdrop() {
  return (
    <div
      style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${PAPER_LINE} 1px, transparent 1px), linear-gradient(90deg, ${PAPER_LINE} 1px, transparent 1px)`,
        backgroundSize: "36px 36px",
        opacity: 0.55,
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)",
      }}
    />
  );
}

function Tag({ children }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-sm text-xs mr-2 mb-2"
      style={{ border: `1px solid ${PAPER_LINE}`, color: INK_SOFT, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.02em" }}
    >
      {children}
    </span>
  );
}

function Eyebrow({ n, children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span style={{ fontFamily: "'JetBrains Mono', monospace", color: COPPER, fontSize: "13px" }}>FIG. {n}</span>
      <span style={{ height: 1, width: 36, background: PAPER_LINE }} />
      <span style={{ fontFamily: "'JetBrains Mono', monospace", color: INK_SOFT, fontSize: "13px", letterSpacing: "0.12em" }}>{children.toUpperCase()}</span>
    </div>
  );
}

function HeroDiagram() {
  const nodes = [
    { x: 90, y: 40, label: "REACT" },
    { x: 300, y: 20, label: "C# / .NET" },
    { x: 480, y: 55, label: "PYTHON" },
    { x: 470, y: 150, label: "SECURITY" },
    { x: 260, y: 175, label: "SQL" },
    { x: 80, y: 145, label: "CLOUD" },
  ];
  const cx = 280, cy = 100;
  return (
    <svg viewBox="0 0 560 220" className="w-full h-auto" style={{ maxWidth: 560 }}>
      {nodes.map((n, i) => (
        <line key={i} x1={cx} y1={cy} x2={n.x} y2={n.y} stroke={PAPER_LINE} strokeWidth="1.5" strokeDasharray="4 4" />
      ))}
      <circle cx={cx} cy={cy} r="34" fill={CARD} stroke={COPPER} strokeWidth="1.5" />
      <text x={cx} y={cy + 4} textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fill: INK }}>D.EBULA</text>
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="4" fill={TEAL} />
          <rect x={n.x - 34} y={n.y + 10} width="68" height="18" fill={CARD} stroke={PAPER_LINE} />
          <text x={n.x} y={n.y + 22} textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, fill: INK_SOFT }}>{n.label}</text>
        </g>
      ))}
    </svg>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const sectionRefs = useRef({});

  const navItems = ["about", "skills", "experience", "projects", "education", "contact"];

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    navItems.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: PAPER, color: INK, fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        html { scroll-behavior: smooth; }
        .disp { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      {/* Nav */}
      <div className="sticky top-0 z-40" style={{ background: `${PAPER}E6`, backdropFilter: "blur(6px)", borderBottom: `1px solid ${PAPER_LINE}` }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("about")} className="disp font-semibold text-lg tracking-tight" style={{ color: INK }}>
            D. EBULA
          </button>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="px-3 py-1.5 text-sm rounded-sm transition-colors"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: active === id ? COPPER : INK_SOFT,
                  background: active === id ? "#FFFFFF" : "transparent",
                  border: active === id ? `1px solid ${PAPER_LINE}` : "1px solid transparent",
                }}
              >
                {id}
              </button>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-1">
            {navItems.map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left py-2 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace", color: INK_SOFT }}>
                {id}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Hero */}
      <section id="about" className="relative overflow-hidden">
        <GridBackdrop />
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 relative">
          <div className="flex items-center gap-3 mb-6" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: INK_SOFT }}>
            <Radio size={13} style={{ color: COPPER }} />
            <span>25.75°S 28.19°E — PRETORIA, SOUTH AFRICA</span>
          </div>
          <h1 className="disp font-semibold leading-[1.05] mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}>
            Building systems that<br />people trust with <span style={{ color: COPPER }}>React.</span>
          </h1>
          <p className="max-w-xl mb-8 leading-relaxed" style={{ color: INK_SOFT, fontSize: 17 }}>
            Full-stack software developer with 3+ years of experience shipping React front-ends,
            secure APIs, and data-driven platforms. Currently completing a BSc Honours in Computer
            Science, and looking for a React-focused internship or graduate role to keep building.
          </p>
          <div className="flex flex-wrap gap-3 mb-16">
            <button onClick={() => scrollTo("projects")} className="disp inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium" style={{ background: INK, color: PAPER }}>
              View Projects <ArrowUpRight size={15} />
            </button>
            <button onClick={() => scrollTo("contact")} className="disp inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium" style={{ border: `1px solid ${INK}`, color: INK }}>
              Get in Touch
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <HeroDiagram />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
        <Eyebrow n="02">Skills & Stack</Eyebrow>
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((g) => (
            <div key={g.label} className="p-5" style={{ background: CARD, border: `1px solid ${PAPER_LINE}` }}>
              <div className="mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: COPPER, letterSpacing: "0.1em" }}>{g.label}</div>
              <div className="flex flex-wrap">
                {g.items.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          ))}
          <div className="p-5 flex flex-col justify-center" style={{ border: `1px dashed ${PAPER_LINE}` }}>
            <div className="mb-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: INK_SOFT, letterSpacing: "0.1em" }}>LANGUAGES</div>
            <div className="disp text-sm" style={{ color: INK }}>English — Fluent</div>
            <div className="disp text-sm" style={{ color: INK }}>French — Native</div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16">
        <Eyebrow n="03">Experience</Eyebrow>
        <div className="relative pl-6" style={{ borderLeft: `1px solid ${PAPER_LINE}` }}>
          {experience.map((e, i) => (
            <div key={i} className="mb-10 relative">
              <div className="absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full" style={{ background: COPPER }} />
              <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                <h3 className="disp font-semibold text-lg">{e.role}</h3>
                <span style={{ color: TEAL, fontWeight: 600, fontSize: 14 }}>{e.org}</span>
              </div>
              <div className="mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: INK_SOFT }}>{e.dates}</div>
              <ul className="space-y-1.5">
                {e.points.map((p, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed" style={{ color: INK_SOFT }}>
                    <ChevronRight size={14} style={{ marginTop: 3, flexShrink: 0, color: COPPER }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <Eyebrow n="04">Selected Projects</Eyebrow>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div key={p.id} className="p-6 flex flex-col" style={{ background: CARD, border: `1px solid ${PAPER_LINE}` }}>
              <div className="flex items-start justify-between mb-3">
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: PAPER_LINE, fontWeight: 500 }}>{p.id}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: TEAL }}>{p.tag}</span>
              </div>
              <h3 className="disp font-semibold text-xl mb-2">{p.name}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: INK_SOFT }}>{p.desc}</p>
              <div className="mt-auto flex flex-wrap">
                {p.stack.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto px-6 py-16">
        <Eyebrow n="05">Education & Certification</Eyebrow>
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {education.map((ed, i) => (
            <div key={i} className="p-5" style={{ background: CARD, border: `1px solid ${PAPER_LINE}` }}>
              <div className="mb-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: INK_SOFT }}>{ed.dates}</div>
              <div className="disp font-semibold mb-1" style={{ fontSize: 15 }}>{ed.deg}</div>
              <div className="text-sm" style={{ color: TEAL }}>{ed.org}</div>
            </div>
          ))}
        </div>
        <div className="p-5 inline-flex items-center gap-3" style={{ border: `1px dashed ${PAPER_LINE}` }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: COPPER }}>CERT</span>
          <span className="text-sm" style={{ color: INK }}>Cisco CCNA — Networking Fundamentals (Introductory Level)</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden" style={{ background: INK }}>
        <div className="max-w-5xl mx-auto px-6 py-20 relative">
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#8FA6B3", letterSpacing: "0.1em" }} className="mb-4">FIG. 06 — CONTACT</div>
          <h2 className="disp font-semibold leading-tight mb-8" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: PAPER }}>
            Open to React internships<br />and graduate roles.
          </h2>
          <div className="flex flex-col gap-4 mb-10">
            <a href="mailto:davidebula642@gmail.com" className="inline-flex items-center gap-3 text-sm w-fit" style={{ color: "#D8E4E9" }}>
              <Mail size={16} style={{ color: COPPER }} /> davidebula642@gmail.com
            </a>
            <a href="tel:+27678192979" className="inline-flex items-center gap-3 text-sm w-fit" style={{ color: "#D8E4E9" }}>
              <Phone size={16} style={{ color: COPPER }} /> +27 67 819 2979
            </a>
            <div className="inline-flex items-center gap-3 text-sm w-fit" style={{ color: "#D8E4E9" }}>
              <MapPin size={16} style={{ color: COPPER }} /> Pretoria, Gauteng, South Africa
            </div>
          </div>
          <div className="flex gap-4">
            <a href="https://davidmumpasa.github.io" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium disp" style={{ background: PAPER, color: INK }}>
              <Github size={15} /> Portfolio Site
            </a>
            <a href="mailto:davidebula642@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium disp" style={{ border: "1px solid #3C5A6B", color: PAPER }}>
              <Linkedin size={15} /> Let's Connect
            </a>
          </div>
        </div>
      </section>

      <div className="text-center py-6" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: INK_SOFT, background: PAPER }}>
        © {new Date().getFullYear()} DAVID EBULA — BUILT WITH REACT
      </div>
    </div>
  );
}
