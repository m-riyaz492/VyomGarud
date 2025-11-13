export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    alert(`Thanks, ${data.name || 'operator'}! We will reach out soon.`)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-2xl mx-auto p-6 glass rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="text-white/70 mb-6">Request a demo or send us a message.</p>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" required placeholder="Name" className="rounded-md bg-black/20 border border-white/10 px-4 py-2.5 focus:border-accent outline-none" />
              <input name="email" required type="email" placeholder="Email" className="rounded-md bg-black/20 border border-white/10 px-4 py-2.5 focus:border-accent outline-none" />
            </div>
            <input name="company" placeholder="Company" className="rounded-md bg-black/20 border border-white/10 px-4 py-2.5 focus:border-accent outline-none" />
            <textarea name="message" required rows="4" placeholder="Message" className="rounded-md bg-black/20 border border-white/10 px-4 py-2.5 focus:border-accent outline-none" />
            <button className="btn-primary w-fit">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}