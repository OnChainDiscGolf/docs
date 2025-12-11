import Link from "next/link";

export const metadata = {
  title: "Playing a Round | On-Chain Disc Golf Help",
  description: "Learn how to start a round, keep score, and play with friends.",
};

export default function Playing() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/" className="text-gray-400 hover:text-white text-sm mb-8 inline-block">
        ← Back to Help
      </Link>

      <h1 className="text-4xl font-bold mb-8">Playing a Round</h1>

      {/* Starting a Round */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Starting a New Round</h2>
        <div className="space-y-4 text-gray-300">
          <p>From the home screen, tap <strong>&quot;New Round&quot;</strong> to get started.</p>
          
          <div className="bg-brand-surface/50 rounded-xl p-6 space-y-4">
            <h3 className="font-semibold text-white">You&apos;ll set up:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-brand-primary">📍</span>
                <div>
                  <strong className="text-white">Course Name</strong>
                  <p className="text-sm text-gray-400">Where are you playing? (e.g., &quot;Maple Hill&quot;)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">🕳️</span>
                <div>
                  <strong className="text-white">Number of Holes</strong>
                  <p className="text-sm text-gray-400">Usually 9 or 18</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">💵</span>
                <div>
                  <strong className="text-white">Round Entry</strong>
                  <p className="text-sm text-gray-400">How much each player puts in (can be $0 for casual rounds)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">🎯</span>
                <div>
                  <strong className="text-white">Ace Pool</strong>
                  <p className="text-sm text-gray-400">Optional extra for hole-in-ones</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Adding Players */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Adding Players</h2>
        <div className="space-y-4 text-gray-300">
          <p>There are a few ways to add players to your round:</p>
          
          <div className="space-y-4">
            <div className="bg-brand-surface/50 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">📱 QR Code (Easiest)</h3>
              <p className="text-sm">
                Tap <strong>&quot;Invite Players&quot;</strong> to show a QR code. 
                Other players scan it with their phone camera to join instantly.
              </p>
            </div>
            
            <div className="bg-brand-surface/50 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">🔗 Share Link</h3>
              <p className="text-sm">
                Copy the invite link and send it via text, Discord, or any messaging app.
              </p>
            </div>
            
            <div className="bg-brand-surface/50 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">👥 Recent Players</h3>
              <p className="text-sm">
                Players you&apos;ve played with before show up in your recent list. 
                Tap their name to add them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keeping Score */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Keeping Score</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Once your round is started, you&apos;ll see the scorecard. It works just like 
            you&apos;d expect:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Tap the <strong>+</strong> or <strong>-</strong> buttons to adjust each player&apos;s score per hole</li>
            <li>Swipe left/right to move between holes</li>
            <li>The app syncs scores in real-time — everyone sees updates instantly</li>
            <li>Running totals are calculated automatically</li>
          </ul>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <h3 className="font-semibold text-blue-400 mb-2">💡 Tip</h3>
            <p className="text-sm">
              All players can enter scores for anyone. This is great for keeping 
              things moving — whoever finishes the hole first can enter everyone&apos;s score.
            </p>
          </div>
        </div>
      </section>

      {/* Finishing the Round */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Finishing the Round</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            When everyone has played all holes, the round creator can tap 
            <strong> &quot;Finalize Round&quot;</strong>.
          </p>
          
          <div className="bg-brand-surface/50 rounded-xl p-6 space-y-3">
            <h3 className="font-semibold text-white">What happens when you finalize:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Final scores are locked in</li>
              <li>The winner is determined (lowest score wins!)</li>
              <li>If there was a round entry, the prize pool is automatically sent to the winner</li>
              <li>Everyone sees the final results</li>
            </ul>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
            <h3 className="font-semibold text-emerald-400 mb-2">⚡ Instant Settlement</h3>
            <p className="text-sm">
              No more &quot;I&apos;ll Venmo you later&quot; or collecting cash in the parking lot. 
              Settlement happens automatically the moment the round ends.
            </p>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="bg-brand-surface/50 rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-4">Related</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link 
            href="/wallet" 
            className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <h3 className="font-semibold text-white mb-1">Wallet & Payments →</h3>
            <p className="text-sm text-gray-400">How to add money and receive funds</p>
          </Link>
          <Link 
            href="/faq" 
            className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <h3 className="font-semibold text-white mb-1">FAQ →</h3>
            <p className="text-sm text-gray-400">Common questions and troubleshooting</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

