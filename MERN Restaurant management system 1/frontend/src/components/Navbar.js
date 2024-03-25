import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "./restaurant.jpeg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const LogoutUser = () => {
    if (window.confirm("You wanna logout?")) {
      localStorage.clear();
      window.location.href = "/login";
    } else {
      window.location.href = "/recipes";
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const auth = localStorage.getItem("token");

  const handleToggleMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav>
        <div className="nav-left">
          <img src={logo} alt="Logo" className="logo" />
          <FontAwesomeIcon
            icon={faBars}
            className="hamburger-icon"
            onClick={toggleMenu}
            style={isOpen ? { transform: "rotate(90deg)" } : {}}
          />
          <h2>Restaurant Management system</h2>
        </div>
        <div className={`nav-right ${isOpen ? "open" : ""}`}>
          <ul>
            {auth ? (
              <>
               <li>
                  <NavLink to="/home" onClick={handleToggleMenu}>
                    Home
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink to="recipes" onClick={handleToggleMenu}>
                    Recipes
                  </NavLink>{" "}
                </li>

                <li>
                  <NavLink to="/addRecipe" onClick={handleToggleMenu}>
                    Add Recipe
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/favouriteRecipes" onClick={handleToggleMenu}>
                    Favourites
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink to="/team" onClick={handleToggleMenu}>
                    Team
                  </NavLink>{" "}
                </li>
               
                <li>
                  <NavLink to="login" onClick={LogoutUser}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="login">Login</NavLink>{" "}
                </li>
                <li>
                  <NavLink to="signup">SignUp</NavLink>
                </li>
                <li>
                  <NavLink to="forgotPassword">Forgot Password</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
