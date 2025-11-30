import Link from "next/link";

export const metadata = {
  title: "FAQ | On-Chain Disc Golf Help",
  description: "Frequently asked questions about On-Chain Disc Golf.",
};

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "Do I need to know about Bitcoin to use this?",
        a: "Nope! The app handles all the technical stuff. You just see your balance (we show dollar amounts too) and play disc golf. If you want to learn more about the technology, that's cool, but it's not required.",
      },
      {
        q: "Is this a real app or a website?",
        a: "It's both! On-Chain Disc Golf is a Progressive Web App (PWA). You access it through your browser, but you can install it on your home screen and it works just like a regular app — even offline for basic features.",
      },
      {
        q: "Do I need to create an account?",
        a: "No account creation needed! When you first open the app, it automatically generates a secret key for you. That key IS your account. Just save it somewhere safe.",
      },
    ],
  },
  {
    category: "Money & Payments",
    questions: [
      {
        q: "Is my money safe?",
        a: "Your balance is stored using a technology called Cashu, which keeps your funds on your phone. However, the system relies on a third-party service (called a 'mint') to process transactions. This is still experimental technology, so we recommend not storing more than you're willing to lose. Think of it like cash in your pocket for disc golf, not your savings account.",
      },
      {
        q: "What if I lose my phone?",
        a: "If you saved your secret key (the nsec... code from when you first opened the app), you can restore your account on any device. Just tap 'I already have a nsec' on the welcome screen. If you didn't save your key... unfortunately, your funds are gone. This is why we emphasize saving that key!",
      },
      {
        q: "How do I get money into the app?",
        a: "You'll need to send Bitcoin via the Lightning Network. Apps like Cash App, Strike, or Wallet of Satoshi make this easy. Go to your Wallet tab, tap Deposit, and scan the QR code with one of those apps.",
      },
      {
        q: "How do I get money out?",
        a: "Tap Withdraw in your Wallet and send to any Lightning address or invoice. You can send to Cash App, Strike, or any Lightning wallet. From there, you can sell for dollars if you want.",
      },
      {
        q: "What are 'sats'?",
        a: "Sats (short for Satoshis) are the smallest unit of Bitcoin — like cents to dollars. 1 Bitcoin = 100,000,000 sats. For disc golf stakes, you'll usually deal with a few hundred to a few thousand sats. We show dollar equivalents in the app so you don't have to do math.",
      },
    ],
  },
  {
    category: "Playing Rounds",
    questions: [
      {
        q: "Can I play without betting money?",
        a: "Absolutely! Just set the entry fee to $0 when creating a round. The app works great as a regular scorecard without any stakes.",
      },
      {
        q: "How does the winner get paid?",
        a: "When the round creator taps 'Finalize Round', the pot is automatically sent to the player with the lowest score. No manual transfers needed — it just appears in the winner's wallet.",
      },
      {
        q: "What if there's a tie?",
        a: "Currently, ties split the pot evenly between tied players. We're working on more options like playoff modes for future updates.",
      },
      {
        q: "Can I edit scores after entering them?",
        a: "Yes, you can adjust scores throughout the round. Just tap the score and change it. Once the round is finalized, scores are locked.",
      },
      {
        q: "Do all players need the app?",
        a: "For the best experience, yes. Each player uses the app on their own phone, and scores sync in real-time. However, one person can enter scores for everyone if needed.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        q: "The app isn't loading or is stuck",
        a: "Try refreshing the page (pull down on mobile, or hit refresh in your browser). If that doesn't work, close the app completely and reopen it. Still stuck? Clear your browser cache and try again.",
      },
      {
        q: "My balance isn't showing up",
        a: "Balances can take a moment to sync. Pull down to refresh your wallet. If a deposit isn't showing after a few minutes, the payment may not have gone through — check your sending wallet to confirm.",
      },
      {
        q: "I can't join a round from an invite link",
        a: "Make sure you're opening the link in the same browser where you have the app installed. If it opens in a different browser, your account won't be there. Try copying the link and pasting it in Safari (iPhone) or Chrome (Android).",
      },
      {
        q: "Scores aren't syncing between players",
        a: "Score syncing requires an internet connection. Make sure all players have signal. Try pulling down to refresh the scorecard. If issues persist, one player can enter all scores as a workaround.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/" className="text-gray-400 hover:text-white text-sm mb-8 inline-block">
        ← Back to Help
      </Link>

      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-xl text-gray-400 mb-12">
        Quick answers to common questions about On-Chain Disc Golf.
      </p>

      {faqs.map((section) => (
        <section key={section.category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-brand-primary">{section.category}</h2>
          <div className="space-y-6">
            {section.questions.map((item, idx) => (
              <div key={idx} className="bg-brand-surface/50 rounded-xl p-6">
                <h3 className="font-semibold text-white text-lg mb-3">{item.q}</h3>
                <p className="text-gray-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Still Need Help */}
      <section className="bg-brand-surface/50 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
        <p className="text-gray-400 mb-6">
          Can&apos;t find what you&apos;re looking for? Let us know!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/OnChainDiscGolf/app/issues"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            Report an Issue
          </a>
          <a
            href="https://github.com/OnChainDiscGolf/app/discussions"
            className="px-6 py-3 bg-brand-primary text-black font-medium rounded-full hover:bg-emerald-400 transition-colors"
          >
            Ask a Question
          </a>
        </div>
      </section>
    </div>
  );
}

