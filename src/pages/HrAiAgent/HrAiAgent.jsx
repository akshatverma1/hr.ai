"use client"

import { useState } from "react"
import "./HrAiAgent.css"

const HrAiAgent = () => {
  const [query, setQuery] = useState("")
  const [messages, setMessages] = useState([
    { role: "system", content: "Hello! I am your HR AI Assistant. How can I help you today?" },
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return

    // Add user message
    const newMessages = [...messages, { role: "user", content: query }]
    setMessages(newMessages)
    setQuery("")

    // Simulate AI response
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          role: "system",
          content: `I've processed your request: "${query}". As an HR AI Agent, I can help with candidate screening, interview scheduling, and employee onboarding processes.`,
        },
      ])
    }, 1000)
  }

  return (
    <div className="hr-ai-agent">
      <div className="page-header">
        <h1>HR AI Agent</h1>
        <p>Your intelligent assistant for HR tasks and candidate management</p>
      </div>

      <div className="agent-container">
        <div className="agent-sidebar">
          <div className="agent-features">
            <h3>Features</h3>
            <ul>
              <li>
                <span className="feature-icon">📋</span>
                <span>Resume Analysis</span>
              </li>
              <li>
                <span className="feature-icon">🗓️</span>
                <span>Interview Scheduling</span>
              </li>
              <li>
                <span className="feature-icon">📊</span>
                <span>Candidate Scoring</span>
              </li>
              <li>
                <span className="feature-icon">📝</span>
                <span>Automated Feedback</span>
              </li>
              <li>
                <span className="feature-icon">🤖</span>
                <span>AI-Powered Screening</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="agent-chat">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.role === "user" ? "user-message" : "system-message"}`}>
                <div className="message-avatar">{message.role === "user" ? "👤" : "🤖"}</div>
                <div className="message-content">{message.content}</div>
              </div>
            ))}
          </div>

          <form className="chat-input" onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask your HR AI assistant..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HrAiAgent

