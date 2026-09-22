import React from 'react';
import { Mail } from 'lucide-react';

export default function Work() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono flex flex-col justify-between p-6 sm:p-12 selection:bg-[#1f6feb] selection:text-white">
      {/* Standalone Header */}
      <header className="max-w-[720px] w-full mx-auto flex items-center justify-between py-4 border-b border-[#30363d]">
        <span className="text-[16px] sm:text-[18px] font-semibold text-[#f0f6fc] tracking-tight">
          Freelance Work & Services
        </span>
        <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] text-[#58a6ff] bg-[#161b22] border border-[#30363d] px-2.5 py-0.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#58a6ff] animate-pulse" />
          <span>In Progress</span>
        </span>
      </header>

      {/* Main Freelance Standalone Content */}
      <main className="max-w-[720px] w-full mx-auto my-auto py-16 sm:py-24 text-left space-y-6">
        <div className="inline-block text-[12px] sm:text-[13px] text-[#58a6ff] uppercase tracking-wider font-semibold">
          // Freelance Portfolio
        </div>

        <h1 className="text-[30px] sm:text-[42px] font-bold tracking-tight text-[#f0f6fc] leading-tight">
          Under Construction
        </h1>

        <div className="text-[15px] sm:text-[16px] leading-[1.8] text-[#8b949e] space-y-3 max-w-[620px]">
          <p>
            This space is reserved for freelance projects, client case studies, and engineering consulting services.
          </p>
          <p className="text-[13px] sm:text-[14px] text-[#6e7681]">
            Work is currently in pending and will be launched soon.
          </p>
        </div>

        <div className="pt-2">
          <a
            href="mailto:mubashiriaz10@gmail.com?subject=Freelance%20Inquiry"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] text-[#f0f6fc] hover:text-[#58a6ff] text-[13.5px] sm:text-[14px] transition-colors cursor-pointer"
          >
            <Mail size={15} className="text-[#58a6ff]" />
            <span>Inquire for freelance work</span>
          </a>
        </div>
      </main>

      {/* Standalone Footer */}
      <footer className="max-w-[720px] w-full mx-auto py-6 border-t border-[#30363d] text-[12px] sm:text-[13px] text-[#6e7681] text-center">
        <p>&copy; {new Date().getFullYear()} Freelance Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
