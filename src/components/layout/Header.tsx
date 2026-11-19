import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import './Header.css'

const NAV_ITEMS = [
  { label: 'Features', to: '/#features' },
  { label: 'Use cases', to: '/#use-cases' },
  { label: 'How it works', to: '/#how-it-works' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'FAQ', to: '/#faq' }
]

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src="/logo.jpg" alt="Lunchpaad logo" className="header-logo-img" />
              <h1>Lunchpaad</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {NAV_ITEMS.map((item) => (
              <Link key={item.to} to={item.to} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="header-cta-desktop">
            <Link to="/request-demo" className="btn-primary">Request a Demo</Link>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className="mobile-menu-dropdown">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="mobile-menu-btn-glass" aria-label="Toggle menu">
                  <Menu size={24} />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="mobile-menu-dropdown-content"
                align="end"
                sideOffset={8}
              >
                {NAV_ITEMS.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} className="dropdown-nav-link">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <div className="dropdown-cta-buttons">
                  <Link to="/request-demo" className="btn-primary-dropdown">Request a Demo</Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
