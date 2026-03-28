import { problems } from '@/data/problems';
import ProblemCard from '@/components/ProblemCard';

export default function Home() {
  const easyCount = problems.filter((p) => p.difficulty === 'Easy').length;
  const mediumCount = problems.filter((p) => p.difficulty === 'Medium').length;
  const hardCount = problems.filter((p) => p.difficulty === 'Hard').length;

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navbar */}
      <nav className="border-b border-gray-800 bg-gray-950 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-bold text-xl tracking-tight">LeetBot</span>
          </div>
          <span className="text-gray-500 text-xs hidden sm:block">
            3,847 developers roasted today
          </span>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-100 mb-2">Problems</h1>
        <p className="text-gray-400 text-sm mb-8">
          Where careers go to die. — Powered by{' '}
          <span className="text-green-400 font-semibold">Leetbot</span>, your brutally honest AI mentor.
        </p>

        {/* Stats */}
        <div className="flex gap-6 mb-8 text-sm">
          <span className="text-green-400">{easyCount} Easy</span>
          <span className="text-yellow-400">{mediumCount} Medium</span>
          <span className="text-red-400">{hardCount} Hard</span>
        </div>

        {/* Problem List */}
        <div className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900">
          {/* Table header */}
          <div className="flex items-center gap-4 px-6 py-3 bg-gray-800/50 border-b border-gray-700">
            <span className="text-gray-400 text-xs w-8 shrink-0">#</span>
            <span className="text-gray-400 text-xs flex-1">Title</span>
            <span className="text-gray-400 text-xs">Difficulty</span>
            <span className="text-gray-400 text-xs w-4 hidden sm:block"></span>
          </div>
          {problems.map((problem, i) => (
            <ProblemCard key={problem.slug} problem={problem} index={i} />
          ))}
        </div>

        {/* Footer warning */}
        <p className="text-center text-gray-600 text-xs mt-8">
          Warning: Leetbot&apos;s feedback may cause existential dread, career changes, and uncontrollable crying.
          <br />
          Not responsible for broken keyboards, deleted repositories, or switching to Excel.
        </p>
      </div>
    </div>
  );
}
