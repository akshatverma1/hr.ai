import "./Scalability.css"

const Scalability = () => {
  return (
    <section className="scalability">
      <div className="scalability-container">
        <div className="scalability-grid">
          <div className="scalability-content">
            <div className="scalability-badge">Scalability</div>
            <h2 className="scalability-title">Build Scalable product with the help of our AI</h2>
            <p className="scalability-description">
              Easily scale your resources up or down based on business needs without hardware limitations.
            </p>
          </div>

          <div className="scalability-video">
            <div className="video-overlay">
              <div className="play-button">
                <span className="play-icon">▶</span>
              </div>
            </div>
            <div className="video-placeholder">
              <img src="/placeholder.svg?height=400&width=500" alt="Person working on laptop" className="video-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Scalability

