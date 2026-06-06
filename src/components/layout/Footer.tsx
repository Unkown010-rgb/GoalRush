import Link from 'next/link'

const footerLinks = {
  Company: [
    { name: 'About GoalRush', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Advertise', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
  Content: [
    { name: 'Breaking News', href: '/news' },
    { name: 'Transfer News', href: '/transfers' },
    { name: 'Live Scores', href: '/live-scores' },
    { name: 'League Tables', href: '/leagues/premier-league' },
  ],
}

const socials = [
  { name: 'Twitter/X', href: '#', label: '𝕏' },
  { name: 'Instagram', href: '#', label: '📸' },
  { name: 'YouTube', href: '#', label: '▶' },
  { name: 'TikTok', href: '#', label: '♪' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-border-muted mt-16">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center shadow-lg shadow-brand/30">
                <span className="text-white text-xl font-black">⚽</span>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">
                Goal<span className="text-brand">Rush</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
              Your #1 Source for Football News. Breaking stories, live scores, transfer updates, and in-depth analysis — all in one place.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mb-6">
              {socials.map(({ name, href, label }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-9 h-9 rounded-lg bg-surface-3 hover:bg-brand/20 border border-border-muted hover:border-brand/40 flex items-center justify-center text-muted hover:text-brand transition-all duration-200 text-sm font-bold"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* RSS badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-3 rounded-lg border border-border-muted text-xs text-muted">
              <span className="text-brand font-bold">📡</span>
              Powered by live RSS feeds
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="text-muted hover:text-brand text-sm transition-colors duration-200"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-10 pt-8 border-t border-border-muted">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold mb-1">Stay in the game</h3>
              <p className="text-muted text-sm">Get the latest football news delivered to your inbox.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 md:w-64 px-4 py-2.5 bg-surface-3 border border-border-muted rounded-lg text-sm text-white placeholder-muted focus:outline-none focus:border-brand transition-colors"
              />
              <button className="px-5 py-2.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} GoalRush. All rights reserved. Not affiliated with any football association.
          </p>
          <p className="text-muted text-xs">
            Built with ❤️ for football fans worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
