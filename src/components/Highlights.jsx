import SectionHeader from './SectionHeader'

export default function Highlights() {
  const items = [
    { title: 'BVLOS Ready', text: 'Extended range with safe link failover and dynamic geo-fencing.' },
    { title: 'Secure Comms', text: 'AES-256 encrypted telemetry and hardened RF links.' },
    { title: 'Modular Payloads', text: 'EO/IR, LiDAR, SIGINT, delivery — swap in minutes.' },
  ]

  return (
    <section id="highlights" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Highlights"
          title="Engineered for Mission Success"
          subtitle="Core features designed around reliability, safety, and operator effectiveness."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="p-6 glass rounded-lg">
              <h4 className="font-semibold mb-1">{i.title}</h4>
              <p className="text-white/70 text-sm">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}