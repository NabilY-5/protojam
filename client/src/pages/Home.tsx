import { Link } from "react-router";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenue sur Père Castor Quiz !</h1>
      <p>
        Apprends le développement en t'amusant avec nos quiz pour toute la
        famille.
      </p>

      <div className="dev-story">
        <h2>Le développement, c'est quoi ?</h2>
        <p>
          Le développement, c'est comme créer des jeux ou des histoires avec un
          ordinateur. <br /> On utilise des "langages secrets" (comme JavaScript
          ou Python) pour dire à la machine quoi faire.
          <br /> C'est un peu comme apprendre une nouvelle langue, mais pour
          parler avec ton ordinateur !
        </p>
      </div>
      <p className="quiz-choice">
        Prêts maintenant ? Choisis une thématique et lance-toi dans l'aventure
      </p>

      <div className="quiz-topics">
        <Link to="/" className="quiz-thematique">
          HTML et CSS
        </Link>
        <Link to="/Python" className="quiz-thematique">
          Python
        </Link>
        <Link to="/" className="quiz-thematique">
          JavaScript
        </Link>
        <Link to="/" className="quiz-thematique">
          React
        </Link>
      </div>
    </div>
  );
};

export default Home;
