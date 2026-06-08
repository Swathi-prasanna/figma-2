import React from "react";
import {Link} from "react-router-dom";

function Routing() {
  return (
    <div>
      <nav className="navbar bg-light">
        <ul className="nav-item">
          <Link to="/abc">
            <li className="nav-link">First Page</li>
          </Link>
          <Link to="/xyz">
            <li className="nav-link">Second Page</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Routing;
