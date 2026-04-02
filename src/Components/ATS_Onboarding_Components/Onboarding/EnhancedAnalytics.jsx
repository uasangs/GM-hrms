// import React, { useState } from 'react';
// import './EnhancedAnalytics.css';

// const EnhancedAnalytics = () => {
//   const [selectedPeriod, setSelectedPeriod] = useState('thisMonth');
//   const [selectedDepartment, setSelectedDepartment] = useState('all');

//   // Mock data - would come from API in production
//   const analyticsData = {
//     overview: {
//       totalInterns: 156,
//       activeOnboarding: 45,
//       completedOnboarding: 98,
//       averageCompletionTime: 12.5,
//       completionRate: 87.2,
//       dropoutRate: 4.8
//     },
//     departmentStats: [
//       { name: 'Engineering', total: 45, completed: 38, active: 5, avgTime: 11.2, color: '#E365A6' },
//       { name: 'Marketing', total: 32, completed: 28, active: 3, avgTime: 13.5, color: '#24145b' },
//       { name: 'Sales', total: 28, completed: 22, active: 4, avgTime: 14.1, color: '#10b981' },
//       { name: 'HR', total: 18, completed: 15, active: 2, avgTime: 10.8, color: '#f59e0b' },
//       { name: 'Finance', total: 23, completed: 20, active: 2, avgTime: 12.3, color: '#8b5cf6' },
//       { name: 'Operations', total: 10, completed: 8, active: 1, avgTime: 13.9, color: '#ef4444' }
//     ],
//     monthlyTrend: [
//       { month: 'Jan', started: 25, completed: 22, dropout: 2 },
//       { month: 'Feb', started: 30, completed: 26, dropout: 1 },
//       { month: 'Mar', started: 28, completed: 24, dropout: 3 },
//       { month: 'Apr', started: 35, completed: 31, dropout: 2 },
//       { month: 'May', started: 32, completed: 28, dropout: 1 },
//       { month: 'Jun', started: 38, completed: 34, dropout: 2 }
//     ],
//     processBreakdown: [
//       { stage: 'Pre-Joining', completion: 92, avgDays: 2 },
//       { stage: 'Documentation', completion: 88, avgDays: 3 },
//       { stage: 'System Access', completion: 85, avgDays: 4 },
//       { stage: 'Asset Assignment', completion: 90, avgDays: 2 },
//       { stage: 'Training', completion: 78, avgDays: 5 },
//       { stage: 'Probation Review', completion: 82, avgDays: 90 }
//     ],
//     documentStats: {
//       verified: 142,
//       pending: 28,
//       rejected: 8
//     },
//     assetStats: {
//       allocated: 134,
//       pending: 15,
//       returned: 7
//     }
//   };

//   const handleExport = () => {
//     // Export functionality would be implemented here
//     alert('Exporting analytics data...');
//   };

//   const getMaxValue = (data, key) => {
//     return Math.max(...data.map(item => item[key]));
//   };

//   return (
//     <div className="analytics-container">
//       <div className="analytics-content">
//         {/* Page Header */}
//         <div className="analytics-page-header">
//           <div className="analytics-title-section">
//             <h1 className="analytics-page-title">📊 Enhanced Analytics</h1>
//             <p className="analytics-page-subtitle">Comprehensive onboarding insights and metrics</p>
//           </div>
//           <div className="analytics-actions-group">
//             <select 
//               className="analytics-filter-select"
//               value={selectedPeriod}
//               onChange={(e) => setSelectedPeriod(e.target.value)}
//             >
//               <option value="thisWeek">This Week</option>
//               <option value="thisMonth">This Month</option>
//               <option value="lastMonth">Last Month</option>
//               <option value="thisQuarter">This Quarter</option>
//               <option value="thisYear">This Year</option>
//             </select>
//             <select 
//               className="analytics-filter-select"
//               value={selectedDepartment}
//               onChange={(e) => setSelectedDepartment(e.target.value)}
//             >
//               <option value="all">All Departments</option>
//               <option value="engineering">Engineering</option>
//               <option value="marketing">Marketing</option>
//               <option value="sales">Sales</option>
//               <option value="hr">HR</option>
//               <option value="finance">Finance</option>
//               <option value="operations">Operations</option>
//             </select>
//             <button className="analytics-export-btn" onClick={handleExport}>
//               <span className="analytics-btn-icon">⬇️</span>
//               Export Report
//             </button>
//           </div>
//         </div>

//         {/* Key Metrics Overview */}
//         <div className="analytics-metrics-grid">
//           <div className="analytics-metric-card">
//             <div className="analytics-metric-icon" style={{ background: 'linear-gradient(135deg, #E365A6 0%, #ff7eb9 100%)' }}>
//               👥
//             </div>
//             <div className="analytics-metric-content">
//               <p className="analytics-metric-label">Total Interns</p>
//               <h3 className="analytics-metric-value">{analyticsData.overview.totalInterns}</h3>
//               <span className="analytics-metric-change positive">+12% from last month</span>
//             </div>
//           </div>

//           <div className="analytics-metric-card">
//             <div className="analytics-metric-icon" style={{ background: 'linear-gradient(135deg, #24145b 0%, #3d2896 100%)' }}>
//               🎯
//             </div>
//             <div className="analytics-metric-content">
//               <p className="analytics-metric-label">Active Onboarding</p>
//               <h3 className="analytics-metric-value">{analyticsData.overview.activeOnboarding}</h3>
//               <span className="analytics-metric-change neutral">In progress</span>
//             </div>
//           </div>

//           <div className="analytics-metric-card">
//             <div className="analytics-metric-icon" style={{ background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' }}>
//               ✅
//             </div>
//             <div className="analytics-metric-content">
//               <p className="analytics-metric-label">Completed</p>
//               <h3 className="analytics-metric-value">{analyticsData.overview.completedOnboarding}</h3>
//               <span className="analytics-metric-change positive">{analyticsData.overview.completionRate}% completion rate</span>
//             </div>
//           </div>

//           <div className="analytics-metric-card">
//             <div className="analytics-metric-icon" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)' }}>
//               ⏱️
//             </div>
//             <div className="analytics-metric-content">
//               <p className="analytics-metric-label">Avg. Completion Time</p>
//               <h3 className="analytics-metric-value">{analyticsData.overview.averageCompletionTime} days</h3>
//               <span className="analytics-metric-change positive">-2 days from target</span>
//             </div>
//           </div>

//           <div className="analytics-metric-card">
//             <div className="analytics-metric-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)' }}>
//               📄
//             </div>
//             <div className="analytics-metric-content">
//               <p className="analytics-metric-label">Documents Verified</p>
//               <h3 className="analytics-metric-value">{analyticsData.documentStats.verified}</h3>
//               <span className="analytics-metric-change neutral">{analyticsData.documentStats.pending} pending</span>
//             </div>
//           </div>

//           <div className="analytics-metric-card">
//             <div className="analytics-metric-icon" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)' }}>
//               📉
//             </div>
//             <div className="analytics-metric-content">
//               <p className="analytics-metric-label">Dropout Rate</p>
//               <h3 className="analytics-metric-value">{analyticsData.overview.dropoutRate}%</h3>
//               <span className="analytics-metric-change positive">-1.2% improvement</span>
//             </div>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="analytics-charts-grid">
//           {/* Monthly Trend Chart */}
//           <div className="analytics-chart-card analytics-chart-full">
//             <div className="analytics-chart-header">
//               <h3 className="analytics-chart-title">Monthly Onboarding Trend</h3>
//               <div className="analytics-chart-legend">
//                 <span className="analytics-legend-item">
//                   <span className="analytics-legend-color" style={{ background: '#E365A6' }}></span>
//                   Started
//                 </span>
//                 <span className="analytics-legend-item">
//                   <span className="analytics-legend-color" style={{ background: '#10b981' }}></span>
//                   Completed
//                 </span>
//                 <span className="analytics-legend-item">
//                   <span className="analytics-legend-color" style={{ background: '#ef4444' }}></span>
//                   Dropout
//                 </span>
//               </div>
//             </div>
//             <div className="analytics-bar-chart">
//               {analyticsData.monthlyTrend.map((data, index) => {
//                 const maxValue = getMaxValue(analyticsData.monthlyTrend, 'started');
//                 return (
//                   <div key={index} className="analytics-bar-group">
//                     <div className="analytics-bar-container">
//                       <div 
//                         className="analytics-bar" 
//                         style={{ 
//                           height: `${(data.started / maxValue) * 100}%`,
//                           background: '#E365A6'
//                         }}
//                         title={`Started: ${data.started}`}
//                       >
//                         <span className="analytics-bar-value">{data.started}</span>
//                       </div>
//                       <div 
//                         className="analytics-bar" 
//                         style={{ 
//                           height: `${(data.completed / maxValue) * 100}%`,
//                           background: '#10b981'
//                         }}
//                         title={`Completed: ${data.completed}`}
//                       >
//                         <span className="analytics-bar-value">{data.completed}</span>
//                       </div>
//                       <div 
//                         className="analytics-bar" 
//                         style={{ 
//                           height: `${(data.dropout / maxValue) * 100}%`,
//                           background: '#ef4444'
//                         }}
//                         title={`Dropout: ${data.dropout}`}
//                       >
//                         <span className="analytics-bar-value">{data.dropout}</span>
//                       </div>
//                     </div>
//                     <span className="analytics-bar-label">{data.month}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Department Performance */}
//           <div className="analytics-chart-card">
//             <div className="analytics-chart-header">
//               <h3 className="analytics-chart-title">Department Performance</h3>
//             </div>
//             <div className="analytics-department-list">
//               {analyticsData.departmentStats.map((dept, index) => (
//                 <div key={index} className="analytics-department-item">
//                   <div className="analytics-dept-info">
//                     <span className="analytics-dept-color" style={{ background: dept.color }}></span>
//                     <div className="analytics-dept-details">
//                       <span className="analytics-dept-name">{dept.name}</span>
//                       <span className="analytics-dept-stats">
//                         {dept.completed}/{dept.total} completed • {dept.active} active
//                       </span>
//                     </div>
//                   </div>
//                   <div className="analytics-dept-progress">
//                     <div className="analytics-progress-bar">
//                       <div 
//                         className="analytics-progress-fill" 
//                         style={{ 
//                           width: `${(dept.completed / dept.total) * 100}%`,
//                           background: dept.color
//                         }}
//                       ></div>
//                     </div>
//                     <span className="analytics-dept-percentage">
//                       {Math.round((dept.completed / dept.total) * 100)}%
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Process Stage Breakdown */}
//           <div className="analytics-chart-card">
//             <div className="analytics-chart-header">
//               <h3 className="analytics-chart-title">Process Stage Completion</h3>
//             </div>
//             <div className="analytics-process-list">
//               {analyticsData.processBreakdown.map((stage, index) => (
//                 <div key={index} className="analytics-process-item">
//                   <div className="analytics-process-header">
//                     <span className="analytics-process-name">{stage.stage}</span>
//                     <span className="analytics-process-time">{stage.avgDays} days avg</span>
//                   </div>
//                   <div className="analytics-process-bar-wrapper">
//                     <div className="analytics-process-bar">
//                       <div 
//                         className="analytics-process-bar-fill" 
//                         style={{ width: `${stage.completion}%` }}
//                       ></div>
//                     </div>
//                     <span className="analytics-process-percentage">{stage.completion}%</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Additional Stats */}
//         <div className="analytics-additional-stats">
//           <div className="analytics-stat-card">
//             <h3 className="analytics-stat-title">Document Verification</h3>
//             <div className="analytics-stat-grid">
//               <div className="analytics-stat-item">
//                 <div className="analytics-stat-icon" style={{ background: '#d1fae5', color: '#10b981' }}>✓</div>
//                 <div className="analytics-stat-details">
//                   <p className="analytics-stat-label">Verified</p>
//                   <p className="analytics-stat-number">{analyticsData.documentStats.verified}</p>
//                 </div>
//               </div>
//               <div className="analytics-stat-item">
//                 <div className="analytics-stat-icon" style={{ background: '#fef3c7', color: '#f59e0b' }}>⏳</div>
//                 <div className="analytics-stat-details">
//                   <p className="analytics-stat-label">Pending</p>
//                   <p className="analytics-stat-number">{analyticsData.documentStats.pending}</p>
//                 </div>
//               </div>
//               <div className="analytics-stat-item">
//                 <div className="analytics-stat-icon" style={{ background: '#fee2e2', color: '#ef4444' }}>✗</div>
//                 <div className="analytics-stat-details">
//                   <p className="analytics-stat-label">Rejected</p>
//                   <p className="analytics-stat-number">{analyticsData.documentStats.rejected}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="analytics-stat-card">
//             <h3 className="analytics-stat-title">Asset Allocation</h3>
//             <div className="analytics-stat-grid">
//               <div className="analytics-stat-item">
//                 <div className="analytics-stat-icon" style={{ background: '#ddd6fe', color: '#8b5cf6' }}>💻</div>
//                 <div className="analytics-stat-details">
//                   <p className="analytics-stat-label">Allocated</p>
//                   <p className="analytics-stat-number">{analyticsData.assetStats.allocated}</p>
//                 </div>
//               </div>
//               <div className="analytics-stat-item">
//                 <div className="analytics-stat-icon" style={{ background: '#fef3c7', color: '#f59e0b' }}>📦</div>
//                 <div className="analytics-stat-details">
//                   <p className="analytics-stat-label">Pending</p>
//                   <p className="analytics-stat-number">{analyticsData.assetStats.pending}</p>
//                 </div>
//               </div>
//               <div className="analytics-stat-item">
//                 <div className="analytics-stat-icon" style={{ background: '#dbeafe', color: '#3b82f6' }}>↩️</div>
//                 <div className="analytics-stat-details">
//                   <p className="analytics-stat-label">Returned</p>
//                   <p className="analytics-stat-number">{analyticsData.assetStats.returned}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Insights Section */}
//         <div className="analytics-insights-section">
//           <h3 className="analytics-insights-title">📈 Key Insights</h3>
//           <div className="analytics-insights-grid">
//             <div className="analytics-insight-card success">
//               <div className="analytics-insight-icon">✨</div>
//               <div className="analytics-insight-content">
//                 <h4>Strong Performance</h4>
//                 <p>Engineering department shows highest completion rate at 84% with fastest average completion time of 11.2 days.</p>
//               </div>
//             </div>
//             <div className="analytics-insight-card warning">
//               <div className="analytics-insight-icon">⚠️</div>
//               <div className="analytics-insight-content">
//                 <h4>Attention Needed</h4>
//                 <p>Training stage has the lowest completion rate at 78%. Consider reviewing training module accessibility and content.</p>
//               </div>
//             </div>
//             <div className="analytics-insight-card info">
//               <div className="analytics-insight-icon">💡</div>
//               <div className="analytics-insight-content">
//                 <h4>Improvement Opportunity</h4>
//                 <p>Dropout rate improved by 1.2% this month. Continue monitoring early-stage engagement to maintain this trend.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnhancedAnalytics;









import React, { useState } from 'react';
import { 
  TrendingUp, Users, DollarSign, FileText, Clock, Calendar, 
  Download, Filter, ChevronDown, BarChart3, PieChart, Activity,
  Target, Award, CheckCircle, AlertCircle, XCircle, Building2,
  GraduationCap, Briefcase, UserCheck, UserX, ArrowUp, ArrowDown,
  Minus, Eye, RefreshCw, Share2, Printer
} from 'lucide-react';

const EnhancedAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Key Metrics Data
  const keyMetrics = [
    { 
      label: 'Total Interns', 
      value: '156', 
      change: '+12%',
      trend: 'up',
      icon: Users, 
      color: '#E365A6',
      subtext: 'vs last month'
    },
    { 
      label: 'Onboarding Rate', 
      value: '94%', 
      change: '+5%',
      trend: 'up',
      icon: TrendingUp, 
      color: '#4CAF50',
      subtext: 'completion rate'
    },
    { 
      label: 'Avg. Time to Onboard', 
      value: '3.2 days', 
      change: '-0.5 days',
      trend: 'up',
      icon: Clock, 
      color: '#2196F3',
      subtext: 'process efficiency'
    },
    { 
      label: 'Monthly Stipend Cost', 
      value: '₹24.5L', 
      change: '+8%',
      trend: 'down',
      icon: DollarSign, 
      color: '#24145b',
      subtext: 'total payout'
    }
  ];

  // Department-wise data
  const departmentData = [
    { 
      name: 'Engineering', 
      interns: 68, 
      completed: 62, 
      pending: 6, 
      avgStipend: 18500,
      color: '#E365A6',
      completion: 91
    },
    { 
      name: 'Marketing', 
      interns: 32, 
      completed: 30, 
      pending: 2, 
      avgStipend: 15000,
      color: '#24145b',
      completion: 94
    },
    { 
      name: 'Design', 
      interns: 24, 
      completed: 23, 
      pending: 1, 
      avgStipend: 16500,
      color: '#2196F3',
      completion: 96
    },
    { 
      name: 'Sales', 
      interns: 18, 
      completed: 16, 
      pending: 2, 
      avgStipend: 14000,
      color: '#4CAF50',
      completion: 89
    },
    { 
      name: 'HR', 
      interns: 14, 
      completed: 14, 
      pending: 0, 
      avgStipend: 15500,
      color: '#FFA726',
      completion: 100
    }
  ];

  // Onboarding funnel data
  const funnelStages = [
    { stage: 'Applications Received', count: 450, percentage: 100, color: '#E365A6' },
    { stage: 'Offer Letters Sent', count: 280, percentage: 62, color: '#D84A91' },
    { stage: 'Offers Accepted', count: 190, percentage: 42, color: '#C33076' },
    { stage: 'Onboarding Started', count: 178, percentage: 40, color: '#AE165B' },
    { stage: 'Onboarding Completed', count: 156, percentage: 35, color: '#24145b' }
  ];

  // Document verification status
  const documentStats = [
    { type: 'ID Proof', verified: 142, pending: 14, rejected: 0, total: 156 },
    { type: 'Educational Certs', verified: 138, pending: 16, rejected: 2, total: 156 },
    { type: 'Bank Details', verified: 145, pending: 11, rejected: 0, total: 156 },
    { type: 'PAN Card', verified: 149, pending: 7, rejected: 0, total: 156 },
    { type: 'Address Proof', verified: 135, pending: 19, rejected: 2, total: 156 }
  ];

  // Training completion data
  const trainingData = [
    { module: 'Company Orientation', completed: 148, inProgress: 6, notStarted: 2 },
    { module: 'Code of Conduct', completed: 145, inProgress: 8, notStarted: 3 },
    { module: 'Information Security', completed: 132, inProgress: 18, notStarted: 6 },
    { module: 'Department Training', completed: 89, inProgress: 45, notStarted: 22 }
  ];

  // Monthly trends
  const monthlyTrends = [
    { month: 'Aug', joinings: 18, completions: 16, dropouts: 2 },
    { month: 'Sep', joinings: 22, completions: 20, dropouts: 1 },
    { month: 'Oct', joinings: 25, completions: 24, dropouts: 1 },
    { month: 'Nov', joinings: 28, completions: 25, dropouts: 3 },
    { month: 'Dec', joinings: 24, completions: 23, dropouts: 1 },
    { month: 'Jan', joinings: 30, completions: 28, dropouts: 2 },
    { month: 'Feb', joinings: 12, completions: 10, dropouts: 0 }
  ];

  // Performance indicators
  const performanceMetrics = [
    { 
      metric: 'Document Processing Time',
      value: '1.8 days',
      target: '2.0 days',
      status: 'good',
      improvement: '10%'
    },
    { 
      metric: 'IT Asset Allocation',
      value: '2.5 days',
      target: '3.0 days',
      status: 'good',
      improvement: '16%'
    },
    { 
      metric: 'Training Completion Rate',
      value: '87%',
      target: '90%',
      status: 'warning',
      improvement: '-3%'
    },
    { 
      metric: 'First Week Engagement',
      value: '92%',
      target: '85%',
      status: 'excellent',
      improvement: '8%'
    }
  ];

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <ArrowUp className="w-4 h-4" />;
    if (trend === 'down') return <ArrowDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'excellent': return '#4CAF50';
      case 'good': return '#2196F3';
      case 'warning': return '#FFA726';
      case 'poor': return '#FF6B6B';
      default: return '#9E9E9E';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 md:p-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#24145b] mb-2">
                Enhanced Analytics
              </h1>
              <p className="text-gray-600">Comprehensive insights into your onboarding process</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E365A6] focus:border-transparent cursor-pointer"
                >
                  <option value="week">Last Week</option>
                  <option value="month">Last Month</option>
                  <option value="quarter">Last Quarter</option>
                  <option value="year">Last Year</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Filter className="w-5 h-5" />
                <span className="hidden sm:inline">Filters</span>
              </button>
              
              <button className="px-4 py-2 bg-[#E365A6] text-white rounded-lg hover:bg-[#d14d8f] transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {keyMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${metric.color}15` }}
                >
                  <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  metric.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {getTrendIcon(metric.trend)}
                  {metric.change}
                </div>
              </div>
              <div className="text-3xl font-bold mb-1" style={{ color: metric.color }}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-500">{metric.subtext}</div>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-2 gap-4 mb-6">
  {keyMetrics.map((metric, index) => (
    <div
      key={index}
      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="p-2 rounded-md"
          style={{ backgroundColor: `${metric.color}15` }}
        >
          <metric.icon className="w-5 h-5" style={{ color: metric.color }} />
        </div>

        <div
          className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${
            metric.trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {getTrendIcon(metric.trend)}
          {metric.change}
        </div>
      </div>

      <div className="text-2xl font-bold mb-1" style={{ color: metric.color }}>
        {metric.value}
      </div>

      <div className="text-sm text-gray-700 leading-tight">{metric.label}</div>
      <div className="text-xs text-gray-500">{metric.subtext}</div>
    </div>
  ))}
</div>


        {/* Onboarding Funnel */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#24145b]">Onboarding Funnel</h2>
            <button className="text-[#E365A6] hover:text-[#d14d8f] transition-colors flex items-center gap-2">
              <Eye className="w-5 h-5" />
              View Details
            </button>
          </div>
          
          <div className="space-y-4">
            {funnelStages.map((stage, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{stage.stage}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">{stage.count} candidates</span>
                    <span className="text-sm font-medium" style={{ color: stage.color }}>
                      {stage.percentage}%
                    </span>
                  </div>
                </div>
                <div className="relative h-12 bg-gray-100 rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 rounded-lg transition-all duration-500 flex items-center justify-center text-white font-medium"
                    style={{ 
                      width: `${stage.percentage}%`,
                      backgroundColor: stage.color
                    }}
                  >
                    {stage.percentage > 15 && stage.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Department Performance */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#24145b] mb-6">Department Performance</h2>
            <div className="space-y-4">
              {departmentData.map((dept, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: dept.color }}
                      />
                      <span className="font-semibold text-gray-900">{dept.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{dept.interns} interns</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mb-3 text-sm">
                    <div>
                      <span className="text-gray-500 block">Completed</span>
                      <span className="font-medium text-green-600">{dept.completed}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Pending</span>
                      <span className="font-medium text-orange-600">{dept.pending}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Avg Stipend</span>
                      <span className="font-medium text-gray-900">₹{dept.avgStipend}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Completion Rate</span>
                      <span className="font-medium">{dept.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${dept.completion}%`,
                          backgroundColor: dept.color
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Document Verification Status */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#24145b] mb-6">Document Verification Status</h2>
            <div className="space-y-4">
              {documentStats.map((doc, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-gray-900">{doc.type}</span>
                    <span className="text-sm text-gray-600">{doc.total} total</span>
                  </div>
                  
                  <div className="flex gap-2 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-600">Verified</span>
                        <span className="font-medium text-green-600">{doc.verified}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${(doc.verified / doc.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 text-xs">
                    <span className="text-orange-600">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {doc.pending} pending
                    </span>
                    {doc.rejected > 0 && (
                      <span className="text-red-600">
                        <XCircle className="w-3 h-3 inline mr-1" />
                        {doc.rejected} rejected
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Completion & Monthly Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Training Completion */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#24145b] mb-6">Training Module Progress</h2>
            <div className="space-y-5">
              {trainingData.map((training, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{training.module}</span>
                    <span className="text-sm text-gray-600">
                      {training.completed}/{training.completed + training.inProgress + training.notStarted}
                    </span>
                  </div>
                  
                  <div className="flex gap-1 h-3 rounded-full overflow-hidden bg-gray-100">
                    <div
                      className="bg-green-500"
                      style={{ 
                        width: `${(training.completed / (training.completed + training.inProgress + training.notStarted)) * 100}%` 
                      }}
                      title={`${training.completed} completed`}
                    />
                    <div
                      className="bg-orange-400"
                      style={{ 
                        width: `${(training.inProgress / (training.completed + training.inProgress + training.notStarted)) * 100}%` 
                      }}
                      title={`${training.inProgress} in progress`}
                    />
                    <div
                      className="bg-gray-300"
                      style={{ 
                        width: `${(training.notStarted / (training.completed + training.inProgress + training.notStarted)) * 100}%` 
                      }}
                      title={`${training.notStarted} not started`}
                    />
                  </div>
                  
                  <div className="flex gap-4 mt-2 text-xs">
                    <span className="text-green-600">✓ {training.completed} completed</span>
                    <span className="text-orange-600">⏳ {training.inProgress} in progress</span>
                    <span className="text-gray-500">○ {training.notStarted} not started</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Trends */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#24145b] mb-6">Monthly Trends</h2>
            <div className="space-y-1 mb-4">
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#E365A6] rounded"></div>
                  <span className="text-gray-600">Joinings</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#4CAF50] rounded"></div>
                  <span className="text-gray-600">Completions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF6B6B] rounded"></div>
                  <span className="text-gray-600">Dropouts</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              {monthlyTrends.map((month, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-600 w-8">{month.month}</span>
                  <div className="flex-1 flex gap-1">
                    <div className="relative flex-1 bg-gray-100 rounded h-8 flex items-center">
                      <div
                        className="absolute inset-y-0 left-0 bg-[#E365A6] rounded flex items-center justify-center text-white text-xs font-medium"
                        style={{ width: `${(month.joinings / 30) * 100}%` }}
                      >
                        {month.joinings > 5 && month.joinings}
                      </div>
                    </div>
                    <div className="relative flex-1 bg-gray-100 rounded h-8 flex items-center">
                      <div
                        className="absolute inset-y-0 left-0 bg-[#4CAF50] rounded flex items-center justify-center text-white text-xs font-medium"
                        style={{ width: `${(month.completions / 30) * 100}%` }}
                      >
                        {month.completions > 5 && month.completions}
                      </div>
                    </div>
                    <div className="relative flex-1 bg-gray-100 rounded h-8 flex items-center">
                      <div
                        className="absolute inset-y-0 left-0 bg-[#FF6B6B] rounded flex items-center justify-center text-white text-xs font-medium"
                        style={{ width: `${(month.dropouts / 30) * 100}%` }}
                      >
                        {month.dropouts > 2 && month.dropouts}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        {/* <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#24145b]">Performance Indicators</h2>
            <button className="px-4 py-2 text-[#E365A6] hover:text-[#d14d8f] transition-colors flex items-center gap-2">
              <RefreshCw className="w-5 h-5" />
              Refresh Data
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{metric.metric}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold" style={{ color: getStatusColor(metric.status) }}>
                        {metric.value}
                      </span>
                      <span className="text-sm text-gray-500">/ {metric.target} target</span>
                    </div>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: getStatusColor(metric.status) }}
                  >
                    {metric.status}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: metric.status === 'warning' ? '87%' : '100%',
                        backgroundColor: getStatusColor(metric.status)
                      }}
                    />
                  </div>
                  <span className={`text-xs font-medium ${
                    metric.improvement.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.improvement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="bg-white rounded-lg shadow-md p-4">
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-semibold text-[#24145b]">
      Performance Indicators
    </h2>

    <button className="px-3 py-1.5 text-sm text-[#E365A6] hover:text-[#d14d8f] transition-colors flex items-center gap-1.5">
      <RefreshCw className="w-4 h-4" />
      Refresh
    </button>
  </div>

  {/* Metrics Grid */}
  <div className="grid grid-cols-2 gap-3">
    {performanceMetrics.map((metric, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-md p-4 hover:shadow-sm transition-shadow"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
              {metric.metric}
            </h3>

            <div className="flex items-baseline gap-1.5">
              <span
                className="text-xl font-bold"
                style={{ color: getStatusColor(metric.status) }}
              >
                {metric.value}
              </span>
              <span className="text-xs text-gray-500">
                / {metric.target}
              </span>
            </div>
          </div>

          <div
            className="px-2 py-0.5 rounded-full text-[11px] font-medium text-white"
            style={{ backgroundColor: getStatusColor(metric.status) }}
          >
            {metric.status}
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-200 rounded-full h-1.5">
            <div
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: metric.status === "warning" ? "87%" : "100%",
                backgroundColor: getStatusColor(metric.status),
              }}
            />
          </div>

          <span
            className={`text-xs font-medium ${
              metric.improvement.startsWith("+")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {metric.improvement}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Printer className="w-5 h-5" />
            Print Report
          </button>
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Share Dashboard
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-[#E365A6] to-[#24145b] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAnalytics;