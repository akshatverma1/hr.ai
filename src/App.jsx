"use client"

import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import HrAiAgent from "./pages/HrAiAgent/HrAiAgent"
import UserPanel from "./pages/UserPanel/UserPanel"
import ExcelAutomation from "./pages/ExcelAutomation/ExcelAutomation"
import ResumeShortlisted from "./pages/ResumeShortlisted/ResumeShortlisted"
import Aichat from "./pages/Aichatbot/Aibot"
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
     
        <>
          <Navbar toggleSidebar={toggleSidebar} onLogout={handleLogout} />
          <div className="app-container">
            {/* <Sidebar isOpen={sidebarOpen} />   */}
            <main >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hr-ai-agent" element={<HrAiAgent />} />
                <Route path="/user-panel" element={<UserPanel />} />
                {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
                <Route path="/excel-automation" element={<ExcelAutomation />} />
                <Route path="/resume-shortlisted" element={<ResumeShortlisted />} />
                <Route path="/user-panel" element={<UserPanel />} />
                <Route path="/hr-ai-agent" element={<HrAiAgent />} />
                <Route path="/aichat" element={<Aichat />} />
              </Routes>
            </main>
          </div>
        </>
    </div>
  )
}

export default App

