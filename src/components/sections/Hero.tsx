import { lazy, Suspense } from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import HeroFallback from '../canvas/HeroFallback'
import Button from '../ui/Button'
import { usePerformanceTier } from '../../hooks/usePerformanceTier'
import { contact, telLink, waLink } from '../../data/contact'

const HeroScene = lazy(() => import('../canvas/HeroScene'))

export default function Hero() {
  const tier = usePerformanceTier()
  const use3D = tier === 'mid' || tier === 'high'

  return (
    <section id="overview" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <HeroFallback />
      {use3D && tier && (
        <Suspense fallback={null}>
          <HeroScene tier={tier} />
        </Suspense>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0c]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-24 pb-16">
        <p data-reveal className="mb-4 text-xs font-medium tracking-[0.25em] text-slate-400 uppercase">
          {contact.location}
        </p>
        <h1 data-reveal className="max-w-3xl text-5xl leading-[1.05] font-bold tracking-tight sm:text-7xl">
          {contact.name}
          <span className="mt-2 block text-3xl font-semibold text-slate-200 sm:text-5xl">
            Founder &amp; Lead Architect at Digital For Profit (DFP)
          </span>
        </h1>
        <p data-reveal className="mt-6 max-w-2xl text-lg text-zinc-300">
          Building the digital systems that help serious businesses grow.
        </p>
        <p data-reveal className="mt-3 max-w-2xl text-zinc-400">
          I lead Digital For Profit, where we design custom web applications, dependable business infrastructure and
          intelligent automations for companies that expect measurable results.
        </p>
        <div data-reveal className="mt-8 flex flex-wrap gap-3">
          <Button href="https://digitalforprofit.in" external>
            View Our Business Systems
          </Button>
          <Button
            href={waLink("Hi Ajith, I'd like to discuss a project with Digital For Profit.")}
            external
            variant="ghost"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </Button>
          <Button href={telLink} variant="ghost">
            <Phone size={18} /> Call now
          </Button>
        </div>
      </div>
    </section>
  )
}
