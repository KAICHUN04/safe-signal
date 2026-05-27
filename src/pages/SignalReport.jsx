import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import { IconBook, IconHome } from '../components/icons'
import { readLastResult } from '../features/quiz/useQuiz'

const KEY_POINTS = [
  'Never share personal information (address, school, phone number) with online strangers',
  'Be suspicious of anyone asking you to keep conversations secret from parents or guardians',
  'Trust your instincts—if something feels wrong, it probably is. Tell a trusted adult',
  "Block and report suspicious behavior immediately—you're not being rude, you're being safe",
]

function getTier(percent) {
  if (percent >= 90) {
    return {
      title: 'Shield Elite',
      titleClass: 'text-emerald-300',
      circleClass: 'from-emerald-500 to-cyan-500',
      subtext:
        'Excellent work. You showed strong awareness of online safety tactics and made smart choices under pressure.',
    }
  }
  if (percent >= 70) {
    return {
      title: 'Signal Strong',
      titleClass: 'text-indigo-300',
      circleClass: 'from-indigo-500 to-fuchsia-500',
      subtext:
        'Great job. You spotted most red flags—keep practicing boundaries and reporting when something feels off.',
    }
  }
  if (percent >= 50) {
    return {
      title: 'Getting Sharper',
      titleClass: 'text-fuchsia-300',
      circleClass: 'from-fuchsia-500 to-violet-500',
      subtext:
        'You’re building awareness. Review the learning sections and try the quiz again to strengthen your instincts.',
    }
  }
  return {
    title: 'Practice More',
    titleClass: 'text-orange-300',
    circleClass: 'from-orange-500 to-rose-500',
    subtext:
      'Online safety requires more attention. Please review the learning materials carefully and retake the quiz. Your safety is important!',
  }
}

function IconRedo(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 12a8 8 0 0 1 13.5-5.7M20 12a8 8 0 0 1-13.5 5.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16 5.5H20V1.5M8 18.5H4v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function SignalReport() {
  const navigate = useNavigate()
  const result = readLastResult()

  const { percent, tier, strengths, improvements } = useMemo(() => {
    if (!result?.total) {
      return { percent: 0, tier: getTier(0), strengths: [], improvements: [] }
    }

    const pct = Math.round((result.score / result.total) * 100)
    const t = getTier(pct)

    const strengths =
      pct >= 50
        ? [
            'You successfully identified safe responses in challenging scenarios',
            'You demonstrated awareness of online predator tactics',
            'You recognized the importance of boundaries and privacy',
          ]
        : [
            'You completed the quiz and started building safety awareness',
            'You took time to think through realistic online scenarios',
          ]

    const improvements =
      pct >= 70
        ? [
            'Keep practicing spotting subtle manipulation in chats',
            'Review Signal Alerts for more red-flag examples',
          ]
        : [
            'Review the red flags page to better recognize warning signs',
            'Practice identifying manipulation tactics in online conversations',
            'Remember: when in doubt, always talk to a trusted adult',
          ]

    return { percent: pct, tier: t, strengths, improvements }
  }, [result])

  if (!result) {
    return (
      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
                Signal Report
              </span>
            </h1>
            <p className="mt-3 text-slate-300">
              Take the Signal Check quiz to generate your report.
            </p>
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => navigate('/signal-check')}
              className="rounded-xl bg-gradient-to-r from-sky-400 to-fuchsia-400 px-5 py-3 text-sm font-extrabold text-slate-900"
            >
              Start Signal Check
            </button>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-center sm:text-left">
            <span className="bg-gradient-to-r from-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
              Signal Report
            </span>
          </h1>

          <div className="mt-8 flex flex-col items-center text-center">
            <div
              className={[
                'grid h-36 w-36 place-items-center rounded-full',
                'bg-gradient-to-b',
                tier.circleClass,
                'shadow-lg shadow-orange-500/20',
              ].join(' ')}
            >
              <div className="text-3xl font-black text-white">
                {result.score}{' '}
                <span className="text-xl font-bold text-white/80">
                  / {result.total}
                </span>
              </div>
            </div>

            <h2
              className={[
                'mt-6 text-2xl font-extrabold sm:text-3xl',
                tier.titleClass,
              ].join(' ')}
            >
              {tier.title}
            </h2>

            <p className="mt-3 max-w-xl text-sm text-slate-300">{tier.subtext}</p>

            <div className="mt-4 rounded-full bg-white/5 px-4 py-1.5 text-sm font-bold text-sky-300 ring-1 ring-sky-400/30">
              {percent}% Correct
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-400/30">
                  ◎
                </span>
                <h3 className="text-base font-extrabold text-white">
                  What You Did Well
                </h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {strengths.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-indigo-500/20 text-indigo-200 ring-1 ring-indigo-400/30">
                  <IconBook className="h-4 w-4" />
                </span>
                <h3 className="text-base font-extrabold text-white">
                  Areas to Focus On
                </h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {improvements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-[#0B1030]/60 p-6 ring-1 ring-sky-400/20">
            <h3 className="text-base font-extrabold text-white">
              Remember These Key Points:
            </h3>
            <ol className="mt-4 space-y-4">
              {KEY_POINTS.map((point, i) => (
                <li key={point} className="flex gap-3 text-sm text-slate-300">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-500/30 text-xs font-bold text-sky-100">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{point}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Link
              to="/signal-check"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 to-fuchsia-400 px-4 py-3 text-sm font-extrabold text-slate-900 shadow-lg shadow-fuchsia-500/20 transition hover:opacity-95"
            >
              <IconRedo className="h-4 w-4" />
              Retake Quiz
            </Link>
            <Link
              to="/decode-zone"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-bold text-white ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <IconBook className="h-4 w-4" />
              Review Materials
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-bold text-white ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <IconHome className="h-4 w-4" />
              Go Home
            </Link>
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">
            &ldquo;Knowledge is your best defense. Share what you&apos;ve learned
            with friends to help keep everyone safe online!&rdquo;
          </p>
        </div>
      </Container>
    </section>
  )
}
