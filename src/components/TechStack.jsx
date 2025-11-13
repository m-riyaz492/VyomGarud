export default function TechStack() {
  const items = [
    { label: 'React + Vite', desc: 'Fast SPA with modern tooling.' },
    { label: 'Tailwind CSS', desc: 'Utility-first, responsive styling.' },
    { label: 'Framer Motion', desc: 'Subtle, performant animations.' },
    { label: 'Express API', desc: 'Simple REST endpoints for data.' },
  ]

  return (
    <section id="tech" className="section">
      <div className="container">
        <div className="mb-10">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">Stack</div>
          <h3 className="text-2xl md:text-3xl font-semibold">Technology Overview</h3>
          <p className="text-white/70 max-w-3xl">Modern frontend backed by a lightweight Node/Express API for a complete demo of full-stack capabilities.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.label} className="p-6 rounded-xl glass">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{i.label}</h4>
                <span className="h-2 w-2 rounded-sm bg-accent shadow-glow" />
              </div>
              <p className="text-white/70 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}