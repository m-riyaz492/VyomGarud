import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'

export default function Careers() {
  const [roles, setRoles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/careers')
      .then((r) => r.json())
      .then((json) => setRoles(json))
      .catch(() => setRoles([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="careers" className="section">
      <div className="container">
        <SectionHeader eyebrow="Careers" title="Join the Team" subtitle="We’re hiring engineers and operators passionate about mission-critical systems." />
        <div className="grid md:grid-cols-3 gap-6">
          {loading && [1,2,3].map((i) => <div key={i} className="p-6 glass rounded-lg h-28 animate-pulse bg-white/5" />)}
          {!loading && roles.map((r) => (
            <div key={r.id} className="p-6 glass rounded-lg">
              <h4 className="font-semibold mb-1">{r.role}</h4>
              <p className="text-white/70 text-sm mb-3">{r.location} • {r.type}</p>
              <a className="btn-primary" href={`mailto:careers@vyomgarud.com?subject=${encodeURIComponent(r.role)}`}>Apply</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}