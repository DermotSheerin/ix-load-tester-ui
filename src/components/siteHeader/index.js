import React from "react";
import { Link } from "react-router-dom";
//import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";


const SiteHeader = () => {


  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          IX Load Tester Configuration
        </Link>
      </nav>
      
      {/* <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Load Tester Configuration
            </Link>
          </li>
 
        </ul>
      </nav> */}
    </nav>
  );
};

export default SiteHeader;