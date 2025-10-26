import { useState, useEffect } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['about', 'experience', 'skills', 'contact']

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-green-500/20' : 'bg-transparent'
    } py-3`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-sm font-mono text-green-500 hover:text-green-400 transition-colors flex items-center">
          <span className="text-gray-600 mr-2">[</span>
          backend_dev
          <span className="text-gray-600 ml-2">]</span>
        </a>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-gray-500 hover:text-green-500 transition-colors text-xs font-mono uppercase tracking-wider"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="border border-green-500 text-green-500 px-4 py-1 text-xs font-mono hover:bg-green-500/10 transition-all uppercase tracking-wider"
        >
          HIRE
        </a>
      </nav>
    </header>
  )
}

export default Header
