import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Nav = () => {
  const {user, logOut} = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid"> 
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/order-review"
                >
                  Order Review
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/manage-inventory"
                >
                  Manage Inventory
                </Link>
              </li>
              {user.email && <li className="text-warning mt-2 nav-item">Hello, {user.displayName}
              </li> }
              {
                user.email ? <li className="nav-item">
                <Link onClick={logOut}
                  className="nav-link"
                  aria-current="page"
                  to="/login"
                >
                  Logout
                </Link>
              </li>
              : 
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              }
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
