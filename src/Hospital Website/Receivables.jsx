import React from 'react'
const AccountsReceivable=()=>{
    const agingData = [
        {title:"0-30 days",amount:"125k",invoices:"12 invoices"},
        {title:"31-60 days", amount:"87k",invoices:"8 invoicees"},
        {title:"61-90 days", amount:"45k",invoices:"5 invoices"},
        {title:"90+ days", amount:"23k",invoices:"3 invoices"}
    ];
    const bills=[
    {
        invoice:"BILL002",
        patient:"Sarah Williams",
        date:"2026-01-03",
        amount:"1,980",
        outstanding:"980",
        overdue:"37 days",
        claim:"N/A",
    },
    {
        invoice: "BILL003",
        patient:"Robert Taylor",
        date:"2026-01-03",
        amount:"21,670",
        outstanding:"21,670",
        overdue:"5 days",
        claim:"pending",
    },
];
}

const Receivables = () => {
  return (
    <div className="accounts-container">
        <div className="top-header">
            <div>
            <h2> Accounts Receivable</h2>
            <p>Outstanding payments and insurance claims</p>
        </div>
        <div className="header-buttons">
            <button className="filter-btn">Filter</button>
            <button className="export-btn">Export Aging Report</button>
        </div>
    </div>
    <div className="aging-cards">
        {agingData.map((item,index)=>(<div className="aging-card" key={index}>
            <h5>{item.tittle}</h5>
            <h3>{item.amount}</h3>
            <p>{item.invoices}</p>
        </div>))}
    </div>
    <div className="chart-card">
        <h4>Aging Analysid</h4>
        <div className="chart-area">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
            <div className="bar bar4"></div>
        </div>
        <div className="chart-labels">
            <span>0-30 days</span>
            <span>31-60 days</span>
            <span>61-90 days</span>
            <span>90+ days</span>
        </div>
    </div>
     <div className="table-card">
        <h4>Outstanding Bills</h4>
        <table>
            <thead>
                <tr>
                    <th>Invoice</th>
                    <th>Patient</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Outstanding</th>
                    <th>Days Overdue</th>
                    <th>insurance Claim</th>
                    <th>Actions</th>
                    </tr></thead>
                    <tbody>
                        {bills.map((bill,index)=>(<tr key={index}>
                            <td>{bill.invoice}</td>
                            <td>{bill.patient}</td>
                            <td>{bill.date}</td>
                            <td>{bill.amount}</td>
                            <td className="red-text">{bill.outstanding}</td>
                            <td>
                                <span className="overdue-badge">{bill.overdue}</span>
                            </td>
                            <td>
                                <span className={billclaim==="pending" ?"pending-badge":"na-badge"}>
                                    {bill.claim}
                                </span>
                            </td>
                            <td><button className="follow-btn">Follow Up</button>
                            <button className="collection-btn"></button></td>
                        </tr>))}
                        </tbody>
                        </table>
                     </div>
                     <div className="clamis-card">
                        <div className="claims-header">
                            <h4>Insurance Claims Status</h4>
                            <buttons className="submit-btn">
                                Submit New Claim
                            </buttons>
                        </div>
                        <div className="claims-grid">
                            <div className="claim-box pending">
                                <p>Pending Approval</p>
                                <h2>8 Claims</h2>
                                <span>245,000</span>
                            </div>
                            <div className="claim-box approved">
                                <p>Approved</p>
                                <h2>15 Claims</h2>
                                <span>687,000</span>
                            </div>
                            <div className="claim-box rejected">
                                <p>Rejected</p>
                                <h2>2 Claims</h2>
                                <span>45,000</span>
                            </div>
                        </div>
                     </div>
                  </div>
    
  );
};

export default Receivables