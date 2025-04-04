"use client"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = ({ toggleSidebar, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <span className="toggle-icon">☰</span>
          </button>

          <div className="navbar-logo">
            <span className="logo-icon">◉</span>
            <span className="logo-text">Index</span>
          </div>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item dropdown">
            <a href="#">
              All Pages <span className="dropdown-icon">▾</span>
            </a>
          </li>
          <li className="navbar-item">
            <a href="/pricing">Pricing</a>
          </li>
          <li className="navbar-item">
            <a href="/blog">Blog</a>
          </li>
          <li className="navbar-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <div className="navbar-right">
          <div className="navbar-search">
            <input type="text" placeholder="Search..." />
            <button className="search-button">🔍</button>
          </div>

          <div className="navbar-actions">
            <button className="notification-button">🔔</button>
            <button className="logout-button" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

