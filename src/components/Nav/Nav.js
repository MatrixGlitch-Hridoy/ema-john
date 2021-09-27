import React from "react";
import { NavLink,NavbarBrand } from "react-bootstrap";

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <NavbarBrand class="navbar-brand" href="/">
            ema-john
          </NavbarBrand>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink class="nav-link" aria-current="page" href="/shop">
                  Shop
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" aria-current="page" href="/order-review">
                  Order Review
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" aria-current="page" href="manage-inventory">
                  Manage Inventory
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
