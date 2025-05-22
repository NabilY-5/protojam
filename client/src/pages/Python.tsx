import { useState } from "react";
import pythonQuestions from "../questions/python.json";
import "../styles/python.css";

const PythonQuiz = () => {
  const [level, setLevel] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const story = `Il était une fois un jeune castor nommé Toby, curieux d'apprendre le langage secret des machines.
Un jour, il découvre un vieux livre où chaque page révèle un mystère du codage.
En soufflant pour se débarrasser de la poussière de la couverture, apparaissent le nom de l'auteur PRINT et une inscription : "Si tu veux parler à la machine, tu dois utiliser un mot magique..."\n\n
En lisant la première page, Toby se rend compte d'un message codé: "Comment écrire un message sans que la machine l'exécute ?"
Ne connaissant pas la réponse, il file voir le Grand Sage de la forêt qui lui souffle: *#*, le langage des runes secrètes.`;

  if (level === "") {
    return (
      <div className="quiz">
        <h1>Python Quiz</h1>
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
  const question = pythonQuestions[niveau].questions[currentQuestion];

  const checkAnswer = (choice: string) => {
    if (choice === question.reponse) {
      setScore(score + 1);
      setMessage("Bonne réponse !");
    } else {
      setMessage(` Mauvaise réponse. Indice : ${question.indice}`);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < pythonQuestions[niveau].questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setMessage("");
      } else {
        setMessage(
          `Fin du quiz ! Ton score : ${score} / ${pythonQuestions[niveau].questions.length}`,
        );
      }
    }, 3500);
  };

  return (
    <div className="quiz">
      <h2> Niveau : {level}</h2>
      {level === "Débutant" && <p className="story">{story}</p>}

      <p className="question-number">
        Question {currentQuestion + 1} /{" "}
        {pythonQuestions[niveau].questions.length}
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
    </div>
  );
};

export default PythonQuiz;
