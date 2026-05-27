import { cn } from '../lib/cn'

export default function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'neon-ring rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm',
        className,
      )}
      {...props}
    />
  )
}

