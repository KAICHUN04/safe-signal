import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { IconAlert, IconBook, IconQuiz, IconShield } from '../components/icons'

export default function Home() {
  const navCards = [
    {
      title: 'Decode Zone',
      desc: 'Understand online predators, grooming tactics, and digital footprints.',
      to: '/decode-zone',
      Icon: IconBook,
      accent: 'from-sky-500 to-indigo-500',
    },
    {
      title: 'Signal Alerts',
      desc: 'Identify suspicious chat behaviors and warning signs.',
      to: '/signal-alerts',
      Icon: IconAlert,
      accent: 'from-fuchsia-500 to-violet-500',
    },
    {
      title: 'Signal Check',
      desc: 'Test your awareness with realistic scenarios, and get instant feedback.',
      to: '/signal-check',
      Icon: IconQuiz,
      accent: 'from-indigo-500 to-fuchsia-500',
    },
    {
      title: 'Build Your Shield',
      desc: 'Get help steps, copy‑paste messages, and support guidance if something feels unsafe.',
      to: '/signal-shield',
      Icon: IconShield,
      accent: 'from-emerald-500 to-cyan-500',
    },
  ]

  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
                Safe Signal
              </span>
            </h1>
            <p className="mt-3 max-w-xl text-base text-slate-300 sm:text-lg">
              Spot the signs. Stay safe online. Learn to recognize online threats, 
              protect your privacy, and stay safe in digital spaces.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/decode-zone">
                <Button className="w-full sm:w-auto">Enter Decode Zone</Button>
              </Link>
              <Link to="/signal-check">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Start Signal Check
                </Button>
              </Link>
            </div>

          </div>

          <div className="neon-ring rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold text-white">Suspicious DM</div>
              <div className="text-xs text-slate-400">Preview</div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex justify-start">
                <div className="max-w-[85%]">
                  <div className="mb-1 pl-1 text-[11px] font-semibold text-slate-400">
                    @Stranger_99
                  </div>
                  <div className="rounded-2xl bg-white/6 px-4 py-3 text-sm text-slate-100 ring-1 ring-white/10">
                  you’re really mature for your age… 😌
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[85%]">
                  <div className="mb-1 pl-1 text-[11px] font-semibold text-slate-400">
                    @Stranger_99
                  </div>
                  <div className="rounded-2xl bg-white/6 px-4 py-3 text-sm text-slate-100 ring-1 ring-white/10">
                  keep this between us. send a selfie?
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[85%]">
                  <div className="rounded-2xl bg-indigo-500/25 px-4 py-3 text-sm text-white ring-1 ring-indigo-400/20">
                    Why do you need that?
                  </div>
                  <div className="mt-2 flex justify-end">
                    <Link
                      to="/signal-check"
                      className="rounded-full bg-indigo-500/15 px-3 py-1 text-[11px] font-semibold text-indigo-100 ring-1 ring-indigo-400/25 shadow-[0_0_22px_rgba(99,102,241,0.25)] transition hover:bg-indigo-500/20 hover:text-white"
                    >
                      [ Run Signal Check → ]
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-14">
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
            <div className="text-lg font-extrabold text-white">
              Why This Matters
            </div>
            <p className="mt-2 text-sm text-slate-300">
              The internet is an amazing place to connect, learn, and have fun. But it's important to be 
              aware of potential dangers. Online predators use manipulation tactics to gain trust and 
              exploit young people. 
            </p>
            <p className="mt-3 text-sm text-slate-300">
              Safe Signal helps you recognize warning signs, understand online threats, and make safer decisions online. Knowledge is your best protection.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {navCards.slice(0, 3).map((c) => (
              <div
                key={c.to}
                className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/8"
              >
                <div
                  className={[
                    'grid h-11 w-11 place-items-center rounded-2xl',
                    'bg-gradient-to-br',
                    c.accent,
                    'shadow-lg shadow-indigo-500/10',
                  ].join(' ')}
                >
                  <c.Icon className="h-6 w-6 text-white" />
                </div>
                <div className="mt-4 text-base font-extrabold text-white">
                  {c.title}
                </div>
                <div className="mt-2 text-sm text-slate-300">{c.desc}</div>
                <div className="mt-4">
                  <Link
                    to={c.to}
                    className="inline-flex items-center gap-2 text-sm font-bold text-sky-300 transition hover:text-sky-200"
                  >
                    Explore <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="rounded-3xl bg-[#0B1030]/60 p-6 ring-1 ring-white/10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-base font-extrabold text-white">
                    {navCards[3].title}
                  </div>
                  <div className="mt-1 text-sm text-slate-300">
                    {navCards[3].desc}
                  </div>
                </div>
                <Link to={navCards[3].to}>
                  <Button variant="secondary">Get Protected</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
