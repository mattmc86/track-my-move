import React from "react";


import "../Header/header.css";

import Logo from "../../../src/assets/logo.png";

import { Link, NavLink } from "react-router-dom";


import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className=" text-light mb-4 py-3 flex-row align-center header">
      <img className="logo" src={Logo} alt="Logo Image" />

      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>

          <h1 className="m-0 header-title">Track My Move</h1>


          <p className="m-0">
            One stop shop for all you need when buying a property.
          </p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              {Auth.getProfile()?.data?.role === "Buyer" ? (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "btn btn-lg btn-info m-2"
                        : "btn btn-lg btn-light m-2"
                    }
                    to="/"
                  >
                    Roadmap
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "btn btn-lg btn-info m-2"
                        : "btn btn-lg btn-light m-2"
                    }
                    to="/me"
                  >
                    {Auth.getProfile().data.username}'s profile
                  </NavLink>
                </>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "btn btn-lg btn-info m-2"
                      : "btn btn-lg btn-light m-2"
                  }
                  to="/"
                >
                  Dashboard
                </NavLink>
              )}
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-lg btn-info m-2"
                    : "btn btn-lg btn-light m-2"
                }
                to="/about"
              >
                About Us
              </NavLink>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg m-2 btn-1" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
