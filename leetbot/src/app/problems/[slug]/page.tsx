'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { getProblemBySlug } from '@/data/problems';
import { evaluateCode } from '@/lib/evaluateCode';
import ProblemDescription from '@/components/ProblemDescription';
import CodeEditor from '@/components/CodeEditor';
import TLEConsole from '@/components/TLEConsole';
import PaywallModal from '@/components/PaywallModal';
import { RoastResponse } from '@/types';

interface Props {
  params: Promise<{ slug: string }>;
}

export default function WorkspacePage({ params }: Props) {
  const { slug } = use(params);
  const problem = getProblemBySlug(slug);

  const [code, setCode] = useState(problem?.starterCode ?? '');
  const [submissionCount, setSubmissionCount] = useState(0);
  const [roastMessage, setRoastMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [isFinalRoast, setIsFinalRoast] = useState(false);

  if (!problem) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-2">Problem not found.</p>
          <p className="text-gray-600 text-sm mb-6">Even Leetbot refuses to review a problem that doesn&apos;t exist.</p>
          <Link href="/" className="text-green-400 hover:underline text-sm">
            ← Back to Problems
          </Link>
        </div>
      </div>
    );
  }

  async function callRoastAPI(trigger: 'wrong' | 'suboptimal' | 'paywall', count: number) {
    setIsLoading(true);
    setRoastMessage(null);
    try {
      const res = await fetch('/api/roast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problemSlug: problem!.slug,
          code,
          trigger,
          submissionCount: count,
        }),
      });
      const data: RoastResponse = await res.json();
      setRoastMessage(data.message);
    } catch {
      setRoastMessage("My servers are as overwhelmed by your code as I am. Try again.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit() {
    if (submitDisabled || isLoading) return;

    const newCount = submissionCount + 1;
    setSubmissionCount(newCount);

    // Trigger paywall on 3rd submission
    if (newCount >= 3) {
      setShowPaywall(true);
      return;
    }

    const trigger = evaluateCode(code, problem!);
    await callRoastAPI(trigger, newCount);
  }

  async function handlePaywallSkip() {
    setShowPaywall(false);
    setIsFinalRoast(true);
    setSubmitDisabled(true);
    await callRoastAPI('paywall', submissionCount);
  }

  return (
    <div className="h-screen flex flex-col bg-gray-950 overflow-hidden">
      {/* Navbar */}
      <nav className="border-b border-gray-800 bg-gray-950 shrink-0 z-10">
        <div className="px-4 h-12 flex items-center gap-4">
          <Link href="/" className="text-green-400 font-bold text-base tracking-tight hover:text-green-300 transition-colors">
            LeetBot
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-300 text-sm">{problem.title}</span>
          <div className="ml-auto flex items-center gap-3">
            <span className="text-gray-500 text-xs hidden sm:block">
              Submissions: <span className={`font-mono font-bold ${submissionCount >= 2 ? 'text-red-400' : 'text-gray-300'}`}>{submissionCount}/3</span>
            </span>
          </div>
        </div>
      </nav>

      {/* Main workspace — split screen */}
      <div className="flex-1 grid grid-cols-2 overflow-hidden">
        {/* Left: Problem Description */}
        <div className="border-r border-gray-800 overflow-hidden">
          <ProblemDescription problem={problem} />
        </div>

        {/* Right: Editor + Controls + Console */}
        <div className="flex flex-col overflow-hidden">
          {/* Editor toolbar */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800 shrink-0">
            <span className="text-gray-400 text-xs font-mono">solution.py</span>
            <button
              onClick={handleSubmit}
              disabled={submitDisabled || isLoading}
              className={`
                px-4 py-1.5 rounded text-sm font-semibold transition-all
                ${submitDisabled
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : isLoading
                  ? 'bg-green-800 text-green-300 cursor-wait animate-pulse'
                  : 'bg-green-600 hover:bg-green-500 text-white cursor-pointer active:scale-95'
                }
              `}
            >
              {submitDisabled
                ? 'Banned from Leetbot Premium'
                : isLoading
                ? 'Submitting...'
                : 'Submit Solution'}
            </button>
          </div>

          {/* Monaco Editor */}
          <div className="flex-1 overflow-hidden">
            <CodeEditor code={code} onChange={setCode} />
          </div>

          {/* TLE Console */}
          <TLEConsole
            message={roastMessage}
            isLoading={isLoading}
            isFinalRoast={isFinalRoast}
          />
        </div>
      </div>

      {/* Paywall Modal */}
      {showPaywall && <PaywallModal onSkip={handlePaywallSkip} />}
    </div>
  );
}
