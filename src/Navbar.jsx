import React from "react";
import './index.css';
import { NavLink, Link } from "react-router-dom";
const Navbar=()=>{

    return(
<>
<div className="header">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mynav">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler "  type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 " style={{fontSize: '17px' }}>
        <li className="nav-item" >
        
          <NavLink className="nav-link active" aria-current="page"  to="/">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/service">service</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
      
       
      </ul>
     

      </div>
 <Link to="/contact" className="btn btn-default"> Get a Quote </Link>
  </div>
</nav>
</div>



{/* mobile=headerrr */}
<div class="offcanvas offcanvas-start" tabindex="-1" id="navbarSupportedContent" aria-labelledby="navbarSupportedContent">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{fontSize: '17px' }}>
        <li className="nav-item" >
        
          <NavLink className="nav-link active" aria-current="page"  to="/">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page"  to="/about">About</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page"  to="/service">service</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page"  to="/contact">Contact</NavLink>
        </li>
      
       
      </ul>
  </div>
</div>

{/* mobile header-end */}
</>


    );
}

export default Navbar;