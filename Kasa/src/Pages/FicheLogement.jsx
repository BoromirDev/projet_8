import { useParams, Navigate } from "react-router-dom";
import data from "../data/data.json";
import Carrousel from "../components/Carrousel";
import Dropdown from "../components/Dropdown";
import "./FicheLogement.css";

function FicheLogement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <main className="fiche-logement-container">
      <Carrousel pictures={logement.pictures} />

      <div className="fiche-header">
        <div className="info-logement">
          <h1 className="titre-logement">{logement.title}</h1>
          <p className="lieu-logement">{logement.location}</p>

          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="host-info">
          <div className="host-profile">
            <p className="host-name">{logement.host.name}</p>
            <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={star <= parseInt(logement.rating) ? "star red" : "star grey"}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="fiche-dropdowns fiche-logement-dropdowns">
        <Dropdown title="Description">{logement.description}</Dropdown>
        <Dropdown title="Équipements">
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </main>
  );
}

export default FicheLogement;
