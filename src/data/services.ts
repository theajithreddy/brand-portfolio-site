export interface Tier {
  id: string
  name: string
  blurb: string
}

export const tiers: Tier[] = [
  {
    id: 'webapps',
    name: 'Custom Next.js & Three.js Web Applications',
    blurb: 'Bespoke, high-performance web applications with immersive 3D experiences, built to your brand and your business model.',
  },
  {
    id: 'infrastructure',
    name: 'B2B Infrastructure Consulting',
    blurb: 'Architecture, hosting, security and operations planning for companies that need their digital systems to be dependable.',
  },
  {
    id: 'automation',
    name: 'Enterprise AI Automations',
    blurb: 'Intelligent workflows that capture leads, answer customers and run routine operations around the clock.',
  },
]

export const addons = [
  { id: 'discovery', name: 'Discovery workshop' },
  { id: 'security', name: 'Security and performance review' },
  { id: 'handover', name: 'Team training and handover' },
  { id: 'retainer', name: 'Ongoing support retainer' },
]

export const pillars = [
  {
    title: 'Strategy first',
    text: 'Offer, audience and the one action a visitor should take, decided before a pixel is drawn.',
  },
  {
    title: 'Engineering that is fast',
    text: 'Fast, modern builds that load quickly on every device and hold up under real business traffic.',
  },
  {
    title: 'Lead capture that closes',
    text: 'Calls, forms and messaging wired into automated workflows, so every enquiry is counted and followed up.',
  },
]
