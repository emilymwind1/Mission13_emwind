import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
      <ul className="navbar-nav">
                
        <li className="nav-item">
                    
          <Link to="/" className="nav-link">
            Home
          </Link>
                  
        </li>
                
        <li className="nav-item">
                    
          <Link to="/podcast" className="nav-link">
            Podcasts
          </Link>
                  
        </li>
                
        <li className="nav-item">
                    
          <Link to="/movielist" className="nav-link">
            Movie List
          </Link>
                  
        </li>
              
      </ul>
          
    </nav>
  );
}

export default Navbar;
