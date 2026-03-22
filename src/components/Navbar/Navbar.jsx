import "./Navbar.css";
import {Link} from "react-router";

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link> &nbsp;|&nbsp;
        <Link to="/about">About</Link> &nbsp;|&nbsp;
        <Link to="/contact">Contact</Link> &nbsp;|&nbsp;
        <Link to="/ourservice">OurService</Link> &nbsp;|&nbsp;
    </div>
  );
}

export default Navbar;