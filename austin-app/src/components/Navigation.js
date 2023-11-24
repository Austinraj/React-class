import React from "react";

import { Link } from "react-router-dom"

function Navigation(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
  <Link className="navbar-brand" to="/">
    <img className="" src="/images/guvi.webp" />
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link className="nav-link active" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/users">Users</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/priceing">Priceing</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link " to="/login">
        <button className="btn btn-success">Login</button>
      </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link " to="/register">
        <button className="btn btn-primary">Register</button>
      </Link>  
      </li>
    </ul>
  </div>
  </div>
</nav>

    );
}

export default Navigation;