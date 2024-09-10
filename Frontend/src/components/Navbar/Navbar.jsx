import "./Navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {

  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  return (
    <header id="header">
      <div className="head-bar">
        <div className="head-bar-left">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ÜBER UNS
          </NavLink>
          <NavLink
            to="/djs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            DJ`S
          </NavLink>
        </div>
        <div className="head-bar-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img className="logo" src="/img/C-S-Eventagentur8.png" alt="logo" />
          </NavLink>
        </div>
        <div className="head-bar-right">
          <NavLink
            to="#"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            SUPPORT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            KONTAKT
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
