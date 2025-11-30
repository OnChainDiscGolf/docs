import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Help | On-Chain Disc Golf",
  description: "Learn how to use On-Chain Disc Golf - the disc golf scorecard app with instant Bitcoin payments.",
  openGraph: {
    title: "Help | On-Chain Disc Golf",
    description: "Learn how to use On-Chain Disc Golf",
    url: "https://help.onchaindiscgolf.com",
    siteName: "On-Chain Disc Golf Help",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-white hover:text-white">
              <span className="text-xl font-bold">
                <span className="text-brand-primary">On-Chain</span> Help
              </span>
            </a>
            <nav className="flex items-center gap-6 text-sm">
              <a href="/getting-started" className="text-gray-400 hover:text-white">Getting Started</a>
              <a href="/playing" className="text-gray-400 hover:text-white">Playing</a>
              <a href="/wallet" className="text-gray-400 hover:text-white">Wallet</a>
              <a href="/faq" className="text-gray-400 hover:text-white">FAQ</a>
              <a 
                href="https://app.onchaindiscgolf.com" 
                className="px-4 py-2 bg-brand-primary text-black font-medium rounded-full hover:bg-emerald-400 transition-colors"
              >
                Open App
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
            <p className="mb-2">
              Need more help? <a href="https://github.com/OnChainDiscGolf/app/issues" className="text-brand-primary hover:underline">Report an issue</a> or check the <a href="/faq" className="text-brand-primary hover:underline">FAQ</a>.
            </p>
            <p>
              <a href="https://onchaindiscgolf.com" className="hover:text-white">onchaindiscgolf.com</a>
              {" · "}
              <a href="https://app.onchaindiscgolf.com" className="hover:text-white">Launch App</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
