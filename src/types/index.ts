export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type TriggerType = 'wrong' | 'suboptimal' | 'correct' | 'paywall';

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface Problem {
  slug: string;
  title: string;
  difficulty: Difficulty;
  description: string;
  constraints: string[];
  examples: Example[];
  starterCode: string;
  optimalKeywords: string[];
  bruteForceSignals: string[];
}

export interface RoastRequest {
  problemSlug: string;
  code: string;
  trigger: TriggerType;
  submissionCount: number;
}

export interface RoastResponse {
  message: string;
  trigger: TriggerType;
}
