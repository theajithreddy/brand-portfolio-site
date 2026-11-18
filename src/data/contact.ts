// Everything in the site reads contact details from this file.
export const contact = {
  name: 'Ajith Reddy',
  // Digits only, with country code, no "+".
  whatsappNumber: '919182330659',
  phoneDisplay: '+91 91823 30659',
  phoneTel: '+919182330659',
  github: 'https://github.com/theajithreddy',
  instagram: 'https://www.instagram.com/theajithreddy/',
  facebook: 'https://www.facebook.com/theajithreddy',
  youtube: 'https://www.youtube.com/@theajithreddy',
  x: 'https://x.com/theajithreddy_',
  location: 'Based in Warangal · Working remotely',
  // Shown once the hello@theajithreddy.in mailbox exists. Empty = hidden.
  email: '',
} as const

/** The agency Ajith founded. */
export const dfp = {
  name: 'DFPSystems',
  url: 'https://digitalforprofit.in/',
  facebook: 'https://www.facebook.com/dfp.systems',
  instagram: 'https://www.instagram.com/dfp.systems/',
} as const

/** Only accounts that really exist. They feed the footer icons and the schema sameAs. */
export const socials = [
  ['Instagram', contact.instagram],
  ['Facebook', contact.facebook],
  ['YouTube', contact.youtube],
  ['X', contact.x],
  ['GitHub', contact.github],
] as const

/** Enquiries go to the dashboard as agency leads (instant AI callback + Telegram alert). */
export const leadEndpoint = 'https://app.theajithreddy.in/api/public/site-lead'

/** GA4 measurement ID (G-XXXX). Empty = no analytics. Meta pixel ID (digits). Empty = no pixel. */
export const tracking = { ga4: '', metaPixel: '' } as const

export const isContactConfigured = !contact.whatsappNumber.includes('X')

export const waLink = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`

export const telLink = `tel:${contact.phoneTel}`
