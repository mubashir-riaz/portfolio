import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Search,
  Sun,
  Moon,
  Calendar,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
  Mail,
  Menu,
  Rss,
  Workflow,
  Boxes,
  Play,
  FileText,
  CheckCircle2,
  AlertCircle,
  Terminal,
} from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';
import TechStackSection from './src/TechStack.jsx';

/* ------------------------------------------------------------------ */
/*  PROFILE DATA                                                      */
/* ------------------------------------------------------------------ */
const PROFILE = {
  name: 'Mubashir Riaz',
  handle: '@mubashir',
  role: 'AI Backend Engineer & Intelligent Systems Developer',
  email: 'mubashiriaz10@gmail.com',
  avatar: '/profile.jpeg',
  github: 'https://github.com/mubashir-riaz', // <-- PUT YOUR GITHUB REFERENCE / PROFILE LINK HERE
  githubUsername: 'mubashir-riaz', // <-- PUT YOUR GITHUB USERNAME FOR CONTRIBUTIONS HERE
  linkedin: 'https://www.linkedin.com/in/mubashir-riaz-51a881424/',
  descriptionLines: [
    'AI Backend Engineer building intelligent systems.',
    'Every commit lands on GitHub for you to fork & remix.',
  ],
};

/* ------------------------------------------------------------------ */
/*  02 FEATURED PROJECTS DATA                                         */
/* ------------------------------------------------------------------ */
const FEATURED_PROJECTS = [
  {
    id: 'invoice-guard',
    number: '01',
    title: 'InvoiceGuard AI',
    subtitle: 'Autonomous Multi-Modal Freight Auditing & Tariff Engine',
    description:
      'Built an autonomous multimodal freight auditing and tariff engine using Vision LLMs to extract dense tabular invoice items and automate carrier disputes at scale.',
    category: 'AI Auditing Platform',
    status: 'Production Ready',
    mainTech: ['FastAPI', 'Vision LLMs', 'PostgreSQL', 'Redis'],
    problem:
      'Freight billing has an error rate of 12–18% due to complex tariff schedules, ambiguous line-item surcharges (fuel adjustments, detention, accessorial tariffs), and scanned unstandardized paper receipts that break traditional OCR bounding-box templates. Manual audits average 25 minutes per invoice.',
    solution:
      'Architected an end-to-end multimodal auditing pipeline using Vision LLMs to extract dense tabular invoice line items with 98.4% accuracy without fragile OCR templates. Reconciles charges deterministically against contracted tariff schedules in PostgreSQL and auto-generates carrier dispute packages.',
    pipelineSteps: [
      { step: '01', label: 'Ingest', desc: 'Scanned PDF / image invoice intake' },
      { step: '02', label: 'Vision LLM', desc: 'Tabular extraction without bounding boxes' },
      { step: '03', label: 'Tariff DB', desc: 'Deterministic PostgreSQL rate card check' },
      { step: '04', label: 'Delta Audit', desc: 'Mathematical discrepancy & overcharge delta' },
      { step: '05', label: 'Dispute Out', desc: 'Automated carrier dispute claim & proof' },
    ],
    architectureDiagram: `┌────────────────────────┐      ┌─────────────────────────┐      ┌────────────────────────┐
│ Scanned PDFs / Invoices│ ───► │ Vision LLM Extractor    │ ───► │ Structured JSON Tables │
└────────────────────────┘      │ (Tabular Line Items)    │      └───────────┬────────────┘
                                └─────────────────────────┘                  │
                                                                             ▼
┌────────────────────────┐      ┌─────────────────────────┐      ┌────────────────────────┐
│ Carrier Dispute Emails │ ◄─── │ Delta & Overcharge Calc │ ◄─── │ PostgreSQL Tariff DB   │
│ & Proof PDF Packages   │      │ (Mathematical Proof)    │      │ (Contracted Schedules) │
└────────────────────────┘      └─────────────────────────┘      └────────────────────────┘`,
    techStack: [
      'Python',
      'FastAPI',
      'Vision LLMs',
      'PostgreSQL',
      'Redis',
      'Docker',
      'LangChain',
    ],
    metrics: [
      '98.4% Tabular Accuracy',
      'Audit Speed: 25m → <4s',
      'Zero OCR Template Brittleness',
    ],
    liveDemo: 'https://invoiceguard-ai.vercel.app', // <-- Replace with your live deployment URL if hosted
    github: 'https://github.com/mubashir-riaz/InvoiceGuard-ai',
    articleId: 'invoice-guard',
  },
  {
    id: 'docu-mind',
    number: '02',
    title: 'DocuMind AI',
    subtitle: 'Zero-Hallucination Enterprise RAG Assistant with Page-Level Citations',
    description:
      'Built an enterprise citation-grounded RAG assistant with layout-aware parsing and sub-second vector search, delivering reliable document intelligence at scale.',
    category: 'Vector RAG Search',
    status: 'Production Ready',
    mainTech: ['FastAPI', 'ChromaDB', 'Llama 3.3', 'LangChain'],
    problem:
      'Standard RAG pipelines break down when querying dense, multi-page business documents (financial spreadsheets with merged cells, scanned reports, multi-column decks). They lose tabular structure, causing cross-context hallucinations and lack verifiable audit provenance.',
    solution:
      'Engineered a high-precision RAG system featuring multi-stage layout-aware parsing, hierarchical table-preserving chunking, and sub-second vector retrieval using ChromaDB. Paired with Llama 3.3 for citation-grounded response generation that anchors assertions to exact source pages and cells.',
    pipelineSteps: [
      { step: '01', label: 'Doc Parser', desc: 'DOM-tree layout intake (PDF, XLSX, DOCX)' },
      { step: '02', label: 'Chunking', desc: 'Hierarchical schema-preserving chunking' },
      { step: '03', label: 'ChromaDB', desc: 'Dense vector embeddings & metadata filters' },
      { step: '04', label: 'Re-ranking', desc: 'Cross-encoder query context alignment' },
      { step: '05', label: 'Synthesis', desc: 'Grounded Llama 3.3 with citation pills' },
    ],
    architectureDiagram: `┌────────────────────────┐      ┌─────────────────────────┐      ┌────────────────────────┐
│ Multi-Format Documents │ ───► │ Hierarchical DOM Parser │ ───► │ Layout-Aware Chunking  │
│ (PDF, XLSX, DOCX)      │      │ (Preserves Tables)      │      └───────────┬────────────┘
└────────────────────────┘      └─────────────────────────┘                  │
                                                                             ▼
┌────────────────────────┐      ┌─────────────────────────┐      ┌────────────────────────┐
│ Interactive Citations  │ ◄─── │ Grounded Synthesis      │ ◄─── │ ChromaDB & Reranker    │
│ (Source Page & Cell)   │      │ (Llama 3.3 Engine)      │      │ (Dense Semantic Search)│
└────────────────────────┘      └─────────────────────────┘      └────────────────────────┘`,
    techStack: [
      'FastAPI',
      'React',
      'Python',
      'ChromaDB',
      'Llama 3.3',
      'LangChain',
      'Tailwind CSS',
    ],
    metrics: [
      'Zero-Hallucination Guarantee',
      'Sub-Second Vector Search',
      'Page-Level Source Citations',
    ],
    liveDemo: 'https://documind-ai.vercel.app', // <-- Replace with your live deployment URL if hosted
    github: 'https://github.com/mubashir-riaz/documind-ai',
    articleId: 'docu-mind',
  },
];

/* ------------------------------------------------------------------ */
/*  POSTS / WRITING / ARTICLES DATA                                   */
/* ------------------------------------------------------------------ */
const POSTS = [
  {
    id: 'invoice-guard',
    title: 'Building InvoiceGuard: Multi-Modal Freight Auditing with Vision LLMs',
    date: '24 Feb, 2026',
    category: 'AI Auditing Platform',
    description:
      'How we automated freight rate verification, contract invoice parsing, and dispute generation using FastAPI and multimodal Vision LLMs.',
    github: 'https://github.com/mubashir-riaz/InvoiceGuard-ai',
    tags: ['Vision LLMs', 'FastAPI', 'PostgreSQL', 'Docker', 'Automation'],
    codeSnippet: `def process_invoice(invoice_file):
    # Extract structured charge tables via multimodal Vision LLM
    extracted_data = vision_llm.extract_invoice(invoice_file)

    # Reconcile against contracted tariff schedules
    audit_result = rate_auditor.validate(
        charges=extracted_data.line_items,
        contract=carrier_contract
    )

    if audit_result.has_discrepancies:
        dispute_email = generator.create_dispute(audit_result)
        return {"status": "DISPUTED", "savings": audit_result.delta, "email": dispute_email}

    return {"status": "APPROVED", "total": audit_result.total_approved}`,
    fullContent: [
      'Freight billing has historically been plagued by billing discrepancies: ambiguous line-item surcharges, variable fuel adjustments, and unstandardized scanned PDF receipts that break traditional OCR engines.',
      'To solve this, InvoiceGuard AI introduces a multimodal pipeline. We use Vision LLMs to extract dense tabular line items directly from complex PDFs without brittle bounding-box rules.',
      'The extracted data is cross-referenced against contracted tariff rate tables stored in PostgreSQL. When overcharges or unauthorized accessorial fees are detected, the system generates dispute-ready summaries with exact mathematical proofs and pre-drafted carrier dispute emails.',
      'In production benchmarks, this automated auditing pipeline reduced invoice processing turnaround from 25 minutes per invoice to under 4 seconds with 98.4% extraction accuracy.',
    ],
    highlights: [
      'Multimodal invoice parsing with zero reliance on brittle OCR templates',
      'Deterministic rule-engine cross-referencing contracted vs billed rates',
      'Automated overcharge detection with currency delta calculations',
      'FastAPI async architecture with Redis caching for instant validation',
    ],
    stack: ['Python', 'FastAPI', 'Vision LLMs', 'PostgreSQL', 'Redis', 'Docker', 'LangChain'],
  },
  {
    id: 'docu-mind',
    title: 'DocuMind: Zero-Hallucination Document Assistant with ChromaDB & RAG',
    date: '18 Jan, 2026',
    category: 'Vector RAG Search',
    description:
      'Deep dive into multi-format document chunking, semantic vector embeddings with ChromaDB, and citation-grounded generation using Llama 3.3.',
    github: 'https://github.com/mubashir-riaz/documind-ai',
    tags: ['RAG', 'ChromaDB', 'Llama 3.3', 'FastAPI', 'Vector Search'],
    codeSnippet: `def ask_document(question: str, document_id: str) -> GroundedAnswer:
    # 1. Semantic vector search scoped to active document
    relevant_chunks = vector_store.search(
        query=question,
        document_id=document_id,
        top_k=4
    )

    # 2. Strict citation context assembly
    context = format_citation_context(relevant_chunks)

    # 3. Grounded generation with source traceability
    return llm.generate_with_citations(
        prompt=question,
        context=context,
        temperature=0.1
    )`,
    fullContent: [
      'Traditional Retrieval-Augmented Generation (RAG) often breaks down when documents mix disparate formats: financial spreadsheets with merged cells, scanned PDF reports, and PowerPoint slides.',
      'DocuMind AI addresses this through a multi-stage ingestion pipeline: documents are parsed into structured DOM trees, hierarchically chunked to preserve tabular integrity, and indexed with dense embeddings into ChromaDB.',
      'When users ask natural-language questions, the retrieval pipeline performs dense semantic search filtered by document scope, followed by a citation-grounded synthesis pass using Llama 3.3.',
      'Every answer provides interactive citation pills that link directly to the source page and section, eliminating hallucinations and building trust for high-stakes business document review.',
    ],
    highlights: [
      'Multi-format parser for PDF, DOCX, XLSX, PPTX, and TXT files',
      'Hierarchical semantic chunking preserving table structure and metadata',
      'Sub-second vector retrieval with ChromaDB embedded indexing',
      'Source-aware grounded response synthesis with page-level citations',
    ],
    stack: ['FastAPI', 'React', 'Python', 'ChromaDB', 'Llama 3.3', 'LangChain'],
  },
];

/* ------------------------------------------------------------------ */
/*  MONOCHROME SVG BRAND ICONS                                        */
/* ------------------------------------------------------------------ */
export function GithubIcon({
  className = 'w-[18px] h-[18px]',
  size,
  strokeWidth = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function LinkedinIcon({
  className = 'w-[18px] h-[18px]',
  size,
  strokeWidth = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 1 0 -4 0" />
      <rect x="3" y="3" width="18" height="18" rx="4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN PORTFOLIO BLOG COMPONENT                                     */
/* ------------------------------------------------------------------ */
export default function Portfolio() {
  // Navigation & View State: 'posts', 'projects', 'project-detail', 'about', or 'reader'
  const [currentView, setCurrentView] = useState('posts');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [previousView, setPreviousView] = useState('posts');

  // Search Palette State
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  // Mobile Navigation Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme Mode: 'navy' (normal #202838) and 'paper' (white #ffffff)
  const [theme, setTheme] = useState('navy');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'navy' ? 'paper' : 'navy'));
  };

  // Keyboard shortcut Ctrl+K / Cmd+K and Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  const handleGoHome = () => {
    setSelectedPostId(null);
    setSelectedProjectId(null);
    setMobileMenuOpen(false);
    setCurrentView('posts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoProjects = () => {
    setSelectedPostId(null);
    setSelectedProjectId(null);
    setMobileMenuOpen(false);
    setCurrentView('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoAbout = () => {
    setSelectedPostId(null);
    setSelectedProjectId(null);
    setMobileMenuOpen(false);
    setCurrentView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProject = (projectId) => {
    setPreviousView(currentView);
    setSelectedProjectId(projectId);
    setMobileMenuOpen(false);
    setCurrentView('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromProject = () => {
    setSelectedProjectId(null);
    setCurrentView(previousView === 'projects' ? 'projects' : 'posts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPost = (postId) => {
    setSelectedPostId(postId);
    setMobileMenuOpen(false);
    setCurrentView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPosts = () => {
    setSelectedPostId(null);
    setCurrentView('posts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return POSTS;
    const q = searchQuery.toLowerCase();
    return POSTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return FEATURED_PROJECTS;
    const q = searchQuery.toLowerCase();
    return FEATURED_PROJECTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.problem.toLowerCase().includes(q) ||
        p.solution.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const activePost = useMemo(() => {
    return POSTS.find((p) => p.id === selectedPostId) || POSTS[0];
  }, [selectedPostId]);

  const activeProject = useMemo(() => {
    return FEATURED_PROJECTS.find((p) => p.id === selectedProjectId) || FEATURED_PROJECTS[0];
  }, [selectedProjectId]);

  const themeClasses = useMemo(() => {
    if (theme === 'paper') {
      return {
        bg: 'bg-[#ffffff]',
        text: 'text-[#111827]',
        navLogo: 'text-[#111827] hover:text-[#0077b5]',
        navLinkActive: 'text-[#0077b5] font-semibold underline decoration-[#0077b5] underline-offset-4',
        navLinkInactive: 'text-[#111111] hover:text-[#0077b5]',
        navIcon: 'text-[#222222] hover:text-[#0077b5]',
        border: 'border-[#e5e5e5]',
        borderMuted: 'border-[#e5e5e5]',
        headline: 'text-[#111827]',
        rssIcon: 'text-[#0077b5] hover:text-[#005a8c]',
        profileDesc: 'text-[#111827]',
        socialIcon: 'text-[#4b4b4b] hover:text-[#0077b5]',
        postTitle: 'text-[#0077b5]',
        meta: 'text-[#555555]',
        metaAccent: 'text-[#0077b5]',
        desc: 'text-[#555555]',
        accentText: 'text-[#0077b5]',
        accentLink: 'text-[#0077b5] hover:underline',
        cardBg: 'bg-[#f9fafb] border-[#e5e5e5]',
        codeBox: 'bg-[#f3f4f6] border-[#e5e5e5] text-[#1e293b]',
        tagPill: 'bg-[#f3f4f6] border-[#e5e5e5] text-[#555555]',
        contactBtn: 'bg-[#ffffff] border-[#e5e5e5] hover:border-[#0077b5] text-[#111827]',
        contactIcon: 'text-[#0077b5]',
        mobileDrawer: 'bg-[#ffffff] border-[#e5e5e5]',
        mobileItemActive: 'text-[#0077b5] font-semibold bg-[#f3f4f6]',
        mobileItemInactive: 'text-[#111111] hover:text-[#0077b5]',
        mobileSubText: 'text-[#444444] hover:text-[#0077b5]',
        searchIcon: 'text-[#0077b5]',
        searchInput: 'text-[#111827] placeholder:text-[#9ca3af]',
        searchClear: 'text-[#555555] hover:text-[#111827]',
        footer: 'text-[#555555]',
        projectCardBg: 'bg-[#fcfcfd] border-[#e5e5e5] hover:border-[#0077b5]/50',
        projectTitle: 'text-[#111827]',
        projectSubtitle: 'text-[#0077b5]',
        projectArchBox: 'bg-[#f8fafc] border-[#e2e8f0] text-[#1e293b]',
        projectTagPill: 'bg-[#f0f2f5] border-[#d0d7de] text-[#24292f]',
        primaryBtn: 'bg-[#0077b5] hover:bg-[#005a8c] text-white',
        secondaryBtn: 'bg-[#ffffff] hover:bg-[#f3f4f6] text-[#111827] border-[#e5e5e5]',
        tertiaryBtn: 'text-[#0077b5] hover:underline',
        metricPill: 'bg-[#ffffff] border-[#e5e5e5] text-[#111827]',
        pipelineStepBg: 'bg-[#ffffff] border-[#e5e5e5]',
      };
    }
    return {
      bg: 'bg-[#202838]',
      text: 'text-[#f2f2f2]',
      navLogo: 'text-[#f5f5f5] hover:text-[#38bdf8]',
      navLinkActive: 'text-[#38bdf8] font-semibold underline decoration-[#0284c7] underline-offset-4',
      navLinkInactive: 'text-white hover:text-[#38bdf8]',
      navIcon: 'text-white hover:text-[#38bdf8]',
      border: 'border-[#0ea5e9]/50',
      borderMuted: 'border-[#0ea5e9]/25',
      headline: 'text-[#f5f5f5]',
      rssIcon: 'text-[#38bdf8] hover:text-[#7dd3fc]',
      profileDesc: 'text-[#f1f1f1]',
      socialIcon: 'text-[#d5d8df] hover:text-[#38bdf8]',
      postTitle: 'text-[#38bdf8]',
      meta: 'text-[#d7d9df]',
      metaAccent: 'text-[#38bdf8]/80',
      desc: 'text-[#f1f1f1]',
      accentText: 'text-[#38bdf8]',
      accentLink: 'text-[#38bdf8] hover:underline',
      cardBg: 'bg-[#161c28] border-[#2d374d]',
      codeBox: 'bg-[#121620] border-[#2d374d] text-[#e0e0e0]',
      tagPill: 'bg-[#161c28] border-[#2d374d] text-[#cbd5e1]',
      contactBtn: 'bg-[#161c28] border-[#2d374d] hover:border-[#38bdf8] text-[#f2f2f2]',
      contactIcon: 'text-[#38bdf8]',
      mobileDrawer: 'bg-[#161c28] border-[#0ea5e9]/25',
      mobileItemActive: 'text-[#38bdf8] font-semibold bg-[#202838]',
      mobileItemInactive: 'text-[#f2f2f2] hover:text-[#38bdf8]',
      mobileSubText: 'text-[#cbd5e1] hover:text-[#38bdf8]',
      searchIcon: 'text-[#38bdf8]',
      searchInput: 'text-[#f2f2f2] placeholder:text-[#94a3b8]',
      searchClear: 'text-[#94a3b8] hover:text-[#f2f2f2]',
      footer: 'text-[#94a3b8]',
      projectCardBg: 'bg-[#161c28] border-[#2d374d] hover:border-[#38bdf8]/50',
      projectTitle: 'text-[#f5f5f5]',
      projectSubtitle: 'text-[#38bdf8]',
      projectArchBox: 'bg-[#0f141d] border-[#253043] text-[#93c5fd]',
      projectTagPill: 'bg-[#1f2738] border-[#2d374d] text-[#cbd5e1]',
      primaryBtn: 'bg-[#38bdf8] hover:bg-[#0284c7] text-[#0f172a] font-semibold',
      secondaryBtn: 'bg-[#1e2535] hover:bg-[#252f44] text-[#f2f2f2] border-[#2d374d]',
      tertiaryBtn: 'text-[#38bdf8] hover:underline',
      metricPill: 'bg-[#121620] border-[#2d374d] text-[#e2e8f0]',
      pipelineStepBg: 'bg-[#131924] border-[#253043]',
    };
  }, [theme]);

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} font-mono transition-colors duration-200`}>
      {/* ------------------------------------------------------------ */}
      {/* MAIN SINGLE COLUMN BLOG WRAPPER (900PX MAX-WIDTH)            */}
      {/* ------------------------------------------------------------ */}
      <div className="max-w-[900px] mx-auto">
        {/* ---------------------------------------------------------- */}
        {/* HEADER BAR                                                 */}
        {/* ---------------------------------------------------------- */}
        <header className="px-[22px] sm:px-8 flex items-center justify-between h-[59px] sm:h-[72px]">
          {/* Brand / Logo */}
          <button
            onClick={handleGoHome}
            className={`font-heading text-[20px] sm:text-[28px] md:text-[30px] font-normal tracking-tight ${themeClasses.navLogo} transition-colors leading-none text-left cursor-pointer`}
          >
            {PROFILE.name}
          </button>

          {/* Desktop Navigation Items + Icons */}
          <nav className="hidden sm:flex items-center gap-6 md:gap-7 text-[17px] shrink-0">
            <button
              onClick={handleGoProjects}
              className={`py-1 px-1.5 transition-colors cursor-pointer ${
                currentView === 'projects' || currentView === 'project-detail'
                  ? themeClasses.navLinkActive
                  : themeClasses.navLinkInactive
              }`}
            >
              Projects
            </button>

            <button
              onClick={handleGoAbout}
              className={`py-1 px-1.5 transition-colors cursor-pointer ${
                currentView === 'about'
                  ? themeClasses.navLinkActive
                  : themeClasses.navLinkInactive
              }`}
            >
              About
            </button>

            {/* Search Icon Button */}
            <button
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Search Posts"
              className={`${themeClasses.navIcon} transition-colors p-1.5 cursor-pointer`}
              title="Search"
            >
              <Search size={17} />
            </button>

            {/* Theme Toggle Icon Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`${themeClasses.navIcon} transition-colors p-1.5 cursor-pointer`}
              title={theme === 'paper' ? 'Switch to Normal Theme' : 'Switch to White Theme'}
            >
              {theme === 'paper' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            className={`sm:hidden ${themeClasses.navIcon} p-1.5 transition-colors flex items-center justify-center focus:outline-none cursor-pointer`}
          >
            {mobileMenuOpen ? (
              <X size={19} strokeWidth={2} />
            ) : (
              <Menu size={19} strokeWidth={2} />
            )}
          </button>
        </header>

        {/* ---------------------------------------------------------- */}
        {/* NAVBAR HORIZONTAL DIVIDER                                  */}
        {/* ---------------------------------------------------------- */}
        <div className="px-[22px] sm:px-8">
          <div
            className={`border-t ${themeClasses.border}`}
            style={{ borderTopWidth: '1px' }}
          />
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className={`sm:hidden border-b ${themeClasses.mobileDrawer} px-[22px] sm:px-8 py-3.5 space-y-3 font-mono text-[15px]`}>
            <div className="flex flex-col space-y-2">
              <button
                onClick={handleGoProjects}
                className={`text-left py-1.5 px-2 rounded transition-colors cursor-pointer ${
                  currentView === 'projects' || currentView === 'project-detail'
                    ? themeClasses.mobileItemActive
                    : themeClasses.mobileItemInactive
                }`}
              >
                Projects
              </button>

              <button
                onClick={handleGoAbout}
                className={`text-left py-1.5 px-2 rounded transition-colors cursor-pointer ${
                  currentView === 'about'
                    ? themeClasses.mobileItemActive
                    : themeClasses.mobileItemInactive
                }`}
              >
                About
              </button>
            </div>

            <div className={`pt-2 border-t ${themeClasses.borderMuted} flex items-center justify-between px-2 text-[14px]`}>
              <button
                onClick={() => {
                  setSearchOpen(true);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 ${themeClasses.mobileSubText} py-1 cursor-pointer`}
              >
                <Search size={15} />
                <span>Search</span>
              </button>

              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`flex items-center ${themeClasses.mobileSubText} py-1 px-1 cursor-pointer`}
                title={theme === 'paper' ? 'Switch to Normal Theme' : 'Switch to White Theme'}
              >
                {theme === 'paper' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------- */}
        {/* INLINE SEARCH INPUT (WHEN ACTIVATED)                       */}
        {/* ---------------------------------------------------------- */}
        {searchOpen && (
          <div>
            <div className="py-2.5 sm:py-3 px-[22px] sm:px-8 flex items-center gap-2.5 sm:gap-3 text-[14px] sm:text-[16px]">
              <Search size={15} className={`${themeClasses.searchIcon} shrink-0`} />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by keyword, stack or title..."
                className={`w-full bg-transparent outline-none text-[13.5px] sm:text-[16px] font-mono ${themeClasses.searchInput}`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`${themeClasses.searchClear} text-[13px] sm:text-[15px] px-1.5 shrink-0 cursor-pointer`}
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setSearchOpen(false)}
                className={`${themeClasses.searchClear} p-1 shrink-0 cursor-pointer`}
              >
                <X size={15} />
              </button>
            </div>
            <div className="px-[22px] sm:px-8">
              <div
                className={`border-t ${themeClasses.border}`}
                style={{ borderTopWidth: '1px' }}
              />
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------- */}
        {/* PROFILE SECTION                                            */}
        {/* Hidden with smooth transition when viewing About or Reader */}
        {/* ---------------------------------------------------------- */}
        <div
          style={{
            maxHeight: currentView === 'posts' ? '500px' : '0px',
            opacity: currentView === 'posts' ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.45s ease, opacity 0.35s ease',
          }}
        >
          <section className="pt-[24px] pb-[23px] px-[22px] sm:px-8 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left sm:gap-10 sm:py-9">
            {/* Centered Circular Avatar */}
            <div className="shrink-0 mb-[25px] sm:mb-0">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="w-[160px] h-[160px] rounded-full object-cover shrink-0 select-none shadow-none"
              />
            </div>

            {/* Intro Information */}
            <div className="flex-1 min-w-0 flex flex-col items-center sm:items-start text-center sm:text-left w-full">
              {/* Headline with RSS badge */}
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h1 className={`text-[24px] sm:text-[28px] md:text-[30px] font-bold tracking-tight leading-tight ${themeClasses.headline}`}>
                  Hi, I'm <span className="inline-block tracking-normal"><span className="font-normal opacity-80 mr-[2.5px]">@</span><span className={themeClasses.accentText}>{PROFILE.handle.replace(/^@/, '')}.</span></span>
                </h1>
                <span
                  className={`${themeClasses.rssIcon} cursor-pointer inline-flex items-center ml-0.5 transition-colors duration-150`}
                  title="RSS Feed"
                  aria-label="RSS Feed"
                >
                  <Rss size={17} className="stroke-[2.5]" />
                </span>
              </div>

              {/* Description lines */}
              <div className={`mt-3 space-y-0 text-[14px] sm:text-[16px] ${themeClasses.profileDesc} leading-[1.7] font-mono max-w-[440px] sm:max-w-none text-center sm:text-left mx-auto sm:mx-0`}>
                {PROFILE.descriptionLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

              {/* Minimal Monochrome Outline Social Icons */}
              <div className="mt-[18px] sm:mt-4 flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
                {/* GitHub */}
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`group inline-flex items-center justify-center w-9 h-9 rounded transition-colors duration-200 cursor-pointer ${themeClasses.socialIcon}`}
                  title="GitHub Profile"
                  aria-label="GitHub"
                >
                  <GithubIcon
                    size={28}
                    className="w-[28px] h-[28px] transition-transform duration-300 ease-out origin-center group-hover:rotate-6"
                    strokeWidth={2}
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`group inline-flex items-center justify-center w-9 h-9 rounded transition-colors duration-200 cursor-pointer ${themeClasses.socialIcon}`}
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon
                    size={28}
                    className="w-[28px] h-[28px] transition-transform duration-300 ease-out origin-center group-hover:rotate-6"
                    strokeWidth={2}
                  />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PROFILE.email}`}
                  className={`group inline-flex items-center justify-center w-9 h-9 rounded transition-colors duration-200 cursor-pointer ${themeClasses.socialIcon}`}
                  title={`Send email to ${PROFILE.email}`}
                  aria-label="Email"
                >
                  <Mail
                    size={28}
                    className="w-[28px] h-[28px] transition-transform duration-300 ease-out origin-center group-hover:rotate-6"
                    strokeWidth={2}
                  />
                </a>
              </div>
            </div>
          </section>

          {/* Horizontal Divider inside Hero transition wrapper */}
          <div className="px-[22px] sm:px-8">
            <div
              className={`border-t ${themeClasses.border}`}
              style={{ borderTopWidth: '1px' }}
            />
          </div>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* DYNAMIC CONTENT ROUTER: 'posts' | 'reader' | 'about'       */}
        {/* ---------------------------------------------------------- */}

        {/* ========================================================== */}
        {/* VIEW 1: HOME PAGE (FEATURED PROJECTS & ARTICLES)           */}
        {/* ========================================================== */}
        {currentView === 'posts' && (
          <div>
            {/* Global Search Results Indicator */}
            {searchQuery && (
              <div className="pt-6 px-[22px] sm:px-8 text-[13.5px] sm:text-[15px] text-[#94a3b8]">
                Found {filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'} and {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'} matching "{searchQuery}"
              </div>
            )}

            {/* ====================================================== */}
            {/* 02 FEATURED PROJECTS SECTION                          */}
            {/* ====================================================== */}
            <section id="featured-projects" className="pt-7 sm:pt-9 pb-12 sm:pb-16 px-[22px] sm:px-8 text-left">
              {/* Section Header */}
              <div className="mb-6 sm:mb-8 flex items-baseline justify-between gap-4">
                <h2 className={`text-[23px] sm:text-[28px] font-bold font-heading tracking-tight ${themeClasses.headline}`}>
                  Featured Projects
                </h2>
                {!searchQuery && (
                  <button
                    onClick={handleGoProjects}
                    className={`inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-mono ${themeClasses.accentLink} hover:underline cursor-pointer group shrink-0`}
                  >
                    <span>all projects</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                )}
              </div>

              {/* Projects Grid (Home) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {(searchQuery ? filteredProjects : filteredProjects.slice(0, 2)).map((project) => (
                  <div
                    key={project.id}
                    onClick={() => handleOpenProject(project.id)}
                    className={`rounded-xl border p-5 sm:p-6 transition-all duration-200 cursor-pointer group flex flex-col justify-between hover:border-[#38bdf8]/60 hover:shadow-md ${themeClasses.projectCardBg}`}
                  >
                    <div>
                      {/* Project Name */}
                      <h3 className={`text-[16.5px] sm:text-[18px] font-bold tracking-tight mb-2 group-hover:text-[#38bdf8] transition-colors ${themeClasses.projectTitle}`}>
                        {project.title}
                      </h3>

                      {/* Project Description Detail */}
                      <p className={`text-[13px] sm:text-[14px] leading-relaxed ${themeClasses.footer}`}>
                        {project.description || project.subtitle}
                      </p>
                    </div>

                    {/* Tech Stack in Project Box */}
                    {(project.techStack || project.mainTech) && (
                      <div className={`mt-4 pt-3 border-t ${themeClasses.borderMuted} flex flex-wrap gap-1.5`}>
                        {(project.techStack || project.mainTech).map((tech) => (
                          <span
                            key={tech}
                            className={`text-[11px] sm:text-[11.5px] px-2 py-0.5 rounded border font-mono ${themeClasses.projectTagPill}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {filteredProjects.length === 0 && (
                  <div className={`col-span-full text-center py-8 text-[14px] ${themeClasses.meta}`}>
                    No featured projects matching "{searchQuery}".
                  </div>
                )}
              </div>
            </section>

            {/* Divider between Featured Projects and Tech & Skills */}
            <div className="px-[22px] sm:px-8">
              <div
                className={`border-t ${themeClasses.border}`}
                style={{ borderTopWidth: '1px' }}
              />
            </div>

            {/* ====================================================== */}
            {/* 03 TECH STACK / WHAT I BUILD WITH                      */}
            {/* ====================================================== */}
            <TechStackSection themeClasses={themeClasses} theme={theme} />

            {/* Divider between Tech & Skills and Technical Writing */}
            <div className="px-[22px] sm:px-8">
              <div
                className={`border-t ${themeClasses.border}`}
                style={{ borderTopWidth: '1px' }}
              />
            </div>

            {/* ====================================================== */}
            {/* 04 BLOGS & ARTICLES SECTION                           */}
            {/* ====================================================== */}
            <section id="recent-posts" className="pt-7 sm:pt-9 pb-[40px] px-[22px] sm:px-8 text-left">
              {/* Section Header */}
              <div className="mb-6 sm:mb-8 flex items-baseline justify-between gap-4">
                <h2 className={`text-[23px] sm:text-[28px] font-bold tracking-tight ${themeClasses.headline}`}>
                  Latest Blog Posts
                </h2>
              </div>

              <div className="flex flex-col space-y-8 sm:space-y-12 md:space-y-14">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="group text-left pb-2 sm:pb-3">
                    {/* Title */}
                    <h3 className="mb-1.5">
                      <button
                        onClick={() => handleOpenPost(post.id)}
                        className={`text-[16px] sm:text-[18px] font-medium ${themeClasses.postTitle} hover:underline cursor-pointer transition-colors text-left block leading-snug`}
                      >
                        {post.title}
                      </button>
                    </h3>

                    {/* Metadata */}
                    <div className={`flex flex-wrap items-center gap-1.5 text-[11px] sm:text-[13px] italic ${themeClasses.meta} mb-2`}>
                      <Calendar size={11} className="shrink-0 opacity-80 not-italic" />
                      <span>{post.date}</span>
                      {post.category && (
                        <>
                          <span className="opacity-50">·</span>
                          <span className={themeClasses.metaAccent}>{post.category}</span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p
                      onClick={() => handleOpenPost(post.id)}
                      className={`text-[14px] sm:text-[16px] leading-[1.6] ${themeClasses.desc} cursor-pointer opacity-90 group-hover:opacity-100 transition-opacity`}
                    >
                      {post.description}
                    </p>
                  </article>
                ))}

                {filteredPosts.length === 0 && (
                  <div className={`text-center py-10 text-[14px] sm:text-[16px] ${themeClasses.meta}`}>
                    No posts found matching "{searchQuery}".
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* ========================================================== */}
        {/* VIEW: ALL PROJECTS PAGE                                    */}
        {/* ========================================================== */}
        {currentView === 'projects' && (
          <section className="pb-16 sm:pb-20 pt-4 sm:pt-6 px-[22px] sm:px-8 space-y-6 text-left">
            {/* Top Back Button */}
            <div>
              <button
                onClick={handleGoHome}
                aria-label="Back to home"
                title="Back to home"
                className={`inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-mono ${themeClasses.accentLink} transition-transform duration-200 hover:-translate-x-1 cursor-pointer`}
              >
                <ArrowLeft size={17} />
                <span>Home</span>
              </button>
            </div>

            {/* Page Header */}
            <div className={`space-y-1.5 border-b ${themeClasses.borderMuted} pb-4`}>
              <h1 className={`text-[24px] sm:text-[28px] md:text-[30px] font-bold tracking-tight ${themeClasses.headline}`}>
                All Projects
              </h1>
              <p className={`text-[13px] sm:text-[14px] ${themeClasses.meta} font-mono`}>
                Production AI systems, intelligent pipelines, and low-latency backends.
              </p>
            </div>

            {/* Grid of all projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-2">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleOpenProject(project.id)}
                  className={`rounded-xl border p-5 sm:p-6 transition-all duration-200 cursor-pointer group flex flex-col justify-between hover:border-[#38bdf8]/60 hover:shadow-md ${themeClasses.projectCardBg}`}
                >
                  <div>
                    {/* Project Name */}
                    <h3 className={`text-[16.5px] sm:text-[18px] font-bold tracking-tight mb-2 group-hover:text-[#38bdf8] transition-colors ${themeClasses.projectTitle}`}>
                      {project.title}
                    </h3>

                    {/* Project Description Detail */}
                    <p className={`text-[13px] sm:text-[14px] leading-relaxed ${themeClasses.footer}`}>
                      {project.description || project.subtitle}
                    </p>
                  </div>

                  {/* Tech Stack in Project Box */}
                  {(project.techStack || project.mainTech) && (
                    <div className={`mt-4 pt-3 border-t ${themeClasses.borderMuted} flex flex-wrap gap-1.5`}>
                      {(project.techStack || project.mainTech).map((tech) => (
                        <span
                          key={tech}
                          className={`text-[11px] sm:text-[11.5px] px-2 py-0.5 rounded border font-mono ${themeClasses.projectTagPill}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {filteredProjects.length === 0 && (
                <div className={`col-span-full text-center py-10 text-[14px] ${themeClasses.meta}`}>
                  No projects found matching "{searchQuery}".
                </div>
              )}
            </div>

            {/* Bottom Back Button */}
            <div className={`pt-6 border-t ${themeClasses.borderMuted}`}>
              <button
                onClick={handleGoHome}
                aria-label="Back to home"
                title="Back to home"
                className={`inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-mono ${themeClasses.accentLink} transition-transform duration-200 hover:-translate-x-1 cursor-pointer`}
              >
                <ArrowLeft size={17} />
                <span>Back to Home</span>
              </button>
            </div>
          </section>
        )}

        {/* ========================================================== */}
        {/* VIEW: PROJECT DETAIL PAGE (NO POPUP MODAL)                 */}
        {/* ========================================================== */}
        {currentView === 'project-detail' && activeProject && (
          <main className="pb-16 sm:pb-20 pt-4 sm:pt-6 px-[22px] sm:px-8 space-y-6 text-left font-mono">
            {/* Top Back Button */}
            <div>
              <button
                onClick={handleBackFromProject}
                aria-label="Back"
                title="Back"
                className={`inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-mono ${themeClasses.accentLink} transition-transform duration-200 hover:-translate-x-1 cursor-pointer`}
              >
                <ArrowLeft size={17} />
                <span>{previousView === 'projects' ? 'Back to Projects' : 'Back to Home'}</span>
              </button>
            </div>

            {/* Project Header */}
            <div className={`space-y-2 border-b ${themeClasses.borderMuted} pb-4`}>
              <h1 className={`text-[24px] sm:text-[28px] md:text-[30px] font-bold tracking-tight ${themeClasses.projectTitle}`}>
                {activeProject.title}
              </h1>

              <p className={`text-[13.5px] sm:text-[15px] leading-relaxed ${themeClasses.meta}`}>
                {activeProject.subtitle}
              </p>
            </div>

            {/* Metrics Row */}
            {activeProject.metrics && activeProject.metrics.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {activeProject.metrics.map((metric, mIdx) => (
                  <span
                    key={mIdx}
                    className={`text-[11.5px] sm:text-[12px] px-2.5 py-1 rounded font-mono ${themeClasses.tagPill}`}
                  >
                    {metric}
                  </span>
                ))}
              </div>
            )}

            {/* Problem & Solution Clean Text */}
            <div className={`space-y-5 text-[14px] sm:text-[15.5px] leading-[1.75] ${themeClasses.desc}`}>
              {activeProject.problem && (
                <div>
                  <h3 className={`text-[12px] sm:text-[13px] uppercase font-semibold tracking-wider ${themeClasses.accentText} mb-1.5`}>
                    Problem
                  </h3>
                  <p>{activeProject.problem}</p>
                </div>
              )}

              {activeProject.solution && (
                <div>
                  <h3 className={`text-[12px] sm:text-[13px] uppercase font-semibold tracking-wider ${themeClasses.accentText} mb-1.5`}>
                    Solution
                  </h3>
                  <p>{activeProject.solution}</p>
                </div>
              )}
            </div>

            {/* Architecture Steps (Simple Clean List) */}
            {activeProject.pipelineSteps && (
              <div className="space-y-2 pt-2">
                <h3 className={`text-[12px] sm:text-[13px] uppercase font-semibold tracking-wider ${themeClasses.accentText}`}>
                  Pipeline Flow
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {activeProject.pipelineSteps.map((s) => (
                    <div
                      key={s.step}
                      className={`p-3 rounded-lg border ${themeClasses.cardBg} flex items-start gap-2.5`}
                    >
                      <span className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded border ${themeClasses.metricPill}`}>
                        {s.step}
                      </span>
                      <div>
                        <div className={`text-[12.5px] font-semibold ${themeClasses.headline}`}>
                          {s.label}
                        </div>
                        <div className={`text-[11.5px] leading-snug ${themeClasses.meta} mt-0.5`}>
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Complete Tech Stack */}
            <div className="space-y-2 pt-2">
              <div className={`flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider ${themeClasses.meta}`}>
                <Boxes size={13} />
                <span>Complete Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {activeProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-[11.5px] sm:text-[12.5px] px-2.5 py-1 rounded font-mono border ${themeClasses.projectTagPill}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-wrap items-center gap-4 pt-5 border-t ${themeClasses.borderMuted}`}>
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] ${themeClasses.accentLink} font-medium`}
                >
                  <GithubIcon size={15} />
                  <span>View Source</span>
                  <ArrowUpRight size={13} />
                </a>
              )}

              {activeProject.articleId && (
                <button
                  onClick={() => handleOpenPost(activeProject.articleId)}
                  className={`inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] ${themeClasses.accentLink} font-medium cursor-pointer`}
                >
                  <FileText size={14} />
                  <span>Read Article</span>
                  <ArrowUpRight size={13} />
                </button>
              )}
            </div>

            {/* Bottom Back Button */}
            <div className={`pt-6 border-t ${themeClasses.borderMuted}`}>
              <button
                onClick={handleBackFromProject}
                aria-label="Back"
                title="Back"
                className={`inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-mono ${themeClasses.accentLink} transition-transform duration-200 hover:-translate-x-1 cursor-pointer`}
              >
                <ArrowLeft size={17} />
                <span>{previousView === 'projects' ? 'Back to Projects' : 'Back to Home'}</span>
              </button>
            </div>
          </main>
        )}

        {/* ========================================================== */}
        {/* VIEW 2: FULL POST ARTICLE READER                           */}
        {/* ========================================================== */}
        {currentView === 'reader' && activePost && (
          <main className="pb-16 sm:pb-20 pt-4 sm:pt-6 px-[22px] sm:px-8 space-y-5 sm:space-y-6 text-left">
            {/* Back button */}
            <div>
              <button
                onClick={handleBackToPosts}
                aria-label="Back to home"
                title="Back to home"
                className={`inline-flex items-center ${themeClasses.accentLink} transition-transform duration-200 hover:-translate-x-1 cursor-pointer`}
              >
                <ArrowLeft size={19} />
              </button>
            </div>

            {/* Post Header */}
            <div className={`space-y-1.5 sm:space-y-2 border-b ${themeClasses.borderMuted} pb-3`}>
              <h1 className={`text-[22px] sm:text-[26px] md:text-[28px] font-bold tracking-tight leading-snug ${themeClasses.postTitle}`}>
                {activePost.title}
              </h1>

              <div className={`flex flex-wrap items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[14px] italic ${themeClasses.meta}`}>
                <div className="flex items-center gap-1">
                  <Calendar size={12} className="not-italic" />
                  <span>{activePost.date}</span>
                </div>
                <span>·</span>
                <span className={themeClasses.metaAccent}>{activePost.category}</span>
              </div>
            </div>

            {/* Article Body Paragraphs */}
            <div className={`text-[14px] sm:text-[16px] leading-[1.7] space-y-3.5 sm:space-y-4 ${themeClasses.desc}`}>
              {activePost.fullContent?.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Architecture / Key Highlights */}
            {activePost.highlights && (
              <div className="space-y-2 text-[13.5px] sm:text-[15px] pt-1">
                <div className={`${themeClasses.accentText} font-semibold text-[13px] sm:text-[14px] uppercase tracking-wider`}>
                  Key Highlights
                </div>
                <ul className={`space-y-1.5 ${themeClasses.desc}`}>
                  {activePost.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className={`${themeClasses.accentText} font-bold`}>›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Pills & GitHub Link */}
            <div className={`pt-2 flex flex-wrap items-center justify-between gap-2.5 border-t ${themeClasses.borderMuted}`}>
              <div className="flex flex-wrap gap-1.5">
                {activePost.tags?.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[12px] sm:text-[13px] px-2 sm:px-2.5 py-0.5 rounded ${themeClasses.tagPill}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {activePost.github && (
                <a
                  href={activePost.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`group inline-flex items-center gap-1.5 text-[13.5px] sm:text-[15px] ${themeClasses.accentLink} font-medium`}
                >
                  <GithubIcon
                    size={16}
                    className="w-4 h-4 transition-transform duration-300 ease-out origin-center group-hover:rotate-6"
                    strokeWidth={2}
                  />
                  <span>View on GitHub</span>
                  <ArrowUpRight size={14} className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>

            {/* Bottom Back Button */}
            <div className={`pt-4 border-t ${themeClasses.borderMuted}`}>
              <button
                onClick={handleBackToPosts}
                aria-label="Back to home"
                title="Back to home"
                className={`inline-flex items-center ${themeClasses.accentLink} transition-transform duration-200 hover:-translate-x-1 cursor-pointer`}
              >
                <ArrowLeft size={19} />
              </button>
            </div>
          </main>
        )}

        {/* ========================================================== */}
        {/* VIEW 3: ABOUT PAGE                                         */}
        {/* ========================================================== */}
        {currentView === 'about' && (
          <main className="pb-6 sm:pb-8 pt-5 sm:pt-7 px-[22px] sm:px-8 text-left">
            <h1 className={`text-[24px] sm:text-[28px] md:text-[30px] font-bold tracking-tight ${themeClasses.headline} mb-5 sm:mb-7`}>
              About
            </h1>

            {/* Responsive Editorial Layout: Stacked on Mobile (Image Top, Text Below), Side-by-Side on Desktop */}
            <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-7 md:gap-8">
              {/* Portrait Photograph: Exactly aligns width with the text content below on mobile */}
              <div className="w-full sm:w-auto shrink-0 max-w-[560px] sm:max-w-none">
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  className="w-full sm:w-[220px] md:w-[250px] aspect-[4/5] sm:aspect-[3/4] object-cover rounded-xl select-none shadow-sm"
                />
              </div>

              {/* About Text Details with average readable typography */}
              <div className={`w-full flex-1 min-w-0 max-w-[560px] space-y-3.5 sm:space-y-4 text-[15px] sm:text-[16px] leading-[1.75] font-mono ${themeClasses.desc}`}>
                <p>
                  Backend AI Engineer focused on building intelligent applications and reliable backend systems.
                </p>
                <p>
                  I enjoy exploring how modern technologies can solve real-world problems and developing practical applications that combine software engineering with AI.
                </p>
                <p>
                  I'm continuously learning and working across backend development, AI engineering, and modern software architecture.
                </p>
                <p className="pt-1">
                  <strong className={`font-semibold ${themeClasses.headline}`}>Technical Interests:</strong>{' '}
                  Backend Engineering, Artificial Intelligence, Machine Learning, LLM Applications, and Agentic AI.
                </p>

                {/* Education Section separated with a line */}
                <div className={`pt-3 sm:pt-4 border-t ${themeClasses.borderMuted} space-y-1`}>
                  <div className={`text-[13px] sm:text-[14px] ${themeClasses.accentText} font-semibold uppercase tracking-wider`}>
                    Education
                  </div>
                  <div className={`text-[15px] sm:text-[16px] ${themeClasses.desc}`}>
                    <p>Bachelor of Science in Computer Science</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Activity Section */}
            <div className={`mt-8 sm:mt-10 pt-6 sm:pt-8 border-t ${themeClasses.borderMuted}`}>
              <h2 className={`text-[16px] sm:text-[18px] font-semibold ${themeClasses.headline} mb-4`}>
                GitHub Activity
              </h2>

              <div className="github-calendar-responsive w-full overflow-hidden">
                <GitHubCalendar
                  username={PROFILE.githubUsername} /* <-- PUT YOUR GITHUB USERNAME HERE (defined in PROFILE.githubUsername) */
                  colorScheme={theme === 'paper' ? 'light' : 'dark'}
                  fontSize={12}
                  blockSize={12}
                  blockMargin={3}
                  showTotalCount={false}
                  showColorLegend={false}
                />
              </div>
            </div>

            {/* Let's Build Something */}
            <div className={`mt-8 sm:mt-10 pt-6 sm:pt-8 border-t ${themeClasses.borderMuted} space-y-3`}>
              <h2 className={`text-[16px] sm:text-[18px] font-semibold ${themeClasses.headline}`}>
                Let's Build Something
              </h2>
              <p className={`text-[15px] sm:text-[16px] leading-[1.75] ${themeClasses.desc} max-w-[620px]`}>
                Looking for an AI Backend Engineer to architect low-latency inference pipelines, build custom RAG architectures, or audit AI backend systems? Drop me an inquiry.
              </p>
              <div className="pt-1">
                <a
                  href="/work"
                  className={`inline-flex items-center gap-1 text-[15px] sm:text-[16px] ${themeClasses.accentLink}`}
                >
                  <span>Freelance Services</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* © 2026 Mubashir Riaz AI Backend Engineer + Socials on right */}
            <div className={`mt-8 sm:mt-10 pt-6 sm:pt-8 border-t ${themeClasses.borderMuted} flex flex-wrap items-center justify-between gap-3 text-[13.5px] sm:text-[14.5px] font-mono ${themeClasses.footer}`}>
              <span>&copy; {new Date().getFullYear()} {PROFILE.name} AI Backend Engineer</span>

              {/* Social Icons on the right side */}
              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`group inline-flex items-center justify-center transition-colors duration-200 cursor-pointer ${themeClasses.socialIcon}`}
                  title="GitHub Profile"
                  aria-label="GitHub"
                >
                  <GithubIcon
                    size={17}
                    className="w-[17px] h-[17px] transition-transform duration-300 ease-out origin-center group-hover:rotate-6"
                    strokeWidth={2}
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`group inline-flex items-center justify-center transition-colors duration-200 cursor-pointer ${themeClasses.socialIcon}`}
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon
                    size={17}
                    className="w-[17px] h-[17px] transition-transform duration-300 ease-out origin-center group-hover:rotate-6"
                    strokeWidth={2}
                  />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PROFILE.email}`}
                  className={`group inline-flex items-center justify-center transition-colors duration-200 cursor-pointer ${themeClasses.socialIcon}`}
                  title={`Send email to ${PROFILE.email}`}
                  aria-label="Email"
                >
                  <Mail
                    size={17}
                    className="w-[17px] h-[17px] transition-transform duration-300 ease-out origin-center group-hover:rotate-6"
                    strokeWidth={2}
                  />
                </a>
              </div>
            </div>
          </main>
        )}

        {/* ---------------------------------------------------------- */}
        {/* FOOTER (CLEAN RETRO MONOSPACE)                             */}
        {/* ---------------------------------------------------------- */}
        {currentView !== 'about' && (
          <>
            <div className="px-[22px] sm:px-8">
              <div
                className={`border-t ${themeClasses.border}`}
                style={{ borderTopWidth: '1px' }}
              />
            </div>
            <footer className={`py-6 sm:py-8 px-[22px] sm:px-8 text-center text-[13px] sm:text-[14px] font-mono ${themeClasses.footer}`}>
              <p>
                &copy; {new Date().getFullYear()} {PROFILE.name}
              </p>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}
