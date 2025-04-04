import "./Stats.css"

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-grid">
          <div className="stats-notification">
            <div className="notification-icon">
              <span className="check-icon">✓</span>
            </div>
            <div className="notification-content">
              <div className="notification-title">Subscription Successful</div>
              <div className="notification-time">Today, 09:24</div>
            </div>
          </div>

          <div className="stats-chart">
            <div className="chart-bars">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="chart-bar" style={{ height: `${Math.random() * 70 + 30}%` }}></div>
              ))}
            </div>
          </div>

          <div className="stats-percentage">
            <h2 className="percentage-value">90%</h2>
            <div className="stats-info">
              <h3 className="stats-title">Cost-effectiveness</h3>
              <p className="stats-description">
                Reduce upfront costs with a subscription-based model and avoid expenses associated with hardware
                maintenance.
              </p>
            </div>
          </div>

          <div className="stats-users">
            <div className="users-avatars">
              <div className="user-avatar" style={{ backgroundColor: "#FF9800" }}></div>
              <div className="user-avatar" style={{ backgroundColor: "#2196F3" }}></div>
              <div className="user-avatar" style={{ backgroundColor: "#4CAF50" }}></div>
              <div className="user-avatar" style={{ backgroundColor: "#9C27B0" }}></div>
            </div>
            <p className="users-description">Our users span across the different continents of the world.</p>
          </div>

          <div className="stats-analytics">
            <h3 className="analytics-title">Analytics and Insights</h3>
            <p className="analytics-description">
              Gain valuable insights through built-in analytics tools, allowing for data-driven decision-making and
              optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats

