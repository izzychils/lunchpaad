import { Workflow } from 'lucide-react'
import './HowItWorks.css'

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Describe Your Vision',
      description:
        'Say what the business does, who it is for and which pages you need. Pick a site type, or start from an empty prompt and write it yourself.'
    },
    {
      number: '02',
      title: 'AI Builds It',
      description:
        'Layout, copy, components and a working preview appear while you watch. Swap sections, rewrite a line, or regenerate one block without starting over.'
    },
    {
      number: '03',
      title: 'Optimize & Launch',
      description:
        'Run the SEO and performance checks, translate the copy if you need a second language, then publish to a Lunchpaad URL or your own domain.'
    }
  ]

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-it-works-header">
          <span className="section-eyebrow">
            <Workflow size={14} />
            Workflow
          </span>
          <h2>How It Works</h2>
          <p className="how-it-works-subtitle">
            Three steps from a sentence to a live website. No setup wizard, no plugin
            shopping, no developer on call.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
