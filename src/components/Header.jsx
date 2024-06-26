import "./header.css";
import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Cool</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://images.pexels.com/photos/163255/sunrise-sun-morgenrot-skies-163255.jpeg?cs=srgb&dl=pexels-pixabay-163255.jpg&fm=jpg" alt="" />
    </div>
  );
}
export default Header;