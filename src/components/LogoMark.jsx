export default function LogoMark({ className }) {
  return (
    <div
      className={[
        'grid h-10 w-10 place-items-center rounded-2xl',
        'bg-gradient-to-br from-indigo-500/90 to-fuchsia-500/90',
        'shadow-lg shadow-indigo-500/25',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <span className="text-lg font-black tracking-tight text-white">SS</span>
    </div>
  )
}

