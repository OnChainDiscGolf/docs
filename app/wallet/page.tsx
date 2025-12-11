import Link from "next/link";

export const metadata = {
  title: "Wallet & Payments | On-Chain Disc Golf Help",
  description: "Learn how money works in On-Chain Disc Golf — adding funds, payments, and your balance.",
};

export default function Wallet() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/" className="text-gray-400 hover:text-white text-sm mb-8 inline-block">
        ← Back to Help
      </Link>

      <h1 className="text-4xl font-bold mb-8">Wallet & Payments</h1>

      <p className="text-xl text-gray-300 mb-8">
        On-Chain Disc Golf has a built-in self-custodial wallet powered by Breez SDK, 
        so you can play competitive rounds without cash or payment apps. Here&apos;s how it works.
      </p>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How It Works (Simple Version)</h2>
        <div className="space-y-4 text-gray-300">
          <div className="bg-brand-surface/50 rounded-xl p-6 space-y-4">
            <div className="flex gap-4">
              <span className="text-3xl">1️⃣</span>
              <div>
                <h3 className="font-semibold text-white">Add money to your wallet</h3>
                <p className="text-sm text-gray-400">Send Bitcoin via Lightning Network — it shows up instantly</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl">2️⃣</span>
              <div>
                <h3 className="font-semibold text-white">Play competitive rounds</h3>
                <p className="text-sm text-gray-400">Round entries come from your balance automatically</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl">3️⃣</span>
              <div>
                <h3 className="font-semibold text-white">Win and receive settlement</h3>
                <p className="text-sm text-gray-400">Funds go straight to your wallet — no waiting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Lightning Address */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Your Lightning Address</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Your wallet comes with a human-readable Lightning address that looks like an email:
          </p>
          
          <div className="bg-brand-primary/10 border border-brand-primary/30 rounded-xl p-6">
            <h3 className="font-semibold text-brand-primary mb-2">yourname@breez.tips</h3>
            <p className="text-sm">
              This is your permanent address for receiving Bitcoin. Anyone can send you funds 
              using this address — it&apos;s linked to your Nostr identity and works with any 
              Lightning wallet.
            </p>
          </div>
        </div>
      </section>

      {/* Adding Money */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Adding Money</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            To add money, go to the <strong>Wallet</strong> tab and tap <strong>&quot;Deposit&quot;</strong>.
          </p>
          
          <div className="bg-brand-surface/50 rounded-xl p-6 space-y-4">
            <h3 className="font-semibold text-white">You can receive via:</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong>Lightning Address</strong> — Share your @breez.tips address</li>
              <li><strong>QR Code</strong> — Others scan to send you funds</li>
              <li><strong>Lightning Invoice</strong> — Generate a one-time payment request</li>
            </ul>
          </div>
          
          <div className="bg-brand-surface/50 rounded-xl p-6 space-y-4">
            <h3 className="font-semibold text-white">Send from any Lightning wallet:</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><strong>Cash App</strong> — Enable Bitcoin, scan the QR code</li>
              <li><strong>Strike</strong> — Fast and easy, works great</li>
              <li><strong>Wallet of Satoshi</strong> — Simple mobile wallet</li>
              <li><strong>Alby</strong> — Browser extension wallet</li>
            </ul>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <h3 className="font-semibold text-blue-400 mb-2">💡 New to Bitcoin?</h3>
            <p className="text-sm">
              The easiest way to get started is with <a href="https://cash.app" className="text-brand-primary hover:underline">Cash App</a> or 
              <a href="https://strike.me" className="text-brand-primary hover:underline"> Strike</a>. 
              Both let you buy Bitcoin and send Lightning payments in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Your Balance */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Your Balance</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Your balance shows in the Wallet tab. It&apos;s displayed in <strong>sats</strong> 
            (the smallest unit of Bitcoin). Don&apos;t worry — we also show the dollar amount.
          </p>
          
          <div className="bg-brand-surface/50 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Quick reference:</h3>
            <ul className="text-sm space-y-1">
              <li>100 sats ≈ a few cents</li>
              <li>1,000 sats ≈ about $1</li>
              <li>10,000 sats ≈ about $10</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">(Exact amounts vary with Bitcoin price)</p>
          </div>
        </div>
      </section>

      {/* Receiving Funds */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Receiving Funds</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Your <strong>@breez.tips</strong> Lightning address works everywhere. 
            Anyone can send you money using it — find it in your Profile or Wallet tab.
          </p>
          
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
            <h3 className="font-semibold text-emerald-400 mb-2">⚡ Instant & automatic</h3>
            <p className="text-sm">
              When you win a round, funds appear in your wallet automatically. 
              No action needed on your part — just check your balance after the round ends.
            </p>
          </div>
        </div>
      </section>

      {/* Withdrawing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Withdrawing Money</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            To get money out of the app, tap <strong>&quot;Withdraw&quot;</strong> in your Wallet.
          </p>
          
          <div className="bg-brand-surface/50 rounded-xl p-6 space-y-3">
            <h3 className="font-semibold text-white">You can send to:</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Any Lightning Address (yourname@wallet.com style)</li>
              <li>A Lightning invoice (QR code or lnbc... string)</li>
              <li>Another On-Chain Disc Golf player</li>
            </ul>
          </div>
          
          <p className="text-sm text-gray-400">
            To convert to regular dollars, send to an exchange like Cash App, Strike, or Coinbase 
            and sell your Bitcoin there.
          </p>
        </div>
      </section>

      {/* Self-Custody */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Self-Custodial Wallet</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Your wallet is powered by <strong>Breez SDK</strong>, which means you control your funds directly — 
            no third party holds your money.
          </p>
          
          <div className="bg-brand-surface/50 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What this means:</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Your funds are stored on your device, not on a server</li>
              <li>Only you can access your money with your secret key</li>
              <li>No company can freeze or seize your funds</li>
              <li>You&apos;re responsible for backing up your key</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
        <div className="space-y-4">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
            <h3 className="font-semibold text-amber-400 mb-2">⚠️ Early access software</h3>
            <p className="text-sm text-gray-300">
              On-Chain Disc Golf is still in development. Start with small amounts 
              until you&apos;re comfortable with how everything works.
            </p>
          </div>
          
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
            <h3 className="font-semibold text-amber-400 mb-2">🔑 Your key = your funds</h3>
            <p className="text-sm text-gray-300">
              If you lose your secret key, you lose access to your funds. There&apos;s no &quot;forgot 
              password&quot; option. Make sure your key is backed up!
            </p>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="bg-brand-surface/50 rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-4">Related</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link 
            href="/playing" 
            className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <h3 className="font-semibold text-white mb-1">Playing a Round →</h3>
            <p className="text-sm text-gray-400">How to start and score a round</p>
          </Link>
          <Link 
            href="/faq" 
            className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <h3 className="font-semibold text-white mb-1">FAQ →</h3>
            <p className="text-sm text-gray-400">Common questions answered</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
