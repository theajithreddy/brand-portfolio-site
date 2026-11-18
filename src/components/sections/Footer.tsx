import { Mail, Phone } from 'lucide-react'
import SocialIcon from '../ui/SocialIcon'
import { contact, dfp, socials, telLink, waLink } from '../../data/contact'

const waHref = waLink('Hi Ajith, I would like to talk about a custom project.')

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold">{contact.name}</p>
          <p className="text-sm text-zinc-500">{contact.location}</p>
          <p className="mt-2 text-sm text-zinc-400">
            Founder,{' '}
            <a href={dfp.url} target="_blank" rel="noopener" className="text-emerald-400 hover:underline">
              DFPSystems
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-zinc-300 sm:items-end">
          <div className="flex flex-wrap items-center gap-5">
            <a href={telLink} className="inline-flex items-center gap-2 hover:text-emerald-400">
              <Phone size={16} /> {contact.phoneDisplay}
            </a>
            {contact.email && (
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-emerald-400">
                <Mail size={16} /> {contact.email}
              </a>
            )}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="footer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 px-4 py-2 font-semibold text-emerald-300 hover:bg-emerald-500/10"
            >
              <SocialIcon name="WhatsApp" size={16} /> WhatsApp
            </a>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Ajith Reddy on social media">
            {socials.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`Ajith Reddy on ${label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-zinc-700 text-zinc-300 transition hover:border-emerald-500 hover:bg-emerald-500 hover:text-zinc-950"
                >
                  <SocialIcon name={label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-zinc-600">© {new Date().getFullYear()} {contact.name}</p>
    </footer>
  )
}
