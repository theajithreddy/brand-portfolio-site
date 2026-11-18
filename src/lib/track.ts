import { tracking } from '../data/contact'

type Fn = (...args: unknown[]) => void
declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: Fn
    fbq?: Fn & { queue?: unknown[]; loaded?: boolean; version?: string; callMethod?: Fn; push?: Fn }
  }
}

function addScript(src: string) {
  const s = document.createElement('script')
  s.async = true
  s.src = src
  document.head.appendChild(s)
}

/** Loads GA4 and the Meta pixel once, only when their IDs are set in data/contact.ts. */
export function initTracking() {
  if (/^G-[A-Z0-9]{4,15}$/.test(tracking.ga4) && !window.gtag) {
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      // GA4 needs the real arguments object.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', tracking.ga4)
    addScript(`https://www.googletagmanager.com/gtag/js?id=${tracking.ga4}`)
  }
  if (/^\d{10,20}$/.test(tracking.metaPixel) && !window.fbq) {
    const q: unknown[] = []
    const fbq = ((...args: unknown[]) => {
      if (fbq.callMethod) fbq.callMethod(...args)
      else q.push(args)
    }) as NonNullable<Window['fbq']>
    fbq.queue = q
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    window.fbq = fbq
    addScript('https://connect.facebook.net/en_US/fbevents.js')
    fbq('init', tracking.metaPixel)
    fbq('track', 'PageView')
  }
}

/** GA4 event, plus a Meta standard event when given. Safe no-op without IDs. */
export function track(name: string, params: Record<string, unknown> = {}, metaEvent?: string) {
  try {
    window.gtag?.('event', name, params)
  } catch {
    /* ignore */
  }
  try {
    if (metaEvent) window.fbq?.('track', metaEvent)
  } catch {
    /* ignore */
  }
}

/** Fires whatsapp_click for every wa.me link click, wherever it is on the page. */
export function trackWhatsAppClicks() {
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement | null)?.closest?.('a[href*="wa.me/"]')
    if (a) track('whatsapp_click', { cta_location: a.getAttribute('data-cta') || 'page' }, 'Contact')
  })
}
