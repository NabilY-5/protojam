import { useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles/erreur404.css";
import erreurImage from "../assets/images/erreurcastor.png";

function Page() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="error">
      <img src={erreurImage} alt="Page 404 - Perdu dans la forêt féerique" />
      <h1>Oups, tu t'es égaré...</h1>
      <p>Je vais te montrer le chemin de la maison...</p>
    </div>
  );
}

export default Page;
