import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/95">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <img
            src="/static/images/telcotank-logo.png"
            alt="Telcotank"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-x-8 lg:flex">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#0A2540] dark:text-gray-300 dark:hover:text-white"
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Request Strategy Discussion
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile/Tablet Navigation — hamburger + full-screen overlay */}
        <MobileNav />
      </nav>
    </header>
  )
}

export default Header
