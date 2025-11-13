export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
          {eyebrow}
        </div>
      )}
      {title && (
        <h3 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h3>
      )}
      {subtitle && (
        <p className="text-white/70 max-w-3xl">{subtitle}</p>
      )}
    </div>
  )
}