export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container flex h-16 items-center justify-between glass">
        <a href="#" className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-accent shadow-glow" />
          <span className="text-lg font-bold tracking-wide">VyomGarud</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#capabilities" className="hover:text-white">Capabilities</a>
          <a href="#highlights" className="hover:text-white">Highlights</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <a href="#contact" className="btn-primary">Get in touch</a>
      </nav>
    </header>
  )
}