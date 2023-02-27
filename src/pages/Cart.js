import React from "react";
import { NavLink } from "react-router-dom";

function Cart (){
    return (
        <div>
            <NavLink to="/cart" className="btn btn-outline-dark ms-4 me-4">
                    <i className="fa fa-shopping-cart me-2"></i>Cart(0)</NavLink>
        </div>
    )
}

export default Cart