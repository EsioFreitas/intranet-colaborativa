import React from "react";

import aniverHelper from "../../helpers/Aniversariantes";

import "./Aniversariantes.scss";

const aniversariantes = props => (
  <div className="aniversariantes">
    <h1>Aniversariantes</h1>
    <div className="aniversariantes__carousel">
      {Object.keys(aniverHelper).map(pessoa => (
        <div key={pessoa} className="aniversariantes__pessoa">
          {console.log(aniverHelper[pessoa].photo, aniverHelper[pessoa])}
          <img
            src={aniverHelper[pessoa].photo}
            alt={aniverHelper[pessoa].name}
          />
          <div>
            <h3>{aniverHelper[pessoa].name}</h3>
            <p>{aniverHelper[pessoa].data}</p>
          </div>
        </div>
      ))}

      <div className="aniversariantes__carousel__controuls-btn aniversariantes__carousel__controuls-btn--prev">
        &#10094;
      </div>
      <div className="aniversariantes__carousel__controuls-btn aniversariantes__carousel__controuls-btn--next">
        &#10095;
      </div>
    </div>
  </div>
);

export default aniversariantes;
