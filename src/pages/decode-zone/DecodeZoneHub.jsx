import { Link } from 'react-router-dom'
import { topics } from './topics/index.js'

export default function DecodeZoneHub() {
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
            Detailed guidance on the online threats most relevant to young
            people in Malaysia, supported by research and real cases. Select a
            topic to review the warning signs and the recommended response.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              to={`/decode-zone/${topic.slug}`}
              className="neon-ring group block rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/8"
            >
              <div className="text-sm font-bold text-white">{topic.title}</div>
              <div className="mt-2 text-sm text-slate-300">
                {topic.hubBlurb}
              </div>
              <div className="mt-4 text-xs font-semibold text-indigo-200 group-hover:text-indigo-100">
                Read more →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 p-6 ring-1 ring-white/10">
          <div className="text-lg font-extrabold text-white">
            Need help right now?
          </div>
          <p className="mt-2 text-sm text-slate-200">
            If you or a friend are facing a difficult situation, please do
            not wait. Speak to a trusted adult or contact a Malaysian
            helpline.
          </p>
          <div className="mt-4">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              Malaysia helplines & reporting →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
