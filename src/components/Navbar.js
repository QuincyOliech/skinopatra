import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";



function Navbar({setSearchString}) {
 

  return (
    <div className="main-navbar position-">
      <div className="navbar-announcement">Free Shipping on Orders above $60 !!</div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm me-4 mx-1">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-2 text-warning" to="/">
            SKINOPATRA.
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-1 mb-2 mb-lg">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/createproductform">
                  Add Product
                </NavLink>
              </li>
            </ul>
            
            <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-2"></i>Login</NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-4 me-4">
                    <i className="fa fa-shopping-cart me-2"></i>Cart(0)</NavLink>
            </div>
            <Search setSearchString={setSearchString}/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
