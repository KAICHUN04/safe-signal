import { useState } from 'react'

export default function SignalAlerts() {
  const redFlags = [
    {
      id: 'selfies',
      label: 'Asking for selfies',
      badge: {
        text: 'Grooming Behavior',
        className: 'bg-rose-500/10 text-rose-200 ring-1 ring-rose-400/20',
      },
      messages: [
        { from: 'them', text: 'send a selfie rn 👀' },
        { from: 'them', text: 'no face is fine… just something' },
      ],
      explain:
        'Photo requests can escalate fast. If you feel pressured, stop and save evidence.',
    },
    {
      id: 'personal-info',
      label: 'Personal info requests',
      badge: {
        text: 'Privacy Risk',
        className: 'bg-sky-500/10 text-sky-200 ring-1 ring-sky-400/20',
      },
      messages: [
        { from: 'them', text: 'what’s your full name + school?' },
        { from: 'them', text: 'drop your address so i can send you a gift' },
      ],
      explain:
        'Private details can be used to locate you or impersonate you. Don’t share them.',
    },
    {
      id: 'secrets',
      label: 'Secret keeping',
      badge: {
        text: 'Behavioral Trap',
        className: 'bg-amber-500/10 text-amber-200 ring-1 ring-amber-400/20',
      },
      messages: [
        { from: 'them', text: 'don’t tell anyone about us' },
        { from: 'them', text: 'they wouldn’t understand' },
      ],
      explain:
        'Secrecy isolates you from support. Safe relationships don’t demand silence.',
    },
    {
      id: 'private-apps',
      label: 'Moving to private apps',
      badge: {
        text: 'Isolation Tactic',
        className: 'bg-fuchsia-500/10 text-fuchsia-200 ring-1 ring-fuchsia-400/20',
      },
      messages: [
        { from: 'them', text: 'switch to a private app. this one is monitored' },
        { from: 'them', text: 'we can use disappearing messages' },
      ],
      explain:
        'Moving off-platform can remove reporting tools and evidence. Stay where you can report.',
    },
    {
      id: 'gifts',
      label: 'Gifts / rewards manipulation',
      badge: {
        text: 'Grooming Behavior',
        className: 'bg-rose-500/10 text-rose-200 ring-1 ring-rose-400/20',
      },
      messages: [
        { from: 'them', text: 'i’ll buy you skins if you do me a favor' },
        { from: 'them', text: 'you owe me after i helped you' },
      ],
      explain:
        'Gifts can be used to create “debt” and control. You never owe anyone access to you.',
    },
  ]

  const [openId, setOpenId] = useState(null)

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
              Signal Alerts
            </span>
          </h1>
          <p className="mt-3 text-slate-300">
            Red flags can look like “normal” chat at first. Tap a card to see
            why it’s suspicious.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-4 lg:grid-cols-2">
          {redFlags.map((flag) => (
            <div
              key={flag.id}
              className={[
                'group self-start rounded-3xl bg-white/5 p-5 backdrop-blur-sm',
                'border border-white/10',
                'cursor-pointer transition-all duration-200 hover:scale-[1.01] hover:border-purple-500',
                openId === flag.id ? 'neon-ring' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <button
                type="button"
                className="w-full cursor-pointer text-left"
                onClick={() => toggle(flag.id)}
                aria-expanded={openId === flag.id}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-extrabold text-white">
                      {flag.label}
                    </div>
                  </div>
                  <div
                    className={[
                      'rounded-full px-3 py-1 text-xs font-bold',
                      flag.badge?.className ?? 'bg-white/5 text-slate-200 ring-1 ring-white/10',
                    ].join(' ')}
                  >
                    {flag.badge?.text ?? 'Warning'}
                  </div>
                </div>
              </button>

              {openId === flag.id ? (
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl bg-[#0B1030]/60 p-4 ring-1 ring-white/10">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                      <span>Chat</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {flag.messages.map((m, i) => (
                        <div key={i} className="flex justify-start">
                          <div className="max-w-[90%] rounded-2xl bg-white/6 px-4 py-3 text-sm text-slate-100 ring-1 ring-white/10">
                            {m.text}
                          </div>
                        </div>
                      ))}
                      <div className="flex justify-end">
                        <div className="max-w-[90%] rounded-2xl bg-indigo-500/25 px-4 py-3 text-sm text-white ring-1 ring-indigo-400/20">
                          I’m not comfortable with that.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-rose-500/10 p-4 ring-1 ring-rose-400/20">
                    <div className="text-xs font-semibold text-rose-200">
                      Why this is a red flag
                    </div>
                    <div className="mt-1 text-sm text-slate-200">
                      {flag.explain}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
