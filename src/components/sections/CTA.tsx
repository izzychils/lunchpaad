import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './CTA.css'

export const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to build your dream website?</h2>
          <p className="cta-subtitle">
            See how our AI-powered website builder turns your ideas into a stunning, live site in seconds.
          </p>
          <Link to="/request-demo" className="cta-button">
            Request a Demo
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
