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
  Code2,
  FileCode2,
  Play,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  PROFILE DATA                                                      */
/* ------------------------------------------------------------------ */
const PROFILE = {
  name: "Mubashir Riaz",
  handle: "mubashir",
  role: "AI Backend Engineer & Intelligent Systems Developer",
  heading: "Building intelligent backend systems that solve real-world problems.",
  bio: "I build production-ready APIs, AI-powered document workflows, and scalable backend architectures that are reliable, maintainable, and designed for real-world applications.",
  email: "mubashiriaz10@gmail.com",
  avatar: "/profile.jpeg",
  github: "https://github.com/mubashir-riaz",
  linkedin: "https://www.linkedin.com/in/mubashir-riaz-51a881424/",
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
      "Multi-modal invoice extraction with Vision LLMs",
      "AI-powered charge & contract rate validation",
      "Automated overcharge discrepancy detection",
      "Structured audit reports & dispute email generation",
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
      "Multi-format document parsing & chunking",
      "Semantic vector search with ChromaDB",
      "Source-aware grounded response generation",
      "FastAPI backend & React frontend interface",
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
/*  TYPEWRITER ANIMATED TEXT COMPONENT                                */
/* ------------------------------------------------------------------ */
function TypewriterText({ words }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[currentWordIndex];
    const speed = isDeleting ? 25 : 55;

    if (!isDeleting && currentText === targetWord) {
      const timeout = setTimeout(() => setIsDeleting(true), 2400);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting
          ? targetWord.substring(0, prev.length - 1)
          : targetWord.substring(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="inline-flex items-center font-mono">
      <span className="text-[#F5F5F5] font-semibold">{currentText}</span>
      <span className="w-1.5 h-3.5 ml-1 bg-emerald-400 animate-pulse rounded-xs" />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  SYNTAX HIGHLIGHTED CODE SNIPPET COMPONENT                         */
/* ------------------------------------------------------------------ */
function SyntaxHighlightedCode({ code }) {
  const lines = code.split("\n");
  return (
    <div className="font-mono text-[11px] leading-relaxed space-y-0.5">
      {lines.map((line, idx) => {
        if (line.startsWith("def ")) {
          const parts = line.split("(");
          const fnName = parts[0].replace("def ", "");
          const rest = parts.slice(1).join("(");
          return (
            <div key={idx}>
              <span className="text-purple-400 font-semibold">def </span>
              <span className="text-blue-400 font-semibold">{fnName}</span>
              <span className="text-[#A3A3A3]">({rest}</span>
            </div>
          );
        }
        if (line.trim().startsWith("return ")) {
          const indent = line.substring(0, line.indexOf("return"));
          const val = line.trim().replace("return ", "");
          return (
            <div key={idx}>
              <span>{indent}</span>
              <span className="text-rose-400 font-semibold">return </span>
              <span className="text-emerald-300">{val}</span>
            </div>
          );
        }
        if (line.includes(" = ")) {
          const parts = line.split(" = ");
          return (
            <div key={idx}>
              <span className="text-[#F5F5F5]">{parts[0]}</span>
              <span className="text-purple-400 font-semibold"> = </span>
              <span className="text-sky-300">{parts.slice(1).join(" = ")}</span>
            </div>
          );
        }
        return <div key={idx} className="text-[#A3A3A3]">{line}</div>;
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MINIMAL DEV TERMINAL COMPONENT WITH GENUINE COLOR ACCENTS         */
/* ------------------------------------------------------------------ */
function DevTerminal() {
  const [activeTab, setActiveTab] = useState("terminal");
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "sys", text: "Initializing Mubashir Riaz Production Node v2.4.0..." },
    { type: "cmd", text: "python status.py" },
    {
      type: "out",
      text: "✔ API Server ........ Running [FastAPI]\n✔ PostgreSQL ........ Connected [Port 5432]\n✔ Redis ............. Connected [Cache Ready]\n✔ AI Model .......... Ready [Llama 3.3]\n✔ RAG Pipeline ...... Active [ChromaDB]\n\nSystem Status: ONLINE",
    },
    { type: "cmd", text: "deploy --env production" },
    {
      type: "out",
      text: "Building container image...\n✓ Docker Image Created\n✓ Unit & Integration Tests Passed\n✓ API Services Deployed\n\nProduction Status: ONLINE",
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

  const renderColoredOutput = (text) => {
    return text.split("\n").map((line, i) => {
      if (line.includes("✔") || line.includes("✓")) {
        return (
          <div key={i} className="flex items-center gap-1.5 py-0.5">
            <span className="text-emerald-400 font-bold">✔</span>
            <span className="text-[#F5F5F5]">{line.replace("✔", "").replace("✓", "")}</span>
          </div>
        );
      }
      if (line.includes("System Status: ONLINE") || line.includes("Production Status: ONLINE")) {
        return (
          <div key={i} className="text-emerald-400 font-bold pt-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{line}</span>
          </div>
        );
      }
      return <div key={i}>{line}</div>;
    });
  };

  return (
    <div className="rounded-xl bg-[#111111] border border-[#262626] shadow-2xl overflow-hidden font-mono text-xs text-[#A3A3A3]">
      {/* Terminal Title Bar */}
      <div className="bg-[#0A0A0A] px-3 sm:px-4 py-2.5 border-b border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
          </div>
          <span className="text-[#A3A3A3] text-[11px] sm:text-xs ml-1 sm:ml-2 font-medium truncate">
            bash - mubashir@backend-node
          </span>
        </div>

        {/* Terminal Tabs */}
        <div className="flex items-center gap-1 bg-[#111111] p-1 rounded-md border border-[#262626] shrink-0 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex-1 sm:flex-none text-center px-2.5 py-1 sm:py-0.5 rounded text-[11px] transition-colors whitespace-nowrap ${
              activeTab === "terminal"
                ? "bg-[#1A1A1A] text-emerald-400 font-semibold"
                : "text-[#737373] hover:text-[#F5F5F5]"
            }`}
          >
            ~/cli-session
          </button>
          <button
            onClick={() => setActiveTab("activity")}
            className={`flex-1 sm:flex-none text-center px-2.5 py-1 sm:py-0.5 rounded text-[11px] transition-colors whitespace-nowrap ${
              activeTab === "activity"
                ? "bg-[#1A1A1A] text-sky-400 font-semibold"
                : "text-[#737373] hover:text-[#F5F5F5]"
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
          className="p-3 sm:p-4 h-72 overflow-y-auto space-y-3 bg-[#0A0A0A]"
        >
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === "sys" && (
                <div className="text-[#737373] italic">// {item.text}</div>
              )}
              {item.type === "cmd" && (
                <div className="flex items-center gap-2 text-[#F5F5F5] flex-wrap">
                  <span className="text-emerald-400 font-bold shrink-0">
                    mubashir@backend:~$
                  </span>
                  <span className="text-sky-300 font-medium break-all">{item.text}</span>
                </div>
              )}
              {item.type === "out" && (
                <div className="text-[#A3A3A3] whitespace-pre-wrap break-words pl-3 border-l-2 border-[#262626] mt-1 font-mono text-[11px]">
                  {renderColoredOutput(item.text)}
                </div>
              )}
            </div>
          ))}

          {/* Interactive Command Prompt Line */}
          <form
            onSubmit={handleFormSubmit}
            className="flex items-center gap-2 pt-2 text-[#F5F5F5] flex-wrap sm:flex-nowrap"
          >
            <span className="text-emerald-400 font-bold shrink-0">mubashir@backend:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'skills', or 'projects'..."
              className="bg-transparent border-none outline-none flex-1 min-w-0 text-[#F5F5F5] font-mono text-xs placeholder:text-[#737373]"
            />
          </form>
        </div>
      ) : (
        /* Activity Log View */
        <div className="p-3 sm:p-4 h-72 overflow-y-auto space-y-2 bg-[#0A0A0A] text-[11px] font-mono text-[#A3A3A3]">
          <div><span className="text-emerald-400 font-semibold">[INFO]</span> FastAPI server listening on 0.0.0.0:8000</div>
          <div><span className="text-sky-400 font-semibold">[LOG]</span> ChromaDB vector store initialized</div>
          <div><span className="text-purple-400 font-semibold">[AUDIT]</span> Vision LLM document parser active</div>
          <div><span className="text-indigo-400 font-semibold">[LLM]</span> LangChain RAG pipeline ready</div>
          <div><span className="text-emerald-400 font-semibold">[HEALTH]</span> All system services operational</div>
        </div>
      )}

      {/* Quick Interactive Command Buttons Footer */}
      <div className="bg-[#0A0A0A] px-3 sm:px-4 py-2 border-t border-[#262626] flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] text-[#A3A3A3]">
          <span className="text-[#737373] shrink-0">Quick Run:</span>
          <button
            onClick={() => handleCommand("help")}
            className="px-2 py-0.5 rounded bg-[#1A1A1A] hover:bg-[#262626] border border-[#262626] text-sky-300 transition-colors"
          >
            help
          </button>
          <button
            onClick={() => handleCommand("skills")}
            className="px-2 py-0.5 rounded bg-[#1A1A1A] hover:bg-[#262626] border border-[#262626] text-emerald-300 transition-colors"
          >
            skills
          </button>
          <button
            onClick={() => handleCommand("projects")}
            className="px-2 py-0.5 rounded bg-[#1A1A1A] hover:bg-[#262626] border border-[#262626] text-purple-300 transition-colors"
          >
            projects
          </button>
          <button
            onClick={() => handleCommand("clear")}
            className="px-2 py-0.5 rounded bg-[#1A1A1A] hover:bg-[#262626] border border-[#262626] text-[#A3A3A3] transition-colors"
          >
            clear
          </button>
        </div>

        <span className="text-[10px] text-[#737373] font-mono shrink-0">
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
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans relative">
      {/* ------------------------------------------------------------ */}
      {/* HEADER / NAVIGATION BAR                                      */}
      {/* ------------------------------------------------------------ */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 h-16 flex items-center justify-between text-xs">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-[#F5F5F5] hover:text-white transition-colors font-mono font-bold text-sm tracking-tight group"
          >
            <div className="p-1.5 rounded-lg bg-[#111111] border border-[#262626] text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <span>&lt;MubashirRiaz /&gt;</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 text-[#A3A3A3] font-medium font-sans">
            <a
              href="#about"
              className="px-3.5 py-1.5 rounded-lg hover:bg-[#1A1A1A] hover:text-[#F5F5F5] transition-all text-xs"
            >
              About
            </a>
            <a
              href="#projects"
              className="px-3.5 py-1.5 rounded-lg hover:bg-[#1A1A1A] hover:text-[#F5F5F5] transition-all text-xs"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="px-3.5 py-1.5 rounded-lg hover:bg-[#1A1A1A] hover:text-[#F5F5F5] transition-all text-xs"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg hover:bg-[#1A1A1A] hover:text-[#F5F5F5] transition-all text-xs"
            >
              Contact
            </a>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 border-r border-[#262626] pr-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-[#A3A3A3] hover:text-white hover:bg-[#1A1A1A] rounded-lg transition-all"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-[#A3A3A3] hover:text-white hover:bg-[#1A1A1A] rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>

            <button
              onClick={copyEmail}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#111111] hover:bg-[#1A1A1A] border border-[#262626] text-[#F5F5F5] font-mono text-[11px] font-medium transition-all"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Mail size={13} className="text-[#A3A3A3]" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#A3A3A3] hover:text-white rounded-lg bg-[#111111] border border-[#262626]"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A0A0A] border-b border-[#262626] px-6 py-4 flex flex-col gap-3 text-sm font-sans">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#A3A3A3] hover:text-white py-1"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#A3A3A3] hover:text-white py-1"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#A3A3A3] hover:text-white py-1"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#A3A3A3] hover:text-white py-1"
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
        className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (6 cols): Developer Profile & Heading */}
          <div className="lg:col-span-6 space-y-6">
            {/* Profile Avatar & Name Block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#111111] border border-[#262626] overflow-hidden shadow-md shrink-0">
                  <img
                    src={PROFILE.avatar}
                    alt={PROFILE.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-2 min-w-0 max-w-full">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display bg-gradient-to-r from-white via-[#F5F5F5] to-[#A3A3A3] bg-clip-text text-transparent">
                  {PROFILE.name}
                </h1>
                <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#111111] border border-[#262626] font-mono text-[11px] sm:text-xs font-medium text-[#F5F5F5] shadow-sm max-w-full overflow-hidden">
                  <span className="text-emerald-400 font-bold mr-2 shrink-0">//</span>
                  <TypewriterText
                    words={[
                      "AI Backend Engineer & Intelligent Systems Developer",
                      "Building Production-Ready AI Applications",
                      "FastAPI & RAG Systems Specialist",
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5] leading-snug font-display">
              {PROFILE.heading}
            </h2>

            {/* Subheading */}
            <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed max-w-xl font-sans">
              {PROFILE.bio}
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-[#E5E5E5] text-[#0A0A0A] font-semibold text-xs font-mono px-5 py-3 rounded-lg border border-[#E5E5E5] transition-colors shadow-sm text-center"
              >
                <Play size={14} className="fill-[#0A0A0A]" />
                Explore My Work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#1A1A1A] border border-[#262626] text-[#F5F5F5] font-mono text-xs px-5 py-3 rounded-lg transition-colors text-center"
              >
                <Mail size={14} className="text-[#A3A3A3]" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-4 border-t border-[#262626] flex flex-wrap items-center gap-6 font-mono text-xs text-[#A3A3A3]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  <strong className="text-[#F5F5F5] font-semibold">10+</strong>{" "}
                  Projects Built
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#737373]" />
                <span>FastAPI &amp; Docker</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#737373]" />
                <span>RAG &amp; LLMs</span>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Animated Dev CLI Terminal */}
          <div className="lg:col-span-6">
            <DevTerminal />
          </div>
        </div>

        {/* Feature Cards Grid (What You Build) */}
        <div className="mt-14 pt-10 border-t border-[#262626] grid md:grid-cols-3 gap-6 font-sans">
          <div className="p-5 rounded-xl bg-[#111111] border border-[#262626] hover:border-[#404040] transition-colors shadow-md group">
            <div className="p-2.5 rounded-lg bg-[#1A1A1A] border border-[#262626] w-fit text-emerald-400 mb-4">
              <Cpu size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#F5F5F5] font-display mb-2">
              AI Backend Systems
            </h3>
            <p className="text-xs text-[#A3A3A3] leading-relaxed font-sans">
              Scalable APIs with authentication, databases, and production architecture.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#111111] border border-[#262626] hover:border-[#404040] transition-colors shadow-md group">
            <div className="p-2.5 rounded-lg bg-[#1A1A1A] border border-[#262626] w-fit text-sky-400 mb-4">
              <Database size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#F5F5F5] font-display mb-2">
              Document Intelligence
            </h3>
            <p className="text-xs text-[#A3A3A3] leading-relaxed font-sans">
              RAG-powered document search, analysis, and automated workflows.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#111111] border border-[#262626] hover:border-[#404040] transition-colors shadow-md group">
            <div className="p-2.5 rounded-lg bg-[#1A1A1A] border border-[#262626] w-fit text-purple-400 mb-4">
              <Zap size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#F5F5F5] font-display mb-2">
              Cloud-Ready APIs
            </h3>
            <p className="text-xs text-[#A3A3A3] leading-relaxed font-sans">
              FastAPI applications built for containerized deployment and scaling.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* ABOUT SECTION                                                */}
      {/* ------------------------------------------------------------ */}
      <section
        id="about"
        className="scroll-mt-20 border-t border-[#262626] py-16 bg-[#0A0A0A]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 font-mono">
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-widest uppercase">
                // ABOUT
              </span>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mt-2 font-display">
                About Me
              </h2>
            </div>
            <div className="lg:col-span-8 text-[#A3A3A3] space-y-4 text-sm leading-relaxed font-sans">
              <p>
                I’m an AI Backend Engineer focused on building intelligent backend systems and practical AI applications.
              </p>
              <p>
                I enjoy turning complex problems into reliable and well-structured solutions. I learn by building real projects, experimenting with new ideas, and solving practical problems.
              </p>
              <p>
                I’m currently looking for opportunities to work on meaningful products, collaborate with strong teams, and continue growing as an AI Backend Engineer.
              </p>
              <p>
                I’m always open to interesting projects, ideas, and opportunities to build something useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* FEATURED PROJECTS                                            */}
      {/* ------------------------------------------------------------ */}
      <section id="projects" className="scroll-mt-20 border-t border-[#262626] py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="mb-10 font-mono">
            <span className="text-xs font-mono text-emerald-400 font-medium tracking-widest uppercase">
              // PROJECTS
            </span>
            <h2 className="text-3xl font-bold text-[#F5F5F5] mt-2 font-display">
              Featured Projects
            </h2>
          </div>

          <div className="space-y-4">
            {PROJECTS.map((project) => {
              const isExpanded = !!expandedProjects[project.id];
              return (
                <div
                  key={project.id}
                  className="rounded-xl bg-[#111111] border border-[#262626] overflow-hidden shadow-lg transition-all duration-200 hover:border-[#333333]"
                >
                  {/* Collapsed Header Bar */}
                  <div
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111111] hover:bg-[#161616] transition-colors cursor-pointer"
                    onClick={() => toggleProject(project.id)}
                  >
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl font-bold text-[#F5F5F5] font-display">
                          {project.name}
                        </h3>
                        <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-[#1A1A1A] border border-[#262626] text-emerald-400 font-medium tracking-wider uppercase">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-[#A3A3A3]">
                        {project.tagline}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleProject(project.id);
                      }}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1A1A1A] hover:bg-[#262626] border border-[#262626] text-xs font-mono text-[#F5F5F5] transition-all shrink-0 self-start sm:self-center group"
                    >
                      <span>{isExpanded ? "Hide Details" : "View Project"}</span>
                      {isExpanded ? (
                        <ChevronUp size={15} className="text-emerald-400 group-hover:-translate-y-0.5 transition-transform" />
                      ) : (
                        <ChevronDown size={15} className="text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Content Panel */}
                  {isExpanded && (
                    <div className="border-t border-[#262626] grid lg:grid-cols-12 gap-0">
                      {/* Project Info Panel (7 cols) */}
                      <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 border-b lg:border-b-0 lg:border-r border-[#262626] bg-[#111111]">
                        <p className="text-[#A3A3A3] text-sm leading-relaxed font-sans">
                          {project.description}
                        </p>

                        <ul className="space-y-2 pt-2">
                          {project.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-[#A3A3A3] font-sans"
                            >
                              <Check
                                size={13}
                                className="text-emerald-400 shrink-0 mt-0.5"
                              />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-3">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#0A0A0A] border border-[#262626] text-[#E5E5E5]"
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
                            className="inline-flex items-center gap-1.5 text-[#A3A3A3] hover:text-[#FFFFFF] transition-colors"
                          >
                            <Github size={14} /> Repository <ArrowUpRight size={12} />
                          </a>
                        </div>
                      </div>

                      {/* IDE Code Viewer (5 cols) */}
                      <div className="lg:col-span-5 bg-[#0A0A0A] p-5 font-mono text-xs text-[#A3A3A3] flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between border-b border-[#262626] pb-2 mb-3 text-[#737373] text-[11px]">
                            <div className="flex items-center gap-1.5">
                              <FileCode2 size={13} className="text-emerald-400" />
                              <span>{project.filename}</span>
                            </div>
                            <span className="text-sky-400">{project.language}</span>
                          </div>

                          <div className="overflow-x-auto p-1">
                            <SyntaxHighlightedCode code={project.codeSnippet} />
                          </div>
                        </div>

                        <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-[10px] text-[#737373] font-mono">
                          <span>UTF-8 | Python 3.12</span>
                          <span className="text-emerald-400 font-medium">✓ Main Branch</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* TECHNICAL SKILLS                                             */}
      {/* ------------------------------------------------------------ */}
      <section
        id="skills"
        className="scroll-mt-20 border-t border-[#262626] py-20 bg-[#0A0A0A]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="mb-10 font-mono">
            <span className="text-xs font-mono text-emerald-400 font-medium tracking-widest uppercase">
              // SKILLS
            </span>
            <h2 className="text-3xl font-bold text-[#F5F5F5] mt-2 font-display">
              Skills &amp; Architecture
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((group) => {
              const IconComp = group.icon;
              return (
                <div
                  key={group.category}
                  className="p-5 rounded-xl bg-[#111111] border border-[#262626] hover:border-[#404040] transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-4 text-[#F5F5F5] font-mono text-xs font-semibold">
                    <IconComp size={16} className="text-emerald-400" />
                    <span>{group.category}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <span
                        key={`${skill}-${i}`}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-[#0A0A0A] border border-[#262626] text-[#E5E5E5]"
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
      <section id="contact" className="scroll-mt-20 border-t border-[#262626] py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono text-emerald-400 font-medium tracking-widest uppercase">
              // CONTACT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] font-display">
              Let's Build Something Intelligent
            </h2>
            <p className="text-[#A3A3A3] text-sm max-w-xl mx-auto leading-relaxed pt-1 font-sans">
              Whether you're building an AI product, need backend expertise, or
              want to automate business workflows, I'd love to hear about your
              project.
            </p>

            <div className="pt-2">
              <p className="text-xs font-mono text-[#737373] uppercase tracking-wider mb-3">
                Available for:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-2.5 text-xs sm:text-sm text-[#F5F5F5] font-sans">
                <li className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#111111] border border-[#262626]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>AI Backend Engineering</span>
                </li>
                <li className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#111111] border border-[#262626]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>RAG &amp; LLM Systems</span>
                </li>
                <li className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#111111] border border-[#262626]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>API Design &amp; Integration</span>
                </li>
              </ul>
            </div>

            {/* Terminal Contact Box */}
            <div className="pt-6 max-w-xl mx-auto">
              <div className="rounded-xl bg-[#111111] border border-[#262626] p-4 sm:p-5 font-mono text-xs shadow-xl text-left space-y-4">
                <div className="flex items-center justify-between border-b border-[#262626] pb-2 text-[11px] text-[#737373]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
                    <span className="ml-2 text-[#A3A3A3] font-medium">contact.sh</span>
                  </div>
                  <span className="text-emerald-400 font-semibold">[READY]</span>
                </div>

                <div className="space-y-2 text-[#A3A3A3]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-emerald-400 font-bold">$</span>
                    <span className="text-[#737373]">mail --to</span>
                    <span className="text-[#F5F5F5] font-semibold underline decoration-[#262626] underline-offset-4">
                      {PROFILE.email}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#737373] italic pl-3 border-l border-[#262626]">
                    // Direct email response within 24 hours. Open to remote &amp; contract projects.
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 border-t border-[#262626]">
                  <button
                    onClick={copyEmail}
                    className="px-4 py-2 rounded bg-[#1A1A1A] hover:bg-[#262626] border border-[#262626] text-[#F5F5F5] transition-colors flex items-center gap-2 text-xs font-mono"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} className="text-[#A3A3A3]" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="px-4 py-2 rounded bg-[#FFFFFF] hover:bg-[#E5E5E5] text-[#0A0A0A] font-semibold transition-colors flex items-center gap-2 text-xs font-mono"
                  >
                    <Mail size={14} /> Send Email
                  </a>
                </div>
              </div>

              {/* Social Links Below contact.sh Container */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-[#A3A3A3] text-xs font-mono">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#111111] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#404040] text-[#F5F5F5] transition-all flex items-center gap-2"
                >
                  <Github size={15} /> GitHub <ArrowUpRight size={13} className="text-[#737373]" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#111111] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#404040] text-[#F5F5F5] transition-all flex items-center gap-2"
                >
                  <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} className="text-[#737373]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* FOOTER                                                       */}
      {/* ------------------------------------------------------------ */}
      <footer className="border-t border-[#262626] py-8 text-center font-mono text-xs text-[#737373] bg-[#0A0A0A]">
        <p>
          &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
