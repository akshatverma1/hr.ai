"use client"

import { useState } from "react"
import "./ResumeShortlisted.css"

const ResumeShortlisted = () => {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedResume, setSelectedResume] = useState(null)

  const resumes = [
    {
      id: 1,
      name: "John Smith",
      position: "Frontend Developer",
      experience: "5 years",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      education: "Bachelor in Computer Science",
      status: "shortlisted",
      matchScore: 92,
      appliedDate: "2023-06-15",
    },
    {
      id: 2,
      name: "Emily Johnson",
      position: "UX Designer",
      experience: "3 years",
      skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
      education: "Master in Design",
      status: "shortlisted",
      matchScore: 88,
      appliedDate: "2023-06-18",
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Backend Developer",
      experience: "7 years",
      skills: ["Node.js", "Express", "MongoDB", "AWS"],
      education: "Bachelor in Software Engineering",
      status: "rejected",
      matchScore: 65,
      appliedDate: "2023-06-10",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      position: "Product Manager",
      experience: "4 years",
      skills: ["Agile", "Scrum", "Product Strategy", "User Research"],
      education: "MBA",
      status: "pending",
      matchScore: 78,
      appliedDate: "2023-06-20",
    },
    {
      id: 5,
      name: "David Lee",
      position: "Full Stack Developer",
      experience: "6 years",
      skills: ["React", "Node.js", "Python", "PostgreSQL"],
      education: "Master in Computer Science",
      status: "shortlisted",
      matchScore: 95,
      appliedDate: "2023-06-12",
    },
  ]

  const filteredResumes = resumes.filter((resume) => {
    // Filter by status
    if (filter !== "all" && resume.status !== filter) {
      return false
    }

    // Filter by search term
    if (
      searchTerm &&
      !resume.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !resume.position.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    return true
  })

  const handleResumeClick = (resume) => {
    setSelectedResume(resume)
  }

  return (
    <div className="resume-shortlisted">
      <div className="page-header">
        <h1>Resume Shortlisted</h1>
        <p>View and manage candidate resumes</p>
      </div>

      <div className="resume-container">
        <div className="resume-filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by name or position..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-buttons">
            <button className={`filter-button ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
              All
            </button>
            <button
              className={`filter-button ${filter === "shortlisted" ? "active" : ""}`}
              onClick={() => setFilter("shortlisted")}
            >
              Shortlisted
            </button>
            <button
              className={`filter-button ${filter === "pending" ? "active" : ""}`}
              onClick={() => setFilter("pending")}
            >
              Pending
            </button>
            <button
              className={`filter-button ${filter === "rejected" ? "active" : ""}`}
              onClick={() => setFilter("rejected")}
            >
              Rejected
            </button>
          </div>
        </div>

        <div className="resume-content">
          <div className="resume-list">
            <div className="list-header">
              <div className="header-item">Candidate</div>
              <div className="header-item">Position</div>
              <div className="header-item">Match</div>
              <div className="header-item">Status</div>
            </div>

            <div className="list-body">
              {filteredResumes.length > 0 ? (
                filteredResumes.map((resume) => (
                  <div
                    key={resume.id}
                    className={`resume-item ${selectedResume?.id === resume.id ? "selected" : ""}`}
                    onClick={() => handleResumeClick(resume)}
                  >
                    <div className="resume-candidate">
                      <div className="candidate-avatar">
                        {resume.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="candidate-info">
                        <div className="candidate-name">{resume.name}</div>
                        <div className="candidate-applied">Applied: {resume.appliedDate}</div>
                      </div>
                    </div>
                    <div className="resume-position">{resume.position}</div>
                    <div className="resume-match">
                      <div className="match-score">{resume.matchScore}%</div>
                      <div className="match-bar" style={{ width: `${resume.matchScore}%` }}></div>
                    </div>
                    <div className="resume-status">
                      <span className={`status-badge ${resume.status}`}>
                        {resume.status.charAt(0).toUpperCase() + resume.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">No resumes match your filters</div>
              )}
            </div>
          </div>

          <div className="resume-details">
            {selectedResume ? (
              <>
                <div className="details-header">
                  <div className="candidate-large-avatar">
                    {selectedResume.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="candidate-header-info">
                    <h2>{selectedResume.name}</h2>
                    <p className="candidate-position">{selectedResume.position}</p>
                    <div className="candidate-match">
                      <span className="match-label">Match Score:</span>
                      <span className="match-value">{selectedResume.matchScore}%</span>
                    </div>
                  </div>
                  <div className="candidate-actions">
                    <button className="action-button approve">Approve</button>
                    <button className="action-button reject">Reject</button>
                  </div>
                </div>

                <div className="details-content">
                  <div className="details-section">
                    <h3>Experience</h3>
                    <p>{selectedResume.experience}</p>
                  </div>

                  <div className="details-section">
                    <h3>Education</h3>
                    <p>{selectedResume.education}</p>
                  </div>

                  <div className="details-section">
                    <h3>Skills</h3>
                    <div className="skills-list">
                      {selectedResume.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="details-section">
                    <h3>AI Analysis</h3>
                    <div className="analysis-item">
                      <div className="analysis-label">Technical Skills</div>
                      <div className="analysis-bar">
                        <div
                          className="analysis-progress"
                          style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="analysis-item">
                      <div className="analysis-label">Communication</div>
                      <div className="analysis-bar">
                        <div
                          className="analysis-progress"
                          style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="analysis-item">
                      <div className="analysis-label">Leadership</div>
                      <div className="analysis-bar">
                        <div
                          className="analysis-progress"
                          style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="analysis-item">
                      <div className="analysis-label">Problem Solving</div>
                      <div className="analysis-bar">
                        <div
                          className="analysis-progress"
                          style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="details-section">
                    <h3>Notes</h3>
                    <textarea className="notes-input" placeholder="Add notes about this candidate..."></textarea>
                  </div>
                </div>
              </>
            ) : (
              <div className="no-selection">
                <div className="no-selection-icon">📄</div>
                <h3>No Resume Selected</h3>
                <p>Click on a resume from the list to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeShortlisted

