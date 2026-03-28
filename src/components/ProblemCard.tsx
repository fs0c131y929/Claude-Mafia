import Link from 'next/link';
import { Problem } from '@/types';
import DifficultyBadge from './DifficultyBadge';

interface Props {
  problem: Problem;
  index: number;
}

export default function ProblemCard({ problem, index }: Props) {
  return (
    <Link href={`/problems/${problem.slug}`}>
      <div className="group flex items-center gap-4 px-6 py-4 border-b border-gray-800 hover:bg-gray-900 transition-colors cursor-pointer">
        <span className="text-gray-500 text-sm w-8 shrink-0">{index + 1}.</span>
        <span className="text-gray-100 text-sm flex-1 group-hover:text-green-400 transition-colors font-medium">
          {problem.title}
        </span>
        <DifficultyBadge difficulty={problem.difficulty} />
        <span className="text-gray-600 text-xs hidden sm:block">
          {problem.difficulty === 'Easy' ? '🟢' : problem.difficulty === 'Medium' ? '🟡' : '🔴'}
        </span>
      </div>
    </Link>
  );
}
