"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Signup.css"

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Handle signup logic here
    console.log("Form submitted:", formData)

    // Redirect to login page
    window.location.href = "/login"
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-left">
          <div className="signup-header">
            <div className="logo">
              <span className="logo-icon">◉</span>
              <span className="logo-text">Index</span>
            </div>
            <h1>Create an Account</h1>
            <p>Join our platform and start using AI to enhance your product</p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.fullName && <div className="error-text">{errors.fullName}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <div className="error-text">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
              />
              {errors.password && <div className="error-text">{errors.password}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <div className="error-text">{errors.confirmPassword}</div>}
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
                <span>
                  I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </span>
              </label>
              {errors.agreeTerms && <div className="error-text">{errors.agreeTerms}</div>}
            </div>

            <button type="submit" className="signup-button">
              Create Account
            </button>

            <div className="signup-footer">
              <p>
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          </form>
        </div>

        <div className="signup-right">
          <div className="signup-showcase">
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

export default Signup

