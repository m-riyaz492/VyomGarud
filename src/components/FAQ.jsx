import { useState } from 'react'

const items = [
  { q: 'Do you support BVLOS operations?', a: 'Yes — with appropriate regulatory approvals and our hardened link failover.' },
  { q: 'What payloads are compatible?', a: 'EO/IR, LiDAR, SIGINT, and custom integrations via modular bays.' },
  { q: 'Do you offer training?', a: 'Operator and maintenance training programs are available on request.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="mb-10">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">FAQ</div>
          <h3 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h3>
        </div>
        <div className="grid gap-3">
          {items.map((item, idx) => (
            <div key={item.q} className="rounded-lg glass">
              <button className="w-full text-left px-6 py-4 flex items-center justify-between" onClick={() => setOpen(open === idx ? -1 : idx)}>
                <span className="font-semibold">{item.q}</span>
                <span className={`transition ${open === idx ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === idx && (
                <div className="px-6 pb-4 text-white/70 text-sm">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}