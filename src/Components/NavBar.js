import "./NavBar.css";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" alt="Netflix Logo" src={logo} />
    </div>
  );
}

export default NavBar;
