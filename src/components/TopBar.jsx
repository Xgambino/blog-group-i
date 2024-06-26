import React from "react";
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import "./topbar.css"; // Importing styles for the topbar

export default function TopBar() {
  return (
    <div className="top">
      {" "}
      {/* Container for the top bar */}
      <div className="topLeft">
        {" "}
        {/* Left section of the top bar */}
        {/* Social media icons */}
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        {" "}
        {/* Center section of the top bar */}
        <ul className="topList">
          {" "}
          {/* List of navigation links */}
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>{" "}
            {/* Link to Home page */}
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>{" "}
            {/* Link to Write page */}
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>{" "}
            {/* Link to About page */}
          </li>
          <li className="topListItem">
            <Link className="nav-contact" to="/contact">
              CONTACT
            </Link>{" "}
            {/* Link to Contact page */}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {" "}
        {/* Right section of the top bar */}
        <img className="topImg" src="https://img.freepik.com/premium-photo/poster-group-people-with-word-i-love-you_577115-5177.jpg" alt="Temporary" />{" "}
        {/* Temporary image */}
        <i className="topSearchIcon fas fa-search"></i> {/* Search icon */}
      </div>
    </div>
  );
}
