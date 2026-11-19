import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import './FAQ.css'

export const FAQ_ITEMS = [
  {
    q: 'What exactly is Lunchpaad?',
    a: 'Lunchpaad is an AI website builder. You describe the site you need in plain English - what the business does, who it is for, what pages it needs - and it generates a working website with layout, copy and components. You then edit it, optimise it and publish it.'
  },
  {
    q: 'Do I need to know how to code?',
    a: 'No. The prompt is the interface. If you want to go deeper, there is an integrated code editor with syntax highlighting and file navigation, but nothing in the normal flow requires touching it.'
  },
  {
    q: 'How does the AI know what my business looks like?',
    a: 'It builds from what you tell it plus the site type you choose. Everything it writes is a draft you can rewrite - the system is designed to get you to a complete, coherent page quickly, not to invent facts about your company.'
  },
  {
    q: 'Can I edit the site after it is generated?',
    a: 'Yes, that is the point. Change sections, swap copy, adjust colours and reorder blocks in the studio, with a live preview updating as you go. Nothing is locked once it is generated.'
  },
  {
    q: 'Does it handle SEO?',
    a: 'Every project ships with the basics done: a unique page title and description, semantic headings, a sitemap, a robots file and optimised images. The SEO optimizer then suggests improvements for the phrases you care about.'
  },
  {
    q: 'Can I translate the site?',
    a: 'Yes. The translator produces a version of the site in 50+ languages, keeping the layout intact. You review the copy before publishing a language.'
  },
  {
    q: 'Where does my site live?',
    a: 'Publish it to a Lunchpaad URL, connect a custom domain, or export the generated code and host it anywhere. You are not locked into the platform.'
  },
  {
    q: 'What can I build with the API access on Enterprise?',
    a: 'Programmatic site creation and content updates: useful for agencies producing many sites, or for teams that want to trigger a build from their own tools.'
  },
  {
    q: 'What happens on the free plan?',
    a: 'One website, the basic AI builder, standard templates and community support. It is enough to see whether the workflow fits before paying for anything.'
  }
]

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-intro">
            <span className="section-eyebrow">
              <HelpCircle size={14} />
              Questions
            </span>
            <h2>Everything you might be wondering</h2>
            <p>
              Nine honest answers about how the builder works, what it does well and where the
              limits are. If yours is not here, ask on the demo call.
            </p>
            <Link to="/contact" className="faq-contact-link">
              Ask us directly
            </Link>
          </div>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = open === index
              return (
                <div key={index} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={18} className="faq-chevron" />
                  </button>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
