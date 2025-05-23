import { useState } from "react";
import pythonQuestions from "../questions/python.json";
import "../styles/python.css";
import defaite from "../../public/logo/defaite.webp";
import victoire from "../../public/logo/victoire.jpg";

const PythonQuiz = () => {
  const [level, setLevel] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizRestart, setQuizRestart] = useState(false);
  const [answerGiven, setAnswerGiven] = useState(false);
  const [animation, setAnimation] = useState("");

  const story = `Toby, un jeune castor curieux, rêve de découvrir les mystères du langage des machines. Un jour, en explorant la vieille bibliothèque de la forêt, il tombe sur un livre poussiéreux, intitulé "Le Grimoire du Code". En soufflant sur sa couverture, il voit apparaître des runes étranges et un message codé…
"Si tu veux maîtriser la magie des machines, tu dois répondre aux 10 énigmes du Grand Sage."
Déterminé, Toby part à la recherche du Grand Sage, un hibou légendaire qui connaît tous les secrets du codage.
`;

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
    setAnswerGiven(true);

    if (choice === question.reponse) {
      setScore(score + 1);
      setMessage(" Bonne réponse !");
    } else {
      setMessage(`Mauvaise réponse. Solution : ${question.indice}`);
    }

    if (currentQuestion + 1 === pythonQuestions[niveau].questions.length) {
      const finalScore = score + (choice === question.reponse ? 1 : 0);
      setQuizFinished(true);
      setMessage(
        `Fin du quiz ! Ton score : ${score + (choice === question.reponse ? 1 : 0)} / ${pythonQuestions[niveau].questions.length}`,
      );
      setQuizRestart(true);

      if (finalScore >= 5) {
        setAnimation(victoire);
      } else {
        setAnimation(defaite);
      }
    }
  };

  const nextQuestion = () => {
    setAnswerGiven(false);
    setMessage("");
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz">
      <h2>Niveau : {level}</h2>
      {level === "Débutant" && <p className="story">{story}</p>}

      <p className="question-number">
        Question {currentQuestion + 1} /{" "}
        {pythonQuestions[niveau].questions.length}
      </p>

      {!quizFinished && (
        <>
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
        </>
      )}

      <p className="feedback">{message}</p>

      {answerGiven && !quizFinished && (
        <button type="button" onClick={nextQuestion} className="next-button">
          Suivant
        </button>
      )}
      {quizFinished && animation && (
        <img src={animation} alt="coupe" className="img-animation" />
      )}
      {quizRestart && (
        <button type="button" onClick={resetQuiz} className="restart-button">
          Recommencer le quiz
        </button>
      )}
    </div>
  );
};

export default PythonQuiz;
