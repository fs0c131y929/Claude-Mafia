'use client';

interface Props {
  onSkip: () => void;
}

export default function PaywallModal({ onSkip }: Props) {
  const handleFakePay = () => {
    alert("Transaction failed. Even your credit card rejected you.\n\nError code: SKILL_ISSUE_404");
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-yellow-500/60 rounded-xl max-w-md w-full p-6 shadow-2xl shadow-yellow-500/10">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">💰</div>
          <h2 className="text-yellow-400 font-bold text-xl mb-1 tracking-tight">
            10x PREMIUM MENTORSHIP TIER
          </h2>
          <p className="text-gray-400 text-sm">
            Leetbot has reviewed enough of your suffering for free.
          </p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-6">
          <div className="text-gray-500 text-sm">Regular price: <span className="line-through">$50</span></div>
          <div className="text-yellow-400 text-4xl font-black">$500</div>
          <div className="text-gray-500 text-sm">/ month · special rate for especially bad coders</div>
        </div>

        {/* Benefits */}
        <ul className="space-y-2 mb-6 text-sm">
          {[
            'Personalized insults tailored to your specific algorithmic failures',
            'Access to my exclusive Big-O complexity shame spreadsheet',
            'I will personally email your CS professor',
            'Early access to the list of careers you\'re better suited for',
            'Unlimited roasts (you clearly need them)',
            'Certificate of participation (not achievement)',
          ].map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-300">
              <span className="text-yellow-500 shrink-0 mt-0.5">✓</span>
              {benefit}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleFakePay}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Pay Here — Unlock My Potential
          </button>
          <button
            onClick={onSkip}
            className="w-full text-gray-500 hover:text-gray-300 py-2 text-sm transition-colors underline underline-offset-2"
          >
            I&apos;m broke 💸 (can&apos;t even afford $500, lmao)
          </button>
        </div>

        {/* Fine print */}
        <p className="text-gray-700 text-xs text-center mt-4">
          *No refunds. No mercy. No O(1) solutions will be provided.
        </p>
      </div>
    </div>
  );
}
