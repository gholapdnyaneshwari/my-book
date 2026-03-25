import "./Navbar.css";
import { Link } from "react-router";
import { House, FileUser, PhoneCall, HeartHandshake, Icon } from "lucide-react";
const NavConng = [
  {
    name: "home",
    icon: <House className="menu-icon" />,
    title: "Home",
    path: "/",
  },
  {
    name: "about",
    icon: <fileUser className="menu-icon" />,
    title: "About",
    path: "/about",
  },
  {
    name: "contact",
    icon: <PhoneCall className="menu-icon" />,
    title: "Contact",
    path: "/contact",
  },
  {
    name: "ourservices",
    icon: <HeartHandshake className="menu-icon" />,
    title: "OurServices",
    path: "/ourservices",
  },
];
function Navbar({ active }) {
  return (
    <div className="navbar">
      {NavConfig.map((menuItem) => {
        return (
          <Link to={menuItem.path} 
          className={`menu-item ${active == menuItem.name ? "active-menu" : ""}`}>
            {menuItem.icon}
            {menuItem.title}
          </Link>
        );
      })}
      </div>
  );
}
export default Navbar;