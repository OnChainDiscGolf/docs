import Link from "next/link";

export const metadata = {
  title: "Getting Started | On-Chain Disc Golf Help",
  description: "Learn how to install On-Chain Disc Golf and set up your account.",
};

export default function GettingStarted() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/" className="text-gray-400 hover:text-white text-sm mb-8 inline-block">
        ← Back to Help
      </Link>

      <h1 className="text-4xl font-bold mb-8">Getting Started</h1>

      {/* Step 1: Install */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-brand-primary text-black flex items-center justify-center font-bold">1</span>
          Install the App
        </h2>
        <div className="pl-14 space-y-4 text-gray-300">
          <p>
            On-Chain Disc Golf works best when installed on your phone&apos;s home screen. 
            Here&apos;s how:
          </p>
          
          <div className="bg-brand-surface/50 rounded-xl p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-white mb-2">iPhone (Safari)</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Open <a href="https://app.onchaindiscgolf.com" className="text-brand-primary">app.onchaindiscgolf.com</a> in Safari</li>
                <li>Tap the <strong>Share</strong> button (square with arrow)</li>
                <li>Scroll down and tap <strong>&quot;Add to Home Screen&quot;</strong></li>
                <li>Tap <strong>&quot;Add&quot;</strong> in the top right</li>
              </ol>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-2">Android (Chrome)</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Open <a href="https://app.onchaindiscgolf.com" className="text-brand-primary">app.onchaindiscgolf.com</a> in Chrome</li>
                <li>Tap the <strong>menu</strong> (three dots)</li>
                <li>Tap <strong>&quot;Install App&quot;</strong> or <strong>&quot;Add to Home Screen&quot;</strong></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Save Your Key */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-brand-primary text-black flex items-center justify-center font-bold">2</span>
          Save Your Secret Key
        </h2>
        <div className="pl-14 space-y-4 text-gray-300">
          <p>
            When you first open the app, you&apos;ll see a screen with your <strong>secret key</strong> 
            (it starts with <code>nsec1...</code>).
          </p>
          
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
            <h3 className="font-semibold text-amber-400 mb-2">⚠️ This is important!</h3>
            <p className="text-sm">
              Your secret key is like a password that can&apos;t be reset. If you lose it, 
              you lose access to your account and any money in your wallet. 
              <strong className="text-white"> Save it somewhere safe</strong> — a notes app, 
              password manager, or even written down.
            </p>
          </div>

          <p>
            Tap <strong>&quot;Copy Key&quot;</strong> and paste it somewhere you won&apos;t lose it.
          </p>
        </div>
      </section>

      {/* Step 3: Set Up Profile */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-brand-primary text-black flex items-center justify-center font-bold">3</span>
          Set Up Your Profile
        </h2>
        <div className="pl-14 space-y-4 text-gray-300">
          <p>
            After saving your key, you&apos;ll set up your player profile:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Display Name</strong> — What other players will see (e.g., &quot;Jake&quot; or &quot;DiscGolfDan&quot;)</li>
            <li><strong>Profile Picture</strong> — Optional, but helps friends recognize you</li>
          </ul>
          <p>
            That&apos;s it! You&apos;re ready to play.
          </p>
        </div>
      </section>

      {/* What's Next */}
      <section className="bg-brand-surface/50 rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-4">What&apos;s Next?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link 
            href="/playing" 
            className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <h3 className="font-semibold text-white mb-1">Start a Round →</h3>
            <p className="text-sm text-gray-400">Learn how to create and play a round</p>
          </Link>
          <Link 
            href="/wallet" 
            className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <h3 className="font-semibold text-white mb-1">Add Money →</h3>
            <p className="text-sm text-gray-400">Fund your wallet for competitive rounds</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

