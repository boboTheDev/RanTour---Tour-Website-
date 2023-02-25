import "./navbar.styles.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../../assets/data/menuitems.js";
class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">MyanTour</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul
          className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}
        >
          {MenuItems.map((item, indexNum) => {
            return (
              <li key={indexNum}>
                <Link className={item.className} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button className="signupbutton">Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
