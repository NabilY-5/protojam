import { useState } from "react";
import reactQuestions from "../questions/reactjs.json";
import "../styles/react.css";

const ReactQuiz = () => {
  const [level, setLevel] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizRestart, setQuizRestart] = useState(false);
  const [answerGiven, setAnswerGiven] = useState(false);

  const story = `Toby, un jeune castor curieux, rêve de découvrir les mystères du langage des machines. Un jour, en explorant la vieille bibliothèque de la forêt, il tombe sur un livre poussiéreux, intitulé "Le Grimoire du Code". En soufflant sur sa couverture, il voit apparaître des runes étranges et un message codé…
"Si tu veux maîtriser la magie des machines, tu dois répondre aux 10 énigmes du Grand Sage."
Déterminé, Toby part à la recherche du Grand Sage, un hibou légendaire qui connaît tous les secrets du codage.`;

  const story2 = `Les Mages et les Mystères du Royaume React
Dans les profondeurs du royaume React, vivaient de puissants mages qui maîtrisaient des sorts avancés pour rendre le royaume encore plus vivant et interactif.
L’un d’eux, le sage useEffect, réalisait des enchantements appelés effets de bord. Il pouvait invoquer des créatures invisibles — comme des appels aux royaumes lointains, les API — pour rapporter des informations fraîches dès qu’un nouveau château apparaissait.
Pour guider les voyageurs, il y avait le React Router, un guide qui montrait les routes secrètes à travers le royaume, permettant de passer d’un lieu à un autre sans jamais se perdre. Et pour que les secrets se partagent facilement entre les habitants, une boîte magique appelée Context API distribuait ses trésors sans que chacun doive passer par les messagers habituels.
Les reines des châteaux utilisaient la méthode sacrée this.setState() pour changer l’état de leur domaine, et après chaque installation d’un nouveau noble château, un rituel nommé componentDidMount assurait que tout s’intègre parfaitement.
Les aventuriers, grâce à un objet magique nommé useParams, pouvaient récupérer les clés secrètes dans les chemins du royaume, tandis que les mages créaient des cercles puissants avec React.createContext(), partageant leurs pouvoirs à tous ceux qui s’y connectaient via le sortilège useContext.
Quand les défis devenaient complexes, le gardien appelé useReducer prenait le relais, transformant les actions en nouveaux états, gardant le royaume en équilibre. Et pour construire de grandes armées d’éléments, les artisans utilisaient la méthode map(), qui transformait chaque élément en guerrier prêt à défendre l’écran.
Ainsi, grâce à ces mages et à leur savoir ancien, le royaume React prospérait, magique et vivant, prêt à accueillir de nouveaux artisans du code.`;

  const resetQuiz = () => {
    setLevel("");
    setCurrentQuestion(0);
    setScore(0);
    setMessage("");
    setQuizFinished(false);
    setQuizRestart(false);
    setAnswerGiven(false);
  };

  if (level === "") {
    return (
      <div className="quiz">
        <h1>React Quiz</h1>
        <p>Choisis ton niveau :</p>
        <button
          type="button"
          onClick={() => setLevel("Débutant")}
          className="level-button"
        >
          Débutant
        </button>
        <button
          type="button"
          onClick={() => setLevel("Intermédiaire")}
          className="level-button"
        >
          Intermédiaire
        </button>
      </div>
    );
  }

  const niveau = level === "Débutant" ? 0 : 1;
  const question = reactQuestions[niveau].questions[currentQuestion];

  const checkAnswer = (choice: string) => {
    setAnswerGiven(true);

    if (choice === question.reponse) {
      setScore(score + 1);
      setMessage(" Bonne réponse !");
    } else {
      setMessage(`Mauvaise réponse. Indice : ${question.indice}`);
    }

    if (currentQuestion + 1 === reactQuestions[niveau].questions.length) {
      setQuizFinished(true);
      setMessage(
        `Fin du quiz ! Ton score : ${score + (choice === question.reponse ? 1 : 0)} / ${reactQuestions[niveau].questions.length}`,
      );
      setQuizRestart(true);
    }
  };

  const nextQuestion = () => {
    setAnswerGiven(false);
    setMessage("");
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz">
      <h2> Niveau : {level}</h2>
      {level === "Débutant" && <p className="story">{story}</p>}
      {level === "Intermédiaire" && <p className="story2">{story2}</p>}

      <p className="question-number">
        Question {currentQuestion + 1} /{" "}
        {reactQuestions[niveau].questions.length}
      </p>

      <p className="question">{question.question}</p>
      <div className="options">
        {question.options.map((i) => (
          <button
            type="button"
            key={i}
            onClick={() => checkAnswer(i)}
            className="button"
          >
            {i}
          </button>
        ))}
      </div>
      <p className="feedback">{message}</p>

      {answerGiven && !quizFinished && (
        <button type="button" onClick={nextQuestion} className="next-button">
          Suivant
        </button>
      )}
      {quizRestart && (
        <button type="button" onClick={resetQuiz} className="restart-button">
          Recommencer le quiz
        </button>
      )}
    </div>
  );
};

export default ReactQuiz;
