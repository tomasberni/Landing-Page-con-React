import React from "react";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container">
        <div className="col-6">
            <a className="navbar-brand text-white" href="#">
              Navbar
            </a>
          </div>
          <div className="col-6 d-flex justify-content-end underline" style={{textDecoration: "none"}}>
            <a className="me-2" href="">
              Home
            </a>
            <a className="me-2" href="">
              About
            </a>
            <a className="me-2" href="">
              Service
            </a>
            <a className="me-2" href="">
              Contact
            </a>
          </div>
        </div>

    </nav>
  );
}

export default Navbar;
