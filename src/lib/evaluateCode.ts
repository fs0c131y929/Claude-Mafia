import { Problem, TriggerType } from '@/types';

export function evaluateCode(code: string, problem: Problem): TriggerType {
  const trimmed = code.trim();

  // Empty or unchanged starter code
  if (!trimmed || trimmed === problem.starterCode.trim()) {
    return 'wrong';
  }

  // Too short to be a real solution
  if (trimmed.split('\n').length < 3) {
    return 'wrong';
  }

  // No return statement — almost certainly wrong
  if (!trimmed.includes('return')) {
    return 'wrong';
  }

  // Nested loop detection — universal brute force signal
  const nestedLoopPattern = /for\s*[\w(][\s\S]{0,300}for\s*[\w(]/;
  const hasNestedLoops = nestedLoopPattern.test(trimmed);

  // Double while loops
  const doubleWhilePattern = /while\s*\([\s\S]{0,300}while\s*\(/;
  const hasDoubleWhile = doubleWhilePattern.test(trimmed);

  const isBruteForce = hasNestedLoops || hasDoubleWhile;

  // Check for problem-specific brute force signals
  const hasProblemBruteForce = problem.bruteForceSignals.some((signal) =>
    trimmed.includes(signal)
  );

  // Check for optimal solution keywords
  const hasOptimalSignal = problem.optimalKeywords.some((kw) =>
    trimmed.toLowerCase().includes(kw.toLowerCase())
  );

  // If code is brute force (nested loops), that's suboptimal — TLE roasts efficiency
  if (isBruteForce || hasProblemBruteForce) {
    return 'suboptimal';
  }

  // Optimal: has optimal keywords, no brute force
  if (hasOptimalSignal) {
    return 'correct';
  }

  // Fallback: code looks wrong (no recognizable patterns)
  return 'wrong';
}
