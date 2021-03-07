import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span>Navbar {this.props.clickSum}</span>
      </nav>
    );
  }
}

export default NavBar;
