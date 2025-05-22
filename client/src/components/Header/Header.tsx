import { Link, NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-section">
      <Link to="/">
        <img src="logo/castor.png" alt="castor" />
      </Link>
      <nav>
        <NavLink to="/Html">HTML/CSS</NavLink>
        <NavLink to="/JS">Javascript</NavLink>
        <NavLink to="/Python">Python</NavLink>
        <NavLink to="/React">React</NavLink>
      </nav>
    </header>
  );
};

export default Header;
