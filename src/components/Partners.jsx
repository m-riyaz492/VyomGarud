export default function Partners() {
  const partners = ['AeroShield', 'GeoNav', 'OptiSense', 'SecureLink']
  return (
    <section id="partners" className="section">
      <div className="container">
        <div className="mb-10">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">Partners</div>
          <h3 className="text-2xl md:text-3xl font-semibold">Integration Ecosystem</h3>
          <p className="text-white/70 max-w-3xl">Trusted technology partners and payload providers we collaborate with.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((p) => (
            <div key={p} className="p-6 rounded-xl glass text-center">
              <div className="mx-auto h-10 w-10 rounded-md bg-accent/20" />
              <div className="mt-3 font-semibold">{p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}