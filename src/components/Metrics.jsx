import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'

export default function Metrics() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/metrics')
      .then((r) => r.json())
      .then((json) => setData(json))
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="metrics" className="section">
      <div className="container">
        <SectionHeader eyebrow="Metrics" title="Operational Performance" subtitle="Key indicators from fleet operations and reliability testing." />
        <div className="grid md:grid-cols-3 gap-6">
          {loading ? (
            [1,2,3].map((i) => <div key={i} className="p-6 glass rounded-lg h-24 animate-pulse bg-white/5" />)
          ) : (
            <>
              <div className="p-6 glass rounded-lg">
                <div className="text-sm text-white/60">Uptime</div>
                <div className="text-3xl font-bold">{data?.uptimeHours ?? '—'}h</div>
              </div>
              <div className="p-6 glass rounded-lg">
                <div className="text-sm text-white/60">Missions</div>
                <div className="text-3xl font-bold">{data?.missions ?? '—'}</div>
              </div>
              <div className="p-6 glass rounded-lg">
                <div className="text-sm text-white/60">MTBF</div>
                <div className="text-3xl font-bold">{data?.meanTimeBetweenFailureHrs ?? '—'}h</div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}