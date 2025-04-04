"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Login.css"

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    // Simple validation
    if (email === "admin@example.com" && password === "password") {
      onLogin()
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-header">
            <div className="logo">
              <span className="logo-icon">◉</span>
              <span className="logo-text">Index</span>
            </div>
            <h1>Welcome Back</h1>
            <p>Log in to your account to continue</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="login-button">
              Log In
            </button>

            <div className="login-footer">
              <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </form>
        </div>

        <div className="login-right">
          <div className="login-showcase">
            <h2>AI SaaS Platform</h2>
            <p>
              Enhance your product with advanced artificial intelligence, streamlining operations and driving
              efficiency.
            </p>
            <div className="showcase-features">
              <div className="feature-item">
                <div className="feature-icon">🤖</div>
                <div className="feature-text">AI-Powered Automation</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div className="feature-text">Advanced Analytics</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <div className="feature-text">Enterprise Security</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

