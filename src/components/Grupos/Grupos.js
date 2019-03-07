import React from "react";

import gruposHelper from "../../helpers/GruposHelpers";
import Grupo from "./Grupo/Grupo";

import "./Grupos.scss";

const grupos = () => (
  <div className="grupos">
    <h1>Grupos</h1>
    <a href="#" className="grupos__plus">
      Novo grupo <span>+</span>
    </a>

    <div className="grupos__container">
      {Object.keys(gruposHelper).map(grupoH => (
        <Grupo
          key={grupoH}
          content={gruposHelper[grupoH].title}
          photo={gruposHelper[grupoH].photo}
        />
      ))}
    </div>

    <a href="#">
      Ver todos <span>&#10095;</span>
    </a>
  </div>
);

export default grupos;
