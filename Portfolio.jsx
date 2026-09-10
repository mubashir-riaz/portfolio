import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Search,
  Sun,
  Moon,
  Calendar,
  ArrowLeft,
  ArrowUpRight,
  X,
  Mail,
  Menu,
  Rss,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  PROFILE DATA                                                      */
/* ------------------------------------------------------------------ */
const PROFILE = {
  name: 'Mubashir Riaz',
  handle: '@mubashir',
  role: 'AI Backend Engineer & Intelligent Systems Developer',
  email: 'mubashiriaz10@gmail.com',
  avatar: '/profile.jpeg',
  github: 'https://github.com/mubashir-riaz',
  linkedin: 'https://www.linkedin.com/in/mubashir-riaz-51a881424/',
  x: 'https://x.com',
  descriptionLines: [
    'AI Backend Engineer building intelligent systems.',
    'Every commit lands on GitHub for you to fork & remix.',
  ],
};


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
  {
    id: 'inference-speed',
    title: 'Shipping at Inference-Speed: Designing Low-Latency FastAPI Pipelines',
    date: '28 Dec, 2025',
    category: 'AI Infrastructure',
    description:
      'Why async streaming endpoints, background worker queues, and Redis caching transform LLM response times for high-concurrency systems.',
    github: 'https://github.com/mubashir-riaz',
    tags: ['FastAPI', 'Performance', 'Redis', 'SSE Streaming', 'Architecture'],
    codeSnippet: `@app.post("/v1/stream")
async def stream_inference(req: PromptRequest):
    # Check semantic cache for sub-10ms response
    cached = await semantic_cache.lookup(req.prompt)
    if cached:
        return StreamingResponse(cached.stream(), media_type="text/event-stream")

    # Asynchronous token streaming over HTTP/2
    async def token_generator():
        async for token in model_client.astream(req.prompt):
            yield f"data: {json.dumps({'token': token})}\\n\\n"

    return StreamingResponse(token_generator(), media_type="text/event-stream")`,
    fullContent: [
      'In production AI systems, latency is user retention. A 6-second blocking delay feels broken, whereas streaming the first token in under 300ms creates an immediate feeling of real-time responsiveness.',
      'By decoupling FastAPI endpoints using Server-Sent Events (SSE) and asynchronous generator coroutines, users receive streamed text without blocking worker threads.',
      'Furthermore, integrating Redis semantic caching for high-frequency queries intercepts identical and near-identical questions, returning responses in under 15ms without touching upstream LLM APIs.',
      'This architecture sustained 450 concurrent connections in stress tests without degradation in Time-to-First-Token (TTFT).',
    ],
    highlights: [
      'Real-time token streaming with Server-Sent Events (SSE)',
      'Redis semantic caching eliminating redundant model compute',
      'Async connection pooling with Uvicorn and Gunicorn workers',
      'Production telemetry tracking TTFT and tokens-per-second',
    ],
    stack: ['Python', 'FastAPI', 'Redis', 'Uvicorn', 'Docker', 'Prometheus'],
  },
  {
    id: 'agentic-engineering',
    title: 'Agentic Engineering: The No-BS Way to Build Reliable AI Workflows',
    date: '17 Nov, 2025',
    category: 'Agent Systems',
    description:
      'Moving beyond naive prompt chaining: implementing Pydantic validation, structured outputs, deterministic state machines, and graceful fallback handling.',
    github: 'https://github.com/mubashir-riaz',
    tags: ['AI Agents', 'Pydantic', 'Reliability', 'System Design'],
    codeSnippet: `class ToolExecutionResult(BaseModel):
    step_id: str
    status: Literal["success", "retry", "fatal"]
    payload: dict
    validation_notes: Optional[str] = None

class ProductionAgentController:
    async def execute_step(self, current_state: State) -> NextTransition:
        # Probabilistic LLM produces structured action
        action = await self.planner.next_step(current_state)
        # Deterministic validator enforces invariants
        validated = self.schema_guard.verify(action)
        return await self.state_machine.transition(validated)`,
    fullContent: [
      'The biggest myth in autonomous agent development is that giving an LLM an open-ended loop and a dozen tools produces reliable software.',
      'In enterprise environments, open-ended loops hallucinate parameter types, fall into cyclic retries, and blow through token budgets. Real reliability demands treating the model as a probabilistic decision function inside a deterministic state machine.',
      'By anchoring every tool invocation with strict Pydantic schemas, setting deterministic fallback trees, and establishing finite transition graphs, agent workflows become predictable and production-ready.',
    ],
    highlights: [
      'Finite state machine control loops avoiding infinite recursion',
      'Strict Pydantic typing and validation on all model tool calls',
      'Circuit breakers and exponential backoff retry algorithms',
      'Deterministic audit trails for compliance and debugging',
    ],
    stack: ['Python', 'Pydantic', 'LangChain', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: 'production-vector-search',
    title: 'Production Vector Search: Pitfalls in Chunking and Retrieval Quality',
    date: '05 Oct, 2025',
    category: 'Vector Search',
    description:
      'Why top-k similarity often fails on tabular data and how hybrid retrieval with metadata filtering eliminates irrelevant context.',
    github: 'https://github.com/mubashir-riaz',
    tags: ['Vector Search', 'Embeddings', 'ChromaDB', 'Chunking'],
    codeSnippet: `# Hybrid retrieval: Dense vector similarity + metadata filtering
matched_chunks = chroma_collection.query(
    query_embeddings=[embedded_query],
    where={"$and": [{"doc_type": "contract"}, {"year": 2025}]},
    n_results=10
)

# Cross-encoder re-ranking step
reranked = cross_encoder.rank(
    query=user_query,
    documents=[c.text for c in matched_chunks]
)`,
    fullContent: [
      'Dense vector embeddings are exceptional at capturing abstract thematic meaning, but they consistently struggle with exact alphanumeric matches, serial numbers, and tabular data.',
      'When splitting text purely by character counts (e.g., 500 characters), row 12 of a table gets separated from its column header in row 1, rendering the embedding useless.',
      'We addressed this by pairing layout-aware chunking with hybrid search: metadata pre-filtering scopes down candidates, dense embeddings perform recall, and a cross-encoder re-ranker picks the top 3 high-precision context snippets.',
      'This hybrid pipeline increased answer relevance from 68% to over 94% on real enterprise datasets.',
    ],
    highlights: [
      'Layout-aware chunking preserving tables and lists intact',
      'Metadata filtering before dense vector query execution',
      'Cross-encoder re-ranking for ultra-precise context alignment',
      'Sub-50ms query latency on indexed vector collections',
    ],
    stack: ['ChromaDB', 'Sentence-Transformers', 'Python', 'FastAPI'],
  },
];

/* ------------------------------------------------------------------ */
/*  SKILLS & TECH STACK                                               */
/* ------------------------------------------------------------------ */
const TECH_STACK = [
  'Python',
  'FastAPI',
  'Pydantic',
  'LangChain',
  'LLM Agents',
  'RAG',
  'ChromaDB',
  'PostgreSQL',
  'Redis',
  'Docker',
  'AWS',
  'JavaScript',
  'SQL',
  'Git',
  'Linux',
];

/* ------------------------------------------------------------------ */
/*  CUSTOM INLINE ICONS FOR PIXEL-PERFECT FIDELITY                    */
/* ------------------------------------------------------------------ */
function GithubIcon({ className = 'w-[18px] h-[18px]' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function XIcon({ className = 'w-[18px] h-[18px]' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-[18px] h-[18px]' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}


/* ------------------------------------------------------------------ */
/*  MAIN PORTFOLIO BLOG COMPONENT                                     */
/* ------------------------------------------------------------------ */
export default function Portfolio() {
  // Navigation & View State: 'posts', 'about', or 'reader'
  const [currentView, setCurrentView] = useState('posts');
  const [selectedPostId, setSelectedPostId] = useState(null);

  // Search Palette State
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  // Mobile Navigation Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme Mode: 'navy' (#202838), 'oled' (#0b0f17), 'paper' (#f4f1ea)
  const [theme, setTheme] = useState('navy');

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'navy') return 'oled';
      if (prev === 'oled') return 'paper';
      return 'navy';
    });
  };

  // Keyboard shortcut Ctrl+K / Cmd+K
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

  const handleOpenPost = (postId) => {
    setSelectedPostId(postId);
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

  const activePost = useMemo(() => {
    return POSTS.find((p) => p.id === selectedPostId) || POSTS[0];
  }, [selectedPostId]);

  const themeClasses = useMemo(() => {
    if (theme === 'oled') {
      return {
        bg: 'bg-[#0b0f17]',
        text: 'text-[#f2f2f2]',
        navLogo: 'text-[#f5f5f5]',
        headline: 'text-[#f5f5f5]',
        desc: 'text-[#e0e0e0]',
        meta: 'text-[#94a3b8]',
        border: 'border-[#d66b18]',
        postTitle: 'text-[#ff7300]',
      };
    }
    if (theme === 'paper') {
      return {
        bg: 'bg-[#f4f1ea]',
        text: 'text-[#1e293b]',
        navLogo: 'text-[#0f172a]',
        headline: 'text-[#0f172a]',
        desc: 'text-[#334155]',
        meta: 'text-[#64748b]',
        border: 'border-[#d66b18]',
        postTitle: 'text-[#c25404]',
      };
    }
    return {
      bg: 'bg-[#202838]',
      text: 'text-[#f2f2f2]',
      navLogo: 'text-[#f5f5f5]',
      headline: 'text-[#f5f5f5]',
      desc: 'text-[#f1f1f1]',
      meta: 'text-[#d7d9df]',
      border: 'border-[#d66b18]',
      postTitle: 'text-[#ff7300]',
    };
  }, [theme]);

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} font-mono transition-colors duration-200`}>
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* MAIN SINGLE COLUMN BLOG WRAPPER (768PX MAX-WIDTH)            */}
      {/* ------------------------------------------------------------ */}
      <div className="max-w-[768px] mx-auto">
        {/* ---------------------------------------------------------- */}
        {/* HEADER BAR (BORDER-BOTTOM: 1PX #D86B18)                    */}
        {/* ---------------------------------------------------------- */}
        <header
          className="px-[18px] sm:px-6 flex items-center justify-between h-[59px] sm:h-[72px]"
        >
          {/* Brand / Logo (System Monospace, 20px on mobile, bold #f5f5f5) */}
          <button
            onClick={() => {
              setCurrentView('posts');
              setSelectedPostId(null);
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{ fontFamily: 'var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)' }}
            className={`text-[20px] sm:text-[28px] md:text-[30px] font-bold tracking-tight ${themeClasses.navLogo} hover:text-[#ff7300] transition-colors leading-none text-left`}
          >
            {PROFILE.name}
          </button>

          {/* Desktop Navigation Items + Icons (Hidden on Mobile) */}
          <nav className="hidden sm:flex items-center gap-6 md:gap-7 text-[16px] shrink-0">
            <button
              onClick={() => {
                setCurrentView('posts');
                setSelectedPostId(null);
              }}
              className={`py-1 px-1.5 transition-colors ${
                currentView === 'posts' || currentView === 'reader'
                  ? 'text-[#ff7300] font-semibold underline decoration-[#d66b18] underline-offset-4'
                  : 'text-white hover:text-[#ff7300]'
              }`}
            >
              Posts
            </button>

            <button
              onClick={() => {
                setCurrentView('about');
                setSelectedPostId(null);
              }}
              className={`py-1 px-1.5 transition-colors ${
                currentView === 'about'
                  ? 'text-[#ff7300] font-semibold underline decoration-[#d66b18] underline-offset-4'
                  : 'text-white hover:text-[#ff7300]'
              }`}
            >
              About
            </button>

            {/* Search Icon Button */}
            <button
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Search Posts"
              className="text-white hover:text-[#ff7300] transition-colors p-1.5"
              title="Search (Cmd+K)"
            >
              <Search size={16} />
            </button>

            {/* Theme Toggle Icon Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="text-white hover:text-[#ff7300] transition-colors p-1.5"
              title={`Theme: ${theme} (Click to switch)`}
            >
              {theme === 'paper' ? <Sun size={16} className="text-[#d66b18]" /> : <Moon size={16} />}
            </button>
          </nav>

          {/* Mobile Menu Hamburger Button (Only on Mobile, 19px, #e5e7eb) */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            className="sm:hidden text-[#e5e7eb] hover:text-[#ff7300] p-1.5 transition-colors flex items-center justify-center focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X size={19} strokeWidth={2} />
            ) : (
              <Menu size={19} strokeWidth={2} />
            )}
          </button>
        </header>

        {/* ---------------------------------------------------------- */}
        {/* NAVBAR ORANGE HORIZONTAL DIVIDER                           */}
        {/* ---------------------------------------------------------- */}
        <div className="px-[18px] sm:px-6">
          <div
            className={`border-t ${themeClasses.border}`}
            style={{ borderTopWidth: '1px' }}
          />
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-b border-[#d66b18]/40 bg-[#161c28] px-[18px] sm:px-6 py-3.5 space-y-3 font-mono text-[15px]">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  setCurrentView('posts');
                  setSelectedPostId(null);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-1.5 px-2 rounded transition-colors ${
                  currentView === 'posts' || currentView === 'reader'
                    ? 'text-[#ff7300] font-semibold bg-[#202838]'
                    : 'text-[#f2f2f2] hover:text-[#ff7300]'
                }`}
              >
                // Posts
              </button>

              <button
                onClick={() => {
                  setCurrentView('about');
                  setSelectedPostId(null);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-1.5 px-2 rounded transition-colors ${
                  currentView === 'about'
                    ? 'text-[#ff7300] font-semibold bg-[#202838]'
                    : 'text-[#f2f2f2] hover:text-[#ff7300]'
                }`}
              >
                // About
              </button>
            </div>

            <div className="pt-2 border-t border-[#2d374d] flex items-center justify-between px-2 text-[14px]">
              <button
                onClick={() => {
                  setSearchOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-[#cbd5e1] hover:text-[#ff7300] py-1"
              >
                <Search size={15} />
                <span>Search (Cmd+K)</span>
              </button>

              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-[#cbd5e1] hover:text-[#ff7300] py-1"
              >
                {theme === 'paper' ? <Sun size={15} className="text-[#d66b18]" /> : <Moon size={15} />}
                <span className="capitalize">{theme}</span>
              </button>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------- */}
        {/* INLINE SEARCH INPUT (WHEN ACTIVATED)                       */}
        {/* ---------------------------------------------------------- */}
        {searchOpen && (
          <div>
            <div className="py-2.5 sm:py-3 px-[18px] sm:px-6 flex items-center gap-2.5 sm:gap-3 text-[14px] sm:text-[16px]">
              <Search size={15} className="text-[#ff7300] shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by keyword, stack or title..."
                className="w-full bg-transparent outline-none text-[13.5px] sm:text-[16px] font-mono text-[#f2f2f2] placeholder:text-[#94a3b8]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-[#94a3b8] hover:text-[#f2f2f2] text-[13px] sm:text-[15px] px-1.5 shrink-0"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setSearchOpen(false)}
                className="text-[#94a3b8] hover:text-[#f2f2f2] p-1 shrink-0"
              >
                <X size={15} />
              </button>
            </div>
            <div className="px-[18px] sm:px-6">
              <div
                className={`border-t ${themeClasses.border}`}
                style={{ borderTopWidth: '1px' }}
              />
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------- */}
        {/* PROFILE SECTION: VERTICAL CENTERED ON MOBILE, ROW DESKTOP  */}
        {/* ---------------------------------------------------------- */}
        <section className="pt-[24px] pb-[23px] px-[18px] sm:px-6 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left sm:gap-8 sm:py-8">
          {/* Centered Circular Avatar (160px, margin-bottom: 25px on mobile) */}
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
              <h1 className={`text-[21px] sm:text-[30px] font-bold tracking-tight leading-tight ${themeClasses.headline}`}>
                Hi, I'm {PROFILE.handle}.
              </h1>
              <span
                className="text-[#ff6900] hover:text-[#ff8822] cursor-pointer inline-flex items-center ml-0.5 group"
                title="RSS Feed"
                aria-label="RSS Feed"
              >
                <Rss size={17} className="stroke-[2.5] transition-transform duration-200 ease-in-out origin-center group-hover:rotate-12" />
              </span>
            </div>

            {/* Description lines (Monospace, 14px, line-height 1.7, max-w-[440px]) */}
            <div className="mt-3 space-y-0 text-[14px] sm:text-[16px] text-[#f1f1f1] leading-[1.7] font-mono max-w-[440px] sm:max-w-none text-center sm:text-left mx-auto sm:mx-0">
              {PROFILE.descriptionLines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>

            {/* Minimal Monochrome Outline Social Icons (gap 15px, margin-top 18px, 24px) */}
            <div className="mt-[18px] sm:mt-4 flex items-center justify-center sm:justify-start gap-[15px] sm:gap-4 text-[#d5d8df]">
              {/* GitHub */}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center hover:text-[#ff7300] transition-colors p-0.5"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon className="w-[24px] h-[24px] transition-transform duration-200 ease-in-out origin-center group-hover:rotate-12" />
              </a>

              {/* X / Twitter */}
              <a
                href={PROFILE.x}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center hover:text-[#ff7300] transition-colors p-0.5"
                title="X Profile"
                aria-label="X"
              >
                <XIcon className="w-[24px] h-[24px] transition-transform duration-200 ease-in-out origin-center group-hover:rotate-12" />
              </a>

              {/* LinkedIn */}
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center hover:text-[#ff7300] transition-colors p-0.5"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-[24px] h-[24px] transition-transform duration-200 ease-in-out origin-center group-hover:rotate-12" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${PROFILE.email}`}
                className="group inline-flex items-center justify-center hover:text-[#ff7300] transition-colors p-0.5"
                title={`Send email to ${PROFILE.email}`}
                aria-label="Email"
              >
                <Mail className="w-[24px] h-[24px] transition-transform duration-200 ease-in-out origin-center group-hover:rotate-12" />
              </a>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* ORANGE HORIZONTAL DIVIDER (COLOR: #D66B18, 1PX)            */}
        {/* ---------------------------------------------------------- */}
        <div className="px-[18px] sm:px-6">
          <div
            className={`border-t ${themeClasses.border}`}
            style={{ borderTopWidth: '1px' }}
          />
        </div>

        {/* ---------------------------------------------------------- */}
        {/* DYNAMIC CONTENT ROUTER: 'posts' | 'reader' | 'about'       */}
        {/* ---------------------------------------------------------- */}

        {/* ========================================================== */}
        {/* VIEW 1: POSTS LIST (VERTICAL LIST, pt-[83px] pb-[40px])     */}
        {/* ========================================================== */}
        {currentView === 'posts' && (
          <section id="recent-posts" className="pt-[83px] pb-[40px] px-[18px] sm:px-6">
            {searchQuery && (
              <div className="mb-4 sm:mb-6 text-[13.5px] sm:text-[15px] text-[#94a3b8]">
                Found {filteredPosts.length} post{filteredPosts.length === 1 ? '' : 's'} matching "{searchQuery}"
              </div>
            )}

            <div className="flex flex-col space-y-8 sm:space-y-12 md:space-y-14">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group text-left pb-2 sm:pb-3">
                  {/* Title (Monospace, 16px, #ff7300) */}
                  <h2 className="mb-1.5">
                    <button
                      onClick={() => handleOpenPost(post.id)}
                      className={`text-[16px] sm:text-[18px] font-normal ${themeClasses.postTitle} hover:underline cursor-pointer transition-colors text-left block leading-snug`}
                    >
                      {post.title}
                    </button>
                  </h2>

                  {/* Metadata (Monospace, 11px-12px, #d7d9df, calendar icon) */}
                  <div className={`flex flex-wrap items-center gap-1.5 text-[11px] sm:text-[13px] ${themeClasses.meta} mb-2`}>
                    <Calendar size={11} className="shrink-0 opacity-80" />
                    <span>{post.date}</span>
                    {post.category && (
                      <>
                        <span className="opacity-50">·</span>
                        <span className="text-[#ff7300]/80">[{post.category}]</span>
                      </>
                    )}
                  </div>

                  {/* Description (Monospace, 16px, 1.6 line-height, #e0e0e0) */}
                  <p
                    onClick={() => handleOpenPost(post.id)}
                    className={`text-[14px] sm:text-[16px] leading-[1.6] ${themeClasses.desc} cursor-pointer opacity-90 group-hover:opacity-100 transition-opacity`}
                  >
                    {post.description}
                  </p>
                </article>
              ))}

              {filteredPosts.length === 0 && (
                <div className="text-center py-12 text-[14px] sm:text-[16px] text-[#94a3b8]">
                  No posts found matching "{searchQuery}".
                </div>
              )}
            </div>
          </section>
        )}

        {/* ========================================================== */}
        {/* VIEW 2: FULL POST ARTICLE READER                           */}
        {/* ========================================================== */}
        {currentView === 'reader' && activePost && (
          <main className="pb-16 sm:pb-20 pt-4 sm:pt-6 px-[18px] sm:px-6 space-y-5 sm:space-y-6 text-left">
            {/* Back button */}
            <div>
              <button
                onClick={handleBackToPosts}
                className="inline-flex items-center gap-1.5 text-[13.5px] sm:text-[15px] text-[#ff7300] hover:underline cursor-pointer"
              >
                <ArrowLeft size={15} />
                <span>Back to all posts</span>
              </button>
            </div>

            {/* Post Header */}
            <div className="space-y-1.5 sm:space-y-2 border-b border-[#d86b18]/40 pb-3">
              <h1 className={`text-[17px] sm:text-[19px] md:text-[21px] font-bold leading-snug ${themeClasses.postTitle}`}>
                {activePost.title}
              </h1>

              <div className={`flex flex-wrap items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[14px] ${themeClasses.meta}`}>
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{activePost.date}</span>
                </div>
                <span>·</span>
                <span className="text-[#ff7300]">[{activePost.category}]</span>
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
              <div className="p-3 sm:p-4 rounded bg-[#161c28] border border-[#2d374d] space-y-2 text-[13.5px] sm:text-[15px]">
                <div className="text-[#ff7300] font-semibold text-[13px] sm:text-[14px] uppercase tracking-wider">
                  // Key Highlights
                </div>
                <ul className="space-y-1.5 text-[#cbd5e1]">
                  {activePost.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#ff7300] font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Code Snippet */}
            {activePost.codeSnippet && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[12px] sm:text-[13px] text-[#94a3b8]">
                  <span>python implementation</span>
                  <span className="text-[#ff7300]">UTF-8 | Python 3.12</span>
                </div>
                <div className="p-3 sm:p-3.5 rounded bg-[#121620] border border-[#2d374d] overflow-x-auto text-[12px] sm:text-[14px] font-mono text-[#e0e0e0] leading-relaxed">
                  <pre>{activePost.codeSnippet}</pre>
                </div>
              </div>
            )}

            {/* Tech Stack Pills & GitHub Link */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-2.5 border-t border-[#d86b18]/40">
              <div className="flex flex-wrap gap-1.5">
                {activePost.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] sm:text-[13px] px-2 sm:px-2.5 py-0.5 rounded bg-[#161c28] border border-[#2d374d] text-[#cbd5e1]"
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
                  className="group inline-flex items-center gap-1.5 text-[13.5px] sm:text-[15px] text-[#ff7300] hover:underline font-medium"
                >
                  <GithubIcon className="w-4 h-4 transition-transform duration-200 ease-in-out origin-center group-hover:rotate-12" />
                  <span>View on GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>

            {/* Bottom Back Button */}
            <div className="pt-4 border-t border-[#d86b18]/30">
              <button
                onClick={handleBackToPosts}
                className="inline-flex items-center gap-1.5 text-[13.5px] sm:text-[15px] text-[#ff7300] hover:underline cursor-pointer"
              >
                <ArrowLeft size={15} />
                <span>Back to all posts</span>
              </button>
            </div>
          </main>
        )}

        {/* ========================================================== */}
        {/* VIEW 3: ABOUT PAGE                                         */}
        {/* ========================================================== */}
        {currentView === 'about' && (
          <main className="pb-16 sm:pb-20 pt-4 sm:pt-6 px-[18px] sm:px-6 space-y-5 sm:space-y-6 text-left">
            <div>
              <button
                onClick={handleBackToPosts}
                className="inline-flex items-center gap-1.5 text-[13.5px] sm:text-[15px] text-[#ff7300] hover:underline cursor-pointer"
              >
                <ArrowLeft size={15} />
                <span>Back to all posts</span>
              </button>
            </div>

            <div className="space-y-1.5 sm:space-y-2 border-b border-[#d66b18]/40 pb-3">
              <h1 className={`text-[24px] sm:text-[30px] font-bold tracking-tight ${themeClasses.headline}`}>
                About
              </h1>
              <p className="text-[13px] sm:text-[14px] text-[#ff7300]">
                AI Backend Engineer & Intelligent Systems Developer
              </p>
            </div>

            {/* Bio Paragraphs */}
            <div className={`text-[14px] sm:text-[16px] leading-[1.7] space-y-3.5 sm:space-y-4 ${themeClasses.desc}`}>
              <p>
                I am an AI Backend Engineer focused on designing high-throughput API architectures,
                multimodal document extraction pipelines, and citation-grounded RAG systems.
              </p>
              <p>
                My engineering philosophy is rooted in pragmatism: I believe AI models should be
                treated as probabilistic components wrapped inside strictly typed, deterministic state
                machines. I learn by building production-ready systems and testing their boundaries under load.
              </p>
              <p>
                Currently, I am building and scaling projects like <strong>InvoiceGuard AI</strong> (automated
                freight invoice auditing via Vision LLMs) and <strong>DocuMind AI</strong> (hierarchical RAG
                document assistant with ChromaDB).
              </p>
            </div>

            {/* Technical Stack & Architecture */}
            <div className="space-y-2 pt-1">
              <div className="text-[13px] sm:text-[14px] text-[#ff7300] font-semibold uppercase tracking-wider">
                Technical Stack & Architecture
              </div>
              <p className={`text-[14px] sm:text-[16px] leading-[1.7] ${themeClasses.desc}`}>
                {TECH_STACK.join(', ')}
              </p>
            </div>

            {/* Direct Contact & Socials */}
            <div className="pt-3 border-t border-[#d66b18]/40 space-y-2.5">
              <div className="text-[13px] sm:text-[14px] text-[#ff7300] font-semibold uppercase tracking-wider">
                Connect
              </div>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-[13px] sm:text-[15px]">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="group px-2.5 sm:px-3 py-1.5 rounded bg-[#161c28] border border-[#2d374d] hover:border-[#d66b18] text-[#f2f2f2] transition-colors flex items-center gap-2 break-all"
                >
                  <Mail size={15} className="text-[#ff7300] shrink-0 transition-transform duration-200 ease-in-out origin-center group-hover:rotate-12" />
                  <span className="break-all">{PROFILE.email}</span>
                </a>

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group px-2.5 sm:px-3 py-1.5 rounded bg-[#161c28] border border-[#2d374d] hover:border-[#d66b18] text-[#f2f2f2] transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4 text-[#ff7300] shrink-0 transition-transform duration-200 ease-in-out origin-center group-hover:rotate-12" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group px-2.5 sm:px-3 py-1.5 rounded bg-[#161c28] border border-[#2d374d] hover:border-[#d66b18] text-[#f2f2f2] transition-colors flex items-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#ff7300] shrink-0 transition-transform duration-200 ease-in-out origin-center group-hover:rotate-12" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </main>
        )}

        {/* ---------------------------------------------------------- */}
        {/* FOOTER (CLEAN RETRO MONOSPACE)                             */}
        {/* ---------------------------------------------------------- */}
        <footer className="py-6 sm:py-8 px-[18px] sm:px-6 border-t border-[#d66b18]/40 text-center text-[13px] sm:text-[14px] text-[#94a3b8] font-mono">
          <p>
            &copy; {new Date().getFullYear()} {PROFILE.name}
          </p>
        </footer>
      </div>
    </div>
  );
}