export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="container py-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>&copy; {new Date().getFullYear()} VyomGarud</div>
        <div className="flex items-center gap-4">
          <a href="mailto:contact@vyomgarud.com" className="hover:text-white">Email</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  )
}