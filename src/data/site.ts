export const SITE = {
  name: 'KubeHeads',
  domain: 'kubeheads.com',
  email: 'hello@kubeheads.com',
  tagline: 'Automation that reaches production.',
  description:
    'KubeHeads builds AI automation that actually runs. One team covers the whole path — process, models, data, deployment — so the work does not die in the handoffs.',
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'What we do' },
  { href: '/approach', label: 'How we work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

/**
 * Three disciplines. Each lists what the client actually receives — not capabilities,
 * deliverables. If it cannot be handed over, it does not belong in this list.
 */
export const SERVICES = [
  {
    id: 'automation',
    kicker: '01',
    title: 'AI automation & workflow',
    summary:
      'We take the process that quietly eats a day a week and automate it end to end — running in your stack, with approvals where a human still needs to sign off.',
    deliverables: [
      'A working workflow deployed in your environment',
      'Human approval steps and full audit logs',
      'An eval suite that measures quality, not vibes',
      'A rollback plan and a runbook your team can operate',
    ],
  },
  {
    id: 'optimization',
    kicker: '02',
    title: 'AI optimization',
    summary:
      'Systems that already run, made cheaper, faster and more reliable. Usually the win is unglamorous: routing, caching, batch sizes, and the calls you stopped making at all.',
    deliverables: [
      'A cost and latency audit with real numbers, before and after',
      'Model routing and caching tuned to your traffic',
      'A regression suite so quality does not silently degrade',
      'A written record of what changed and why',
    ],
  },
  {
    id: 'engineering',
    kicker: '03',
    title: 'Software & data engineering',
    summary:
      'The product and the plumbing around the automation. Web apps, services, pipelines, and the deployment path that gets them live and keeps them there.',
    deliverables: [
      'Web and backend services, built and deployed',
      'Data pipelines with monitoring and alerting',
      'CI/CD and infrastructure as code',
      'Documentation and a handover that survives you leaving',
    ],
  },
] as const;

/** Engagement shape: fixed-fee build, then optional retainer. */
export const PROCESS = [
  {
    step: 'Week 0',
    title: 'Free teardown',
    body: 'A call and a look at one process. You leave with a written opinion on whether automating it is worth the money — including when the answer is no.',
    output: 'A one-page written assessment',
  },
  {
    step: 'Weeks 1–2',
    title: 'Scoped build',
    body: 'One workflow, fixed fee, acceptance criteria agreed before we start. Not a slide deck and not a pilot that dies in a sandbox.',
    output: 'A running system in your stack',
  },
  {
    step: 'Week 3+',
    title: 'Run it or take it',
    body: 'We hand it over documented and you own it, or we keep it running on a light monthly retainer. Decided at the end, not locked in at signature.',
    output: 'Docs, runbook, and your choice',
  },
] as const;

export const PRINCIPLES = [
  {
    title: 'One team, no handoffs',
    body: 'Automation usually dies in the gaps — between the AI vendor, the data team and whoever owns deployment. We cover all three, so there is nowhere for it to fall through.',
  },
  {
    title: 'We say no to bad projects',
    body: 'Plenty of "AI opportunities" are a spreadsheet and a rule engine wearing a costume. We will tell you when that is what you have. It costs us a sale and saves you a quarter.',
  },
  {
    title: 'Production or it does not count',
    body: 'A demo proves a model can do something once. We are only interested in the version that runs on Monday morning without anyone watching it.',
  },
] as const;

/** The failure mode we are selling against. Used on the homepage. */
export const PROBLEM = {
  stat: 'Most AI projects never leave the pilot.',
  body:
    'They demo well, get a budget, and then stall — because the model was the easy part. What kills them is everything around it: the data that was never clean, the approval step nobody designed, the deployment path that did not exist, and the three vendors each waiting on the other two.',
} as const;

/**
 * Secondary links shown in the footer only. Games live here rather than in NAV so the
 * header stays a consultancy pitch (see docs/decisions-log.md). To promote the games
 * section to the header, move the entry into NAV.
 */
export const FOOTER_LINKS = [{ href: '/games', label: 'Games' }] as const;

/** Titles shown on /games. Add an entry per game; `link` appears once there is a store page. */
export const GAMES: ReadonlyArray<{
  title: string;
  status: string;
  summary: string;
  link?: { href: string; label: string };
}> = [
  {
    title: 'Escape Rising',
    status: 'In development',
    summary: 'Our first title, heading for Steam. A playable demo is in the works.',
  },
];
