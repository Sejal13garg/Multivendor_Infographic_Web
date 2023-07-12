import React from "react";
import { NavLink } from "react-router-dom";
import HomePage from "../../pages/HomePage.js";
import Register from "../../pages/Auth/Register.js";
import { useAuth } from "../../context/auth.js";
import { token } from "morgan";
import { toast } from "react-hot-toast";

export default function Header() {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    console.log("sejal garg");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("logout successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  element={<HomePage />}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/category"
                >
                  Category
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {auth.user && auth.user.role === "customer" && (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard">
                          User Dashboard
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/cart">
                          Cart
                        </NavLink>
                      </li>
                    </>
                  )}
                  {auth.user && auth.user.role === "vendor" && (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/vendordashboard">
                          Vendor Dashboard
                        </NavLink>
                      </li>
                    </>
                  )}
                  {auth.user && auth.user.role === "admin" && (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/admindashboard">
                          Admin Dashboard
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li className="nav-item">
                    <NavLink
                      onClick={handleLogout}
                      className="nav-link"
                      to="/login"
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
