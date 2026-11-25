import { MessageCircle, Phone } from 'lucide-react'
import Button from '../ui/Button'
import LeadForm from '../ui/LeadForm'
import { telLink, waLink } from '../../data/contact'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-5">
      <div data-reveal className="glass p-6 sm:p-12">
        <div className="text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Have a project or a growth goal in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-400">
            Leave your details and you get a call back within minutes during working hours. Prefer to chat? Message me
            on WhatsApp.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl">
          <LeadForm />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 border-t border-zinc-800 pt-8">
          <Button href={waLink('Hi Ajith, I would like to talk about a custom project.')} external>
            <MessageCircle size={18} /> Message on WhatsApp
          </Button>
          <Button href={telLink} variant="ghost">
            <Phone size={18} /> Free AI call back
          </Button>
        </div>
      </div>
    </section>
  )
}
