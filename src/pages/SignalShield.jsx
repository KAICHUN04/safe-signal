export default function SignalShield() {
  const templates = [
    {
      title: 'Message to a parent/guardian',
      text: `Hey — I need help with something online.\n\nSomeone has been messaging me in a way that feels unsafe. I saved screenshots. Can we look at it together and decide what to do next?`,
    },
    {
      title: 'Message to a teacher/counselor',
      text: `Hi — I’m reaching out because I’m worried about an online situation.\n\nI have messages/screenshots saved. Could I talk to you privately today?`,
    },
  ]

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // ignore
    }
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-emerald-200 to-cyan-200 bg-clip-text text-transparent">
              Signal Shield
            </span>
          </h1>
          <p className="mt-3 text-slate-300">
            You are not alone. You are not in trouble.
          </p>
          <p className="mt-2 text-sm text-slate-200">
            If something feels wrong online, it’s okay to ask for help. Use
            the steps below to protect yourself and keep evidence.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <h2 className="text-lg font-extrabold text-white">Steps</h2>
            <ol className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs font-semibold text-slate-400">1</div>
                <div className="mt-1 font-extrabold text-white">
                  Stop communication
                </div>
                <div className="mt-1 text-slate-300">
                  Don’t reply when you feel pressured or uncomfortable.
                </div>
              </li>
              <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs font-semibold text-slate-400">2</div>
                <div className="mt-1 font-extrabold text-white">
                  Save evidence
                </div>
                <div className="mt-1 text-slate-300">
                  Screenshot, save links/usernames, and keep dates/times.
                </div>
              </li>
              <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs font-semibold text-slate-400">3</div>
                <div className="mt-1 font-extrabold text-white">
                  Block / report
                </div>
                <div className="mt-1 text-slate-300">
                  Use in-app tools. Reporting helps protect others too.
                </div>
              </li>
              <li className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs font-semibold text-slate-400">4</div>
                <div className="mt-1 font-extrabold text-white">
                  Tell a trusted adult
                </div>
                <div className="mt-1 text-slate-300">
                  Parent/guardian, teacher, counselor, coach, or another safe
                  person.
                </div>
              </li>
            </ol>
          </div>

          <div className="rounded-3xl bg-[#0B1030]/60 p-6 ring-1 ring-white/10">
            <h2 className="text-lg font-extrabold text-white">
              Copy‑paste messages
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Use these if you’re not sure what to say.
            </p>

            <div className="mt-4 space-y-3">
              {templates.map((t) => (
                <div
                  key={t.title}
                  className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-extrabold text-white">
                      {t.title}
                    </div>
                    <button
                      type="button"
                      className="rounded-xl bg-white/5 px-3 py-2 text-xs font-bold text-white ring-1 ring-white/10 transition hover:bg-white/10"
                      onClick={() => copy(t.text)}
                    >
                      Copy
                    </button>
                  </div>
                  <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-black/20 p-3 text-xs text-slate-200 ring-1 ring-white/10">
                    {t.text}
                  </pre>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-amber-500/10 p-4 ring-1 ring-amber-400/20">
              <div className="text-xs font-semibold text-amber-200">
                Helplines
              </div>
              <div className="mt-1 text-sm text-slate-200">
                If you’re in immediate danger, contact local emergency services.
                For other support, use trusted local youth helplines available
                in your country.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
