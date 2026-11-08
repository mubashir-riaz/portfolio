import React from 'react';
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiLangchain,
  SiHuggingface,
  SiScikitlearn,
  SiTensorflow,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiPytest,
} from 'react-icons/si';
import {
  Boxes,
  Eye,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  CUSTOM ICONS FOR TECH WITHOUT STANDARD SIMPLE ICONS               */
/* ------------------------------------------------------------------ */

export function SqlServerIcon({ className = 'w-3.5 h-3.5 shrink-0' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.2 5.3c0-1.8-4.1-3.3-9.2-3.3S2.8 3.5 2.8 5.3v13.4c0 1.8 4.1 3.3 9.2 3.3s9.2-1.5 9.2-3.3V5.3zm-9.2-1.6c4.1 0 7.4 1 7.4 1.6s-3.3 1.6-7.4 1.6-7.4-1-7.4-1.6 3.3-1.6 7.4-1.6zm0 5.4c4.1 0 7.4 1 7.4 1.6s-3.3 1.6-7.4 1.6-7.4-1-7.4-1.6 3.3-1.6 7.4-1.6zm0 5.4c4.1 0 7.4 1 7.4 1.6s-3.3 1.6-7.4 1.6-7.4-1-7.4-1.6 3.3-1.6 7.4-1.6zm0 5.4c-4.1 0-7.4-1-7.4-1.6v-.3c1.7 1 4.4 1.6 7.4 1.6s5.7-.6 7.4-1.6v.3c0 .6-3.3 1.6-7.4 1.6z" />
    </svg>
  );
}

export function ChromaIcon({ className = 'w-3.5 h-3.5 shrink-0' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="6.5" cy="6.5" r="4.2" />
      <circle cx="17.5" cy="6.5" r="4.2" opacity="0.85" />
      <circle cx="6.5" cy="17.5" r="4.2" opacity="0.7" />
      <circle cx="17.5" cy="17.5" r="4.2" opacity="0.5" />
    </svg>
  );
}

export function OpenAIIcon({ className = 'w-3.5 h-3.5 shrink-0' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zM8.307 13.935L5.78 12.476l2.527-1.458 2.527 1.458-2.527 1.459z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  DATA: 5 CATEGORIES & 24 USER TECHNOLOGIES                         */
/* ------------------------------------------------------------------ */

export const TECH_CATEGORIES = [
  {
    category: 'LANGUAGES',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
    ],
  },
  {
    category: 'FRAMEWORKS',
    skills: [
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
      { name: 'Express.js', icon: SiExpress, color: '#94a3b8' },
      { name: 'Vite', icon: SiVite, color: '#bd34fe' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
    ],
  },
  {
    category: 'DATABASES',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
      { name: 'Microsoft SQL Server', icon: SqlServerIcon, color: '#cc292b' },
      { name: 'Redis', icon: SiRedis, color: '#dc382d' },
      { name: 'ChromaDB', icon: ChromaIcon, color: '#ff6b6b' },
    ],
  },
  {
    category: 'CLOUD AND DEVOPS',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088ff' },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'LLM APIs', icon: OpenAIIcon, color: '#10a37f' },
      { name: 'LangChain', icon: SiLangchain, color: '#1c3c3c' },
      { name: 'Sentence Transformers', icon: SiHuggingface, color: '#ffac45' },
      { name: 'Vector Embeddings', icon: Boxes, color: '#a855f7' },
      { name: 'Vision LLMs', icon: Eye, color: '#ec4899' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#f89939' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
    ],
  },
  {
    category: 'TESTING',
    skills: [
      { name: 'Pytest', icon: SiPytest, color: '#0a9edc' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  REUSABLE TECH BADGE COMPONENT                                     */
/* ------------------------------------------------------------------ */

export function TechBadge({ name, icon: Icon, color, themeClasses, theme }) {
  const hoverClass =
    theme === 'paper'
      ? 'hover:border-[#0077b5]/60 hover:bg-[#ffffff] hover:text-[#111827]'
      : 'hover:border-[#38bdf8]/70 hover:bg-[#1a2333] hover:text-[#f8fafc]';

  return (
    <div
      className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-[13px] sm:text-[13.5px] font-mono select-none transition-all duration-150 cursor-default hover:-translate-y-0.5 hover:shadow-sm ${
        themeClasses?.tagPill || 'bg-[#161c28] border-[#2d374d] text-[#cbd5e1]'
      } ${hoverClass}`}
    >
      {Icon && (
        <span
          className="w-3.5 h-3.5 shrink-0 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity"
          style={color ? { color } : undefined}
        >
          <Icon size={14} className="w-3.5 h-3.5 shrink-0" />
        </span>
      )}
      <span className="leading-none whitespace-nowrap">{name}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN TECH STACK / WHAT I BUILD WITH SECTION                       */
/* ------------------------------------------------------------------ */

export default function TechStackSection({ themeClasses, theme }) {
  return (
    <section id="tech-stack" className="pt-7 sm:pt-9 pb-12 sm:pb-16 px-[22px] sm:px-8 text-left">
      {/* Eyebrow Label */}
      <div className="mb-1.5">
        <span
          className={`text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase font-mono ${themeClasses.accentText}`}
        >
          TOOLBOX
        </span>
      </div>

      {/* Main Section Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className={`text-[23px] sm:text-[28px] font-bold tracking-tight ${themeClasses.headline}`}>
          What I Build With
        </h2>
      </div>

      {/* Category Rows with Thin Horizontal Dividers */}
      <div className={`border-t ${themeClasses.borderMuted}`}>
        {TECH_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className={`py-5 sm:py-6 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 border-b ${themeClasses.borderMuted}`}
          >
            {/* Category Label on Left */}
            <div className="sm:w-44 md:w-48 shrink-0 pt-1">
              <span
                className={`text-[11.5px] sm:text-[12px] font-semibold tracking-wider uppercase font-mono ${themeClasses.meta}`}
              >
                {cat.category}
              </span>
            </div>

            {/* Badges on Right */}
            <div className="flex-1 flex flex-wrap gap-2 sm:gap-2.5">
              {cat.skills.map((tech) => (
                <TechBadge
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                  themeClasses={themeClasses}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
