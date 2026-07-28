import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Check,
  Copy,
  Terminal,
  Cpu,
  Layers,
  Zap,
  Database,
  Menu,
  X,
  Sparkles,
  MapPin,
  Briefcase,
  Play,
  RotateCcw,
  GitBranch,
  Activity,
  Code2,
  FileCode2,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  PROFILE DATA                                                      */
/* ------------------------------------------------------------------ */
const PROFILE = {
  name: "Mubashir Riaz",
  handle: "mubashir",
  role: "AI Backend Engineer",
  heading:
    "Building AI-powered backend systems, intelligent document automation, and production-ready APIs.",
  bio: "I specialise in Python, FastAPI, LLM integration, Retrieval-Augmented Generation (RAG), and scalable backend architecture.",
  location: "Open to Remote",
  email: "mubashiriaz10@gmail.com",
  avatar: "/profile.jpeg",
  github: "https://github.com/mubashir-riaz",
  linkedin: "https://www.linkedin.com/in/mubashir-riaz-51a881424/",
  available: true,
};

const PROJECTS = [
  {
    id: "invoice-guard",
    filename: "InvoiceGuard.py",
    language: "python",
    category: "AI AUDITING PLATFORM",
    name: "InvoiceGuard AI",
    tagline: "AI-Powered Freight Invoice Auditing Platform",
    description:
      "InvoiceGuard AI automates freight invoice auditing by extracting invoice data with Vision LLMs, validating charges against contracted rates, identifying overcharges, and generating dispute-ready summaries.",
    highlights: [
      "Multi-modal invoice extraction",
      "AI-powered charge validation",
      "Automated discrepancy detection",
      "Structured audit reports",
      "Draft dispute email generation",
    ],
    stack: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "LangChain",
      "Vision LLMs",
    ],
    codeSnippet: `def process_invoice(invoice_file):
    extracted_data = vision_llm.extract(invoice_file)

    audit_result = auditor.compare_rates(
        extracted_data
    )

    return audit_result`,
    github: "https://github.com/mubashir-riaz/InvoiceGuard-ai",
    // demo: "https://example.com",
  },
  {
    id: "docu-mind",
    filename: "DocuMind.py",
    language: "python",
    category: "VECTOR RAG SEARCH",
    name: "DocuMind AI",
    tagline: "AI Document Assistant with Retrieval-Augmented Generation",
    description:
      "Upload PDFs, Word documents, Excel files, PowerPoint presentations, and text files, then ask natural language questions with responses grounded in document context.",
    highlights: [
      "Multi-format document support",
      "Semantic search with ChromaDB",
      "Source-aware responses",
      "FastAPI backend",
      "React frontend",
    ],
    stack: ["FastAPI", "React", "Python", "ChromaDB", "Llama 3.3", "LangChain"],
    codeSnippet: `def ask_document(question, document_id):

    context = vector_store.search(
        question,
        document_id
    )

    return llm.generate(
        question,
        context
    )`,
    github: "https://github.com/mubashir-riaz/documind-ai",
    // demo: "https://example.com",
  },
];

const SKILLS = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "JavaScript", "SQL", "HTML", "CSS", "Bash"],
  },
  {
    category: "Backend & AI",
    icon: Cpu,
    items: [
      "FastAPI",
      "Pydantic",
      "LangChain",
      "LLMs",
      "RAG",
      "REST APIs",
      "Uvicorn",
    ],
  },
  {
    category: "Frontend",
    icon: Layers,
    items: ["React", "Vite", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Infrastructure",
    icon: Database,
    items: [
      "PostgreSQL",
      "Redis",
      "Docker",
      "Git",
      "GitHub Actions",
      "AWS",
      "ChromaDB",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  ANIMATED DEV TERMINAL COMPONENT                                   */
/* ------------------------------------------------------------------ */
function DevTerminal() {
  const [activeTab, setActiveTab] = useState("terminal");
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "sys", text: "Initializing Mubashir Riaz CLI v2.4.0..." },
    { type: "sys", text: "Connected to mubashir-backend-node" },
    { type: "cmd", text: "npx mubashir --status" },
    {
      type: "out",
      text: "✔ Status: Online | Backend API: FastAPI | RAG Engine: Ready",
    },
    { type: "cmd", text: "cat tech_stack.json" },
    {
      type: "out",
      text: '{\n  "name": "Mubashir Riaz",\n  "role": "AI Backend Engineer",\n  "core": ["Python", "FastAPI", "Pydantic", "RAG"],\n  "infrastructure": ["PostgreSQL", "Redis", "Docker", "AWS", "ChromaDB"]\n}',
    },
  ]);

  const terminalContainerRef = useRef(null);

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop =
        terminalContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdText) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const newHistory = [...history, { type: "cmd", text: raw }];

    const lower = raw.toLowerCase();
    if (lower === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else if (lower === "help") {
      newHistory.push({
        type: "out",
        text: "Available commands:\n  • status    - Check backend & AI pipeline status\n  • skills    - List core backend & AI tech stack\n  • projects  - View active production builds\n  • contact   - Display direct email & social links\n  • clear     - Clear terminal buffer",
      });
    } else if (lower === "status") {
      newHistory.push({
        type: "out",
        text: "[SYS_OK] All backend services operational.",
      });
    } else if (lower === "skills") {
      newHistory.push({
        type: "out",
        text: "STACK: Python, FastAPI, Pydantic, LangChain, LLMs, RAG, React, PostgreSQL, Redis, Docker, AWS, ChromaDB.",
      });
    } else if (lower === "projects") {
      newHistory.push({
        type: "out",
        text: "ACTIVE_PROJECTS:\n1. InvoiceGuard AI - Freight auditing platform\n2. DocuMind AI - AI document assistant with RAG",
      });
    } else if (lower === "contact") {
      newHistory.push({
        type: "out",
        text: `EMAIL: ${PROFILE.email}\nGITHUB: ${PROFILE.github}\nLINKEDIN: ${PROFILE.linkedin}`,
      });
    } else {
      newHistory.push({
        type: "out",
        text: `command not recognized: '${raw}'. Type 'help' for options.`,
      });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div className="rounded-xl bg-[#090b10] border border-slate-800/80 shadow-2xl overflow-hidden font-mono text-xs text-slate-300">
      {/* Terminal Title Bar */}
      <div className="bg-[#0f121a] px-4 py-2.5 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-slate-500 text-[11px] ml-2">
            bash - mubashir@backend-node
          </span>
        </div>

        {/* Terminal Tabs */}
        <div className="flex items-center gap-1 bg-[#090b10] p-1 rounded-md border border-slate-800/60">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-2.5 py-0.5 rounded text-[11px] transition-colors ${
              activeTab === "terminal"
                ? "bg-slate-800 text-slate-100 font-semibold"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            ~/cli-session
          </button>
          <button
            onClick={() => setActiveTab("activity")}
            className={`px-2.5 py-0.5 rounded text-[11px] transition-colors ${
              activeTab === "activity"
                ? "bg-slate-800 text-slate-100 font-semibold"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            ~/system_logs
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      {activeTab === "terminal" ? (
        <div
          ref={terminalContainerRef}
          className="p-4 h-72 overflow-y-auto space-y-3 bg-[#07090e]"
        >
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === "sys" && (
                <div className="text-slate-500 italic">// {item.text}</div>
              )}
              {item.type === "cmd" && (
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="text-sky-400 font-bold">
                    mubashir@backend:~$
                  </span>
                  <span>{item.text}</span>
                </div>
              )}
              {item.type === "out" && (
                <pre className="text-slate-400 whitespace-pre-wrap pl-4 border-l border-slate-800 mt-1">
                  {item.text}
                </pre>
              )}
            </div>
          ))}

          {/* Interactive Command Prompt Line */}
          <form
            onSubmit={handleFormSubmit}
            className="flex items-center gap-2 pt-2 text-slate-200"
          >
            <span className="text-sky-400 font-bold">mubashir@backend:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'skills', or 'projects'..."
              className="bg-transparent border-none outline-none flex-1 text-slate-100 font-mono text-xs placeholder:text-slate-600"
            />
            <span className="w-2 h-4 bg-sky-400 animate-cursor inline-block" />
          </form>
        </div>
      ) : (
        /* Activity Log View */
        <div className="p-4 h-72 overflow-y-auto space-y-2 bg-[#07090e] text-[11px] font-mono">
          <div className="text-emerald-400">
            [INFO] FastAPI server listening on 0.0.0.0:8000
          </div>
          <div className="text-slate-400">
            [LOG] ChromaDB vector store initialized
          </div>
          <div className="text-slate-400">
            [AUDIT] Vision LLM document parser active
          </div>
          <div className="text-sky-400">[LLM] LangChain RAG pipeline ready</div>
          <div className="text-slate-500">
            [HEALTH] All system services operational
          </div>
        </div>
      )}

      {/* Quick Interactive Command Buttons Footer */}
      <div className="bg-[#0b0e16] px-4 py-2 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-[11px] text-slate-500">
          <span>Quick Run:</span>
          <button
            onClick={() => handleCommand("help")}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            help
          </button>
          <button
            onClick={() => handleCommand("skills")}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            skills
          </button>
          <button
            onClick={() => handleCommand("projects")}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            projects
          </button>
          <button
            onClick={() => handleCommand("clear")}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            clear
          </button>
        </div>

        <span className="text-[10px] text-slate-600 font-mono">
          UTF-8 | Python 3.12
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN PORTFOLIO COMPONENT                                          */
/* ------------------------------------------------------------------ */
export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050609] text-slate-200 font-sans bg-dev-grid relative">
      {/* ------------------------------------------------------------ */}
      {/* DEV TOOLS TOP BAR / HEADER                                   */}
      {/* ------------------------------------------------------------ */}
      <header className="sticky top-0 z-50 bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between text-xs">
          <a
            href="#top"
            className="flex items-center gap-2 text-slate-200 hover:text-sky-400 transition-colors font-mono font-semibold"
          >
            <Terminal className="w-4 h-4 text-sky-400" />
            <span>&lt;MubashirRiaz /&gt;</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-slate-400 font-medium">
            <a href="#about" className="hover:text-slate-100 transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-slate-100 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-slate-100 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-slate-100 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-slate-100 transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-slate-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-400"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#090b10] border-b border-slate-800 px-6 py-4 flex flex-col gap-3 text-sm">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-400 hover:text-slate-100"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-400 hover:text-slate-100"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-400 hover:text-slate-100"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-400 hover:text-slate-100"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* ------------------------------------------------------------ */}
      {/* HERO SECTION                                                 */}
      {/* ------------------------------------------------------------ */}
      <section
        id="top"
        className="max-w-7xl mx-auto px-6 sm:px-10 pt-12 pb-16 lg:pt-20 lg:pb-24"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (6 cols): Developer Profile & Heading */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              {/* Profile Photo Container */}
              <div className="relative w-16 h-16 rounded-xl bg-slate-900 border border-slate-700/80 overflow-hidden shadow-lg shrink-0">
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="font-mono text-xs text-sky-400 font-semibold tracking-wide">
                  // {PROFILE.handle}
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-100">
                  {PROFILE.name}
                </h1>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {PROFILE.role}
                </p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 leading-snug">
              {PROFILE.heading}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {PROFILE.bio}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-100 font-medium text-xs font-mono px-4 py-2.5 rounded-lg transition-colors shadow-md"
              >
                <Play size={14} className="text-sky-400" />
                View Projects
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 bg-[#090b10] hover:bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs px-4 py-2.5 rounded-lg transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">
                      Copied to clipboard!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-slate-400" />
                    <span>{PROFILE.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Focus Strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-2.5 rounded bg-[#090b10] border border-slate-800/80">
                <div className="text-slate-500 text-[10px]">
                  // SPECIALISATION
                </div>
                <div className="text-sm font-bold text-slate-100 mt-0.5">
                  AI Backend
                </div>
                <div className="text-[10px] text-slate-400">
                  APIs & Workflows
                </div>
              </div>
              <div className="p-2.5 rounded bg-[#090b10] border border-slate-800/80">
                <div className="text-slate-500 text-[10px]">// CORE ENGINE</div>
                <div className="text-sm font-bold text-slate-100 mt-0.5">
                  RAG & LLMs
                </div>
                <div className="text-[10px] text-slate-400">
                  Document Search
                </div>
              </div>
              <div className="p-2.5 rounded bg-[#090b10] border border-slate-800/80">
                <div className="text-slate-500 text-[10px]">
                  // PRIMARY STACK
                </div>
                <div className="text-sm font-bold text-slate-100 mt-0.5">
                  Python
                </div>
                <div className="text-[10px] text-slate-400">
                  FastAPI & Pydantic
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Animated Dev CLI Terminal */}
          <div className="lg:col-span-6">
            <DevTerminal />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* ABOUT SECTION                                                */}
      {/* ------------------------------------------------------------ */}
      <section
        id="about"
        className="border-t border-slate-800/80 py-16 bg-[#08090e]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 font-mono">
              <span className="text-xs text-sky-400 tracking-wider">
                // ABOUT
              </span>
              <h2 className="text-2xl font-bold text-slate-100 mt-2 font-sans">
                Engineering Philosophy
              </h2>
            </div>
            <div className="lg:col-span-8 text-slate-400 space-y-4 text-sm leading-relaxed">
              <p>
                I enjoy solving real business problems with AI instead of
                building AI for its own sake.
              </p>
              <p>
                My focus is designing reliable backend systems that automate
                document-heavy workflows, integrate Large Language Models into
                production APIs, and provide accurate, explainable results
                through Retrieval-Augmented Generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* FEATURED PROJECTS                                            */}
      {/* ------------------------------------------------------------ */}
      <section id="projects" className="border-t border-slate-800/80 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 font-mono">
            <div>
              <span className="text-xs text-sky-400">// PROJECTS</span>
              <h2 className="text-3xl font-bold text-slate-100 mt-2 font-sans">
                Featured Projects
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              [ Integrated IDE Inspection ]
            </p>
          </div>

          <div className="space-y-12">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="rounded-xl bg-[#08090e] border border-slate-800/80 overflow-hidden shadow-xl grid lg:grid-cols-12 gap-0"
              >
                {/* Project Info Panel (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-100">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-xs font-mono text-slate-400">
                    {project.tagline}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-400"
                      >
                        <Zap
                          size={13}
                          className="text-sky-400 shrink-0 mt-0.5"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#0c0e15] border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4 font-mono text-xs">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
                    >
                      <Github size={14} /> Repository
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>

                {/* IDE Code Viewer (5 cols) */}
                <div className="lg:col-span-5 bg-[#050609] p-5 font-mono text-xs text-slate-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 text-slate-500 text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <FileCode2 size={13} className="text-sky-400" />
                        <span>{project.filename}</span>
                      </div>
                      <span>{project.language}</span>
                    </div>

                    <pre className="overflow-x-auto text-[11px] leading-relaxed text-slate-300">
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span>UTF-8 | Python 3.12</span>
                    <span className="text-slate-400">Main Branch</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* TECHNICAL SKILLS                                             */}
      {/* ------------------------------------------------------------ */}
      <section
        id="skills"
        className="border-t border-slate-800/80 py-20 bg-[#08090e]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="mb-10 font-mono">
            <span className="text-xs text-sky-400">// SKILLS</span>
            <h2 className="text-3xl font-bold text-slate-100 mt-2 font-sans">
              Skills &amp; Architecture
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((group) => {
              const IconComp = group.icon;
              return (
                <div
                  key={group.category}
                  className="p-5 rounded-xl bg-[#090b10] border border-slate-800/80 hover:border-slate-700/80 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-4 text-sky-400 font-mono text-xs font-semibold">
                    <IconComp size={16} />
                    <span>{group.category}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <span
                        key={`${skill}-${i}`}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-[#06080c] border border-slate-800 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* CONTACT SECTION                                              */}
      {/* ------------------------------------------------------------ */}
      <section id="contact" className="border-t border-slate-800/80 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="font-mono text-xs text-sky-400">// CONTACT</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
              Let's Build Something Intelligent
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed pt-1">
              Whether you're building an AI product, need backend expertise, or
              want to automate business workflows, I'd love to hear about your
              project.
            </p>

            <div className="pt-2">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Available for:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#08090e] border border-slate-800/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span>AI Backend Engineering</span>
                </li>
                <li className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#08090e] border border-slate-800/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span>AI Automation &amp; LLM Solutions</span>
                </li>
                <li className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#08090e] border border-slate-800/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span>Freelance Projects</span>
                </li>
                <li className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#08090e] border border-slate-800/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span>Technical Collaborations</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 font-mono">
              <div className="p-4 rounded-xl bg-[#08090e] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-sky-400 font-bold">$</span>
                  <span className="text-slate-500">mail --to</span>
                  <span className="text-slate-100 font-semibold">
                    {PROFILE.email}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    onClick={copyEmail}
                    className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-1.5"
                  >
                    {copied ? (
                      <Check size={14} className="text-emerald-400" />
                    ) : (
                      <Copy size={14} />
                    )}
                    {copied ? "Copied" : "Copy Email"}
                  </button>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="px-4 py-2 rounded bg-sky-600 hover:bg-sky-500 text-white font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <Mail size={14} /> Get in Touch
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-center gap-8 font-mono text-xs text-slate-400">
              <a
                href={`mailto:${PROFILE.email}`}
                className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-8 text-center font-mono text-xs text-slate-600">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. Built with React, Vite
          &amp; Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
