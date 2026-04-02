import React, { useState } from "react";
import "./HRInitiation.css";
import Header from "../../Header/Header";

const HRInitiation = () => {
  const [formData, setFormData] = useState({
    candidateEmail: "",
    candidateName: "",
    role: "",
    department: "",
    startDate: "",
    endDate: "",
    reportingManager: "",
    stipendAmount: "",
    paymentFrequency: "",
    laptopRequired: false,
    emailRequired: false,
    otherAssets: "",
    accountsNotes: ""
  });

  const [recentInitiations, setRecentInitiations] = useState([
    {
      id: 1,
      candidateName: "Arjun Mehta",
      candidateEmail: "arjun.mehta@email.com",
      role: "Software Development Intern",
      department: "Engineering",
      startDate: "2025-02-10",
      endDate: "2025-05-10",
      manager: "Rajesh Kumar",
      status: "Initiated",
      initiatedDate: "2025-01-28"
    },
    {
      id: 2,
      candidateName: "Sneha Iyer",
      candidateEmail: "sneha.iyer@email.com",
      role: "Marketing Intern",
      department: "Marketing",
      startDate: "2025-02-15",
      endDate: "2025-06-15",
      manager: "Priya Sharma",
      status: "Pending",
      initiatedDate: "2025-01-25"
    },
    {
      id: 3,
      candidateName: "Rohan Desai",
      candidateEmail: "rohan.desai@email.com",
      role: "Data Analytics Intern",
      department: "Analytics",
      startDate: "2025-02-01",
      endDate: "2025-05-01",
      manager: "Amit Patel",
      status: "Completed",
      initiatedDate: "2025-01-20"
    }
  ]);

  const [stats, setStats] = useState({
    totalInitiated: 12,
    pendingAcceptance: 5,
    activeOnboarding: 4,
    completed: 3
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Initiation submitted:", formData);
    
    // Add to recent initiations
    const newInitiation = {
      id: recentInitiations.length + 1,
      candidateName: formData.candidateName,
      candidateEmail: formData.candidateEmail,
      role: formData.role,
      department: formData.department,
      startDate: formData.startDate,
      endDate: formData.endDate,
      manager: formData.reportingManager,
      status: "Initiated",
      initiatedDate: new Date().toISOString().split('T')[0]
    };
    
    setRecentInitiations([newInitiation, ...recentInitiations]);
    setStats(prev => ({ ...prev, totalInitiated: prev.totalInitiated + 1, pendingAcceptance: prev.pendingAcceptance + 1 }));
    
    alert("Onboarding initiated successfully! Candidate will receive an email shortly.");
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      candidateEmail: "",
      candidateName: "",
      role: "",
      department: "",
      startDate: "",
      endDate: "",
      reportingManager: "",
      stipendAmount: "",
      paymentFrequency: "",
      laptopRequired: false,
      emailRequired: false,
      otherAssets: "",
      accountsNotes: ""
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Initiated': return 'initiated';
      case 'Pending': return 'pending';
      case 'Completed': return 'completed';
      default: return 'pending';
    }
  };

  return (
    <div className="hr-initiation-container">
      <Header />
      
      <div className="hr-initiation-content">
        {/* Page Header */}
        <div className="hr-init-header">
          <div>
            <h1>Initiate Onboarding</h1>
            <p>Start the onboarding process for new candidates and interns</p>
          </div>
          <button className="view-all-initiations-btn">
            <span className="btn-icon">📋</span>
            View All Initiations
          </button>
        </div>

        {/* Stats Overview */}
        <div className="hr-init-stats">
          <div className="stat-card">
            <div className="stat-icon">🚀</div>
            <div className="stat-info">
              <div className="stat-number">{stats.totalInitiated}</div>
              <div className="stat-label">Total Initiated</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-info">
              <div className="stat-number">{stats.pendingAcceptance}</div>
              <div className="stat-label">Pending Acceptance</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <div className="stat-info">
              <div className="stat-number">{stats.activeOnboarding}</div>
              <div className="stat-label">Active Onboarding</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <div className="stat-number">{stats.completed}</div>
              <div className="stat-label">Completed</div>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="hr-init-layout">
          {/* Initiation Form */}
          <div className="initiation-form-card">
            <div className="form-card-header">
              <h2>New Candidate/Intern Details</h2>
              <p>Fill in the details to initiate the onboarding process</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Basic Information */}
              <div className="form-section">
                <h3 className="section-title">
                  <span className="section-icon">👤</span>
                  Basic Information
                </h3>
                <div className="form-row">
                  <div className="form-field">
                    <label>Candidate Name <span className="required">*</span></label>
                    <input 
                      type="text" 
                      name="candidateName"
                      value={formData.candidateName}
                      onChange={handleInputChange}
                      placeholder="Enter full name"
                      required 
                    />
                  </div>
                  <div className="form-field">
                    <label>Candidate Email <span className="required">*</span></label>
                    <input 
                      type="email" 
                      name="candidateEmail"
                      value={formData.candidateEmail}
                      onChange={handleInputChange}
                      placeholder="candidate@email.com"
                      required 
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Role/Title <span className="required">*</span></label>
                    <input 
                      type="text" 
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="e.g., Software Development Intern"
                      required 
                    />
                  </div>
                  <div className="form-field">
                    <label>Department <span className="required">*</span></label>
                    <select 
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Department</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Product">Product</option>
                      <option value="Design">Design</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sales">Sales</option>
                      <option value="Analytics">Analytics</option>
                      <option value="HR">HR</option>
                      <option value="Finance">Finance</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Duration & Manager */}
              <div className="form-section">
                <h3 className="section-title">
                  <span className="section-icon">📅</span>
                  Duration & Reporting
                </h3>
                <div className="form-row">
                  <div className="form-field">
                    <label>Start Date <span className="required">*</span></label>
                    <input 
                      type="date" 
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-field">
                    <label>End Date <span className="required">*</span></label>
                    <input 
                      type="date" 
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Reporting Manager <span className="required">*</span></label>
                    <input 
                      type="text" 
                      name="reportingManager"
                      value={formData.reportingManager}
                      onChange={handleInputChange}
                      placeholder="Manager name"
                      required 
                    />
                  </div>
                </div>
              </div>

              {/* Compensation */}
              <div className="form-section">
                <h3 className="section-title">
                  <span className="section-icon">💰</span>
                  Compensation Details
                </h3>
                <div className="form-row">
                  <div className="form-field">
                    <label>Stipend/Salary Amount <span className="required">*</span></label>
                    <input 
                      type="number" 
                      name="stipendAmount"
                      value={formData.stipendAmount}
                      onChange={handleInputChange}
                      placeholder="Amount in ₹"
                      required 
                    />
                  </div>
                  <div className="form-field">
                    <label>Payment Frequency <span className="required">*</span></label>
                    <select 
                      name="paymentFrequency"
                      value={formData.paymentFrequency}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Frequency</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Quarterly">Quarterly</option>
                      <option value="One-time">One-time</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Assets Required */}
              <div className="form-section">
                <h3 className="section-title">
                  <span className="section-icon">💼</span>
                  Assets & Resources
                </h3>
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <input 
                      type="checkbox" 
                      id="laptopRequired"
                      name="laptopRequired"
                      checked={formData.laptopRequired}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="laptopRequired">Laptop Required</label>
                  </div>
                  <div className="checkbox-item">
                    <input 
                      type="checkbox" 
                      id="emailRequired"
                      name="emailRequired"
                      checked={formData.emailRequired}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="emailRequired">Corporate Email ID Required</label>
                  </div>
                </div>
                <div className="form-row full-width">
                  <div className="form-field">
                    <label>Other Assets Required</label>
                    <textarea 
                      name="otherAssets"
                      value={formData.otherAssets}
                      onChange={handleInputChange}
                      placeholder="Specify any other equipment or resources needed"
                      rows="2"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Notes for Accounts */}
              <div className="form-section">
                <h3 className="section-title">
                  <span className="section-icon">📝</span>
                  Additional Notes
                </h3>
                <div className="form-row full-width">
                  <div className="form-field">
                    <label>Notes for Accounts Team</label>
                    <textarea 
                      name="accountsNotes"
                      value={formData.accountsNotes}
                      onChange={handleInputChange}
                      placeholder="Any special instructions for payment processing..."
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="form-actions">
                <button type="button" className="btn-reset" onClick={handleReset}>
                  Reset Form
                </button>
                <button type="submit" className="btn-initiate">
                  🚀 Initiate Onboarding
                </button>
              </div>
            </form>
          </div>

          {/* Recent Initiations */}
          <div className="recent-initiations-card">
            <div className="recent-header">
              <h2>Recent Initiations</h2>
            </div>

            <div className="initiations-list">
              {recentInitiations.length > 0 ? (
                recentInitiations.map((initiation) => (
                  <div key={initiation.id} className="initiation-item">
                    <div className="initiation-item-header">
                      <div>
                        <h4 className="candidate-name">{initiation.candidateName}</h4>
                        <p className="candidate-role">{initiation.role}</p>
                      </div>
                      <span className={`init-status ${getStatusColor(initiation.status)}`}>
                        {initiation.status}
                      </span>
                    </div>
                    <div className="initiation-item-details">
                      <div className="detail-item">
                        <span className="detail-icon">🏢</span>
                        {initiation.department}
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">👤</span>
                        {initiation.manager}
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">📅</span>
                        {new Date(initiation.startDate).toLocaleDateString()}
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">📧</span>
                        {initiation.candidateEmail.substring(0, 20)}...
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <div className="empty-icon">📭</div>
                  <h3>No Initiations Yet</h3>
                  <p>Start by creating your first onboarding initiation</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRInitiation;
