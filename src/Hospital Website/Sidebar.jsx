import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineBed } from "react-icons/md";
import { RxPeople } from "react-icons/rx";
import { LuTestTube } from "react-icons/lu";
import vector from "./Vector.png";
import taskimg from "./task.png";
import admin from "./admin.png";
import medicareicon from "./mediicon.png";
import wrong from "./wrong.png";
import { CiLogin } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { DocumentAttachOutline  } from "react-icons/io5";


const Sidebar = () => {
  return (
    <header>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                <div className="header container">
                              <div className="header-content">
                                    <img src={medicareicon} className="medi-icon"></img>
                                    <div className="medicare-data">MediCare HIS</div>
                                  </div>
                                  <div>
                                    <img
                                      src={wrong}
                                      className="wrong-content"
                                      width="20px"
                                      height="20px"
                                    ></img>
                                  </div>
                                </div>
        
            <div className="dashboard-item">
            <NavLink
              href="dashboard-item"
              className="text-decoration-none py-2"
              aria-current="true"
            >
              <span className="dashboard">
                <RiDashboardLine size={20} />
                &nbsp; Dashboard
              </span>
            </NavLink></div>
            <NavLink to="/InvoicingBilling"
              className={({ isActive})=>isActive ? "sidebar-items active-menu text-decoration-none py-3" : "sidebar-items text-decoration-none text-secondary py-3"}
              >
              <span className="bed-management">
                <IoDocumentTextOutline size={20} />
                &nbsp; Invoicing
              </span>
            </NavLink>
            <a
              href="#"
              class="sidebar-items text-decoration-none text-secondary py-3"
            >
              <span className="bed-management">
                <FiDollarSign  size={20} />
                &nbsp; Receivables
              </span>
            </a>
            
           
            <a
              href="#"
              className="sidebar-items text-decoration-none text-secondary py-3"
            >
              <span className="vital">
                <img src={vector} width={20} height={20}></img>&nbsp; Financial Reports
              </span>
            </a>
            <a
              href="#"
              className="sidebar-items text-decoration-none text-secondary py-3"
            >
              <span className="task">
                <img src={taskimg} width={20} height={20}></img>&nbsp; Refunds
              </span>
            </a>
          </div>
        </div>
      </nav>
        <div className="sidebar-footer">
          <div className="footer-admin">
            <img src={admin} />
            <div>
                <p className="admin-name">David Chen</p>
                <p className="admin-occ">Accountant</p>
            </div>
          </div>
          <div className="login-btn">
             <CiLogin className="login-icon"/>
             <span className="logout-btn">Logout</span>
          </div>
        </div>
    </header>
  );
};

export default Sidebar;
