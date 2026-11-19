import {
  Briefcase,
  ShoppingCart,
  BookOpen,
  Building2,
  FileText,
  Camera,
  UtensilsCrossed,
  GraduationCap,
  Heart,
  Calendar,
  LayoutDashboard,
  Globe,
  LayoutTemplate
} from 'lucide-react'
import './WebsiteTypes.css'

export const WebsiteTypes = () => {
  const types = [
    {
      icon: <Briefcase />,
      name: 'Portfolio',
      desc: 'Project gallery, case studies, an about page and a contact route.'
    },
    { icon: <ShoppingCart />, name: 'E-commerce', desc: 'Product grid, variants, cart and a checkout flow.' },
    { icon: <BookOpen />, name: 'Blog', desc: 'Article list, reading pages and category filtering.' },
    { icon: <Building2 />, name: 'Business', desc: 'Services, hours, location and an enquiry form.' },
    { icon: <FileText />, name: 'Landing Page', desc: 'Hero, proof, pricing and one clear call to action.' },
    { icon: <Camera />, name: 'Photography', desc: 'Full-bleed galleries that stay fast on mobile data.' },
    { icon: <UtensilsCrossed />, name: 'Restaurant', desc: 'Menu, opening hours, reservations and directions.' },
    { icon: <GraduationCap />, name: 'Education', desc: 'Courses, schedules, enrolment and a staff directory.' },
    { icon: <Heart />, name: 'Non-profit', desc: 'Mission, programmes, donations and impact stories.' },
    { icon: <Calendar />, name: 'Event', desc: 'Agenda, speakers, venue details and ticket links.' },
    { icon: <LayoutDashboard />, name: 'Dashboard', desc: 'Data views, charts and account screens in one shell.' },
    { icon: <Globe />, name: 'Web App', desc: 'Authenticated flows with forms, tables and state.' }
  ]

  return (
    <section className="website-types" id="templates">
      <div className="container">
        <div className="website-types-header">
          <span className="section-eyebrow">
            <LayoutTemplate size={14} />
            Templates
          </span>
          <h2>Choose your website type</h2>
          <p className="website-types-subtitle">
            Each type carries its own page structure and components, so the first draft
            already knows what a restaurant needs and what a dashboard needs. Start from one,
            or describe something entirely your own.
          </p>
        </div>

        <div className="types-grid">
          {types.map((type, index) => (
            <div key={index} className="type-card">
              <div className="type-icon">{type.icon}</div>
              <div className="type-name">{type.name}</div>
              <p className="type-desc">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
