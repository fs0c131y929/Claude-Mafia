import { Problem } from '@/types';
import DifficultyBadge from './DifficultyBadge';

interface Props {
  problem: Problem;
}

export default function ProblemDescription({ problem }: Props) {
  return (
    <div className="h-full overflow-y-auto bg-gray-950 p-6">
      {/* Title */}
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-lg font-semibold text-gray-100">{problem.title}</h1>
        <DifficultyBadge difficulty={problem.difficulty} />
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6 whitespace-pre-wrap">
        {problem.description}
      </p>

      {/* Examples */}
      <div className="mb-6">
        {problem.examples.map((ex, i) => (
          <div key={i} className="mb-4">
            <p className="text-gray-300 text-sm font-semibold mb-2">Example {i + 1}:</p>
            <div className="bg-gray-900 border border-gray-700 rounded-md p-3 text-sm font-mono">
              <div className="mb-1">
                <span className="text-gray-400">Input: </span>
                <span className="text-gray-200">{ex.input}</span>
              </div>
              <div className="mb-1">
                <span className="text-gray-400">Output: </span>
                <span className="text-green-400">{ex.output}</span>
              </div>
              {ex.explanation && (
                <div className="mt-2 text-gray-500 text-xs italic">
                  Explanation: {ex.explanation}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Constraints */}
      <div>
        <p className="text-gray-300 text-sm font-semibold mb-2">Constraints:</p>
        <ul className="space-y-1">
          {problem.constraints.map((c, i) => (
            <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
              <span className="text-green-500 mt-0.5">•</span>
              <code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">{c}</code>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
