import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    setShow(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${show && "navbar-black"}`}>
      <img
        className="navbar-logo"
        src="/logo.png"
        alt="Netflix Logo"
      />
      <img
        className="navbar-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      />
    </div>
  );
};

export default Navbar;
