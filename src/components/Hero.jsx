import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="section pt-28" id="hero">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold title-grad">
              VyomGarud
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              Military-grade UAV systems engineered for high reliability, precision,
              and advanced autonomy. Built for mission success.
            </p>
            <div className="flex gap-3">
              <a href="#contact" className="btn-primary">Request Demo</a>
              <a href="#capabilities" className="inline-flex items-center justify-center rounded-md px-5 py-2.5 border border-white/20 hover:border-white/40 transition">Explore Capabilities</a>
            </div>
            <div className="flex items-center gap-6 text-xs text-white/60">
              <span>Secure Comms</span>
              <span>BVLOS Ready</span>
              <span>Modular Payloads</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl glass overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute inset-0" style={{
                background:
                  'radial-gradient(800px 400px at 60% 30%, rgba(255,123,0,0.25), transparent 60%)'
              }} />
              <div className="relative h-full w-full flex items-center justify-center">
                <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="90" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                  <path d="M25 105 L100 60 L175 105" stroke="#ff7b00" strokeWidth="3" fill="none" />
                  <rect x="90" y="95" width="20" height="30" rx="4" fill="#ff7b00" />
                  <circle cx="100" cy="60" r="6" fill="#ff7b00" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}