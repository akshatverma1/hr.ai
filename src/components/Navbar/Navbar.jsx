"use client"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          {/* <button className="sidebar-toggle" onClick={toggleSidebar}>
            <span className="toggle-icon">☰</span>
          </button> */}

          <div className="navbar-logo">
            <span className="logo-icon">◉</span>
            <span className="logo-text">aHRi</span>
          </div>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="navbar-item dropdown">
            <a href="#">
              All Pages <span className="dropdown-icon">▾</span>
            </a>
          </li> */}
          <li className="navbar-item">
            <a href="/resume-automation">Resume Shortlisted</a>
          </li>
          <li className="navbar-item">
            <a href="/hr-ai-agent">Ai Agent</a>
          </li>
          {/* <li className="navbar-item">
            <a href="/excel-automation">Excel Automation</a>
          </li> */}
          <li className="navbar-item">
            <a href="/user-panel">User Details</a>
          </li>
        </ul>

        <div className="navbar-right">
          <div className="navbar-search">
            <input type="text" placeholder="Search..." />
            <button className="search-button">🔍</button>
          </div>

          <div className="navbar-actions">
            <button className="notification-button">🔔</button>
            <button className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

