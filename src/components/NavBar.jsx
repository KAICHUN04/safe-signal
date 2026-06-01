import { NavLink } from 'react-router-dom'
import { cn } from '../lib/cn'
import Container from './Container'
import LogoMark from './LogoMark'
import {
  IconAlert,
  IconBook,
  IconHome,
  IconLink,
  IconQuiz,
  IconShield,
} from './icons'

const links = [
  { to: '/', label: 'Home', Icon: IconHome },
  { to: '/decode-zone', label: 'Decode Zone', Icon: IconBook },
  { to: '/signal-alerts', label: 'Signal Alerts', Icon: IconAlert },
  { to: '/signal-check', label: 'Signal Check', Icon: IconQuiz },
  { to: '/signal-shield', label: 'Signal Shield', Icon: IconShield },
  { to: '/resources', label: 'Resources', Icon: IconLink },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070B1A]/70 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <LogoMark />
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight text-white">
              Safe Signal
            </div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'group flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition',
                  'text-slate-200 hover:bg-white/5 hover:text-white',
                  isActive &&
                    'bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/15 text-white ring-1 ring-indigo-400/30',
                )
              }
              end={l.to === '/'}
            >
              <l.Icon
                className={cn(
                  'h-4 w-4 text-slate-300 transition group-hover:text-white',
                  'group-aria-[current=page]:text-indigo-200',
                )}
              />
              <span
                className={cn(
                  'transition',
                  'group-aria-[current=page]:bg-gradient-to-r group-aria-[current=page]:from-indigo-200 group-aria-[current=page]:to-fuchsia-200 group-aria-[current=page]:bg-clip-text group-aria-[current=page]:text-transparent',
                )}
              >
                {l.label}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2" />
      </Container>
    </header>
  )
}

