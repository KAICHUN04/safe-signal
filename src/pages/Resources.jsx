const helplines = [
  {
    id: 'talian-kasih',
    name: 'Talian Kasih 15999',
    role: 'National welfare helpline (KPWKM) — abuse, family crisis, child protection.',
    contact: [
      { label: 'Call', value: '15999', href: 'tel:15999' },
      {
        label: 'WhatsApp',
        value: '019-261 5999',
        href: 'https://wa.me/60192615999',
      },
    ],
    hours: '24 hours, every day',
    source: {
      title: 'Talian Kasih 15999 (KPWKM)',
      url: 'https://www.kpwkm.gov.my/portal-main/article?id=talian-kasih',
    },
  },
  {
    id: 'cyber999',
    name: 'Cyber999 (CyberSecurity Malaysia)',
    role: 'National point of contact for cyber incidents — account hacks, fraud, phishing, online abuse.',
    contact: [
      { label: 'Hotline', value: '1-300-88-2999', href: 'tel:1300882999' },
      { label: 'Mobile (24/7)', value: '+60 19-266 5850', href: 'tel:+60192665850' },
      {
        label: 'Online report',
        value: 'mycert.org.my/cyber999',
        href: 'https://www.mycert.org.my/cyber999',
      },
    ],
    hours: 'Business hours hotline; 24/7 mobile line',
    source: {
      title: 'Cyber999 — CyberSecurity Malaysia',
      url: 'https://www.cybersecurity.my/portal-main/services/cyber999-overview',
    },
  },
  {
    id: 'mcmc',
    name: 'MCMC Aduan',
    role: 'Report illegal, harmful, or harassing online content and communications.',
    contact: [
      {
        label: 'Online complaint',
        value: 'aduan.mcmc.gov.my',
        href: 'https://aduan.mcmc.gov.my/',
      },
      {
        label: 'MCMC main site',
        value: 'mcmc.gov.my',
        href: 'https://www.mcmc.gov.my/',
      },
    ],
    hours: 'Online portal — anytime',
    source: {
      title: 'MCMC official site',
      url: 'https://www.mcmc.gov.my/',
    },
  },
  {
    id: 'pdrm',
    name: 'PDRM (Royal Malaysia Police)',
    role: 'For crimes — sextortion, threats, fraud, abuse. Lodge a police report at the nearest balai polis or online.',
    contact: [
      { label: 'Emergency', value: '999', href: 'tel:999' },
      {
        label: 'Online portal',
        value: 'rmp.gov.my',
        href: 'https://www.rmp.gov.my/',
      },
    ],
    hours: '999 is 24/7',
    source: {
      title: 'Polis Diraja Malaysia',
      url: 'https://www.rmp.gov.my/',
    },
  },
  {
    id: 'befrienders',
    name: 'Befrienders KL',
    role: 'Free, confidential emotional support if you feel overwhelmed, anxious, or are having thoughts of suicide.',
    contact: [
      { label: 'Helpline', value: '03-7627 2929', href: 'tel:0376272929' },
      {
        label: 'Website',
        value: 'befrienders.org.my',
        href: 'https://www.befrienders.org.my/',
      },
    ],
    hours: '24 hours, every day',
    source: {
      title: 'Befrienders Kuala Lumpur',
      url: 'https://www.befrienders.org.my/',
    },
  },
  {
    id: 'stopncii',
    name: 'StopNCII.org',
    role: 'Free tool to help take down intimate images (real or AI-generated) shared without your consent.',
    contact: [
      {
        label: 'Website',
        value: 'stopncii.org',
        href: 'https://stopncii.org/',
      },
    ],
    hours: 'Always available',
    source: {
      title: 'StopNCII.org',
      url: 'https://stopncii.org/',
    },
  },
  {
    id: 'unicef-malaysia',
    name: 'UNICEF Malaysia — further reading',
    role: 'Research and parent/teen guidance on online child safety in Malaysia.',
    contact: [
      {
        label: 'Disrupting Harm report',
        value: 'unicef.org/malaysia',
        href: 'https://www.unicef.org/malaysia/reports/disrupting-harm-malaysia',
      },
    ],
    hours: 'Reading resource',
    source: {
      title: 'UNICEF Malaysia',
      url: 'https://www.unicef.org/malaysia',
    },
  },
]

export default function Resources() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-indigo-200 to-fuchsia-200 bg-clip-text text-transparent">
              Malaysia helplines & reporting
            </span>
          </h1>
          <p className="mt-3 text-slate-300">
            Real, verified support channels in Malaysia. Free. Many are open
            24/7. You will not get in trouble for asking for help.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {helplines.map((h) => (
            <div
              key={h.id}
              id={h.id}
              className="neon-ring rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
            >
              <div className="text-sm font-bold text-white">{h.name}</div>
              <p className="mt-2 text-sm text-slate-300">{h.role}</p>

              <ul className="mt-4 space-y-2 text-sm">
                {h.contact.map((c) => (
                  <li
                    key={c.label + c.value}
                    className="rounded-xl bg-[#070B1A]/60 p-3 ring-1 ring-white/10"
                  >
                    <div className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
                      {c.label}
                    </div>
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="mt-1 inline-block font-semibold text-white hover:text-indigo-200"
                    >
                      {c.value}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-xs text-slate-400">
                Hours: {h.hours} ·{' '}
                <a
                  href={h.source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-300 underline decoration-indigo-400/40 underline-offset-2 hover:text-indigo-200"
                >
                  Official source
                </a>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 p-6 ring-1 ring-white/10">
          <div className="text-lg font-extrabold text-white">
            If you are in immediate danger
          </div>
          <p className="mt-2 text-sm text-slate-200">
            Call 999. Tell a trusted adult — a parent, teacher, school
            counsellor, or any adult you trust. Asking for help is a sign of
            strength, not weakness.
          </p>
        </div>
      </div>
    </section>
  )
}
