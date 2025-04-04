"use client"

import { useState } from "react"
import "./UserPanel.css"

const UserPanel = () => {
  const [activeTab, setActiveTab] = useState("profile")

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Manager", status: "Active" },
    { id: 3, name: "Robert Johnson", email: "robert@example.com", role: "User", status: "Inactive" },
    { id: 4, name: "Emily Davis", email: "emily@example.com", role: "User", status: "Active" },
    { id: 5, name: "Michael Wilson", email: "michael@example.com", role: "Manager", status: "Active" },
  ]

  return (
    <div className="user-panel">
      <div className="page-header">
        <h1>User Panel</h1>
        <p>Manage users and permissions</p>
      </div>

      <div className="panel-tabs">
        <button
          className={`tab-button ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          My Profile
        </button>
        <button className={`tab-button ${activeTab === "users" ? "active" : ""}`} onClick={() => setActiveTab("users")}>
          Users
        </button>
        <button
          className={`tab-button ${activeTab === "permissions" ? "active" : ""}`}
          onClick={() => setActiveTab("permissions")}
        >
          Permissions
        </button>
        <button
          className={`tab-button ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </button>
      </div>

      <div className="panel-content">
        {activeTab === "profile" && (
          <div className="profile-section">
            <div className="profile-header">
              <div className="profile-avatar">JD</div>
              <div className="profile-info">
                <h2>John Doe</h2>
                <p>Administrator</p>
                <p className="profile-email">john.doe@example.com</p>
              </div>
              <button className="edit-profile-button">Edit Profile</button>
            </div>

            <div className="profile-details">
              <div className="detail-group">
                <h3>Personal Information</h3>
                <div className="detail-row">
                  <div className="detail-label">Full Name</div>
                  <div className="detail-value">John Doe</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Email</div>
                  <div className="detail-value">john.doe@example.com</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Phone</div>
                  <div className="detail-value">+1 (555) 123-4567</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Location</div>
                  <div className="detail-value">New York, USA</div>
                </div>
              </div>

              <div className="detail-group">
                <h3>Account Information</h3>
                <div className="detail-row">
                  <div className="detail-label">Role</div>
                  <div className="detail-value">Administrator</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Member Since</div>
                  <div className="detail-value">January 15, 2023</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Last Login</div>
                  <div className="detail-value">Today, 09:45 AM</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Status</div>
                  <div className="detail-value status-active">Active</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <div className="users-section">
            <div className="users-header">
              <h2>All Users</h2>
              <button className="add-user-button">Add User</button>
            </div>

            <div className="users-table-container">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <span className={`status-badge ${user.status.toLowerCase()}`}>{user.status}</span>
                      </td>
                      <td>
                        <div className="table-actions">
                          <button className="action-button edit">Edit</button>
                          <button className="action-button delete">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "permissions" && (
          <div className="permissions-section">
            <h2>Role Permissions</h2>
            <p>Manage access rights for different user roles</p>

            <div className="permissions-container">
              <div className="role-card">
                <div className="role-header">
                  <h3>Administrator</h3>
                  <span className="role-users">2 users</span>
                </div>
                <div className="permission-list">
                  <div className="permission-item">
                    <span>Dashboard Access</span>
                    <input type="checkbox" checked readOnly />
                  </div>
                  <div className="permission-item">
                    <span>User Management</span>
                    <input type="checkbox" checked readOnly />
                  </div>
                  <div className="permission-item">
                    <span>Content Management</span>
                    <input type="checkbox" checked readOnly />
                  </div>
                  <div className="permission-item">
                    <span>System Settings</span>
                    <input type="checkbox" checked readOnly />
                  </div>
                  <div className="permission-item">
                    <span>API Access</span>
                    <input type="checkbox" checked readOnly />
                  </div>
                </div>
                <button className="edit-role-button">Edit Role</button>
              </div>

              <div className="role-card">
                <div className="role-header">
                  <h3>Manager</h3>
                  <span className="role-users">2 users</span>
                </div>
                <div className="permission-list">
                  <div className="permission-item">
                    <span>Dashboard Access</span>
                    <input type="checkbox" checked readOnly />
                  </div>
                  <div className="permission-item">
                    <span>User Management</span>
                    <input type="checkbox" checked readOnly />
                  </div>
                  <div className="permission-item">
                    <span>Content Management</span>
                    <input type="checkbox" checked readOnly />
                  </div>
                  <div className="permission-item">
                    <span>System Settings</span>
                    <input type="checkbox" readOnly />
                  </div>
                  <div className="permission-item">
                    <span>API Access</span>
                    <input type="checkbox" readOnly />
                  </div>
                </div>
                <button className="edit-role-button">Edit Role</button>
              </div>

              <div className="role-card">
                <div className="role-header">
                  <h3>User</h3>
                  <span className="role-users">3 users</span>
                </div>
                <div className="permission-list">
                  <div className="permission-item">
                    <span>Dashboard Access</span>
                    <input type="checkbox" checked readOnly />
                  </div>
                  <div className="permission-item">
                    <span>User Management</span>
                    <input type="checkbox" readOnly />
                  </div>
                  <div className="permission-item">
                    <span>Content Management</span>
                    <input type="checkbox" readOnly />
                  </div>
                  <div className="permission-item">
                    <span>System Settings</span>
                    <input type="checkbox" readOnly />
                  </div>
                  <div className="permission-item">
                    <span>API Access</span>
                    <input type="checkbox" readOnly />
                  </div>
                </div>
                <button className="edit-role-button">Edit Role</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="settings-section">
            <h2>Account Settings</h2>
            <p>Manage your account preferences and security settings</p>

            <div className="settings-container">
              <div className="settings-group">
                <h3>Preferences</h3>
                <div className="settings-item">
                  <div className="settings-info">
                    <div className="settings-label">Language</div>
                    <div className="settings-description">Select your preferred language</div>
                  </div>
                  <select className="settings-control">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>

                <div className="settings-item">
                  <div className="settings-info">
                    <div className="settings-label">Theme</div>
                    <div className="settings-description">Choose light or dark theme</div>
                  </div>
                  <select className="settings-control">
                    <option>Dark</option>
                    <option>Light</option>
                    <option>System</option>
                  </select>
                </div>

                <div className="settings-item">
                  <div className="settings-info">
                    <div className="settings-label">Notifications</div>
                    <div className="settings-description">Enable or disable notifications</div>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" checked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>

              <div className="settings-group">
                <h3>Security</h3>
                <div className="settings-item">
                  <div className="settings-info">
                    <div className="settings-label">Two-Factor Authentication</div>
                    <div className="settings-description">Add an extra layer of security</div>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="settings-item">
                  <div className="settings-info">
                    <div className="settings-label">Change Password</div>
                    <div className="settings-description">Update your password regularly</div>
                  </div>
                  <button className="settings-button">Change</button>
                </div>

                <div className="settings-item">
                  <div className="settings-info">
                    <div className="settings-label">Session Management</div>
                    <div className="settings-description">Manage active sessions</div>
                  </div>
                  <button className="settings-button">View</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserPanel

