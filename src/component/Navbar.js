import "./style.css";
import car_logo from "./img/car-logo.png";
import {  NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Navbar() {
  return (
    <header>
      <nav>
        <img src={car_logo} className="logo" alt="" />
        <div className="menu">
        <NavLink className="nav-link" to="/">Home</NavLink>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Variations</a>
          <NavLink className="nav-link" to="/login">Login</NavLink>
         
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </div>

        <div className="social">
          <a href="#" ><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
          <a href="#"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
          <a href="#"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;