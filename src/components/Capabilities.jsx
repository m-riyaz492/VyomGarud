import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const cards = [
  {
    title: 'ISR Platform',
    text: 'Long-endurance UAV with EO/IR payload, stabilized gimbal, and encrypted telemetry.',
  },
  {
    title: 'Logistics Drone',
    text: 'Rugged VTOL for austere environments, modular payload bays, rapid deployment.',
  },
  {
    title: 'Autonomy Stack',
    text: 'Advanced path planning, multi-agent coordination, GNSS-denied navigation.',
  },
  {
    title: 'Ground Control',
    text: 'Mission planning suite with live telemetry, geo-fencing, and fleet management.',
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Capabilities"
          title="Products & Systems"
          subtitle="A modular ecosystem designed to integrate seamlessly across missions and teams."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-xl glass hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">{card.title}</h4>
                <span className="h-2 w-2 rounded-sm bg-accent shadow-glow" />
              </div>
              <p className="text-white/70 text-sm">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}