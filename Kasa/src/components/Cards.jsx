import { Link } from "react-router-dom";
import "./Cards.css";

function Cards({ title, image, id }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </Link>
  );
}

export default Cards;