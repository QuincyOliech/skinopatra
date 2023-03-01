import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";



function Navbar({setSearchString}) {
 

  return (
    <div className="main-navbar">
      <div className="navbar-announcement">Free Shipping on Orders above $60 !!</div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm me-4 mx-1">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mx-4 mb-lg-0 px-2">
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
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand mx-auto fw-bold fs-2 text-warning" to="/">
            SKINOPATRA.
          </NavLink>
            
            <div className="buttons">
                <SignUp/>
                <Login/>
            </div>
            <NavLink className="nav-link" to="/cart">
              <button type="button" className="btn btn-outline-primary me-2 ms-2">
                  <span className="fa-solid fa-cart-shopping me-2"></span>
                    Cart
              </button>
            </NavLink>
            
            <Search setSearchString={setSearchString}/>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;
