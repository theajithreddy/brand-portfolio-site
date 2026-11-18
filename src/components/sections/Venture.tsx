import { ArrowUpRight } from 'lucide-react'
import Button from '../ui/Button'
import { dfp } from '../../data/contact'

const systems = [
  ['Digital Foundation & Presence', 'Website, Google Business Profile and local SEO so people nearby find you first and trust you fast.'],
  ['Automated Lead Capture', 'Every call, message and form answered in seconds, with an AI callback and follow-ups that never forget.'],
  ['Retention & Reputation', 'Review requests and repeat-visit reminders that turn happy customers into steady cash flow.'],
] as const

export default function Venture() {
  return (
    <section id="dfp" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20 sm:px-5">
      <p data-reveal className="text-xs font-medium tracking-[0.25em] text-slate-400 uppercase">Founder</p>
      <h2 data-reveal className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        I run <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">DFPSystems</span>
      </h2>
      <p data-reveal className="mt-3 max-w-2xl text-zinc-400">
        DFPSystems (Digital For Profit) is my agency. We build complete growth systems for local businesses, so
        customers find you, every enquiry gets answered, and they keep coming back.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {systems.map(([title, text]) => (
          <div key={title} data-reveal className="glass p-6">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{text}</p>
          </div>
        ))}
      </div>
      <div data-reveal className="mt-8">
        <Button href={dfp.url} external variant="ghost">
          Visit digitalforprofit.in <ArrowUpRight size={18} />
        </Button>
      </div>
    </section>
  )
}
