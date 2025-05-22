import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li className="site-info">
          <h3>Liens utiles</h3>
          <section className="logos">
            <a href="https://developer.mozilla.org/fr/" target="blank">
              <img src="/logo/mdn-logo.png" alt="logo MDN" />
            </a>
            <a href="https://fr.react.dev/" target="blank">
              <img src="/logo/react.svg" alt="logo React" />
            </a>
          </section>
        </li>

        <li className="mentions-légales">
          <p>© Copyright</p>
          <p>Site développé par Wild Dev</p>
          <NavLink to="/mentions-legales">Mentions légales</NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
