import React from 'react'
import { GoDownload } from "react-icons/go";

const FinanceDashboard = () => {
  return (
    <section className='hero-main'>
        <div className='main-data'>
           <h1 className='hero-heading'>Finance Dashboard</h1>
           <p className='hero-sub'>Revenue, receivables &amp;financial analytics</p>
        </div>
        <div className="header-right">
          <input type="text" className="search-box" placeholder=" "/>
          <button className="export-btn">
              <span className="icon"></span><GoDownload color="white" />Export Report
          </button>
        </div>
        
    </section>

  )
}
export default FinanceDashboard;  