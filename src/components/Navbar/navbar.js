import "./../Navbar/navbar.scss";
import logo from "./../../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={logo} alt="" />
      <ul className="navlink-items">
        <li className="navlink-item">
          <a href="/">Home</a>
        </li>
        <li className="navlink-item">
          <a href="/">About</a>
        </li>
        <li className="navlink-item active">
          <a href="/">Tours</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
