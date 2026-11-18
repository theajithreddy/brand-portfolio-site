import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { leadEndpoint } from '../../data/contact'
import { track } from '../../lib/track'

const NEEDS = [
  'Website or landing page',
  'Leads from Google / Meta ads',
  'Google Business Profile & reviews',
  'WhatsApp / AI call automation',
  'Complete growth system (DFPSystems)',
  'Something else',
] as const

const field =
  'w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-emerald-500/70 focus:ring-2 focus:ring-emerald-500/20'

function validMobile(raw: string) {
  let d = raw.replace(/\D/g, '')
  if (d.length === 12 && d.startsWith('91')) d = d.slice(2)
  if (d.length === 11 && d.startsWith('0')) d = d.slice(1)
  return /^[6-9]\d{9}$/.test(d) && !/^(\d)\1{9}$/.test(d) ? d : null
}

export default function LeadForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle')
  const [error, setError] = useState('')
  const [first, setFirst] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get('name') ?? '').trim()
    const phone = validMobile(String(f.get('phone') ?? ''))
    if (!name) return setError('Please enter your name.')
    if (!phone) return setError('Please enter a valid 10 digit mobile number.')
    setError('')
    setState('sending')
    const service = String(f.get('service') ?? '')
    try {
      const res = await fetch(leadEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          business: String(f.get('business') ?? ''),
          service,
          message: String(f.get('message') ?? ''),
          website: String(f.get('website') ?? ''),
          page: location.href,
        }),
      })
      const j = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) throw new Error(j.error || 'Something went wrong. Please try again or message on WhatsApp.')
      setFirst(name.split(' ')[0])
      setState('done')
      track('generate_lead', { form: 'contact', service }, 'Lead')
    } catch (err) {
      setState('idle')
      setError(err instanceof Error && err.message !== 'Failed to fetch' ? err.message : 'Could not send. Please try again or message on WhatsApp.')
    }
  }

  if (state === 'done') {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center" role="status">
        <CheckCircle2 size={40} className="text-emerald-400" />
        <p className="text-lg font-semibold">Thank you, {first}.</p>
        <p className="max-w-md text-sm text-zinc-400">
          You will get a call shortly from our assistant to understand your needs, and I will follow up with clear next
          steps.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-3 text-left sm:grid-cols-2">
      <label className="grid gap-1.5 text-sm">
        <span className="text-zinc-300">Your name *</span>
        <input name="name" autoComplete="name" maxLength={80} required className={field} placeholder="Full name" />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="text-zinc-300">Mobile (WhatsApp) *</span>
        <input name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={16} required className={field} placeholder="10 digit mobile" />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="text-zinc-300">Business name</span>
        <input name="business" autoComplete="organization" maxLength={120} className={field} placeholder="Optional" />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="text-zinc-300">What do you need?</span>
        <select name="service" className={field} defaultValue={NEEDS[0]}>
          {NEEDS.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm sm:col-span-2">
        <span className="text-zinc-300">Anything else?</span>
        <textarea name="message" rows={3} maxLength={1000} className={field} placeholder="Optional: your goal, city, budget" />
      </label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {error && (
        <p className="text-sm text-rose-400 sm:col-span-2" role="alert">
          {error}
        </p>
      )}
      <div className="flex flex-col items-center gap-2 sm:col-span-2">
        <button
          type="submit"
          disabled={state === 'sending'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_30px_-6px_rgba(16,185,129,.7)] transition hover:-translate-y-0.5 disabled:opacity-60"
        >
          {state === 'sending' ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />} Get a call back
        </button>
        <p className="text-xs text-zinc-500">By sending, you agree to get a call and WhatsApp messages about your enquiry.</p>
      </div>
    </form>
  )
}
