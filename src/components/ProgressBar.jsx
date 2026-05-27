export default function ProgressBar({ value = 0 }) {
  const clamped = Math.max(0, Math.min(100, value))
  return (
    <div className="h-3 w-full rounded-full bg-white/5 ring-1 ring-white/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-[width] duration-500 ease-out"
        style={{ width: `${clamped}%` }}
        aria-hidden="true"
      />
    </div>
  )
}

