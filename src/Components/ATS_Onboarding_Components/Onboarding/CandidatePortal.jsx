import React, { useState } from "react";
import "./CandidatePortal.css";
import Header from "../../Header/Header";

const CandidatePortal = () => {
  const [candidateInfo, setCandidateInfo] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@company.com",
    joiningDate: "2025-02-15",
    department: "Product Management",
    position: "Senior Product Manager",
    overallProgress: 65
  });

  const [stats, setStats] = useState({
    tasksCompleted: 8,
    totalTasks: 12,
    documentsSubmitted: 5,
    totalDocuments: 7,
    daysToJoining: 10
  });

  const [pendingTasks, setPendingTasks] = useState([
    {
      id: 1,
      title: "Complete Background Verification Form",
      description: "Fill and submit BGV consent form",
      dueDate: "2025-02-08",
      priority: "high",
      completed: false
    },
    {
      id: 2,
      title: "Submit Aadhaar Card Copy",
      description: "Upload scanned copy of Aadhaar card",
      dueDate: "2025-02-10",
      priority: "high",
      completed: false
    },
    {
      id: 3,
      title: "Complete IT Assets Survey",
      description: "Specify your laptop and equipment preferences",
      dueDate: "2025-02-12",
      priority: "medium",
      completed: false
    },
    {
      id: 4,
      title: "Watch Onboarding Videos",
      description: "Company culture and policies introduction",
      dueDate: "2025-02-13",
      priority: "low",
      completed: false
    }
  ]);

  const [documents, setDocuments] = useState([
    { id: 1, name: "PAN Card", status: "verified", uploadDate: "2025-01-28" },
    { id: 2, name: "Educational Certificates", status: "verified", uploadDate: "2025-01-29" },
    { id: 3, name: "Experience Letters", status: "verified", uploadDate: "2025-01-30" },
    { id: 4, name: "Passport Size Photos", status: "verified", uploadDate: "2025-02-01" },
    { id: 5, name: "Bank Account Details", status: "pending", uploadDate: "2025-02-02" },
    { id: 6, name: "Aadhaar Card", status: "missing", uploadDate: null },
    { id: 7, name: "Address Proof", status: "missing", uploadDate: null }
  ]);

  const [timeline, setTimeline] = useState([
    {
      id: 1,
      date: "2025-01-25",
      title: "Offer Letter Accepted",
      description: "Congratulations! You accepted the offer",
      completed: true
    },
    {
      id: 2,
      date: "2025-01-28",
      title: "Document Submission Started",
      description: "Started uploading required documents",
      completed: true
    },
    {
      id: 3,
      date: "2025-02-10",
      title: "Background Verification",
      description: "BGV process to be completed",
      completed: false
    },
    {
      id: 4,
      date: "2025-02-15",
      title: "First Day at Work",
      description: "Welcome to the team!",
      completed: false
    }
  ]);

  const [milestones, setMilestones] = useState([
    { title: "Offer Accepted", status: "completed" },
    { title: "Documents", status: "in-progress" },
    { title: "BGV", status: "pending" },
    { title: "Joining Day", status: "pending" }
  ]);

  const handleTaskToggle = (taskId) => {
    setPendingTasks(pendingTasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDocumentUpload = (docId) => {
    alert(`Upload dialog for document ID: ${docId}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified': return '#10b981';
      case 'pending': return '#f59e0b';
      case 'missing': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getMilestoneIcon = (status) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🔄';
      case 'pending': return '⏳';
      default: return '⭕';
    }
  };

  return (
    <div className="candidate-portal-container">
      <Header />
      
      <div className="candidate-portal-content">
        {/* Page Header */}
        <div className="candidate-page-header">
          <div>
            <h1>Candidate Portal</h1>
            <p>Track your onboarding journey and stay prepared for your first day</p>
          </div>
          <button className="help-btn">
            <span className="btn-icon">❓</span>
            Need Help?
          </button>
        </div>

        {/* Welcome Banner */}
        <div className="welcome-banner">
          <h2>Welcome, {candidateInfo.name}! 👋</h2>
          <p>
            Your joining date is {new Date(candidateInfo.joiningDate).toLocaleDateString()}. 
            Complete your onboarding tasks to ensure a smooth first day!
          </p>
        </div>

        {/* Stats Overview */}
        <div className="candidate-stats">
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <div className="stat-number">{stats.tasksCompleted}/{stats.totalTasks}</div>
              <div className="stat-label">Tasks Completed</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📄</div>
            <div className="stat-info">
              <div className="stat-number">{stats.documentsSubmitted}/{stats.totalDocuments}</div>
              <div className="stat-label">Documents Submitted</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-info">
              <div className="stat-number">{stats.daysToJoining}</div>
              <div className="stat-label">Days to Joining</div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="progress-section">
          <div className="progress-header">
            <h3>Onboarding Progress</h3>
            <span className="progress-percentage">{candidateInfo.overallProgress}%</span>
          </div>
          <div className="progress-bar-wrapper">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${candidateInfo.overallProgress}%` }}
            ></div>
          </div>
          <div className="progress-milestones">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="milestone">
                <div className="milestone-icon">{getMilestoneIcon(milestone.status)}</div>
                <div className="milestone-info">
                  <h4>{milestone.title}</h4>
                  <p style={{ textTransform: 'capitalize' }}>{milestone.status.replace('-', ' ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="candidate-content-grid">
          {/* Pending Tasks */}
          <div className="section-card">
            <div className="section-header">
              <h3>
                <span className="section-icon">📋</span>
                Pending Tasks
              </h3>
              <a href="#" className="view-all-link">View All →</a>
            </div>
            <div className="task-list">
              {pendingTasks.map((task) => (
                <div key={task.id} className="task-item">
                  <div 
                    className={`task-checkbox ${task.completed ? 'checked' : ''}`}
                    onClick={() => handleTaskToggle(task.id)}
                  >
                    {task.completed && '✓'}
                  </div>
                  <div className="task-details">
                    <div className="task-title">{task.title}</div>
                    <div className="task-meta">
                      {task.description} • Due: {new Date(task.dueDate).toLocaleDateString()}
                    </div>
                  </div>
                  <span className={`task-priority ${task.priority}`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="section-card">
            <div className="section-header">
              <h3>
                <span className="section-icon">📁</span>
                Document Checklist
              </h3>
              <a href="#" className="view-all-link">View All →</a>
            </div>
            <div className="document-list">
              {documents.map((doc) => (
                <div key={doc.id} className="document-item">
                  <div className="doc-info">
                    <span className="doc-icon">📄</span>
                    <span className="doc-name">{doc.name}</span>
                  </div>
                  <div className="doc-status">
                    {doc.status === 'missing' ? (
                      <button 
                        className="upload-btn-small"
                        onClick={() => handleDocumentUpload(doc.id)}
                      >
                        Upload
                      </button>
                    ) : (
                      <>
                        <span 
                          className="status-dot" 
                          style={{ background: getStatusColor(doc.status) }}
                        ></span>
                        <span className={`status-text ${doc.status}`}>
                          {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="section-card">
            <div className="section-header">
              <h3>
                <span className="section-icon">🗓️</span>
                Your Journey
              </h3>
            </div>
            <div className="timeline">
              {timeline.map((item) => (
                <div 
                  key={item.id} 
                  className={`timeline-item ${item.completed ? 'completed' : ''}`}
                >
                  <div className="timeline-date">
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-desc">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="section-card">
            <div className="section-header">
              <h3>
                <span className="section-icon">⚡</span>
                Quick Actions
              </h3>
            </div>
            <div className="quick-actions">
              <div className="action-card">
                <div className="action-icon">📧</div>
                <div className="action-label">Contact HR</div>
              </div>
              <div className="action-card">
                <div className="action-icon">📚</div>
                <div className="action-label">Resources</div>
              </div>
              <div className="action-card">
                <div className="action-icon">🎥</div>
                <div className="action-label">Training Videos</div>
              </div>
              <div className="action-card">
                <div className="action-icon">🏢</div>
                <div className="action-label">Office Location</div>
              </div>
              <div className="action-card">
                <div className="action-icon">👥</div>
                <div className="action-label">Meet Team</div>
              </div>
              <div className="action-card">
                <div className="action-icon">📖</div>
                <div className="action-label">Handbook</div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="candidate-content-grid">
          <div className="section-card">
            <div className="section-header">
              <h3>
                <span className="section-icon">👤</span>
                Your Information
              </h3>
            </div>
            <div className="task-list">
              <div className="task-item">
                <div className="task-details">
                  <div className="task-title">Position</div>
                  <div className="task-meta">{candidateInfo.position}</div>
                </div>
              </div>
              <div className="task-item">
                <div className="task-details">
                  <div className="task-title">Department</div>
                  <div className="task-meta">{candidateInfo.department}</div>
                </div>
              </div>
              <div className="task-item">
                <div className="task-details">
                  <div className="task-title">Email</div>
                  <div className="task-meta">{candidateInfo.email}</div>
                </div>
              </div>
              <div className="task-item">
                <div className="task-details">
                  <div className="task-title">Joining Date</div>
                  <div className="task-meta">
                    {new Date(candidateInfo.joiningDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-card">
            <div className="section-header">
              <h3>
                <span className="section-icon">💡</span>
                First Day Tips
              </h3>
            </div>
            <div className="task-list">
              <div className="task-item">
                <div className="task-details">
                  <div className="task-title">Arrive Early</div>
                  <div className="task-meta">Plan to arrive 15 minutes before your start time</div>
                </div>
              </div>
              <div className="task-item">
                <div className="task-details">
                  <div className="task-title">Dress Code</div>
                  <div className="task-meta">Business casual - check the handbook for details</div>
                </div>
              </div>
              <div className="task-item">
                <div className="task-details">
                  <div className="task-title">Bring Documents</div>
                  <div className="task-meta">Original documents for verification</div>
                </div>
              </div>
              <div className="task-item">
                <div className="task-details">
                  <div className="task-title">Stay Positive</div>
                  <div className="task-meta">Be yourself and ask questions!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatePortal;
