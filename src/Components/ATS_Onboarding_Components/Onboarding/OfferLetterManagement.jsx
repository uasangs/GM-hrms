import React, { useState } from "react";
import "./OfferLetterManagement.css";
import Header from "../../Header/Header";

const OfferLetterManagement = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const [offers, setOffers] = useState([
    {
      id: 1,
      candidateName: "Arjun Mehta",
      candidateEmail: "arjun.mehta@email.com",
      role: "Software Development Intern",
      department: "Engineering",
      offerDate: "2025-01-28",
      joiningDate: "2025-02-10",
      stipend: "₹25,000/month",
      duration: "3 months",
      status: "Sent",
      sentDate: "2025-01-28",
      viewedDate: "2025-01-29",
      responseDate: null,
      candidateResponse: null
    },
    {
      id: 2,
      candidateName: "Sneha Iyer",
      candidateEmail: "sneha.iyer@email.com",
      role: "Marketing Intern",
      department: "Marketing",
      offerDate: "2025-01-25",
      joiningDate: "2025-02-15",
      stipend: "₹20,000/month",
      duration: "4 months",
      status: "Accepted",
      sentDate: "2025-01-25",
      viewedDate: "2025-01-25",
      responseDate: "2025-01-26",
      candidateResponse: "Thank you for the opportunity! I'm excited to join the team."
    },
    {
      id: 3,
      candidateName: "Rohan Desai",
      candidateEmail: "rohan.desai@email.com",
      role: "Data Analytics Intern",
      department: "Analytics",
      offerDate: "2025-01-20",
      joiningDate: "2025-02-01",
      stipend: "₹30,000/month",
      duration: "3 months",
      status: "Clarification",
      sentDate: "2025-01-20",
      viewedDate: "2025-01-21",
      responseDate: "2025-01-22",
      candidateResponse: "Could you please clarify the work-from-home policy and project details?"
    },
    {
      id: 4,
      candidateName: "Priya Sharma",
      candidateEmail: "priya.sharma@email.com",
      role: "UI/UX Design Intern",
      department: "Design",
      offerDate: "2025-01-15",
      joiningDate: "2025-02-05",
      stipend: "₹22,000/month",
      duration: "6 months",
      status: "Declined",
      sentDate: "2025-01-15",
      viewedDate: "2025-01-16",
      responseDate: "2025-01-17",
      candidateResponse: "Thank you for the offer. I've decided to pursue another opportunity."
    },
    {
      id: 5,
      candidateName: "Karthik Reddy",
      candidateEmail: "karthik.reddy@email.com",
      role: "Business Analyst Intern",
      department: "Product",
      offerDate: "2025-01-30",
      joiningDate: "2025-02-20",
      stipend: "₹28,000/month",
      duration: "3 months",
      status: "Pending",
      sentDate: null,
      viewedDate: null,
      responseDate: null,
      candidateResponse: null
    }
  ]);

  const [stats, setStats] = useState({
    totalOffers: 15,
    pending: 3,
    sent: 4,
    accepted: 6,
    declined: 2
  });

  const filterTabs = ["All", "Pending", "Sent", "Accepted", "Declined", "Clarification"];

  const filteredOffers = activeFilter === "All" 
    ? offers 
    : offers.filter(offer => offer.status === activeFilter);

  const handleGenerateOffer = () => {
    alert("Generate Offer Letter feature - Opens form to create new offer letter");
  };

  const handleViewOffer = (offerId) => {
    alert(`View Offer Letter for ID: ${offerId} - Opens PDF viewer`);
  };

  const handleResendOffer = (offerId) => {
    alert(`Resending offer letter to candidate ID: ${offerId}`);
  };

  const handleDownloadOffer = (offerId) => {
    alert(`Downloading offer letter PDF for ID: ${offerId}`);
  };

  const getStatusColor = (status) => {
    return status.toLowerCase();
  };

  return (
    <div className="offer-management-container">
      <Header />
      
      <div className="offer-management-content">
        {/* Page Header */}
        <div className="offer-page-header">
          <div>
            <h1>Offer Letter Management</h1>
            <p>Generate, send, and track offer letters for candidates</p>
          </div>
          <button className="generate-offer-btn" onClick={handleGenerateOffer}>
            <span className="btn-icon">📝</span>
            Generate Offer Letter
          </button>
        </div>

        {/* Stats Overview */}
        <div className="offer-stats">
          <div className="stat-card">
            <div className="stat-icon">📄</div>
            <div className="stat-info">
              <div className="stat-number">{stats.totalOffers}</div>
              <div className="stat-label">Total Offers</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-info">
              <div className="stat-number">{stats.pending}</div>
              <div className="stat-label">Pending</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📧</div>
            <div className="stat-info">
              <div className="stat-number">{stats.sent}</div>
              <div className="stat-label">Sent</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <div className="stat-number">{stats.accepted}</div>
              <div className="stat-label">Accepted</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">❌</div>
            <div className="stat-info">
              <div className="stat-number">{stats.declined}</div>
              <div className="stat-label">Declined</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filterTabs.map((tab) => (
            <button 
              key={tab}
              className={`filter-tab ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Offers Grid */}
        {filteredOffers.length > 0 ? (
          <div className="offers-grid">
            {filteredOffers.map((offer) => (
              <div key={offer.id} className="offer-card">
                <div className="offer-card-header">
                  <div className="candidate-info">
                    <h3>{offer.candidateName}</h3>
                    <p>{offer.role}</p>
                    <p className="candidate-email">{offer.candidateEmail}</p>
                  </div>
                  <span className={`offer-status-badge ${getStatusColor(offer.status)}`}>
                    {offer.status}
                  </span>
                </div>

                <div className="offer-details">
                  <div className="details-grid">
                    <div className="detail-row">
                      <span className="detail-label">Department</span>
                      <span className="detail-value">{offer.department}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Stipend</span>
                      <span className="detail-value">{offer.stipend}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Joining Date</span>
                      <span className="detail-value">{new Date(offer.joiningDate).toLocaleDateString()}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Duration</span>
                      <span className="detail-value">{offer.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                {offer.status !== "Pending" && (
                  <div className="offer-timeline">
                    <h4 className="timeline-title">Offer Timeline</h4>
                    
                    {offer.sentDate && (
                      <div className="timeline-item">
                        <div className="timeline-icon completed">📤</div>
                        <span className="timeline-text">Offer Sent</span>
                        <span className="timeline-date">{new Date(offer.sentDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    
                    {offer.viewedDate && (
                      <div className="timeline-item">
                        <div className="timeline-icon completed">👁️</div>
                        <span className="timeline-text">Viewed by Candidate</span>
                        <span className="timeline-date">{new Date(offer.viewedDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    
                    {offer.responseDate && (
                      <div className="timeline-item">
                        <div className="timeline-icon completed">💬</div>
                        <span className="timeline-text">Response Received</span>
                        <span className="timeline-date">{new Date(offer.responseDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    
                    {!offer.responseDate && (
                      <div className="timeline-item">
                        <div className="timeline-icon pending">⏳</div>
                        <span className="timeline-text">Awaiting Response</span>
                        <span className="timeline-date">-</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Candidate Response */}
                {offer.candidateResponse && (
                  <div className="candidate-response">
                    <div className="response-header">
                      <span className="response-icon">💬</span>
                      <h5 className="response-title">Candidate Response</h5>
                    </div>
                    <p className="response-text">"{offer.candidateResponse}"</p>
                  </div>
                )}

                {/* Actions */}
                <div className="offer-actions">
                  <button className="btn-view-offer" onClick={() => handleViewOffer(offer.id)}>
                    <span>👁️</span> View
                  </button>
                  {offer.status === "Sent" && (
                    <button className="btn-resend" onClick={() => handleResendOffer(offer.id)}>
                      <span>📧</span> Resend
                    </button>
                  )}
                  {offer.status !== "Pending" && (
                    <button className="btn-download" onClick={() => handleDownloadOffer(offer.id)}>
                      <span>⬇️</span> PDF
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h3>No Offers Found</h3>
            <p>No offers match the selected filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferLetterManagement;
