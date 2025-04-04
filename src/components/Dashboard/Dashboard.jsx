import "./Dashboard.css"

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-image">
          <div className="dashboard-logo">
            <span className="dashboard-logo-icon">◉</span>
            <span className="dashboard-logo-text">Index</span>
          </div>
          <div className="dashboard-mockup">
            <div className="dashboard-header">
              <div className="dashboard-search"></div>
              <div className="dashboard-controls">
                <div className="dashboard-dot"></div>
                <div className="dashboard-dot"></div>
                <div className="dashboard-line"></div>
              </div>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-sidebar">
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
              </div>
              <div className="dashboard-main">
                <div className="dashboard-card"></div>
                <div className="dashboard-card"></div>
                <div className="dashboard-card"></div>
                <div className="dashboard-row"></div>
                <div className="dashboard-row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard

