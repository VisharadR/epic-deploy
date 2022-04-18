import React, { Component } from "react";
import "./navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="logo">
            <img className="logo_image" src="	" alt="" />
          </div>

          <ul className="items">
            <li className="item"> Virtual Tour</li>
            <li className="item">Institutions</li>
            <li className="item">Blogs</li>
            <li className="item">Jobs</li>
            <li className="item">Profile</li>
            <li className="item"></li>
            <button className="item_button"> Account</button>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
