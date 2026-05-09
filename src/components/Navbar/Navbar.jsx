import "./Navbar.css";
import { Link } from "react-router-dom"; // ✅ FIXED
import { House, FileUser, PhoneCall, HeartHandshake } from "lucide-react";

const NavConfig = [ // ✅ FIXED NAME
  {
    name: "home",
    icon: <House className="menu-icon" />,
    title: "Home",
    path: "/",
  },
  {
    name: "about",
    icon: <FileUser className="menu-icon" />, // ✅ FIXED
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
    path: "/ourservice", 
  },
];

function Navbar({ active }) {
  return (
    <div className="navbar">
      {NavConfig.map((menuItem) => (
        <Link
          key={menuItem.name}
          to={menuItem.path}
          className={`menu-item ${
            active === menuItem.name ? "active-menu" : ""
          }`}
        >
          {menuItem.icon}
          {menuItem.title}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;