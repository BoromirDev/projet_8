import React from 'react';
import { Link } from "react-router-dom";
import "./Page404.css";

function Page404() {
  return (
    <div className="page404-container">
      <img src="/src/assets/404.svg" alt="404 logo" className="logo-404" />
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <p>
        <Link to="/" className="back-home-link">
          Retourner sur la page d’accueil
        </Link>
      </p>
    </div>
  );
}

export default Page404;