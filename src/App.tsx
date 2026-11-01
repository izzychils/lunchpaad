import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { Stats } from './components/sections/Stats'
import { Features } from './components/sections/Features'
import { HowItWorks } from './components/sections/HowItWorks'
import { Pricing } from './components/sections/Pricing'
import { WebsiteTypes } from './components/sections/WebsiteTypes'
import { CTA } from './components/sections/CTA'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/layout/ScrollToTop'
import {
  AboutUs,
  Contact,
  PrivacyPolicy,
  RequestDemo,
  TermsAndConditions,
  TermsOfUse
} from './components/pages'

function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Pricing />
      <WebsiteTypes />
      <CTA />
    </main>
  )
}

/**
 * The shared site furniture.
 */
function SiteChrome() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Request a Demo screens render without the header and footer */}
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/demo" element={<RequestDemo />} />
        <Route path="/login" element={<RequestDemo />} />
        <Route path="/signup" element={<RequestDemo />} />

        <Route element={<SiteChrome />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
