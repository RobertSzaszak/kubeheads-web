export const SITE = {
  name: 'KubeHeads',
  domain: 'kubeheads.com',
  email: 'hello@kubeheads.com',
  tagline: 'Ready for the agentic revolution.',
  description:
    'KubeHeads is an AI and technology consultancy for businesses of any size. We find the best and most cost-effective way to put AI and automation to work for you, with no long commitments unless the project needs them.',
} as const;

/** Homepage hero: three things a busy owner should take away in five seconds. */
export const PROMISES = [
  'Any size of business',
  'The most cost-effective solution',
  'No long commitments unless the project needs them',
] as const;

/**
 * Every email link goes through this so incoming mail carries a "[kubeheads.com] …" subject
 * tag. In Gmail, filter on `subject:"[kubeheads.com]"` to label website enquiries.
 */
export const mailto = (topic = 'Enquiry') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(`[kubeheads.com] ${topic}`)}`;

/** Homepage: what we can help with. One sentence each, written for a busy owner. */
export const HELP_AREAS = [
  {
    title: 'Web development',
    body: 'Websites, web apps and internal tools that your team and customers actually use.',
  },
  {
    title: 'AI agent integration',
    body: 'AI assistants and agents connected to your own systems, doing real work safely.',
  },
  {
    title: 'Automation',
    body: 'Repetitive manual work handed over to software, so your people can do the work that matters.',
  },
  {
    title: 'Data processing',
    body: 'Scattered data collected, cleaned and turned into reports and decisions.',
  },
] as const;

/** Homepage: the consultancy offer, in three steps. */
export const HOW_WE_HELP = [
  {
    title: 'Review',
    body: 'We look at your current systems and processes and find where time and money are lost.',
  },
  {
    title: 'Research',
    body: 'We compare the options and recommend the most cost-effective one, including when that means changing nothing.',
  },
  {
    title: 'Prove',
    body: 'We plan and build a proof of concept, so you see it working before you commit a budget.',
  },
] as const;

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
    title: 'Introduction',
    body: 'Email us about your business and the problem. You get an honest first opinion on whether it is worth solving with technology — including when the answer is no.',
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
