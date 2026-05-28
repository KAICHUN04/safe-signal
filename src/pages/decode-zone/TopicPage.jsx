import { Link, useParams, Navigate } from 'react-router-dom'
import { topicsBySlug } from './topics/index.js'

function SourceLink({ source }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noreferrer"
      className="text-indigo-300 underline decoration-indigo-400/40 underline-offset-2 hover:text-indigo-200"
    >
      {source.title} ({source.publisher})
    </a>
  )
}

export default function TopicPage() {
  const { slug } = useParams()
  const topic = topicsBySlug[slug]

  if (!topic) {
    return <Navigate to="/decode-zone" replace />
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/decode-zone"
          className="text-xs font-semibold text-slate-400 hover:text-slate-200"
        >
          ← Back to Decode Zone
        </Link>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="bg-gradient-to-r from-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
            {topic.title}
          </span>
        </h1>

        <p className="mt-4 text-base text-slate-300">{topic.summary}</p>

        {topic.scale && (
          <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
              How big is this?
            </div>
            <p className="mt-2 text-sm text-slate-200">{topic.scale.text}</p>
            <p className="mt-2 text-xs text-slate-400">
              Source: <SourceLink source={topic.scale.source} />
            </p>
          </div>
        )}

        <h2 className="mt-10 text-lg font-extrabold text-white">Red flags</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {topic.redFlags.map((flag) => (
            <li
              key={flag}
              className="rounded-xl bg-white/5 p-3 text-sm text-slate-200 ring-1 ring-white/10"
            >
              {flag}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-lg font-extrabold text-white">
          Real case to learn from
        </h2>
        <div className="mt-3 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 p-5 ring-1 ring-white/10">
          <div className="text-sm font-bold text-white">
            {topic.caseStudy.title}
          </div>
          <p className="mt-2 text-sm text-slate-200">
            {topic.caseStudy.summary}
          </p>
          <p className="mt-3 text-xs text-slate-400">
            Source: <SourceLink source={topic.caseStudy.source} />
          </p>
        </div>

        <h2 className="mt-10 text-lg font-extrabold text-white">
          What to do: Stop, Save, Block, Tell
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {topic.whatToDo.map((p) => (
            <div
              key={p.step}
              className="rounded-2xl bg-[#070B1A]/60 p-4 ring-1 ring-white/10"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
                {p.step}
              </div>
              <div className="mt-1 text-sm font-medium text-white">
                {p.detail}
              </div>
            </div>
          ))}
        </div>

        {topic.extraTools && topic.extraTools.length > 0 && (
          <div className="mt-8 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <div className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
              Tools that can help
            </div>
            <ul className="mt-2 space-y-2 text-sm">
              {topic.extraTools.map((tool) => (
                <li key={tool.url}>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-300 underline decoration-indigo-400/40 underline-offset-2 hover:text-indigo-200"
                  >
                    {tool.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-indigo-500/15 to-fuchsia-500/10 p-6 ring-1 ring-white/10">
          <div className="text-lg font-extrabold text-white">
            Where to get help
          </div>
          <p className="mt-2 text-sm text-slate-200">
            If something has happened, or is happening at this moment, you are
            not alone and you are not in trouble. Support is available.
          </p>
          <div className="mt-4">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              See Malaysia helplines & reporting →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
