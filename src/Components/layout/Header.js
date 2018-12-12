import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ branding }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-4 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav justify-content-between">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                &nbsp;Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" />
                &nbsp;AddContact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
                &nbsp;About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
