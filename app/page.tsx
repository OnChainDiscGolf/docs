import Link from "next/link";

const helpTopics = [
  {
    title: "Getting Started",
    description: "Install the app, save your key, and set up your profile",
    href: "/getting-started",
    icon: "🚀",
  },
  {
    title: "Playing a Round",
    description: "Start a round, keep score, and finish with friends",
    href: "/playing",
    icon: "🥏",
  },
  {
    title: "Your Wallet",
    description: "How money works in the app — deposits, payments, and balance",
    href: "/wallet",
    icon: "💰",
  },
  {
    title: "FAQ",
    description: "Common questions and troubleshooting",
    href: "/faq",
    icon: "❓",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          How can we help?
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          On-Chain Disc Golf is a scorecard app with built-in payments. 
          No accounts, no passwords — just play and get paid.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {helpTopics.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className="group p-6 rounded-2xl bg-brand-surface/50 border border-white/10 hover:border-brand-primary/50 transition-all hover:bg-brand-surface"
          >
            <div className="text-4xl mb-4">{topic.icon}</div>
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
              {topic.title}
            </h2>
            <p className="text-gray-400">{topic.description}</p>
          </Link>
        ))}
      </div>

      {/* Quick Tips */}
      <div className="bg-brand-surface/30 border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">Quick Tips</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="text-2xl">📱</span>
            <div>
              <h3 className="font-semibold text-white">Install on your home screen</h3>
              <p className="text-gray-400 text-sm">For the best experience, add the app to your phone&apos;s home screen. It works like a regular app!</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-2xl">🔑</span>
            <div>
              <h3 className="font-semibold text-white">Save your secret key</h3>
              <p className="text-gray-400 text-sm">Your key is shown when you first open the app. Save it somewhere safe — it&apos;s the only way to recover your account and funds.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-2xl">💵</span>
            <div>
              <h3 className="font-semibold text-white">Start small</h3>
              <p className="text-gray-400 text-sm">This app is experimental. Try it with small amounts first until you&apos;re comfortable.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-400 mb-4">Ready to play?</p>
        <a
          href="https://app.onchaindiscgolf.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-black font-bold rounded-full hover:bg-emerald-400 transition-colors"
        >
          Open the App →
        </a>
      </div>
    </div>
  );
}
