import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Lock, Mail, Phone, User } from 'lucide-react'
import './Auth.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type DemoErrors = {
  name?: string
  email?: string
  phone?: string
}

export const RequestDemo = () => {
  const [fullName, setFullName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [errors, setErrors] = useState<DemoErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [note, setNote] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const next: DemoErrors = {}
    if (!fullName.trim()) {
      next.name = 'Please enter your full name.'
    }
    if (!workEmail.trim()) {
      next.email = 'Please enter your work email.'
    } else if (!EMAIL_PATTERN.test(workEmail.trim())) {
      next.email = 'That email address does not look right.'
    }
    if (!phoneNumber.trim()) {
      next.phone = 'Please enter your phone number.'
    } else if (phoneNumber.trim().length < 7) {
      next.phone = 'Please enter a valid phone number.'
    }

    setErrors(next)

    if (Object.keys(next).length > 0) {
      setNote(null)
      return
    }

    setSubmitted(true)
    setNote(null)
  }

  return (
    <div className="auth-page demo-page">
      <div className="auth-shell">
        <aside className="auth-aside">
          <span className="auth-pill">Request a Demo</span>
          <h2>
            Ready to transform your <span className="gradient-text">school operations?</span>
          </h2>
          <p>
            Fill out the form below and we'll help you find the right solution for your school. Our
            team will get back to you within 24 hours.
          </p>
          <ul className="auth-points">
            <li>
              <CheckCircle2 className="auth-tick" size={18} />
              Personalized walkthrough tailored to your school's needs.
            </li>
            <li>
              <CheckCircle2 className="auth-tick" size={18} />
              Custom plan and onboarding support for your institution.
            </li>
            <li>
              <CheckCircle2 className="auth-tick" size={18} />
              Dedicated 24-hour turnaround on all questions.
            </li>
          </ul>
          <p className="auth-trust">
            <Lock size={14} />
            Your details are encrypted and strictly confidential.
          </p>
        </aside>

        <main className="auth-card">
          <div className="auth-brand">
            <Link to="/" className="auth-brand-link">
              <img src="/logo.jpg" alt="" className="auth-brand-logo" />
              <span className="auth-brand-name">lunchpadd</span>
            </Link>
            <Link to="/" className="auth-back">
              Back to home
            </Link>
          </div>

          <span className="demo-badge">Request a Demo</span>
          <h1>
            Ready to transform your <span className="gradient-text">school operations?</span>
          </h1>
          <p className="auth-lede">
            Fill out the form below and we'll help you find the right solution for your school. Our
            team will get back to you within 24 hours.
          </p>

          {submitted ? (
            <div className="demo-success">
              <CheckCircle2 className="demo-success-icon" size={48} />
              <h3>Demo Request Received!</h3>
              <p>
                Thank you, <strong>{fullName}</strong>. We've received your request and our team
                will get back to you at <strong>{workEmail}</strong> within 24 hours.
              </p>
              <Link to="/" className="auth-submit demo-home-btn">
                Return to Homepage
              </Link>
            </div>
          ) : (
            <form className="auth-form" onSubmit={handleSubmit} noValidate>
              <div className="demo-section-header">
                <h3>Personal Details</h3>
              </div>

              <div className="auth-field">
                <label className="auth-label" htmlFor="demo-name">
                  Full Name
                </label>
                <div className={errors.name ? 'auth-control is-invalid' : 'auth-control'}>
                  <User size={16} />
                  <input
                    id="demo-name"
                    type="text"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    placeholder="John Doe"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                  />
                </div>
                {errors.name && <p className="auth-error">{errors.name}</p>}
              </div>

              <div className="auth-field">
                <label className="auth-label" htmlFor="demo-email">
                  Work Email
                </label>
                <div className={errors.email ? 'auth-control is-invalid' : 'auth-control'}>
                  <Mail size={16} />
                  <input
                    id="demo-email"
                    type="email"
                    value={workEmail}
                    onChange={(event) => setWorkEmail(event.target.value)}
                    placeholder="john@school.com"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                  />
                </div>
                {errors.email && <p className="auth-error">{errors.email}</p>}
              </div>

              <div className="auth-field">
                <label className="auth-label" htmlFor="demo-phone">
                  Phone Number (WhatsApp preferred)
                </label>
                <div className={errors.phone ? 'auth-control is-invalid' : 'auth-control'}>
                  <Phone size={16} />
                  <input
                    id="demo-phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    placeholder="+1 (555) 000-0000"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                  />
                </div>
                {errors.phone && <p className="auth-error">{errors.phone}</p>}
              </div>

              <button type="submit" className="auth-submit">
                Request a Demo
                <ArrowRight size={18} />
              </button>

              {note && (
                <p className="auth-note" role="status">
                  {note}
                </p>
              )}
            </form>
          )}
        </main>
      </div>
    </div>
  )
}
