import React from "react";


function Navigation(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
  <a className="navbar-brand" href="#">
    <img className="" src="/images/guvi.webp" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link active" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Users</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Contact</a>
      </li>
      <li className="nav-item">
      <a className="nav-link " href="#">
        <button className="btn btn-success">Login</button>
      </a>
      </li>
      <li className="nav-item">
      <a className="nav-link " href="#">
        <button className="btn btn-primary">Register</button>
      </a>  
      </li>
    </ul>
  </div>
  </div>
</nav>

    );
}

export default Navigation;