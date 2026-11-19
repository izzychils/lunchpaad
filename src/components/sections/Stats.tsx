import './Stats.css'

export const Stats = () => {
  const stats = [
    {
      number: '2K+',
      label: 'Websites Created',
      hint: 'Portfolios, stores and launch pages built from a prompt.'
    },
    {
      number: '50+',
      label: 'Happy Users',
      hint: 'Freelancers, small businesses and product teams.'
    },
    {
      number: '99.9%',
      label: 'Uptime',
      hint: 'Published sites stay reachable, including launch days.'
    },
    {
      number: '24/7',
      label: 'AI Support',
      hint: 'The assistant answers questions at 2am too.'
    }
  ]

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-hint">{stat.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
