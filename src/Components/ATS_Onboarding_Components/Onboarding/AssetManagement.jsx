import React, { useState } from "react";
import "./AssetManagement.css";
import Header from "../../Header/Header";

const AssetManagement = () => {
  const [employeeAssets, setEmployeeAssets] = useState([
    {
      id: 1,
      employeeName: "Arjun Mehta",
      empId: "EMP001",
      department: "Engineering",
      joiningDate: "2025-02-10",
      assets: [
        {
          assetType: "Laptop",
          assetName: "Dell Latitude 5420",
          serialNumber: "DL54201234",
          allocatedDate: "2025-02-08",
          status: "Allocated"
        },
        {
          assetType: "Monitor",
          assetName: "LG 24-inch Monitor",
          serialNumber: "LG2401567",
          allocatedDate: "2025-02-08",
          status: "Allocated"
        },
        {
          assetType: "Mouse",
          assetName: "Logitech Wireless Mouse",
          serialNumber: "LGM2024001",
          allocatedDate: "2025-02-08",
          status: "Allocated"
        }
      ]
    },
    {
      id: 2,
      employeeName: "Sneha Iyer",
      empId: "EMP002",
      department: "Marketing",
      joiningDate: "2025-02-15",
      assets: [
        {
          assetType: "Laptop",
          assetName: "MacBook Air M2",
          serialNumber: "MBA2024789",
          allocatedDate: null,
          status: "Requested"
        },
        {
          assetType: "Headphones",
          assetName: "Sony WH-1000XM5",
          serialNumber: null,
          allocatedDate: null,
          status: "Requested"
        }
      ]
    },
    {
      id: 3,
      employeeName: "Rohan Desai",
      empId: "EMP003",
      department: "Analytics",
      joiningDate: "2024-11-01",
      assets: [
        {
          assetType: "Laptop",
          assetName: "HP EliteBook 840",
          serialNumber: "HPE840456",
          allocatedDate: "2024-10-28",
          status: "Allocated"
        },
        {
          assetType: "Docking Station",
          assetName: "HP Thunderbolt Dock",
          serialNumber: "HPTBD789",
          allocatedDate: "2024-10-28",
          status: "Returned"
        }
      ]
    }
  ]);

  const [stats, setStats] = useState({
    totalAssets: 45,
    allocated: 32,
    available: 8,
    requested: 5
  });

  const [allocationForm, setAllocationForm] = useState({
    employee: "",
    assetType: "",
    assetName: "",
    serialNumber: "",
    allocationDate: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAllocationForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAllocate = (employeeId, assetIndex) => {
    alert(`Allocating asset for employee ID: ${employeeId}, Asset Index: ${assetIndex}`);
  };

  const handleReturn = (employeeId, assetIndex) => {
    alert(`Processing return for employee ID: ${employeeId}, Asset Index: ${assetIndex}`);
  };

  const handleViewHistory = (employeeId) => {
    alert(`Viewing asset history for employee ID: ${employeeId}`);
  };

  const handleSubmitAllocation = (e) => {
    e.preventDefault();
    console.log("Asset allocation submitted:", allocationForm);
    alert("Asset allocated successfully!");
    
    // Reset form
    setAllocationForm({
      employee: "",
      assetType: "",
      assetName: "",
      serialNumber: "",
      allocationDate: ""
    });
  };

  const getAssetIcon = (assetType) => {
    const icons = {
      'Laptop': '💻',
      'Monitor': '🖥️',
      'Mouse': '🖱️',
      'Keyboard': '⌨️',
      'Headphones': '🎧',
      'Docking Station': '🔌',
      'Mobile': '📱',
      'Tablet': '📱',
      'Webcam': '📷',
      'Charger': '🔌'
    };
    return icons[assetType] || '📦';
  };

  return (
    <div className="asset-management-container">
      <Header />
      
      <div className="asset-management-content">
        {/* Page Header */}
        <div className="asset-page-header">
          <div>
            <h1>Asset Management</h1>
            <p>Track and manage IT assets allocation for employees</p>
          </div>
          <button className="add-asset-btn">
            <span className="btn-icon">➕</span>
            Add New Asset
          </button>
        </div>

        {/* Stats Overview */}
        <div className="asset-stats">
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-info">
              <div className="stat-number">{stats.totalAssets}</div>
              <div className="stat-label">Total Assets</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <div className="stat-number">{stats.allocated}</div>
              <div className="stat-label">Allocated</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📍</div>
            <div className="stat-info">
              <div className="stat-number">{stats.available}</div>
              <div className="stat-label">Available</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-info">
              <div className="stat-number">{stats.requested}</div>
              <div className="stat-label">Requested</div>
            </div>
          </div>
        </div>

        {/* Employee Asset Cards */}
        <div className="asset-cards-grid">
          {employeeAssets.map((employee) => (
            <div key={employee.id} className="asset-card">
              <div className="asset-card-header">
                <div className="employee-info">
                  <h3>{employee.employeeName}</h3>
                  <p>{employee.empId} • {employee.department}</p>
                  <p className="joining-date">Joined: {new Date(employee.joiningDate).toLocaleDateString()}</p>
                </div>
                <div className="asset-summary">
                  <span className="summary-icon">📦</span>
                  <span className="summary-text">{employee.assets.length} Assets</span>
                </div>
              </div>

              <div className="assets-list">
                {employee.assets.map((asset, idx) => (
                  <div key={idx} className="asset-item">
                    <div className="asset-item-header">
                      <div className="asset-name-type">
                        <span className="asset-type-icon">{getAssetIcon(asset.assetType)}</span>
                        <div>
                          <h4 className="asset-name">{asset.assetName}</h4>
                        </div>
                      </div>
                      <span className={`asset-status ${asset.status.toLowerCase()}`}>
                        {asset.status}
                      </span>
                    </div>
                    
                    <div className="asset-item-details">
                      <div className="asset-detail">
                        <strong>Type:</strong> {asset.assetType}
                      </div>
                      {asset.serialNumber && (
                        <div className="asset-detail">
                          <strong>Serial:</strong> {asset.serialNumber}
                        </div>
                      )}
                      {asset.allocatedDate && (
                        <div className="asset-detail">
                          <strong>Allocated:</strong> {new Date(asset.allocatedDate).toLocaleDateString()}
                        </div>
                      )}
                      {!asset.allocatedDate && (
                        <div className="asset-detail">
                          <strong>Status:</strong> Pending Allocation
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="asset-actions">
                {employee.assets.some(a => a.status === 'Requested') && (
                  <button className="btn-allocate" onClick={() => handleAllocate(employee.id, 0)}>
                    ✓ Allocate
                  </button>
                )}
                {employee.assets.some(a => a.status === 'Allocated') && (
                  <button className="btn-return" onClick={() => handleReturn(employee.id, 0)}>
                    ↩️ Return
                  </button>
                )}
                <button className="btn-view-history" onClick={() => handleViewHistory(employee.id)}>
                  📜 History
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Allocate Section */}
        <div className="quick-allocate-section">
          <div className="quick-allocate-header">
            <h2>Quick Asset Allocation</h2>
            <p>Allocate assets to employees quickly</p>
          </div>

          <form onSubmit={handleSubmitAllocation} className="allocate-form">
            <div className="form-field">
              <label>Employee</label>
              <select 
                name="employee"
                value={allocationForm.employee}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Employee</option>
                {employeeAssets.map((emp) => (
                  <option key={emp.id} value={emp.empId}>
                    {emp.employeeName} ({emp.empId})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label>Asset Type</label>
              <select 
                name="assetType"
                value={allocationForm.assetType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Asset Type</option>
                <option value="Laptop">Laptop</option>
                <option value="Monitor">Monitor</option>
                <option value="Mouse">Mouse</option>
                <option value="Keyboard">Keyboard</option>
                <option value="Headphones">Headphones</option>
                <option value="Docking Station">Docking Station</option>
                <option value="Mobile">Mobile Phone</option>
                <option value="Tablet">Tablet</option>
                <option value="Webcam">Webcam</option>
              </select>
            </div>

            <div className="form-field">
              <label>Asset Name/Model</label>
              <input 
                type="text"
                name="assetName"
                value={allocationForm.assetName}
                onChange={handleInputChange}
                placeholder="e.g., Dell Latitude 5420"
                required
              />
            </div>

            <div className="form-field">
              <label>Serial Number</label>
              <input 
                type="text"
                name="serialNumber"
                value={allocationForm.serialNumber}
                onChange={handleInputChange}
                placeholder="Asset serial number"
                required
              />
            </div>

            <div className="form-field">
              <label>Allocation Date</label>
              <input 
                type="date"
                name="allocationDate"
                value={allocationForm.allocationDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="btn-submit-allocation">
              🚀 Allocate Asset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssetManagement;
