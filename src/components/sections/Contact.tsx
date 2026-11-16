import { MessageCircle, Phone } from 'lucide-react'
import Button from '../ui/Button'
import { telLink, waLink } from '../../data/contact'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-5">
      <div data-reveal className="glass p-8 text-center sm:p-12">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Have a custom project in mind?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-zinc-400">
          Tell me what you want to build or fix. I reply on WhatsApp, usually the same day, with clear next steps.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={waLink('Hi Ajith, I would like to talk about a custom project.')} external>
            <MessageCircle size={18} /> Message on WhatsApp
          </Button>
          <Button href={telLink} variant="ghost">
            <Phone size={18} /> Call now
          </Button>
        </div>
      </div>
    </section>
  )
}
