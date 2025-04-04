"use client"

import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./pages/Home/Home"
import HrAiAgent from "./pages/HrAiAgent/HrAiAgent"
import UserPanel from "./pages/UserPanel/UserPanel"
import ExcelAutomation from "./pages/ExcelAutomation/ExcelAutomation"
import ResumeShortlisted from "./pages/ResumeShortlisted/ResumeShortlisted"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import "./App.css"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      {isAuthenticated ? (
        <>
          <Navbar toggleSidebar={toggleSidebar} onLogout={handleLogout} />
          <div className="app-container">
            <Sidebar isOpen={sidebarOpen} />
            <main className={`main-content ${sidebarOpen ? "sidebar-open" : ""}`}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hr-ai-agent" element={<HrAiAgent />} />
                <Route path="/user-panel" element={<UserPanel />} />
                <Route path="/excel-automation" element={<ExcelAutomation />} />
                <Route path="/resume-shortlisted" element={<ResumeShortlisted />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </div>
  )
}

export default App

