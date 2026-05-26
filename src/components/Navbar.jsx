import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { navLinks } from '../data/siteContent'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="section-shell pt-5">
        <div
          className={[
            'glass-panel flex items-center justify-between rounded-[2rem] border px-4 py-3 transition duration-300 sm:px-6',
            scrolled ? 'border-white/15 bg-black/55 shadow-[0_16px_60px_-35px_rgba(0,0,0,0.95)]' : 'border-white/10 bg-black/25',
          ].join(' ')}
        >
          <a href="#top" onClick={closeMenu} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/20 bg-gradient-to-br from-emerald-400 to-emerald-500 text-sm font-bold text-black shadow-[0_0_30px_rgba(60,231,116,0.24)]">
              S
            </div>
            <div>
              <p className="font-grotesk text-sm font-bold uppercase tracking-[0.35em] text-white">Sync</p>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/45">Produtora audiovisual</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/68 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#cta-final" className="hidden button-primary sm:inline-flex">
              Solicitar orcamento
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 lg:hidden"
              aria-label={menuOpen ? 'Fechar menu visual' : 'Abrir menu visual'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <motion.div
          id="mobile-menu"
          initial={false}
          animate={menuOpen ? { opacity: 1, y: 0, height: 'auto' } : { opacity: 0, y: -12, height: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="overflow-hidden lg:hidden"
          aria-hidden={!menuOpen}
        >
          <div className="glass-panel mt-3 rounded-[2rem] border border-white/10 bg-black/90 p-3">
            <nav className="flex flex-col">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-[1.1rem] px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}
