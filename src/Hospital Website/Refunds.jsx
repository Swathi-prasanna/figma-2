import React, { useState } from "react";

const refundRequests = [
  {
    id: "REF001",
    billId: "BILL001",
    patient: "John Anderson",
    amount: "₹500",
    reason: "Service not provided",
    requestedBy: "Maria Rodriguez",
    date: "2026-01-03",
    status: "pending"
  },
  {
    id: "REF002",
    billId: "BILL005",
    patient: "Sarah Williams",
    amount: "₹1,200",
    reason: "Duplicate payment",
    requestedBy: "Front Desk",
    date: "2026-01-02",
    status: "approved"
  },
  {
    id: "REF003",
    billId: "BILL008",
    patient: "Michael Chen",
    amount: "₹300",
    reason: "Discount adjustment",
    requestedBy: "Reception",
    date: "2026-01-01",
    status: "rejected"
  }
];

const Refunds = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="refunds-page">
      <div className="refunds-header">
        <div>
          <h2 className="refunds-title">Refunds & Adjustments</h2>
          <p className="refunds-subtitle">Manage refund requests and approvals</p>
        </div>
        <button 
          className="btn btn-primary new-refund-btn" 
          onClick={() => setShowModal(true)}
        >
          <i className="bi bi-file-earmark-plus"></i> New Refund Request
        </button>
      </div>

      <div className="refunds-stats">
        <div className="stat-card">
          <div className="stat-icon pending-icon">
            <i className="bi bi-clock-history"></i>
          </div>
          <div className="stat-content">
            <h5>Pending Approval</h5>
            <h3>1</h3>
            <p className="pending-text">₹500 total</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon approved-icon">
            <i className="bi bi-check-circle"></i>
          </div>
          <div className="stat-content">
            <h5>Approved</h5>
            <h3>1</h3>
            <p className="approved-text">₹1,200 total</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon rejected-icon">
            <i className="bi bi-exclamation-triangle"></i>
          </div>
          <div className="stat-content">
            <h5>Rejected</h5>
            <h3>1</h3>
            <p className="rejected-text">₹300 total</p>
          </div>
        </div>
      </div>

      <div className="table-card">
        <h4 className="mb-3">Refund Requests</h4>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>Refund ID</th>
                <th>Bill ID</th>
                <th>Patient</th>
                <th>Amount</th>
                <th>Reason</th>
                <th>Requested By</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {refundRequests.map((request) => (
                <tr key={request.id}>
                  <td>
                    <span className="badge bg-light text-dark">{request.id}</span>
                  </td>
                  <td>
                    <span className="bill-badge">{request.billId}</span>
                  </td>
                  <td>{request.patient}</td>
                  <td className="fw-semibold">{request.amount}</td>
                  <td>{request.reason}</td>
                  <td>{request.requestedBy}</td>
                  <td>{request.date}</td>
                  <td>
                    <span className={`status-badge ${request.status}`}>
                      {request.status}
                    </span>
                  </td>
                  <td>
                    {request.status === "pending" ? (
                      <>
                        <button className="btn btn-success btn-sm me-2">Approve</button>
                        <button className="btn btn-danger btn-sm">Reject</button>
                      </>
                    ) : (
                      <button className="btn btn-outline-secondary btn-sm">View Details</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="refund-info-card mt-4">
        <h5 className="info-title">
          <i className="bi bi-info-circle me-2"></i>Refund Approval Workflow
        </h5>
        <ul className="info-list">
          <li>All refunds require Finance Manager approval</li>
          <li>Refunds above ₹5,000 require Admin sign-off</li>
          <li>Approved refunds are processed within 3-5 business days</li>
          <li>All refund actions are logged in the audit trail</li>
        </ul>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>New Refund Request</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Bill ID</label>
                <input type="text" className="form-control" placeholder="Enter Bill ID" />
              </div>
              <div className="form-group">
                <label className="form-label">Refund Amount</label>
                <input type="number" className="form-control" placeholder="Enter amount" />
              </div>
              <div className="form-group">
                <label className="form-label">Reason for Refund</label>
                <textarea className="form-control" rows="3" placeholder="Describe reason..."></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">Requested By</label>
                <input type="text" className="form-control" placeholder="Your name" />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-primary">Submit Request</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Refunds;
