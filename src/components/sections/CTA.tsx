import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './CTA.css'

export const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to transform your operations?</h2>
          <p className="cta-subtitle">
            See how our platform can streamline your workflows and save you hours every week.
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
