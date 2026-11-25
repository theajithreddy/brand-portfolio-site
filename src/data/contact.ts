// Everything in the site reads contact details from this file.
export const contact = {
  name: 'Ajith Reddy',
  // The DFP WhatsApp assistant (digits only, with country code). The owner's personal number is never public and
  // no phone number is shown: calls go through the free AI call back (lead form). Owner's rule, 2026-11-25.
  whatsappNumber: '919100139337',
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
  url: 'https://dfpsystems.in/',
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

/** "Call" buttons open the lead form: the AI assistant calls the visitor back in about a minute. */
export const telLink = '#contact'
