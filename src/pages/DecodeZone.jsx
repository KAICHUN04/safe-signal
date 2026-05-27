export default function DecodeZone() {
  const tactics = [
    {
      title: 'Fast trust + compliments',
      body: '“You’re so mature” can be a shortcut to lower your guard. Real trust takes time.',
    },
    {
      title: 'Testing boundaries',
      body: 'They start small (“just a selfie”) and push more later. Saying no early matters.',
    },
    {
      title: 'Isolation + secrecy',
      body: '“Don’t tell anyone” is a red flag. Safe friendships don’t require secrecy.',
    },
    {
      title: 'Gifts + rewards',
      body: 'Offering money, skins, or “exclusive” perks can be a trap to control you.',
    },
  ]

  const protocol = [
    { step: 'Stop', detail: 'Pause. Don’t reply when you feel pressured.' },
    { step: 'Save', detail: 'Screenshot or save messages as evidence.' },
    { step: 'Block', detail: 'Block/report the account on the platform.' },
    { step: 'Tell', detail: 'Tell a trusted adult or support person.' },
  ]

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
              Decode Zone
            </span>
          </h1>
          <p className="mt-3 text-slate-300">
            Learn about online safely. Understanding the risks is the first step
            to protecting yourself
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {tactics.map((t) => (
            <div
              key={t.title}
              className="neon-ring rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/8"
            >
              <div className="text-sm font-bold text-white">{t.title}</div>
              <div className="mt-2 text-sm text-slate-300">{t.body}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <h2 className="text-lg font-extrabold text-white">
              Digital footprint
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Your posts, likes, tags, usernames, and DMs can reveal more than
              you think—location, routines, friends, and school info. Share less
              than you feel comfortable being public forever.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                Keep accounts private when possible.
              </li>
              <li className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                Avoid posting school logos, schedules, or live locations.
              </li>
              <li className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                Use strong passwords + 2FA where available.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-indigo-500/15 to-fuchsia-500/10 p-6 ring-1 ring-white/10">
            <h2 className="text-lg font-extrabold text-white">
              Safety protocol
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              If your gut says “this is weird,” follow:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {protocol.map((p) => (
                <div
                  key={p.step}
                  className="rounded-2xl bg-[#070B1A]/60 p-4 ring-1 ring-white/10"
                >
                  <div className="text-xs font-semibold text-slate-300">
                    {p.step}
                  </div>
                  <div className="mt-1 text-sm font-bold text-white">
                    {p.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 p-6 ring-1 ring-white/10">
          <div className="text-lg font-extrabold text-white">Remember</div>
          <p className="mt-2 text-sm text-slate-200">
            If something feels wrong or makes you uncomfortable online, trust
            your instincts. Talk to a trusted adult—parent, teacher, or
            counselor. You&apos;re never alone, and asking for help is a sign of
            strength, not weakness.
          </p>
        </div>
      </div>
    </section>
  )
}
