import React, { useEffect, useState } from "react";
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false)
    // darken nav on scroll
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

  return (
    <div className={`nav ${show && "nav_bg"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        className="nav_logo"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
        className="nav_avatar"
      />
    </div>
  );
}

export default Nav;
