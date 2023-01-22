import React, { useState } from "react";
import { RiMenu3Line, RiCloseLin, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/fanun.svg";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="immi__navbar">
      <div className="immi__navbar-links">
        <div className="immi__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="immi__navbar-links_container">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About us</Link>
          </p>
          <p>
            <Link to="/solutions">Solutions</Link>
          </p>
          <p>
            <Link to="/career">Career</Link>
          </p>
          <p>
            <Link to="/uk">UK Visa</Link>
          </p>
          <p>
            <Link to="/us">US Visa</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>
      <div className="immi__navbar-sign">
        <button type="button">Take a test</button>
      </div>
      <div className="immi__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="immi__navbar-menu_container scale-up-center">
            <div className="immi__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">Blog</a>
              </p>
              <p>
                <a href="#possibility">Contacts</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Services</a>
              </p>
            </div>
            <div className="immi__navbar-menu_container-links-sign">
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
