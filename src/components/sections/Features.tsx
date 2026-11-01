import { Search, Languages, Gauge, AlertCircle, Wand2, Eye, Code, Rocket } from 'lucide-react'
import './Features.css'

export const Features = () => {
  const features = [
    {
      icon: <Search />,
      title: 'AI SEO Optimizer',
      description: 'Automatically optimize your website for search engines with AI-powered recommendations',
      color: '#6366f1'
    },
    {
      icon: <Languages />,
      title: 'Website Translator',
      description: 'Translate your entire website into 50+ languages instantly with AI and smart automation tools.',
      color: '#8b5cf6'
    },
    {
      icon: <Gauge />,
      title: 'Performance Optimizer',
      description: 'Boost website speed and Core Web Vitals automatically with AI optimization tools.',
      color: '#06b6d4'
    },
    {
      icon: <AlertCircle />,
      title: 'Error Detection',
      description: 'Scan and automatically fix broken links, missing images, and layout errors across your website.',
      color: '#ef4444'
    },
    {
      icon: <Wand2 />,
      title: 'AI-Driven Development',
      description: 'Describe your idea, and our AI will understand the context to create a complete application instantly.',
      color: '#6c5ce7'
    },
    {
      icon: <Eye />,
      title: 'Live Preview',
      description: 'Watch your project come to life in real time as AI builds it - no waiting, no refreshing.',
      color: '#00cec9'
    },
    {
      icon: <Code />,
      title: 'Integrated Code Editor',
      description: 'A powerful Monaco editor with syntax highlighting, file explorer, and intelligent code completion.',
      color: '#10b981'
    },
    {
      icon: <Rocket />,
      title: 'Build & Launch',
      description: 'Host your app on our platform or export the code to deploy it anywhere you like.',
      color: '#f59e0b'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2>AI-Powered Features</h2>
          <p className="features-subtitle">
            Advanced tools to build, optimize, and scale your website
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon" style={{ backgroundColor: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
