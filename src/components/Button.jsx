import { cn } from '../lib/cn'

export default function Button({
  as: Comp = 'button',
  variant = 'primary',
  className,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60'

  const variants = {
    primary:
      'bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/20 hover:from-indigo-400 hover:to-fuchsia-400',
    secondary:
      'bg-white/5 text-slate-100 ring-1 ring-white/10 hover:bg-white/8 hover:ring-white/15',
    ghost: 'text-slate-100 hover:bg-white/5 ring-1 ring-transparent',
    danger:
      'bg-rose-500/90 text-white shadow-lg shadow-rose-500/20 hover:bg-rose-500',
  }

  return (
    <Comp
      className={cn(base, variants[variant] ?? variants.primary, className)}
      {...props}
    />
  )
}

