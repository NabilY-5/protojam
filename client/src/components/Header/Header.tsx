import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-section">
      <img src="logo/castor.png" alt="castor" />
      <nav>
        <Link to="">HTML/CSS</Link>
        <Link to="">Javascript</Link>
        <Link to="">Python</Link>
        <Link to="">React</Link>
      </nav>
    </header>
  );
};

export default Header;
