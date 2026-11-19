import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Lock,
  Mail,
  PenLine,
  Phone,
  Sparkles,
  User
} from 'lucide-react'
import './Auth.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type DemoErrors = {
  name?: string
  email?: string
  phone?: string
}

const HIGHLIGHTS = [
  'A live walkthrough of the AI builder, on your own idea.',
  'The right plan for a single site, a team or an agency.',
  'A published draft you keep, whether you upgrade or not.'
]

const NEXT_STEPS = [
  { text: 'We read your note and match it to the right demo.' },
  { text: 'You get a 30-minute walkthrough, screen shared.' },
  { text: 'You leave with a draft site and a link to edit it.' }
]

export const RequestDemo = () => {
  const [fullName, setFullName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [errors, setErrors] = useState<DemoErrors>({})
  const [submitted, setSubmitted] = useState(false)

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

    if (Object.keys(next).length > 0) return

    setSubmitted(true)
  }

  return (
    <div className="auth-page demo-page">
      <div className="auth-shell">
        <aside className="auth-aside">
          <span className="auth-pill">
            <Sparkles size={12} />
            Request a demo
          </span>
          <h2>
            See your next site
            <br />
            <span className="gradient-text">before you build it.</span>
          </h2>
          <p>
            Thirty minutes, screen shared. Bring the business you want to put online and leave with
            a draft page you can keep editing yourself.
          </p>

          {/* A wireframe of a generated page: enough to show what the demo puts
              on screen without pretending to be a screenshot. */}
          <div className="auth-preview" aria-hidden>
            <div className="auth-preview-bar">
              <span />
              <span />
              <span />
              <em>lunchpaad.com/preview</em>
            </div>
            <div className="auth-preview-body">
              <span className="auth-preview-line is-title" />
              <span className="auth-preview-line is-body" />
              <span className="auth-preview-line is-short" />
              <div className="auth-preview-blocks">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <ul className="auth-points">
            {HIGHLIGHTS.map((point) => (
              <li key={point}>
                <CheckCircle2 className="auth-tick" size={18} />
                {point}
              </li>
            ))}
          </ul>

          <div className="auth-stats">
            <div>
              <strong>24h</strong>
              <span>reply time</span>
            </div>
            <div>
              <strong>30min</strong>
              <span>walkthrough</span>
            </div>
            <div>
              <strong>0</strong>
              <span>card needed</span>
            </div>
          </div>

          <p className="auth-trust">
            <Lock size={14} />
            Your details are encrypted and strictly confidential.
          </p>
        </aside>

        <main className="auth-card">
          <div className="auth-brand">
            <Link to="/" className="auth-brand-link">
              <img src="/logo.jpg" alt="" className="auth-brand-logo" />
              <span className="auth-brand-name">Lunchpaad</span>
            </Link>
            <Link to="/" className="auth-back">
              Back to home
            </Link>
          </div>

          <div className="auth-heading">
            <span className="demo-badge">Request a demo</span>
            <h1>
              Let&apos;s build your <span className="gradient-text">first site</span> together
            </h1>
            <p className="auth-lede">
              Three details is all we need. We reply within 24 hours with a time that suits you.
            </p>
          </div>

          {submitted ? (
            <div className="demo-success" role="status">
              <span className="demo-success-ring">
                <CheckCircle2 size={38} />
              </span>
              <h3>Request received</h3>
              <p>
                Thanks, <strong>{fullName.split(' ')[0]}</strong>. We&apos;ll reply to{' '}
                <strong>{workEmail}</strong> within 24 hours.
              </p>

              <ol className="demo-success-steps">
                {NEXT_STEPS.map((step, index) => (
                  <li key={step.text}>
                    <span className="demo-success-step-number">{index + 1}</span>
                    {step.text}
                  </li>
                ))}
              </ol>

              <div className="demo-success-actions">
                <Link to="/" className="auth-submit demo-home-btn">
                  Back to homepage
                </Link>
                <Link to="/#use-cases" className="demo-ghost-btn">
                  See what people build
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* The desktop aside carries these promises; on a phone it is
                  hidden, so the two that matter most stay here. */}
              <ul className="demo-mobile-points">
                {HIGHLIGHTS.slice(0, 2).map((point) => (
                  <li key={point}>
                    <Check size={14} />
                    {point}
                  </li>
                ))}
              </ul>

              <form className="auth-form" onSubmit={handleSubmit} noValidate>
                <div className="auth-field">
                  <label className="auth-label" htmlFor="demo-name">
                    Full name
                    <span className="auth-required" aria-hidden>
                      *
                    </span>
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
                      aria-describedby={errors.name ? 'demo-name-error' : undefined}
                      required
                    />
                  </div>
                  {errors.name && (
                    <p className="auth-error" id="demo-name-error">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="auth-field">
                  <label className="auth-label" htmlFor="demo-email">
                    Work email
                    <span className="auth-required" aria-hidden>
                      *
                    </span>
                  </label>
                  <div className={errors.email ? 'auth-control is-invalid' : 'auth-control'}>
                    <Mail size={16} />
                    <input
                      id="demo-email"
                      type="email"
                      value={workEmail}
                      onChange={(event) => setWorkEmail(event.target.value)}
                      placeholder="john@company.com"
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'demo-email-error' : undefined}
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="auth-error" id="demo-email-error">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="auth-field">
                  <label className="auth-label" htmlFor="demo-phone">
                    Phone number
                    <span className="auth-hint">WhatsApp preferred</span>
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
                      aria-describedby={errors.phone ? 'demo-phone-error' : undefined}
                      required
                    />
                  </div>
                  {errors.phone && (
                    <p className="auth-error" id="demo-phone-error">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <button type="submit" className="auth-submit">
                  Request my demo
                  <ArrowRight size={18} />
                </button>

                <p className="demo-form-note">
                  <PenLine size={14} />
                  No credit card, no sales sequence. One reply from a person.
                </p>
              </form>
            </>
          )}

          <p className="auth-legal">
            By requesting a demo you agree to our{' '}
            <Link to="/privacy-policy">privacy policy</Link> and{' '}
            <Link to="/terms-of-use">terms of use</Link>.
          </p>
        </main>
      </div>
    </div>
  )
}
