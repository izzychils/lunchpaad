import { ArrowRight, Check, ShoppingBag, Sparkles, User, Rocket, Building2, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import './UseCases.css'

const USE_CASES = [
  {
    icon: <User />,
    label: 'Freelancers & creatives',
    title: 'A portfolio that looks hired, not homemade',
    copy: 'Describe your work and the AI lays out a project gallery, an about section and a contact route — the three things a client actually looks for.',
    points: ['Case-study layout with image gallery', 'Contact section with working enquiry form', 'Copy in your own voice, not filler'],
    color: '#6366f1'
  },
  {
    icon: <Building2 />,
    label: 'Small businesses',
    title: 'A website that answers the phone for you',
    copy: 'Opening hours, services, location and prices on one page, so the same five questions stop arriving on WhatsApp every morning.',
    points: ['Services and price list', 'Map, hours and directions', 'Enquiry form that reaches your inbox'],
    color: '#00cec9'
  },
  {
    icon: <ShoppingBag />,
    label: 'Online sellers',
    title: 'A storefront without a storefront budget',
    copy: 'A product catalogue with cart and checkout, built from a description of what you sell — then optimised before it goes live.',
    points: ['Product grid with variants', 'Cart and checkout flow', 'Order confirmation emails'],
    color: '#a78bfa'
  },
  {
    icon: <Rocket />,
    label: 'Product launches',
    title: 'A launch page ready for traffic',
    copy: 'Hero, feature breakdown, pricing, FAQ and a waitlist capture form — the whole shape of a launch page, generated and then editable.',
    points: ['Pricing table with plan toggle', 'FAQ with structured data', 'Waitlist form and thank-you state'],
    color: '#f59e0b'
  }
]

const COMPARISON = [
  {
    task: 'Design and layout',
    lunchpaad: 'Generated from your description, editable in the studio',
    builder: 'Template you drag blocks into',
    agency: '2–4 weeks with a designer'
  },
  {
    task: 'Writing the copy',
    lunchpaad: 'Drafted for your business, then rewritten by you',
    builder: 'You write it, or paste lorem ipsum',
    agency: 'Separate copywriter quote'
  },
  {
    task: 'Building the pages',
    lunchpaad: 'Live preview while it builds',
    builder: 'Manual, block by block',
    agency: 'Developer time, billed hourly'
  },
  {
    task: 'SEO and speed',
    lunchpaad: 'Built in: meta tags, sitemap, Core Web Vitals pass',
    builder: 'Add-on or plugin',
    agency: 'Another invoice'
  },
  {
    task: 'Publishing',
    lunchpaad: 'Publish to a URL or export the code',
    builder: 'Locked to the platform',
    agency: 'Handover and hosting setup'
  }
]

export const UseCases = () => {
  return (
    <section className="use-cases" id="use-cases">
      <div className="container">
        <div className="use-cases-header">
          <span className="section-eyebrow">
            <Sparkles size={14} />
            What people build
          </span>
          <h2>One prompt, four very different sites</h2>
          <p className="use-cases-subtitle">
            Lunchpaad is not a single template with your logo dropped in. It reads what you
            sell, who you sell it to and what the page has to do — then builds that page.
          </p>
        </div>

        <div className="use-cases-grid">
          {USE_CASES.map((item, index) => (
            <article key={index} className="use-case-card">
              <div className="use-case-top">
                <span className="use-case-icon" style={{ backgroundColor: item.color }}>
                  {item.icon}
                </span>
                <span className="use-case-label">{item.label}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="use-case-copy">{item.copy}</p>
              <ul className="use-case-points">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <Check size={16} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="comparison">
          <div className="comparison-head">
            <div>
              <span className="section-eyebrow">
                <Code2 size={14} />
                How it compares
              </span>
              <h3>The same job, three ways</h3>
            </div>
            <p>
              Most people arrive with a deadline and no designer. This is where a prompt-led
              builder saves the most time — and where it honestly does not.
            </p>
          </div>

          <div className="comparison-scroll">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th className="comparison-highlight">Lunchpaad</th>
                  <th>Template builder</th>
                  <th>Agency</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, index) => (
                  <tr key={index}>
                    <td className="comparison-task">{row.task}</td>
                    <td className="comparison-highlight">{row.lunchpaad}</td>
                    <td>{row.builder}</td>
                    <td>{row.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="comparison-foot">
            <p>
              Best fit: a site you need this week, that you can keep editing yourself. If you
              need custom integrations or a bespoke brand identity, an agency is still the
              right call — Lunchpaad just gets you to launch faster.
            </p>
            <Link to="/request-demo" className="use-cases-link">
              See a live build
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
