import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'

export default function News() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then((json) => setItems(json))
      .catch(() => setItems([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="news" className="section">
      <div className="container">
        <SectionHeader eyebrow="News" title="Latest Updates" subtitle="Product releases and certification milestones." />
        <div className="grid md:grid-cols-2 gap-6">
          {loading && [1,2].map((i) => <div key={i} className="p-6 glass rounded-lg h-32 animate-pulse bg-white/5" />)}
          {!loading && items.map((n) => (
            <article key={n.id} className="p-6 glass rounded-lg">
              <div className="text-xs text-white/60 mb-1">{n.date}</div>
              <h4 className="font-semibold mb-1">{n.title}</h4>
              <p className="text-white/70 text-sm">{n.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}