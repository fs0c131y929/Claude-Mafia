import { Difficulty } from '@/types';

interface Props {
  difficulty: Difficulty;
}

const styles: Record<Difficulty, string> = {
  Easy: 'text-green-400 bg-green-400/10 border border-green-400/20',
  Medium: 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/20',
  Hard: 'text-red-400 bg-red-400/10 border border-red-400/20',
};

export default function DifficultyBadge({ difficulty }: Props) {
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${styles[difficulty]}`}>
      {difficulty}
    </span>
  );
}
