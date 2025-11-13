import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="About"
          title="Mission First. Precision Always."
          subtitle="We design, manufacture, and support professional UAV platforms and autonomy software for defense, industrial, and emergency response operations. Our systems are engineered for rugged reliability in the world’s most demanding environments."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Reliability', text: 'Redundant avionics and hardened comms.' },
            { label: 'Precision', text: 'GNSS RTK and advanced flight controls.' },
            { label: 'Autonomy', text: 'Multi-agent swarming and BVLOS.' },
          ].map((item) => (
            <div key={item.label} className="p-6 glass rounded-lg">
              <h4 className="font-semibold mb-2">{item.label}</h4>
              <p className="text-white/70 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}